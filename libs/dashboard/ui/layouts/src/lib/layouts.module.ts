import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { CustomsModule } from '@dashboard/ui/customs';

@NgModule({
  imports: [CommonModule, ButtonModule, CustomsModule],
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    MainLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutsModule { }
