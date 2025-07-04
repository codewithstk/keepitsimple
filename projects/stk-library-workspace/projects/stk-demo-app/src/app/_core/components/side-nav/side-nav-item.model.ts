export class SideNavItem {
	public icon?: string;

	public name!: string;

	public tag?: string;

	public route?: string;

	public children?: Array<SideNavItem>;

	public isExpanded?: boolean;
}
