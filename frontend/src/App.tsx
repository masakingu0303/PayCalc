import { useEffect, useState } from 'react';
import './App.css'
import Login from './components/Login';
import Header from './components/Header';
import Table from './components/Table';
import Result from './components/Result';
import Logout from './components/Logout';

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

// ✅ サーバーに合わせる！
const API_URL = 'http://localhost:3000/';

const App: React.FC = () => {

  const [user, setUser] = useState(false);
  const [pas, setPas] = useState("");

  const handlePas = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pas === "0303") {
      setUser(true);
    }
    setPas("")
  };

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
      .then((result) => {
        setTableData(result);
      });
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleAdd = (newRow: Omit<TableData, 'id'>) => {
    fetch(`${API_URL}table`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRow),
    }).then(fetchEvent);
  };


  const handleDelete = (id: number) => {
    fetch(`${API_URL}table/${id}`, {
      method: "DELETE",
    }).then(fetchEvent);
  };

  return (
    <>
      {!user ? (
        <Login handlePas={handlePas} pas={pas} setPas={setPas} />
      ) : (
        <>
          <Header handleChangeCalendar={handleChangeCalendar} thisYear={thisYear} thisMonth={thisMonth} />
          <Table tableData={tableData} handleAdd={handleAdd} handleDelete={handleDelete} thisYear={thisYear} thisMonth={thisMonth} />
          <Result tableData={tableData} thisYear={thisYear} thisMonth={thisMonth} />
          <Logout setUser={setUser} />
        </>
      )}
    </>
  );
};

export default App;
