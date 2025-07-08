type TableBodyProps = {
    tableData: TableData[];
    thisYear: number;
    thisMonth: number;
    handleDelete: (id: number) => void;

};

type TableData = {
    id?: number;
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
    income: number;
};

const TableBody: React.FC<TableBodyProps> = ({ tableData, handleDelete, thisYear, thisMonth }) => {

    const filterData = tableData.filter((row) => {
        const date = new Date(row.date);
        return (
            date.getFullYear() === thisYear &&
            date.getMonth() + 1 === thisMonth
        );
    })
    .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return (
        <>
            {filterData.map((row, id) => {
                const thisDate = row.date ? new Date(row.date).getDate() : "";
                return (
                    <tr key={id}>
                        <td>{thisDate}</td>
                        <td>{row.item}</td>
                        <td>{row.unitPrice.toLocaleString()}</td>
                        <td>{row.quantity}</td>
                        <td>{row.back}</td>
                        <td>{(row.amount ?? 0).toLocaleString()}</td>
                        <td>{(row.income ?? 0).toLocaleString()}</td>
                        <td>
                            <input
                                type="button"
                                value="削除"
                                onClick={() => row.id && handleDelete(row.id)} />
                        </td>
                    </tr>
                );
            })}
        </>
    );


};

export default TableBody;
