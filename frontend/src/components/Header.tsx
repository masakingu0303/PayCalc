type HeaderProps = {
  handleChangeCalendar: (pager: string) => void,
  thisYear: number,
  thisMonth: number,

};

const Header: React.FC<HeaderProps> = ({ handleChangeCalendar, thisYear, thisMonth }) => {


  return (
    <div className="header-container">
      <h1 className="header-ttl">{thisYear}年</h1>
      <div className='month-container'>
        <button onClick={() => handleChangeCalendar('prev')}>前の月</button>
        <h2>{thisMonth}月の臨時収入</h2>
        <button onClick={() => handleChangeCalendar('next')}>次の月</button>
      </div>
      <img className="chara-img" src="../../../public/chara.PNG" alt="" />
      <img className="chara-img-01" src="../../../public/chara01.PNG" alt="" />
    </div>
  );
};

export default Header;
