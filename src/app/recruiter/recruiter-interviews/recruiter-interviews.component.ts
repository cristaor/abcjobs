
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { InterviewService } from "./interview.service";
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import { Company, Interview, Project} from './interview';
import {TranslateService} from '@ngx-translate/core';
import {ScheduleInterviewRequest,ScheduleInterviewResponse, CandidateResponse, ProjectMemberResponse, InterviewResult, Data} from './interview';
@Component({
  selector: 'app-recruiter-interviews',
  templateUrl: './recruiter-interviews.component.html',
  styleUrls: ['./recruiter-interviews.component.css']
})
export class RecruiterInterviewsComponent implements OnInit {

  ngOnInit() {

    this.interviewService.get_companies().subscribe(result => {
      if (result.length>0){
        this.companies = result;  
      }
      else {
        this.translateService.get('INTERVIEW.LIST.TOAST.INTERVIEWS_NOT_FOUND')
        .subscribe((res: string)=>{
          this.toastr.error(res,"Error" );  
        })  
      }
    })
    

  }

  loginForm!: FormGroup;

  interviews:Interview[]=[];

  companies: Company[]=[]

  projects: Project[]=[]

  registros: Data[]=[]
  
  
  

  constructor(
    private interviewService:InterviewService,
    private toastr: ToastrService,
    private router: Router,
    private translateService:TranslateService
  ) {
  }

  companyOnChange(e:any){
    console.log(`Seleccionada la compañía ${e.target.value}`)
    this.getProjects(e.target.value)
  }

  getProjects(company_id:string): void {
    this.interviewService.getProjectsByCompany(company_id)
      .subscribe(projects => {
        this.projects = projects
      },
      error => {
               //console.log(error);
              //this.showError(`${this.translateService.instant('BACK_RESPONSES.GET_ERROR')}: ${error.status} - ${error.statusText}- ${error.error.detail}`)
      })
  }

  projectOnChange(e:any){

    this.registros = []
    console.log("Iniciando filtro con el proyecto: "+e.target.value)

     // Llamamos a /interviews/result
    this.interviewService.getInterviewResults()
    .subscribe(results => {

      console.log("Llegaron")
      // filtramos las que tenga el projectID: project_id
      results.filter(item => item.project_id == e.target.value).map(item => {
        console.log("Primer filtro")
        // por cada una voy al servidor para invocar el /interviews/result/{id} y de aquí obtengo la calificación
        this.interviewService.getInterviewResultById(item.id)
        .subscribe(result => {
          // Aquí ya tenemos la calificación
          // ahora vamos por los datos del candidato por documento
          console.log("Qualification:"+result.qualification)

          this.interviewService.getCandidatesByDocument(result.candidate_document)
          .subscribe(candidates => {

            this.registros.push(new Data(candidates[0].fullName, result.qualification, result.date))
          })

        })
      })
    })

   
    

    // por cada una voy al servidor para invocar el /interviews/result/{id} y de aquí obtengo la calificación
    // por cada uno también voy al servidor a buscar datos del candidato filtrado por documento para obtener nombres y apellidos. candidates?documents=101075209,8978

  }
}




