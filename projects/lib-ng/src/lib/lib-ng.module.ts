import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { NestedComponent } from './nested.component';

@NgModule({
  declarations: [DropdownComponent, NestedComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownComponent, NestedComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibNgModule { }
