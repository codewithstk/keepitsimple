import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons/icons.component';
import { HttpClientModule } from '@angular/common/http';
import { StkIconComponent } from '../../../../stk/src/public-api';

@NgModule({
	declarations: [IconsComponent],
	imports: [
		CommonModule,
		IconsRoutingModule,
		StkIconComponent,
		HttpClientModule
	]
})
export class IconsModule {}
