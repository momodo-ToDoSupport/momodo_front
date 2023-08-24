import moment from 'moment';

export const generateCalendarData = () => {
  const currentMonth = moment();
  const calendarData = [];
  
  // 현재 월의 시작일과 마지막일을 구함
  const startDay = currentMonth.clone().startOf('month').startOf('week');
  const endDay = currentMonth.clone().endOf('month').endOf('week');

  let day = startDay.clone().subtract(1, 'day');

  while (day.isBefore(endDay, 'day')) {
    calendarData.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }
  return calendarData;
};
