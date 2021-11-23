import notify from "devextreme/ui/notify";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./index.css";

const Call = () => {
  const navigate = useNavigate();

  // const [infoUser, setInfoUser] = useEffect(null);

  const showToast = () => {
    notify({
      message: "Chamando...",
      type: "success",
      delayTime: 1500,
      width: 500,
      shading: true,
      position: { top: "center" },
      animation: {
        hide: { type: "fade", duration: 40, to: 0 },
        show: { type: "fade", duration: 400, to: 1, from: 0 },
      },
    });
  };

  const onCall = () => {
    showToast();

    navigate("/video");
  };
  const onCallLibra = () => {
    showToast();

    navigate("/videoL");
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("FLY@User"));
    if (!userInfo) navigate("/");
  });

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
};

export default Call;
