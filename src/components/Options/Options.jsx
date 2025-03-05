import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className="container">
      <button className={css.options} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.options} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.options} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.options} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
