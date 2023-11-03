import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { ProfileService } from "../project.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router"
import { ProfileRequest,ProfileListDetail } from '../project';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  profileForm!: FormGroup;
  projects!:ProfileListDetail[];

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

  }
  constructor(
    private formBuilder: FormBuilder,
    private profileService:ProfileService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

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
        value.project_id
      )).subscribe(result =>{
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
  cancelCreation():void{this.profileForm.reset();this.router.navigate([`/home-client`])}
}


