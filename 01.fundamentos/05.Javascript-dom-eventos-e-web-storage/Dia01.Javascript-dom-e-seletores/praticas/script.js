let headColor = document.querySelector('#header-container');
headColor.style.background = "#28774F";

let urgentList = document.querySelector('.emergency-tasks');
urgentList.style.background = "pink";

let urgentTasks = document.querySelectorAll('.emergency-tasks h3');
for (i = 0; i < urgentTasks.length; i += 1) {
  urgentTasks[i].style.background = "purple";
}

let notUrgentList = document.getElementsByClassName('no-emergency-tasks')[0];
notUrgentList.style.background = "yellow";

let notUrgentTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (i = 0; i < notUrgentTasks.length; i += 1) {
  notUrgentTasks[i].style.background = "black";
}

let footColor = document.getElementById('footer-container');
footColor.style.background = "#004400";


