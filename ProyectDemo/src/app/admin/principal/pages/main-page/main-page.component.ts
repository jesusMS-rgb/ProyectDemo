import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ELEMENT_DATA: any[] = [
  {Account: 'Hydrogen', Description: 1.0079, Payments: 'H'},
  {Account: 'Helium', Description: 4.0026, Payments: 'He'},
  {Account: 'Lithium', Description: 6.941, Payments: 'Li'},
  {Account: 'Beryllium', Description: 9.0122, Payments: 'Be'},
  {Account: 'Boron', Description: 10.811, Payments: 'B'},
  {Account: 'Carbon', Description: 12.0107, Payments: 'C'},
  {Account: 'Nitrogen', Description: 14.0067, Payments: 'N'},
  {Account: 'Oxygen', Description: 15.9994, Payments: 'O'},
  {Account: 'Fluorine', Description: 18.9984, Payments: 'F'},
  {Account: 'Neon', Description: 20.1797, Payments: 'Ne'},
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit 
{
  @ViewChild('mdlAddAccount') private mdlAddAccount: any;

  Title: string = '';
  inputDate: string = '';


  iconSearch = faSearch;
  iconPlus = faPlus;
  data = ELEMENT_DATA;
  formatColumn = [ 'Account', 'Description', 'Payments', 'Memo'];

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
  
}


