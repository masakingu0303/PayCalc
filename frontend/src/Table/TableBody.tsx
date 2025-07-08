type TableBodyProps = {
    tableData: TableData[];
    thisYear: number;
    thisMonth: number;
};

type TableData = {
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
};

const TableBody: React.FC<TableBodyProps> = ({ tableData, thisYear, thisMonth }) => {

    const filterData = tableData.filter((row) => {
        const date = new Date(row.date);
        return (
            date.getFullYear() === thisYear &&
            date.getMonth() + 1 === thisMonth
        );
    });

    return (
        <>
            {filterData.map((row, id) => {
                const thisDate = row.date ? new Date(row.date).getDate() : "";
                return (
                    <tr key={id}>
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
