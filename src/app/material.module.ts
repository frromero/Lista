import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
            MatSidenavModule, MatToolbarModule, MatDividerModule, MatListModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
            MatSidenavModule, MatToolbarModule, MatDividerModule, MatListModule]
})
export class MaterialModule {}
