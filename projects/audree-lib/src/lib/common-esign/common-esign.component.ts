import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonSwalService } from '../services/common-swal.service';
import { SwalIcons, errorMessages } from '../enums/common-enums';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'lib-common-esign',
  templateUrl: './common-esign.component.html',
  styleUrls: ['./common-esign.component.css'],
})
export class CommonEsignComponent implements OnInit {
  
  eSignatureForm: any = FormGroup;
  @Input() closable = true;
  @Input() visible?: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() eSignature?: boolean;
  isPasswordFlag?: boolean = false;
  @Input() Esign?: boolean;
  employeeId!: string;
  @Output() esignData: EventEmitter<any> = new EventEmitter<any>();
  wrngPswd!: number;
  isWrongPassword: boolean = false;
  @Output() onClose = new EventEmitter<string>();
  constructor(
    private _formBuilder: FormBuilder,
    private _swalService: CommonSwalService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.employeeId = localStorage.getItem('EmployeeId') || '';
    this.eSignatureForm = this._formBuilder.group({
      employeeId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  close() {
    this.eSignatureForm.reset();
    this.isWrongPassword = false;
    this.isPasswordFlag = false;
    this.visible = false;
    this.esignData.emit(this.visible);
    this.onClose.emit('Pop-up window closed');
  }

  clearValidation() {
    this.isWrongPassword = false;
    this.isPasswordFlag = false;
  }

  OnSubmit(EmployeeId: string, Password: string) {
    this.eSignatureForm.reset();
    this.isPasswordFlag = false;
    if (Password == '') {
      this.isPasswordFlag = true;
      this.visible = true;
      return;
    }
    this._userDataService
      .userAuthentication(EmployeeId, Password)
      .subscribe((data: any) => {
        if (data.item1 == false) {
          this.isWrongPassword = true;
          this._swalService.CommonMsg(
            errorMessages.passwordvalidation,
            SwalIcons.iconWarn,
            (isResult) => {}
          );
          this.wrngPswd = 1;
        } else {
          this.esignData.emit(data.item1);
        }
      });
  }
}
