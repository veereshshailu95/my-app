import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCeoComponent } from './contact-ceo/contact-ceo.component';
import { ContactDirectorComponent } from './contact-director/contact-director.component';



@NgModule({
  declarations: [
    ContactCeoComponent,
    ContactDirectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactCeoComponent,
    ContactDirectorComponent
  ]
})
export class ContactModule { }
