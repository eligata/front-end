import { Injectable } from '@angular/core';

declare var toastr: any

@Injectable()
export class ToastrService {

  constructor() {
    this.configure();
  }

  success(message: string, title: string = "Success") {
    toastr.success(message, title);
  }

  error(message: string, title: string = "Error") {
    toastr.error(message, title);
  }

  warn(message: string, title: string = "Warning") {
    toastr.warning(message, title);
  }

  info(message: string, title: string = "Info") {
    toastr.info(message, title);
  }

  configure() {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "4000",
      "extendedTimeOut": "500",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
}
