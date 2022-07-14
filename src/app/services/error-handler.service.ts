import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FlashMessagesService } from 'flash-messages-angular';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(
    private flashMessage: FlashMessagesService,
    private ngxService: NgxUiLoaderService
  ) {}
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error('Logging error: ', error); // log to console instead

      // Stop showing loader
      this.ngxService.stopAll();

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  log(message: string) {
    this.flashMessage.show(message, {
      cssClass: 'alert-danger',
      timeout: 3000,
    });
  }
}
