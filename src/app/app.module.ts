import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SelectComponent,
    ReadUserComponent,
    CreateUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
