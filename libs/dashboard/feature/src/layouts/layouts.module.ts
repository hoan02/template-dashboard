import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { ThemeSwitcherComponent } from '@shared/ui/theme-switcher';

@NgModule({
  imports: [CommonModule, ButtonModule, ThemeSwitcherComponent],
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    MainLayoutComponent
  ],
})
export class LayoutsModule { }
