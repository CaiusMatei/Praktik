// RepeatedTaskForm.js
import React, { useState } from 'react';
import WeekRepetitionInterval from './WeekRepetitionInterval';

const RepeatedTaskForm = () => {
  const [weekInterval, setWeekInterval] = useState(1);

  const handleWeekIntervalChange = (interval) => {
    setWeekInterval(interval);
  };

  return (
    <div>
      <h2>Repeated Task Form</h2>
      <WeekRepetitionInterval interval={weekInterval} onIntervalChange={handleWeekIntervalChange} />
    </div>
  );
};

export default RepeatedTaskForm;
