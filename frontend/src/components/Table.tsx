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
};

const Table: React.FC<TableProps> = ({ tableData, handleAdd }) => {
  return (
    <div className="table-container">
      <table border={1}>
        <TableHead />
        <tbody>
          <TableBody tableData={tableData} />
          <TableInput handleAdd={handleAdd} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
