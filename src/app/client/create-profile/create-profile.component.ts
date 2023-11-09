import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { ProfileService } from "../project.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { ProfileRequest,ProfileListDetail } from '../project';
import { Client,ClientProject } from '../client';
import { ClientService } from '../client.service'
import {TranslateService} from '@ngx-translate/core';
import { ClientLoginService } from '../../client/client-login.service'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  profileForm!: FormGroup;
  projects!:ProfileListDetail[];
    title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
    token!: any
    
  ngOnInit() {
    this.profileService.get_profiles().subscribe(result =>{
      this.projects = result;
    });

  this.profileForm = this.formBuilder.group({
    name:["", [Validators.required, Validators.minLength(6)]],
    technology: ["", [Validators.required]],
    description: ["", [Validators.required, Validators.minLength(5)]],
    experience_in_years: [0, [Validators.required]],
    category: ["", [Validators.required]],
    title: ["", [Validators.required]],
    role: ["", [Validators.required]],
    project_id:  ["", [Validators.required]]
  });
    this.clientLoginService.who_i_am().subscribe(res =>{
                if(res.is_authenticated){
                    this.token = res.auth_headers.get("Authorization") || "token"
                    this.getProjects(this.token)
                }
                else{ 
                    this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS')}`);
                    this.routerPath.navigate(['/login-client'])
                }
            }, error => {
                this.showError(`${this.translateService.instant('BACK_RESPONSES.INVALID_CREDENTIALS2')}`);
                this.routerPath.navigate(['/login-client'])
              });

  }
  constructor(
    private formBuilder: FormBuilder,
    private profileService:ProfileService,
    private toastr: ToastrService,
    private router: Router,
    private routerPath: Router,
    private clientService: ClientService,
    private translateService: TranslateService,
    private clientLoginService: ClientLoginService
  ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage);}

  projects2!: Array<ClientProject>
   
  create_profile(value:any,formDirective:FormGroupDirective) {
    console.log(value);
    if(!this.profileForm.valid){
      console.log("no valid");
      console.log(this.profileForm.errors)
      return;
    }

    this.profileService.create_profile(
      new ProfileRequest(value.name,value.technology, value.description,
        value.experience_in_years,value.category,value.title,value.role,
        value.project_id)).subscribe(result =>{
      console.info(result);

      if (!result){
        this.toastr.error("Creando el perfil","Error" );
      }else{
        //this.translate.get('TEST.CREATE.UI', {value: 'world'}).subscribe((res: string) => {
          this.toastr.success("Creado correctamente","Confirmation" );
          this.router.navigate([`/home-client`]);
      //});
    }});

  }
  getProjects(token: any): void {
    this.clientService.getProjects(token)
      .subscribe(projects2 => {
        this.projects2 = projects2
      },
      error => {
               //console.log(error);  
              this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}`)
      })
    }
    
  cancelCreation():void{this.profileForm.reset();this.router.navigate([`/home-client`])}
  
    showError(error: string) {
            this.toastr.error(error, "Error")
        }
        
        showWarning(warning: string) {
            this.toastr.warning(warning, "Warning")
        }
        
       showSuccess(message: String) {
            //this.toastr.success(`El proyecto ${client} fue creado`, "Creación exitosa");
            this.toastr.success(`${message}`);
            console.log('translation', );
        }
}


