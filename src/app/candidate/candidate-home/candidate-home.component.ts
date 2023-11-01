import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-candidate-home',
  templateUrl: './candidate-home.component.html',
  styleUrls: ['./candidate-home.component.css']
})
export class CandidateHomeComponent implements OnInit {
  //userId: number;
  title = 'angular-i18n-ngx-translate';
    selectedLanguage = 'es';
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private translateService: TranslateService
  ){this.translateService.setDefaultLang(this.selectedLanguage);
       this.translateService.use(this.selectedLanguage); 
      }
 
 ngOnInit(): void {
    //this.userId=parseInt(this.router.snapshot.params.userId)
  }
  
}