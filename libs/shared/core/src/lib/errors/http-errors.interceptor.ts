import { Injectable } from '@angular/core';
import { ErrorsCustomService, ErrorsDialog, ToastService } from '@mfe/service-common';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  errorsDialog: ErrorsDialog;

  constructor(private errorsCustomService: ErrorsCustomService,
              private toastService: ToastService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let exception = true;
    if ((req.headers?.keys() || []).findIndex(x => x == 'exception') >= 0) {
      exception = false;
    }
    return next
      .handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleError(error, exception))
      );
  }


  handleError(error: HttpErrorResponse, exception: boolean): Observable<any> {
    if (exception) {
      console.log(error);
      let msg ;

      if (error && error?.error?.data) {
        const errorData = error?.error?.data;
        if (typeof errorData === 'object') {
          msg = Object.entries(errorData)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
        } else {
          msg = errorData;
        }

        console.log(msg);
      }

      switch (error.status) {
        case 400:
          if (error && error?.error) {
            this.errorsDialog = {
              title: '[400] Thông báo',
              content: msg
            };
            this.errorsCustomService.openDialog(this.errorsDialog);
          } else
            this.toastService.showError('Không thể kết nối tới Server.', '[400] Thông báo');
          break;
        case 401:
          this.router.navigate(['/auth/login']);
          break;
        case 403:
          this.toastService.showError('Bạn không có quyền thực hiện chức năng này! ');
          break;
        case 404:
          if (error && error?.error) {
            this.errorsDialog = {
              title: '[404] Thông báo',
              content: msg
            };
            this.errorsCustomService.openDialog(this.errorsDialog);
          } else
            this.toastService.showError('Không tìm thấy API.', '[404] Thông báo');
          break;
        case 405:
          if (error && error?.error) {
            this.errorsDialog = {
              title: '[405] Thông báo',
              content: msg
            };
            this.errorsCustomService.openDialog(this.errorsDialog);
          } else
            this.toastService.showError('Không tìm thấy API.', '[405] Thông báo');
          break;
        case 422:
          if (error && error?.error) {
            this.errorsDialog = {
              title: '[422] Thông báo',
              content: msg
            };
            this.errorsCustomService.openDialog(this.errorsDialog);
          } else
            this.toastService.showError('Không thể kết nối tới Server.', '[400] Thông báo');
          break;
        case 500:
          this.errorsDialog = {
            title: '[500] Thông báo',
            content: `Có lỗi trong quá trình xử xý: Chi tiết: ${msg}`
          };
          this.errorsCustomService.openDialog(this.errorsDialog);
          break;
        default:
          this.errorsDialog = {
            title: '[500] Thông báo',
            content: `Có lỗi trong quá trình xử xý: Chi tiết: ${msg}`
          };
          this.errorsCustomService.openDialog(this.errorsDialog);
          break;
      }
    }
    return throwError(() => new Error(error?.message || 'Không thể kết nối tới Server'));

  }


}
