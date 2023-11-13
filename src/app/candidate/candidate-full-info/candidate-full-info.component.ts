import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import {ClientLoginService} from '../../client/client-login.service'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CandidateFullInfo} from '../candidate';

@Component({
  selector: 'app-candidate-full-info',
  templateUrl: './candidate-full-info.component.html',
  styleUrls: ['./candidate-full-info.component.css']
  
})
export class CandidateFullInfoComponent implements OnInit {

    registros!: CandidateFullInfo
    
    constructor(
        private candidateService: CandidateService,
        private clientLoginService: ClientLoginService,
        private toastr: ToastrService,
        private routerPath: Router,
    ) {

    }

    ngOnInit(): void {
        
        this.clientLoginService.who_i_am().subscribe(res =>{

            if(res.is_authenticated){
                
                let token = res.auth_headers.get("Authorization") || "token"
                this.candidateService.getFullInfo(token=token).subscribe(result => {
                    console.log(result.professional_data.technology_info)
                    this.registros = result 
                },
                error => {
                    this.showError(`${this.candidateService.get_error_message(error.error.detail.error_code)}`)
                })

            }else{
                this.toastr.error("Credenciales invalidas","Error");
                this.routerPath.navigate(['/'])
            }

        },error => {
            this.toastr.error("Credenciales invalidas. Inicie sesión nuevamente","Error");
            this.routerPath.navigate(['/'])
          });
    }

    showError(error_code: string) {
        this.toastr.error(error_code, "Error")
      }

}

class Data {
    nombre: string

    constructor(
        nombre: string
    ) {
       this.nombre=nombre
    }
}
