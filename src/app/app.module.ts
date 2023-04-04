import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { HttpClientModule } from '@angular/common/http'
//import {enableProdMode} from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { ItemService } from './item/item.service'

@NgModule({
  
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [ItemService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
