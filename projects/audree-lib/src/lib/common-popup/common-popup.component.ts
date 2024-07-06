import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.css'],
})
export class CommonPopupComponent implements OnInit {
  @Input() className: any = 'modal-dialog modal-md';
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() Esignature: boolean;
  @Output() esignData: EventEmitter<boolean> = new EventEmitter<boolean>();

  Esign: FormGroup;
  PasswordFlag: boolean;
  emppId: string;

  constructor(private formBuilder: FormBuilder) {}
  @Input() isOpen = false;
  @Input() title = 'Title';
  @Output() onClose = new EventEmitter<string>();
  ngOnInit(): void {
    this.emppId = localStorage.getItem('EmployeeId');
  }
  closePopup() {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }

  close() {
    this.Esignature = false;
    this.esignData.emit(this.Esignature);
  }
}
