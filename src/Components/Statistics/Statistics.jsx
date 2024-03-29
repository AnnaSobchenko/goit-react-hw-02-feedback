import PropTypes from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <>
    <ul className="list">
      <li className="item">
        <span className="label">Good</span>
        <span className="percentage">{good}</span>
      </li>
      <li className="item">
        <span className="label">Neutral</span>
        <span className="percentage">{neutral}</span>
      </li>
      <li className="item">
        <span className="label">Bad</span>
        <span className="percentage">{bad}</span>
      </li>
    </ul>
    <div className="totalResult">
      <span className="total">Total:{countTotalFeedback()}</span>
      <span className="total">
        Positive feedback: {countPositiveFeedbackPercentage()}%
      </span>
    </div>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
