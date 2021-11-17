import { FaMicrophoneSlash, FaPhoneSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import './index.css';

const Video = () => {

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