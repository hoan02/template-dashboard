export interface TableAction {
  icon: string; // Icon hiển thị
  label?: string; // Tên action
  action: (row: any) => void; // Hàm thực thi khi click
  severity?: 'primary' | 'secondary' | 'success' | 'danger'; // Màu sắc nút
}
