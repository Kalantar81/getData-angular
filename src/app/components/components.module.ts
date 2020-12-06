import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module/material.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [BasicObservableComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ]
})
export class ComponentsModule { }
