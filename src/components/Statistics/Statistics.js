import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const getRandomColor = number => {
  return '#' + Math.floor(Math.random() * (16777215 - number)).toString(16);
};

function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles['stat-list']}>
        {stats.map((item, i) => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: getRandomColor(i) }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
