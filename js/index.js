function showSubject(day) {
  var currentDay = day;
  let elem = document.getElementById(currentDay);
  if (elem.style.visibility === 'hidden') {
    elem.style.visibility = 'visible';
  } else {
    elem.style.visibility = 'hidden';
  }
}

function showTime(sub) {
  var subject = sub;
  let elem = document.getElementById(subject);
  if (elem.style.visibility === 'hidden') {
    elem.style.visibility = 'visible';
  } else {
    elem.style.visibility = 'hidden';
  }
}

// function checkFirstVisit() {
//   if (document.cookie.indexOf('mycookie') == -1) {
//     // cookie doesn't exist, create it now
//     document.cookie = 'mycookie=1';
//   }
//   else {
//     // not first visit, so alert
//     alert('You refreshed!');
//   }
// }