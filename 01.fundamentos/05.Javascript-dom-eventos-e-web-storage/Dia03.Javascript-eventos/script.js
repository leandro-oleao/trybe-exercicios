function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  let daysList = document.querySelector('#days');
  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let numberDays = dezDaysList[i];
    let numberDaysList = document.createElement('li');
    numberDaysList.className = 'day';
    numberDaysList.innerText = numberDays;

    if (numberDays === 24) {
      numberDaysList.className += ' holiday';
    } else if (numberDays === 25) {
      numberDaysList.className += ' friday holiday';
    } else if (numberDays === 31) {
      numberDaysList.className += ' holiday';
    } else if (numberDays === 4) {
      numberDaysList.className += ' friday';
    } else if (numberDays === 11) {
      numberDaysList.className += ' friday';
    } else if (numberDays === 18) {
      numberDaysList.className += ' friday';
    }

    daysList.appendChild(numberDaysList);
  }
}

createDaysOfTheMonth();

function createHolidays(feriados) {
  feriados = "Feriados"
  let buttonContainer = document.querySelector('.buttons-container');
  
  let holidayButton = document.createElement('button');
  holidayButton.className = 'btn-holiday';
  holidayButton.innerHTML = feriados;

  buttonContainer.appendChild(holidayButton);

}

createHolidays();