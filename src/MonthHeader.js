import React from 'react';

const monthMap = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

const MonthHeader = ({monthsToDisplay}) => {
  return (
    <div className="MonthHeader">
      {monthsToDisplay.map((month, index) =>
        <span key={index}>{monthMap[month.split('/')[1]]}</span>)}
    </div>
  );
}

export default MonthHeader;
