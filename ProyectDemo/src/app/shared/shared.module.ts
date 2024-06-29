import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCmtComponent } from './components/modal-cmt/modal-cmt.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MsTableComponent } from './components/ms-table/ms-table.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@NgModule({
  declarations: 
  [
    ModalCmtComponent, 
    MsTableComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginator,
    MatSort
  ],
  exports: 
  [
    ModalCmtComponent,
    FontAwesomeModule,
    MsTableComponent
  ]
})
export class SharedModule { }
