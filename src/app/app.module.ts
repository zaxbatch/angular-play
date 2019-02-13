import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { BasicComponent } from './basic/basic.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BasicComponent,
    IntermediateComponent,
    AdvancedComponent
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
