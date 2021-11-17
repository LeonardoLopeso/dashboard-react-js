import { useNavigate } from 'react-router';
import './index.css';

const Call = () => {

    const navigate = useNavigate();
    const onCall = () => {
        navigate('/videoL');
    }

    const onCallLibra = () => {
        navigate('/video');
    }

    return (
        <div className="container__call">

            <h1>Pressione o botão para iniciar a chamada</h1>

            <div className="call__input1" onClick={() => onCall()}>
                Atendimente em Líbras
            </div>
            <div className="call__input2" onClick={() => onCallLibra()}>                        
                Atendendimento em Português
            </div>                 
            
        </div>
    );
}

export default Call;