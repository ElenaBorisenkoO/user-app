import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [UserComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule
    ],
    exports:[UserComponent],
    providers:[UserService]
})
export class UserModule { }
