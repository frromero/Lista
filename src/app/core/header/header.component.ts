import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
  }

  changeLang() {
    if (this.translate.currentLang === 'es') {
      this.translate.use('en');
    } else {
      this.translate.use('es');
    }
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
