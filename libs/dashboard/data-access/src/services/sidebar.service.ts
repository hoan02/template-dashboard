import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly STORAGE_KEY = 'sidebarState';

  constructor() { }

  saveMenu(menuItems: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(menuItems));
  }

  getMenu(): any[] {
    const storedState = localStorage.getItem(this.STORAGE_KEY);
    return storedState ? JSON.parse(storedState) : [];
  }
}
