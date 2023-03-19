import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  countPositivePercentage,
}) => (
  <ul className={css.statList}>
    <li className={css.statItem}>
      Good: <span>{good}</span>
    </li>
    <li className={css.statItem}>
      Neutral: <span>{neutral}</span>
    </li>
    <li className={css.statItem}>
      Bad: <span>{bad}</span>
    </li>
    <li className={css.statItem}>
      Total feedback: <span>{total}</span>
    </li>
    <li className={css.statItem}>
      Positive feedback: <span>{countPositivePercentage} %</span>
    </li>
  </ul>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositivePercentage: PropTypes.number.isRequired,
};
