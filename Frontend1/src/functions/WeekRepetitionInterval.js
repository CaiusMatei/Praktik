// WeekRepetitionInterval.js
import React from 'react';

const WeekRepetitionInterval = ({ interval, onIntervalChange }) => {
  return (
    <div>
      <label htmlFor="weekInterval">Repeat every </label>
      <input
        type="number"
        id="weekInterval"
        value={interval}
        onChange={(e) => onIntervalChange(parseInt(e.target.value))}
      />
      <label htmlFor="weekInterval"> week(s)</label>
    </div>
  );
};

export default WeekRepetitionInterval;
