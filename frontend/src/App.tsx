import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Table from './components/Table';
import Result from './components/Result';


const App: React.FC = () => {
  const [date, setDate] = useState(new Date());

  type TableDate = {
    date: string;    // 日付（文字列）
    item: string;    // 品目
    unitPrice: number; // 単価
    quantity: number;  // 数量
    back: number;      // バック
    amount: number;    // 金額
  };



  const tableData: TableDate[] = [
    {
      date: '2025-07-06',
      item: '写メ',
      unitPrice: 2000,
      quantity: 100,
      back: 666,
      amount: 200000,
    },
    {
      date: '2025-07-07',
      item: '写メ',
      unitPrice: 2000,
      quantity: 80,
      back: 666,
      amount: 160000,
    }
  ];



  return (
    <>
      <Header date={date} setDate={setDate} />
      <Table tableData={tableData}/>
      <Result/>
    </>
  );
};

export default App;
