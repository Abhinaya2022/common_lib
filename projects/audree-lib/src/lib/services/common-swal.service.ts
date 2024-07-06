import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CommonSwalService {
  constructor() {}

  //#region Start Region it used for image Swalmessages
  Commonimage(Title: string, icons: any, image: string, callback: any) {
    Swal.fire({
      title: Title,
      icon: icons,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      imageUrl: image,
      imageWidth: 120,
      imageHeight: 100,
      imageAlt: 'Terminate Logo',
    }).then((confirmed) => {
      callback(confirmed.value == true);
    });
  }
  //#endregion

//#region Start Region it used for Common swal messages
 CommonMsg(Title: string, icons: any, callback: any, image?: string) {
   Swal.fire({
     allowOutsideClick: false,
     allowEscapeKey: false,
     title: Title,
     icon: icons,
     showCancelButton: icons == 'error' ? false : icons == 'success' ? false : icons == 'question' ? true : icons == 'warning' ? false : icons == 'info' ? true : false,
     confirmButtonColor:'#2778c4',
     cancelButtonColor:'#757575',
     cancelButtonText: 'No',
     confirmButtonText: icons=='success'?'Ok':icons=='error'?'OK':icons=='info'?'Yes':icons=='warning'?'OK' :'Yes',
     showLoaderOnConfirm:icons=='success'?true:false,
   }).then((confirmed) => {
     callback(confirmed.value == true)
   });
 }
  //#endregion
}
