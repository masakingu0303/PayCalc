type HeaderProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const Header: React.FC<HeaderProps> = ({ date, setDate }) => {
  const thisMonth = date.getMonth();
  const thisYear = date.getFullYear();

  const handleChangeCalendar = (pager:string) => {
    if(pager === 'prev') {
      setDate(new Date(thisYear, thisMonth - 1));
    } else if(pager === 'next') {
     setDate(new Date(thisYear, thisMonth + 1));
    }
  }

  return (
      <div className="header-container">
        <h1 className="header-ttl">{thisYear}年</h1>
            <div className='month-container'>
        <button onClick={() => handleChangeCalendar('prev')}>前の月</button>
        <h2>{thisMonth + 1}月の収入</h2>
        <button onClick={() => handleChangeCalendar('next')}>次の月</button>
            </div>
      </div>
  );
};

export default Header;
