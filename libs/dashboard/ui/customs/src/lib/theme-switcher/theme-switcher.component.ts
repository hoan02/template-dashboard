import { Component, ViewChild } from '@angular/core';
import { ThemeService, ThemeMode } from '@dashboard/data-access'
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'lib-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  @ViewChild('menu') menu!: Menu;

  constructor(public themeService: ThemeService) {
    this.menuItems = [
      { label: 'Hệ thống', icon: 'pi pi-desktop', command: () => this.setTheme('system') },
      { label: 'Sáng', icon: 'pi pi-sun', command: () => this.setTheme('light') },
      { label: 'Tối', icon: 'pi pi-moon', command: () => this.setTheme('dark') },
    ];
  }

  menuItems: MenuItem[];

  setTheme(mode: ThemeMode) {
    this.themeService.setTheme(mode);
    this.menu.hide(); // Ẩn menu sau khi chọn
  }
}
