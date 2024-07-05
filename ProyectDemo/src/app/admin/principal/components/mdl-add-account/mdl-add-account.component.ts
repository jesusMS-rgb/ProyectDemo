import { Component, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ELEMENT_DATA: any[] = [
  {Account: 'AMZ', Description: 'AMZ464512132013857', Payments: 25.0},
  {Account: 'ARM', Description: 'ARM788864122365854', Payments: 13.5},
  {Account: 'AMEX', Description:'AMEX46578794454555', Payments: 7.25},
];

@Component({
  selector: 'mdl-add-account',
  templateUrl: './mdl-add-account.component.html',
  styleUrl: './mdl-add-account.component.css'
})

export class MdlAddAccountComponent 
{
  @ViewChild('msTableGrid') private msTableGrid: any;

  faSearch = faSearch;
  formatColumn = [ 'Account', 'Description', 'Payments', 'Memo'];
  txtCelda1: string = '';
  txtCelda2: string = '';

  dataArray: any[] = ELEMENT_DATA;

  busqueda: any;
  flgView: boolean = true;

  pegarCelda(event: ClipboardEvent)
  {
    // Previene el comportamiento predeterminado de pegar
    event.preventDefault();

    // Obtiene el texto del portapapeles
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text');

    if (pastedText) {
      // Divide el texto pegado en filas y columnas
      const rows = pastedText.split('\n');
      const cells = rows.map(row => row.split('\t'));

      // Asigna los valores a los inputs
      if (cells.length > 0 && cells[0].length > 0) {
        (document.getElementById('txtCelda1') as HTMLInputElement).value = cells[0][0];
        if (cells[0].length > 1) {
          (document.getElementById('txtCelda2') as HTMLInputElement).value = cells[0][1];
        }
      }
    }
  }

  search()
  {
    this.txtCelda1 = (document.getElementById('txtCelda1') as HTMLInputElement).value;
    this.txtCelda2 = (document.getElementById('txtCelda2') as HTMLInputElement).value;

    let arr = ELEMENT_DATA;
    if((this.txtCelda1.length === 0 || this.txtCelda1.trim() === '') && (this.txtCelda2 .length === 0 || this.txtCelda2.trim() === ''))
      {
        this.resetTable();
      }
      else
      {
        arr = ELEMENT_DATA.filter(item => 
          item.Account.toLowerCase().trim() === this.txtCelda1.toLowerCase().trim() && item.Description.toLowerCase().trim() === this.txtCelda2.toLowerCase().trim());
      }  
    this.msTableGrid.applyFilter(arr);
  }

  resetTable()
  {
    this.msTableGrid.applyFilter(ELEMENT_DATA);
  }
}
