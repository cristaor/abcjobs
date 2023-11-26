import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'header-recruiter',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderRecruiterComponent implements OnInit{
title = 'angular-i18n-ngx-translate';
  selectedLanguage = 'es';
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private translateService: TranslateService
  ){
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
      }


  selectLanguage(lang: string) {
      this.translateService.use(lang);
      console.log(lang)
  }

    ngOnInit(): void {
    //this.userId=parseInt(this.router.snapshot.params.userId)
  }
}
