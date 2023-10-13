import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './shared/password-field/password-field.component';
@NgModule({
  declarations: [AppComponent, PasswordFieldComponent],
  imports: [BrowserModule],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
