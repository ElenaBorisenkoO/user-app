import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';
import { ReposComponent } from './repos/repos.component'

@NgModule({
  declarations: [UserComponent,ReposComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule
    ],
    exports:[UserComponent],
    providers:[UserService]
})
export class UserModule { }
