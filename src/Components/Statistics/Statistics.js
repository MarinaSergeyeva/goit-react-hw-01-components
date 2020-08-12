import React from 'react';
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({ stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.stat_list}>
        {stats.map(stat => (
          <li className={styles.item} style={{backgroundColor: `#${((Math.random() * 0xffffff) << 0).toString(16)}`}}>            <span className="label">{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  it: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string,
};

export default Statistics;
