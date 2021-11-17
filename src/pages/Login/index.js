import './Index.css';
import { useNavigate } from 'react-router-dom';
import { FaLockOpen, FaUser, FaSignInAlt, FaDeaf } from 'react-icons/fa';
import { useState } from 'react';
import notify from "devextreme/ui/notify";

import api from '../../services/api';

const Login = () => {

    const showToast = () => {
        notify({
            message: "Login ou Senha incorreto(s)",
            type: "error", 
            delayTime: 1500,
            width: 300,
            shading: true,
            animation: {
                hide: {type: "fade", duration: 40, to: 0},
                show: { type: "fade", duration: 400, to: 1, from: 0 }
            }
        });
    }

    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await api.post('/login', {email:user, password:passwd});
            console.log(response.data);
            if(response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/dashboard');
            }
        }catch(error) {
            showToast();
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
                    <button type="submit" className="btn__logar" value="Logar" onClick={() => login()}>
                        Logar
                        &nbsp;<FaSignInAlt />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
