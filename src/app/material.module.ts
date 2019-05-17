import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
            MatSidenavModule, MatToolbarModule, MatDividerModule, MatListModule,
            MatTabsModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
            MatSidenavModule, MatToolbarModule, MatDividerModule, MatListModule,
            MatTabsModule]
})
export class MaterialModule {}
