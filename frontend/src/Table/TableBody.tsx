type TableBodyProps = {
    tableData: TableData[];
  };
  
  type TableData = {
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
};

  const TableBody: React.FC<TableBodyProps> = ({ tableData }) => {
    return (
      <>
        {tableData.map((row, index) => {
          const thisDate = new Date(row.date).getDate();
          return (
            <tr key={index}>
              <td>{thisDate}</td>
              <td>{row.item}</td>
              <td>{row.unitPrice}</td>
              <td>{row.quantity}</td>
              <td>{row.back}</td>
              <td>{row.amount}</td>
            </tr>
          );
        })}
      </>
    );
  };
  
  export default TableBody;
  