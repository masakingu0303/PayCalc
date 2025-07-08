type LogoutProps = {
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  const Logout: React.FC<LogoutProps> = ({ setUser }) => {
    return (

        <button className="logout-button" onClick={() => setUser(false)}>Logout</button>
 
    );
  };
  
  export default Logout;
  