import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { PaginatorState } from 'primeng/paginator';
import { TableColumn, TableAction } from '../../models';

@Component({
  selector: 'table-be',
  templateUrl: './table-be.component.html',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    ToolbarModule,
    PaginatorModule,
    SelectModule
  ],
  standalone: true,
  styleUrls: ['./table-be.component.scss']
})
export class TableBeComponent {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() actions: TableAction[] = [];
  @Input() rows: number = 5;
  @Input() options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 25, value: 20 },
    { label: 50, value: 50 }
  ];;
  @Input() first: number = 0;
  @Input() totalRecords: number = 0;
  @Input() showToolbar: boolean = true;
  @Input() showPaginator: boolean = true;

  @Output() create = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();

  selectedItems: any[] = [];
  getStatusColor(field: string, value: string): string | null {
    const column = this.columns.find(c => c.field === field);
    return column?.statusColors?.[value] || null;
  }

  onRowSelect(event: any) {
    this.selectedItems.push(event.data);
  }

  onRowUnselect(event: any) {
    this.selectedItems = this.selectedItems.filter(item => item !== event.data);
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? this.rows;
  }
}
