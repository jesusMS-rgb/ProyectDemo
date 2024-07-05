import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { faFileExcel, faTruckMedical } from '@fortawesome/free-solid-svg-icons';

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
  @Input() btnExport: boolean = true;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  faExcel = faFileExcel;

  matData: MatTableDataSource<any>; 
  value: string = '';

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

  applyFilter(dt: any[])
  {
    this.dataArray = dt;
    this.ngAfterViewInit();
  }

  exportExcel(): void
  {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.dataArray);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'excelFileName');
    });
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(data, fileName + '_export_' + new Date().getTime() + '.xlsx');
  }
}
