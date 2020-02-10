import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'

@NgModule({
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule
  ]
})
export class MaterialModule { }
