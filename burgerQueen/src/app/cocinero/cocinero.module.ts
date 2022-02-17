import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocineroComponent } from './cocinero/cocinero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CocineroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CocineroModule { }
