import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ProductsListComponent} from './products-list/products-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'products-list', component: ProductsListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
