import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private translate: TranslateService, private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
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


  onLogout() {
    this.authService.logout();
  }
}
