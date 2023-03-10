import Button from "../button/Button";
import Logo from "../logo/Logo";
import Card from "../card/Card";
import FooterToolbar from "../footer-toolbar/FooterToolbar";
import css from "./KnowMore.module.css";
import { useHistory } from "react-router-dom";

function KnowMore() {
  const history = useHistory();

  const option = (image, title, onClick) => {
    return (
      <div className={css.knowMoreListCard}>
        <Card image={image} title={title} onClick={onClick} />
      </div>
    );
  };

  return (
    <div className={css.knowMore}>
      <div className={css.knowMoreLogoWrapper}>
        <Logo small />
      </div>

      <h1 className={css.knowMoreTitle}>Saiba mais</h1>

      <div className={css.knowMoreList}>
        {option(null, "Finalidade do jogo", () => history.push(`/game-goal`))}
        {option(null, "Materiais de suporte", () =>
          history.push(`/supporting-materials`)
        )}
      </div>

      <FooterToolbar>
        <Button onClick={() => history.push("/menu")}>Voltar</Button>
      </FooterToolbar>
    </div>
  );
}

export default KnowMore;
