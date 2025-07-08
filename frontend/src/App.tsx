import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import Table from './components/Table';
import Result from './components/Result';

 type TableData = {
  id?: number;
  date: string;
  item: string;
  unitPrice: number;
  quantity: number;
  back: number;
  amount: number;
  income: number;
};

const API_URL = 'http://localhost:3000/tableData/';

const App: React.FC = () => {
  const [date, setDate] = useState(new Date()); 
  const [tableData, setTableData] = useState<TableData[]>([]);

  const thisMonth = date.getMonth() + 1;
  const thisYear = date.getFullYear();


  const handleChangeCalendar = (pager: string) => {
    const zeroBasedMonth = thisMonth - 1; 
  
    if (pager === 'prev') {
      setDate(new Date(thisYear, zeroBasedMonth - 1)); // 前月
    } else if (pager === 'next') {
      setDate(new Date(thisYear, zeroBasedMonth + 1)); // 次月
    }
  };

  const fetchEvent = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setTableData(result));
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleAdd = (newRow: TableData) => {
    const add = newRow;
    fetch(API_URL, {
      body: JSON.stringify(add),
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(fetchEvent);
  }

  const handleDelete = (id: number) => {
    fetch(`${API_URL}${id}`, {
      method: "DELETE",
    }).then(fetchEvent);
  };


  return (
    <>
      <Header handleChangeCalendar={handleChangeCalendar} thisYear={thisYear} thisMonth={thisMonth}/>
      <Table tableData={tableData} handleAdd={handleAdd} handleDelete={handleDelete} thisYear={thisYear} thisMonth={thisMonth}/>
      <Result tableData={tableData} thisYear={thisYear} thisMonth={thisMonth}/>
    </>
  );
};

export default App;
