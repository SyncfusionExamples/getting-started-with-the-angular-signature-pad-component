import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  @ViewChild("clearbuttoncomponent")
  public clearButtonObject! : ButtonComponent;
  @ViewChild("savebuttoncomponent")
  public saveButtonObject! : ButtonComponent;
  @ViewChild("signaturecomponent")
  public signatureObject! : SignatureComponent;

  public saveButtonClick() : void {
    this.signatureObject.save();
  }
  public clearButtonClick() : void {
    this.signatureObject.clear();
    if(this.signatureObject.isEmpty())
    {
      this.saveButtonObject.disabled = true;
      this.clearButtonObject.disabled = true;
    }
  }

  public signaturePadChangeState(): void {
    if(!this.signatureObject.isEmpty()){
      this.saveButtonObject.disabled=false;
      this.clearButtonObject.disabled=false;
    }
  }
}
