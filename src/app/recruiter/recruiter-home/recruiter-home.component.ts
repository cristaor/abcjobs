import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.css']
})
export class RecruiterHomeComponent  implements OnInit {
  //userId: number;
   title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
     private translateService: TranslateService
      ) {this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); }
  

    ngOnInit(): void {
    //this.userId=parseInt(this.router.snapshot.params.userId)
  }
    
}