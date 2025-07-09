type LoginProps = {
    handlePas: (e: React.FormEvent<HTMLFormElement>) => void;
    pas: string;
    setPas: React.Dispatch<React.SetStateAction<string>>;
};


const Login: React.FC<LoginProps> = ({ handlePas, pas, setPas }) => {
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handlePas}>
                <input
                    type="password"
                    value={pas}
                    onChange={(e) => setPas(e.target.value)}
                />
                <button type="submit">ログイン</button>
            </form>
            <img className="login-img" src="/login.PNG" alt="" />
        </div>
    )
}

export default Login