import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
