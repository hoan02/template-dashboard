export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  type?: 'text' | 'currency' | 'image' | 'status';
  statusColors?: { [key: string]: string }; // Thêm màu sắc theo trạng thái
}
