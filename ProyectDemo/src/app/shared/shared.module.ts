import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCmtComponent } from './components/modal-cmt/modal-cmt.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ModalCmtComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ModalCmtComponent,
    FontAwesomeModule]
})
export class SharedModule { }
