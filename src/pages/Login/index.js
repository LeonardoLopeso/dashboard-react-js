import './Index.css';
import { useNavigate } from 'react-router-dom';
import { FaLockOpen, FaUser, FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");
    const navigate = useNavigate();
    const login = () => {
        if(user == "" || passwd == "") {
            alert('Login e senha não podem ficar vazio!');
        }else{
            navigate('/dashboard');
        }
    }

    return (
        <div className="container__login">
            <div className="login__screen">
                <i className="fa fa-user"></i>
                <p>Bem vindo a área de Login</p>
                
                <div className="login__screen__credency">
                    <div className="login__input1">
                        <FaUser color="#777" size="18" />
                        <input type="text" name="login" placeholder="login" value={user} onChange={(e) => {setUser(e.target.value)}} />
                    </div>
                    <div className="login__input2">
                        <FaLockOpen color="#777" size="18" />
                        <input type="password" name="passwd" placeholder="****" value={passwd} onChange={(e) => {setPasswd(e.target.value)}} />
                    </div>
                    <button className="btn__logar" value="Logar" onClick={() => login()}>
                        Logar
                        &nbsp;<FaSignInAlt />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
