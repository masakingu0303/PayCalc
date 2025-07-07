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
};

const API_URL = 'http://localhost:3000/tableData/';

const App: React.FC = () => {
  const [date, setDate] = useState(new Date()); 
  const [tableData, setTableData] = useState<TableData[]>([]);

  const thisMonth = date.getMonth() + 1;
  const thisYear = date.getFullYear();


  const handleChangeCalendar = (pager:string) => {
    if(pager === 'prev') {
      setDate(new Date(thisYear, thisMonth - 1));
    } else if(pager === 'next') {
     setDate(new Date(thisYear, thisMonth + 1));
    }
  }

  const fetchEvent = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setTableData(result));
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleAdd = (formData: TableData) => {
    const add = formData;
    fetch(API_URL, {
      body: JSON.stringify(add),
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(fetchEvent);
  }

  return (
    <>
      <Header handleChangeCalendar={handleChangeCalendar} thisYear={thisYear} thisMonth={thisMonth}/>
      <Table tableData={tableData} handleAdd={handleAdd} />
      <Result />
    </>
  );
};

export default App;
