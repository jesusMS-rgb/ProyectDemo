import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'ms-table',
  templateUrl: './ms-table.component.html',
  styleUrl: './ms-table.component.css'
})

export class MsTableComponent implements AfterViewInit 
{
  @Input() dataArray: any; 
  @Input() displayedColumns: any;
  @Input() rowsPerPage: number = 7;
  @Input() search = ['', ''];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  matData: MatTableDataSource<any>; 

  constructor()
  {
    this.matData = new MatTableDataSource(this.dataArray);
  }

  ngAfterViewInit(): void {
    if(this.dataArray && this.paginator) 
    {
      this.matData = new MatTableDataSource(this.dataArray);
      this.matData.paginator = this.paginator;
      this.matData.sort = this.sort;
    }
  }

  handlePage(event: any)
  {
    console.log(event);
  }

  addColumn(column: string) {
    if (!this.displayedColumns.includes(column)) {
      this.displayedColumns.push(column);
    }
  }

  removeColumn(column: string) {
    const index = this.displayedColumns.indexOf(column);
    if (index >= 0) {
      this.displayedColumns.splice(index, 1);
    }
  }

  tableSearch(event: Event)
  {
    const filter = (event.target as HTMLInputElement).value;
  }

  
}
