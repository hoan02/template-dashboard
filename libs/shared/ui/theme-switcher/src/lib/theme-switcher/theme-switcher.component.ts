import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu, MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ThemeModeService } from '../../services/theme-mode.service';
import { ItemThemeMode, ThemeMode } from '../../models/theme-mode.model';



@Component({
  selector: 'lib-theme-switcher',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
  isMenuOpen = false;
  menuItems: ItemThemeMode[] = [];

  constructor(public themeModeService: ThemeModeService) {
    this.menuItems = [
      { label: 'Hệ thống', icon: 'pi pi-desktop', mode: 'system' },
      { label: 'Sáng', icon: 'pi pi-sun', mode: 'light' },
      { label: 'Tối', icon: 'pi pi-moon', mode: 'dark' },
    ];
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    if (!event.target) return;
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setTheme(mode: ThemeMode) {
    this.themeModeService.setTheme(mode);
    this.isMenuOpen = false;
  }
}
