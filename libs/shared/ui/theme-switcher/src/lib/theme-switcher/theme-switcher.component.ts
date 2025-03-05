import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ThemeModeService } from '../../services/theme-mode.service';
import { ThemeMode } from '../../models/theme-mode.model';

@Component({
  selector: 'lib-theme-switcher',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  @ViewChild('menu') menu!: Menu;
  menuItems: MenuItem[];

  constructor(public themeModeService: ThemeModeService) {
    this.menuItems = [
      { label: 'Hệ thống', icon: 'pi pi-desktop', command: () => this.setTheme('system') },
      { label: 'Sáng', icon: 'pi pi-sun', command: () => this.setTheme('light') },
      { label: 'Tối', icon: 'pi pi-moon', command: () => this.setTheme('dark') },
    ];
  }

  setTheme(mode: ThemeMode) {
    this.themeModeService.setTheme(mode);
    if (this.menu) {
      this.menu.hide(); // Ẩn menu sau khi chọn theme
    }
  }
}
