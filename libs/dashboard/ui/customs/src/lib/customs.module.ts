import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [CommonModule, ButtonModule, MenuModule],
  declarations: [ThemeSwitcherComponent],
  exports: [ThemeSwitcherComponent]
})
export class CustomsModule { }
