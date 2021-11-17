import { useEffect } from 'react';
import { FaMicrophoneSlash, FaPhoneSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { io } from 'socket.io-client';
import './index.css';

const Video = () => {

    const socket = io('http://localhost:5555/rooms/connect');
    
    // Ver com Albert o socket io

    useEffect(() => {
        console.log(socket);
        socket.on('connection', (data) => {
            console.log(data);
            data.on('chat message', () => {
                console.log('message:');
            })
        })
    },[]);

    const navigate = useNavigate();
    const returnToCall = () => {
        localStorage.clear();
        navigate('/call');
    }

    return (
        <div className="container__video">

                <div className="video__wrapper">
                    <div className="video__input1">                        
                    </div>
                    <div className="video__input2">
                    </div>                 
                    <div className="video__input3">
                    </div>
                </div>

                <div className="btn__video">
                    <FaMicrophoneSlash id="muteTwo" />
                    <FaPhoneSlash id="closeTwo" onClick={() => returnToCall()} /> 
                </div>            
        </div>
    );
}

export default Video;