import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();

  menuItems = [
    { label: 'Dashboard', icon: 'pi-home' },
    { label: 'Products', icon: 'pi-box' },
    { label: 'Settings', icon: 'pi-cog' }
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }
}
