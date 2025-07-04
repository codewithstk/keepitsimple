import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormElementsRoutingModule } from './form-elements-routing.module';

@NgModule({
	declarations: [DropdownComponent],
	imports: [CommonModule, FormElementsRoutingModule]
})
export class FormElementsModule {}
