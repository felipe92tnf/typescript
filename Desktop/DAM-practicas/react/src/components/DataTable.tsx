type Column<T> = {
    key: keyof T;
    label: string;
  };
  
  interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
  }
  
  export function DataTable<T extends { id: string }>({
    data,
    columns,
  }: DataTableProps<T>) {
    return (
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}
          </tr>
        </thead>
  
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((col) => (
                <td key={String(col.key)}>{String(item[col.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }