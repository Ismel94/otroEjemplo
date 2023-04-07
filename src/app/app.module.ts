import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
//import {enableProdMode} from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { AddComponent } from './add/add.component';
import { ItemService } from './item/item.service'

@NgModule({
  
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, HttpClientModule, FormsModule, NativeScriptFormsModule, ReactiveFormsModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, AddComponent],
  providers: [ItemService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
