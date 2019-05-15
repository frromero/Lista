import {Component, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  changeLang() {
    if (this.translate.currentLang === 'es') {
      this.translate.use('en');
    } else {
      this.translate.use('es');
    }
  }
}
