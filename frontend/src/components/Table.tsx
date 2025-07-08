import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import TableInput from "../Table/TableInput";

type TableData = {
    date: string;
    item: string;
    unitPrice: number;
    quantity: number;
    back: number;
    amount: number;
  };

type TableProps = {
  tableData: TableData[];
  handleAdd: (newRow: TableData) => void;
  thisYear: number;
  thisMonth: number;
};

const Table: React.FC<TableProps> = ({ tableData, handleAdd, thisYear, thisMonth}) => {
  return (
    <div className="table-container">
      <table border={1}>
        <TableHead />
        <tbody>
          <TableBody tableData={tableData} thisYear={thisYear} thisMonth={thisMonth}/>
          <TableInput handleAdd={handleAdd} thisYear={thisYear} thisMonth={thisMonth}/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
