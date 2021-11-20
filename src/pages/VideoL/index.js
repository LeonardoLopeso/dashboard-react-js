import { FaMicrophoneSlash, FaPhoneSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import './index.css';

const VideoL = () => {

    const navigate = useNavigate();
    const returnToCall = () => {
        localStorage.clear();
        navigate('/call');
    }

    return (
        <div className="container__videol">

            <div className="videol__wrapper">
                <div className="videol__input1"></div>
                <div className="videol__input2">  </div>                               
                <div className="videol__input3"></div>
            </div>

            <div className="btn__videol">
                <FaMicrophoneSlash id="mute" />
               <FaPhoneSlash id="close" onClick={() => returnToCall()} /> 
            </div>            
            
        </div>
    );
}

export default VideoL;