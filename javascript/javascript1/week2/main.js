function getFullname(firstname, surname, formal, male) {
  let full = "";
  if (firstname == undefined || surname == undefined) {
    return "Please Enter your Fullname";
  } else if (formal) {
    if (male) {
      full = "Lord " + firstname + " " + surname;
    } else {
      full = "Lady " + firstname + " " + surname;
    }
  } else {
    full = firstname + " " + surname;
  }
  return full;
}

function getEventWeekday(todaysWeekday, days) {
  let weeksDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  for (let i = 0; i < 7; i++) {
    if (todaysWeekday == weeksDays[i]) {
      let p = (days % 7) + i;
      return weeksDays[p % 7];
    }
  }
}
/*
1) I didn't use a method to get the day of today, so I can check my
function with more possibilities.
2)The p variable, and p%7 were used to avoid delaing with
numbers more than 7, because our array has only 7 elements
which are the weeks days.
*/

function clothingito(temprature) {
  if (temprature <= 0) {
    return "Oh it is freezing, wear scarf, jacket, wool blouse";
  } else if (temprature > 0 && temprature <= 12) {
    return "wool blouse, jacket";
  } else if (temprature > 12 && temprature <= 24) {
    return "blouse, no jacket";
  } else if (temprature > 24 && temprature <= 35) {
    return "Tshirt, Short";
  } else if (temprature > 35 && temprature < 50) {
    return "wear a short and go to a beach";
  } else {
    return "Keep calm and take climate change more seriously";
  }
}

let class07Students = [];
function addStudentToClass(studentName) {
  let s = true;
  if (class07Students.length < 6) {
    for (let i = 0; i < class07Students.length; i++) {
      if (studentName === class07Students[i]) {
        s = false;
      }
    }
    if (s == true) {
      class07Students.push(studentName);
    } else if (s == false) {
      let show = "Student " + studentName + " is  already in the class";
      return show;
    }
  } else if (
    class07Students.length < 7 &&
    studentName == "Queen Margrethe II"
  ) {
    class07Students.push(studentName);
  } else {
    return "Cannot add more students to class 07";
  }
}

function getNumberOfStudents(class07Students) {
  return class07Students.length;
}
