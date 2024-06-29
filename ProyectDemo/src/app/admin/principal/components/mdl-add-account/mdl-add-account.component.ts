import { Component } from '@angular/core';
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

  applyFilter()
  {
    this.txtCelda1 = (document.getElementById('txtCelda1') as HTMLInputElement).value.trim();
    this.txtCelda2 = (document.getElementById('txtCelda2') as HTMLInputElement).value.trim();

    let arr = [];
    arr = ELEMENT_DATA.find(element => element.Account === this.txtCelda1 && element.Description === this.txtCelda2);
    
    this.dataArray = arr;
    this.flgView!;
    this.flgView!;
  }
}
