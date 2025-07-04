import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NAVIGATION_CONFIG } from './_core/navigation.config';
import { SideNavComponent } from './_core/components/side-nav/side-nav.component';
import { SideNavItem } from './_core/components/side-nav/side-nav-item.model';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, SideNavComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public sideNavDataArray: Array<SideNavItem> = [];

	public ngOnInit() {
		this.sideNavDataArray = NAVIGATION_CONFIG;
	}
}
