import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonPropsModel, DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dialog';
  @ViewChild('subscribeDialog')
  public subscribeDialogObject ! : DialogComponent;
  @ViewChild('confirmDialog')
  public confirmDialogObject ! : DialogComponent;
  @ViewChild('dialogTextbox')
  public dialogTextboxObject ! : ElementRef;

  public confirmDialogNoButtonClick = (): void => {
    if(this.dialogTextboxObject.nativeElement.value !== '') {
      this.dialogTextboxObject.nativeElement.value = '';
      this.confirmDialogObject.hide();
    }
  };

  public confirmDialogYesButtonClick = (): void => {
    this.subscribeDialogObject.hide();
    this.confirmDialogObject.hide();
  };

  public confirmDialogButtons: ButtonPropsModel[] = [
    { click: this.confirmDialogYesButtonClick.bind(this),
      buttonModel: {content: 'Yes', isPrimary: true}},

    { click: this.confirmDialogNoButtonClick.bind(this),
      buttonModel: {content: 'No'}}
  ];

  public closeIcon : Boolean = true;
  public ConfirmDialogVisibility : Boolean = false;

  public subscribeButtonClick = (event: any): void => { 
    this.ConfirmDialogVisibility = true;
  };

 
}
