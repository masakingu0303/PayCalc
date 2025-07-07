import TableHead from "../Table/TableHead";

type TableProps = {
    tableData: TableData[];
}

type TableData = {
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
};




const Table: React.FC<TableProps> = ({ tableData }) => {
    return (
        <div className="table-container">
            <table border={1}>
                <TableHead/>
                <tbody>
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
                    <tr>
                        <td colSpan={2}>a</td>
                        <td></td>
                        <td>a</td>
                        <td>1/3</td>
                        <td>a</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>a</td>
                        <td></td>
                        <td>a</td>
                        <td>1/3</td>
                        <td>a</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Table;