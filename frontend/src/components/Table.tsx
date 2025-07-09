import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import TableInput from "../Table/TableInput";

type TableProps = {
  tableData: TableData[];
  handleAdd: (newRow: TableData) => void;
  handleDelete: (id: number) => void;
  thisYear: number;
  thisMonth: number;
};

type TableData = {
    id?: number;
    date: string;
    item: string;
    unitprice: number;
    quantity: number;
    back: number;
    amount: number;
    income: number;
  };


const Table: React.FC<TableProps> = ({ tableData, handleAdd, handleDelete, thisYear, thisMonth}) => {
  return (
    <div className="table-container">
      <table border={1}>
        <TableHead />
        <tbody>
          <TableInput handleAdd={handleAdd} thisYear={thisYear} thisMonth={thisMonth}/>
          <TableBody tableData={tableData} handleDelete={handleDelete} thisYear={thisYear} thisMonth={thisMonth}/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
