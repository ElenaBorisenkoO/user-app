import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material';
import { ReposComponent } from './repos/repos.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [UserComponent,ReposComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
    ],
    exports:[UserComponent],
    providers:[UserService]
})
export class UserModule { }
