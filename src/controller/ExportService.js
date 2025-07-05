import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportJsonToExcel = (jsonData, sheetName, fileName) => {
  const ws = XLSX.utils.json_to_sheet(jsonData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
  saveAs(data, fileName + '.xlsx');
} 