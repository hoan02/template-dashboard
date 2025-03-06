import { Injectable, signal, effect, computed } from '@angular/core';
import { ThemeMode } from '../models/theme-mode.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  public mode = signal<ThemeMode>('system');

  /** Kiểm tra xem theme hiện tại có phải 'dark' không */
  public isDark = computed(() =>
    this.mode() === 'dark' ||
    (this.mode() === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  constructor() {
    this.loadTheme();
    effect(() => this.applyTheme());

    // Theo dõi thay đổi hệ thống nếu dùng 'system'
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.applyTheme.bind(this));
  }

  /** Load theme từ localStorage */
  private loadTheme() {
    const storedMode = localStorage.getItem('theme') as ThemeMode | null;
    if (storedMode) this.mode.set(storedMode);
  }

  /** Áp dụng theme */
  private applyTheme() {
    localStorage.setItem('theme', this.mode());
    document.documentElement.classList.toggle('dark', this.isDark());
  }

  /** Thay đổi theme */
  setTheme(mode: ThemeMode) {
    this.mode.set(mode);
  }
}
