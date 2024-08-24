document.addEventListener('DOMContentLoaded', () => {
  // Month abbreviations
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Get current date values
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // Set month and year
  const monthElement = document.querySelector('.calendar__month');
  const yearElement = document.querySelector('.calendar__year');

  if (monthElement && yearElement) {
      monthElement.textContent = months[currentMonth];
      yearElement.textContent = currentYear;
  }

  // Create grid of days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Get the first day of the month

  let week = document.createElement('div');
  week.classList.add('calendar__day-numbers-row');

  // Add empty spans for days before the first day of the month to align the grid
  for (let i = 0; i < firstDayOfMonth; i++) {
      let emptyDay = document.createElement('span');
      emptyDay.classList.add('calendar__day-number', 'calendar__day-number--empty');
      week.append(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
      let day = document.createElement('span');
      day.classList.add('calendar__day-number');
      day.textContent = i;

      // Highlight the current day
      if (i === currentDay) {
          day.classList.add('calendar__day-number--current');
      }

      week.append(day);

      // Append the week row when Saturday is reached or the last day of the month
      if (new Date(currentYear, currentMonth, i).getDay() === 6 || i === daysInMonth) {
          const calendarDays = document.querySelector('.calendar__day-numbers');
          if (calendarDays) {
              calendarDays.append(week);
          }

          // Create a new week row if the month is not finished yet
          if (i !== daysInMonth) {
              week = document.createElement('div');
              week.classList.add('calendar__day-numbers-row');
          }
      }
  }
});
