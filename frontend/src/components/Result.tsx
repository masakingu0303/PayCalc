type ResultProps = {
    tableData: TableData[];
    thisYear: number;
    thisMonth: number;
}

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


const Result: React.FC<ResultProps> = ({ tableData, thisYear, thisMonth}) => {

    const amountSum = tableData
    .filter((row) => {
      const date = new Date(row.date);
      return (
        date.getFullYear() === Number(thisYear) &&
        date.getMonth() + 1 === Number(thisMonth)
      );
    })
    .reduce((sum, row) => sum + row.amount, 0);

    const incomeSum = tableData
    .filter((row) => {
      const date = new Date(row.date);
      return (
        date.getFullYear() === Number(thisYear) &&
        date.getMonth() + 1 === Number(thisMonth)
      );
    })
    .reduce((sum, row) => sum + row.income, 0);
  


    return (
        <div className="result-container">
            <h3>売上合計{amountSum.toLocaleString()}円</h3>
            <h3>収益合計{incomeSum.toLocaleString()}円</h3>
        </div>
    )
}

export default Result;