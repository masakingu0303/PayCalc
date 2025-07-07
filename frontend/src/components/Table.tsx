import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import TableInput from "../Table/TableInput";

type TableProps = {
    tableData: TableData[],
    handleAdd: () => void;
}

type TableData = {
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
};

const Table: React.FC<TableProps> = ({ tableData, handleAdd }) => {
    return (
        <div className="table-container">
            <table border={1}>
                <TableHead/>
                <tbody>
                    <TableBody tableData={tableData} />
                   <TableInput handleAdd={handleAdd}/>
                </tbody>

            </table>
        </div>
    )
}

export default Table;