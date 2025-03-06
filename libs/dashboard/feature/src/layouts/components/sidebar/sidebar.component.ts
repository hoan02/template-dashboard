import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();

  menuItems = [
    { title: "Dashboard", icon: "pi-home", routerLink: "/dashboard", expanded: false },
    {
      title: "Products",
      icon: "pi-box",
      expanded: false,
      children: [
        { title: "Categories", icon: "pi-tags", routerLink: "/products/categories", expanded: false },
        { title: "Inventory", icon: "pi-warehouse", routerLink: "/products/inventory", expanded: false },
        {
          title: "Advanced",
          icon: "pi-cog",
          expanded: false,
          children: [
            { title: "Permissions", icon: "pi-lock", routerLink: "/advanced/permissions", expanded: false },
            {
              title: "Logs",
              icon: "pi-list",
              expanded: false,
              routerLink: "/products"
            }
          ]
        }
      ]
    },
    { title: "Settings", icon: "pi-cog", routerLink: "/settings", expanded: false }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.expandActivePath();
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);

    if (this.collapsed) {
      this.closeAllMenus(this.menuItems); // Thu gọn menu, chỉ còn icon cha
    } else {
      this.expandActivePath(); // Mở submenu theo đường dẫn hiện tại
    }
  }

  toggleMenu(node: any) {
    if (node.children?.length) {
      node.expanded = !node.expanded;
    } else if (node.routerLink) {
      this.router.navigate([node.routerLink]);
    }
  }

  isActive(node: any): boolean {
    return node.routerLink ? this.router.url.startsWith(node.routerLink) : false;
  }

  closeAllMenus(items: any[]) {
    for (const item of items) {
      item.expanded = false;
      if (item.children) {
        this.closeAllMenus(item.children);
      }
    }
  }

  expandActivePath() {
    const currentUrl = this.router.url;
    this.expandMenuByUrl(this.menuItems, currentUrl);
  }

  expandMenuByUrl(items: any[], url: string) {
    for (const item of items) {
      item.expanded = item.routerLink && url.startsWith(item.routerLink);
      if (item.children) {
        this.expandMenuByUrl(item.children, url);
        if (item.children.some((child: { expanded: any; }) => child.expanded)) {
          item.expanded = true; // Mở cha nếu có con được mở
        }
      }
    }
  }
}
