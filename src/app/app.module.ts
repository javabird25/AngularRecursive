import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import {FormsModule} from '@angular/forms';
import { NodeComponent } from './components/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NodeComponent
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
