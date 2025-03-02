import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableAction, TableBeComponent, TableColumn } from 'libs/shared/ui/table-be/src';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableBeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }

  // products = [
  //   { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', image: 'https://robohash.org/d2a2a77af3d11f7f5df42626ab3c0609?set=set4&bgset=&size=400x400', inventoryStatus: 'INSTOCK' },
  //   { id: 2, name: 'Shirt', price: 30, category: 'Clothing', image: 'https://robohash.org/d2a2a77af3d11f7f5df42626ab3c0609?set=set4&bgset=&size=400x400', inventoryStatus: 'OUTOFSTOCK' }
  // ];
  products = [
    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', image: 'https://robohash.org/d2a2a77af3d11f7f5df42626ab3c0609?set=set4&bgset=&size=400x400', inventoryStatus: 'INSTOCK' },
    { id: 2, name: 'Shirt', price: 30, category: 'Clothing', image: 'https://robohash.org/d2a2a77af3d11f7f5df42626ab3c0609?set=set4&bgset=&size=400x400', inventoryStatus: 'OUTOFSTOCK' }
  ];

  columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'price', header: 'Price', type: 'currency', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    // { field: 'image', header: 'Image', type: 'image' },
    {
      field: 'inventoryStatus',
      header: 'Status',
      type: 'status',
      statusColors: {
        'INSTOCK': '#099e31',   // Xanh
        'OUTOFSTOCK': '#9e0909' // Đỏ
      }
    }
  ];

  actions: TableAction[] = [
    { icon: 'pi pi-eye', action: (row) => this.viewProduct(row), severity: 'primary' },
    { icon: 'pi pi-pencil', action: (row) => this.editProduct(row), severity: 'success' },
    { icon: 'pi pi-trash', action: (row) => this.deleteProduct(row), severity: 'danger' }
  ];

  openNew() {
    console.log('Opening new product dialog...');
  }

  deleteSelectedProducts() {
    console.log('Deleting selected products...');
  }

  exportCSV() {
    console.log('Exporting to CSV...');
  }

  viewProduct(product: any) {
    console.log('Viewing product:', product);
  }

  editProduct(product: any) {
    console.log('Editing product:', product);
  }

  deleteProduct(product: any) {
    console.log('Deleting product:', product);
  }
}
