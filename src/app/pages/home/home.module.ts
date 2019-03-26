import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
