import { NgModule } from '@angular/core';
import { CommonPopupComponent } from './common-popup/common-popup.component';
import { CommonEsignComponent } from './common-esign/common-esign.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonPopupComponent, CommonEsignComponent],
  imports: [ReactiveFormsModule],
  exports: [CommonEsignComponent, CommonPopupComponent],
})
export class AudreeLibModule {}
