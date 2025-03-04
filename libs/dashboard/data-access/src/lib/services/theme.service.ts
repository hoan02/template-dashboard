import { Injectable, signal, effect, computed } from '@angular/core';

export type ThemeMode = 'system' | 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public themeMode = signal<ThemeMode>('system');

  /** Kiểm tra xem theme hiện tại có phải 'dark' không */
  public isDark = computed(() => {
    if (this.themeMode() === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return this.themeMode() === 'dark';
  });

  constructor() {
    this.loadTheme();
    effect(() => this.applyTheme());
  }

  /** Load theme từ localStorage */
  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) {
      this.themeMode.set(savedTheme);
    }
  }

  /** Áp dụng theme */
  private applyTheme() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('app-dark', this.isDark());
    localStorage.setItem('theme', this.themeMode());
  }

  /** Thay đổi theme */
  setTheme(mode: ThemeMode) {
    this.themeMode.set(mode);
  }
}
