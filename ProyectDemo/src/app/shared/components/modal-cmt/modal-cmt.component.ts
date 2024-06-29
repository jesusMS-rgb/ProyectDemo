import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'modal-cmt',
  templateUrl: './modal-cmt.component.html',
  styleUrls: ['./modal-cmt.component.css'],
})

export class ModalCmtComponent implements OnInit 
{
  @ViewChild('mdl') private mdl: any;
  @Input() Title = '';
  @Input() TitleIcon: any;
  @Input() Size = 'sm';
  @Input() ShowBtnAccept = true;

  iconClose = faTimes;
  open: boolean = false;
  mdlRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(): void 
  {
    this.open = true;
    this.mdlRef = this.modalService.open(this.mdl,
      {
        size: this.Size,
        backdrop: 'static',
      }
    );
    this.mdlRef.result.then
    (
      (result) => {},
      (reason) => {}
    )
  }

  closeModal(): void
  {
    if(this.open)
    {
      this.mdlRef?.close();
      this.open = false;
    }
  }
}
