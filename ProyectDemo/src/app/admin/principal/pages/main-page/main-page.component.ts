import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'

const ELEMENT_DATA: any[] = [
  {Account: 'BNCPP', Description: 'BNCPP684781313564', Payments: 623.241, Memo: '4484741aa55s', Date: '2024-01-01'},
  {Account: 'BNCPP', Description: 'BNCPP897984165165', Payments: 655, Memo: '4484741aa55s', Date: '2023-05-14'},
  {Account: 'BNCPP', Description: 'BNCPP654654132014', Payments: 125, Memo: '4484741aa55s', Date: '2024-07-05'},
  {Account: 'ARR', Description: 'ARR4564665255321', Payments: 544, Memo: '46546542310ssa', Date: '2022-12-25'},
  {Account: 'MXAA', Description: 'MXAA56465456465456', Payments: 782.54, Memo: '46546542310ssa', Date: '2020-07-05'},
  {Account: 'DSTS', Description: 'DSTS44654654654564', Payments: 984.15, Memo: '46546542310ssa', Date: '2024-07-05'},
  {Account: 'SDER', Description: 'SDER54646512132555', Payments: 47.01, Memo: '46546542310ssa', Date: '2019-02-04'},
  {Account: 'AOOS', Description: 'AOOS46546541321547', Payments: 1258.1, Memo: '46546542310ssa', Date: '2023-11-06'},
  {Account: 'GLASS', Description: 'GLASS65465847212358', Payments: 451.12,Memo: '46546542310ssa', Date: '2024-02-024'},
  {Account: 'ASDG', Description: 'ASDG646546132054310', Payments: 15.12, Memo: '46546542310ssa', Date: '2021-01-01'},
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit 
{
  @ViewChild('mdlAddAccount') private mdlAddAccount: any;
  @ViewChild('msTableGrid') private msTableGrid: any;

  Title: string = '';
  inputDate: string = '';
  search: string = '';

  iconSearch = faSearch;
  iconPlus = faPlus;
  iconReturn = faRotateLeft;

  data = ELEMENT_DATA;
  formatColumn = [ 'Account', 'Description', 'Payments', 'Memo', 'Date'];

  constructor() 
  {
    this.inputDate = this.getDate();
  }

  ngOnInit(): void{
  }

  openModalAdd()
  {
    this.Title = 'Add New Account';
    this.mdlAddAccount.openModal();
  }

  getDate(): string {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const year = currentDate.getFullYear();

    return `${year}-${month}-${day}`;
  }
  
  filterArray()
  {
    let arr = ELEMENT_DATA;
    if(this.inputDate.length === 0 || this.inputDate.trim() === '')
      {
        this.resetTable();
      }
      else
      {
        arr = ELEMENT_DATA.filter(item => item.Date.trim() === this.inputDate.trim());
      }  
    this.msTableGrid.applyFilter(arr);
  }

  resetTable()
  {
    this.msTableGrid.applyFilter(ELEMENT_DATA);
  }
}


