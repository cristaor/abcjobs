import { Component, OnInit } from '@angular/core';

// IMPORTAMOS EL SERVICIO DE TRADUCCIONES PARA HACER USO DE EL
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {

  title = 'angular-i18n-ngx-translate';
  selectedLanguage = 'es';

  constructor(private translateService: TranslateService) {
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
  }

  selectLanguage(lang: string) {
      this.translateService.use(lang);
      console.log(lang)
  }

  ngOnInit() {
  }

}
