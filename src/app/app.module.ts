import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header.component';
import { HelloComponent } from './hello/hello.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderrComponent } from './headerr/headerr.component';
import { CategoryComponent } from './category/category.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    // HelloComponent,
    
    HeaderComponent,
    ProductDetailComponent,
    HeaderrComponent,
    CategoryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
