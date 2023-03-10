import css from "./LevelOptions.module.css";

function LevelOptions(props) {
  const shouldRenderAdditionalHeader =
    (props.dialogue && props.levelSubject) || props.additionalHeader;

  return (
    <div className={css.levelOptions}>
      {shouldRenderAdditionalHeader && (
        <h1 className={css.levelOptionsHeader}>
          {props.dialogue && props.levelSubject ? (
            <>{`A conduta "${props.dialogue}" é adequada para ${props.levelSubject}?`}</>
          ) : (
            <>{props.additionalHeader}</>
          )}
        </h1>
      )}
      <h1 className={css.levelOptionsHeader}>
        {props.multiple
          ? "Marque as opções que se aplicam:"
          : "Escolha uma opção:"}
      </h1>
      {props.children}
    </div>
  );
}

export default LevelOptions;
