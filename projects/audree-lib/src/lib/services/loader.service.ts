import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  httpReqCount = 0;
  constructor(private _spinner: NgxSpinnerService) {}

  busy() {
    this.httpReqCount++;
    this._spinner.show();
  }

  idl() {
    this.httpReqCount--;
    if (this.httpReqCount <= 0) {
      this.httpReqCount = 0;
      this._spinner.hide();
    }
  }
}
