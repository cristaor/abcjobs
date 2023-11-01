import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent  implements OnInit {
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
