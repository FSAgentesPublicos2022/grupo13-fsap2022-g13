import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    
    NavbarModule
  ],
  exports:[HeaderComponent]

})
export class HeaderModule { }
