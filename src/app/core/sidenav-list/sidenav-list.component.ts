import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter<void>();

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

  onCloseSidenav() {
    this.sidenavClose.emit();
  }
}
