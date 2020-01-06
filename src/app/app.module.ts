import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { StudentCardComponent } from './student-card/student-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StudentCaseComponent } from './student-case/student-case.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      StudentCardComponent,
      StudentCaseComponent,
      StudentRegisterComponent
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      AppRoutingModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      ReactiveFormsModule,

      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
