import notify from 'devextreme/ui/notify';
import { useNavigate } from 'react-router';
import './index.css';

const Call = () => {

    const navigate = useNavigate();

    const showToast = () => {
        
        notify({
            message: "Chamando...",
            type: "error", 
            delayTime: 1500,
            width: 200,
            shading: true,
            position: {top: "center"},
            animation: {
                hide: {type: "fade", duration: 40, to: 0},
                show: { type: "fade", duration: 400, to: 1, from: 0 }
            }
        });
    }

    const onCall = () => {
        showToast();
        
        setTimeout(() => {
            navigate('/video');
        });
        
    }
    const onCallLibra = () => {

        showToast();
        setTimeout(() => {
            navigate('/videoL');
        });
    }

    return (
        <div className="container__call">

            <h1>Pressione o botão para iniciar a chamada</h1>

            <div className="call__input1" onClick={() => onCallLibra()}>
                Atendimento em Líbras
            </div>
            <div className="call__input2" onClick={() => onCall()}>                        
                Atendimento em Português
            </div>                 
            
        </div>
    );
}

export default Call;