const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
let nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
console.log("###################");

let Horsens = {
  destinationDistance: 50,
  speed: 80,
};

function calcTime(whereToGo) {
  let t = whereToGo.destinationDistance / whereToGo.speed;

  return `You will arrive in ${Math.floor(t)} hours and ${(
    (t - Math.floor(t)) *
    60
  ).toFixed(1)} minutes`;
}
console.log(calcTime(Horsens));
console.log("###################");

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "The Big Bang Theory",
    days: 4,
    hours: 6,
    minutes: 18,
  },
  { title: "Breaking Bad", days: 6, hours: 4, minutes: 48 },
];

function logOutSeriesText() {
  let totlaPercentage = 0;
  for (i = 0; i < seriesDurations.length; i++) {
    let precentage =
      (seriesDurations[i].days * 24 * 60 +
        seriesDurations[i].hours * 60 +
        seriesDurations[i].minutes) /
      (80 * 365 * 24 * 60);
    console.log(
      `${seriesDurations[i].title} took ${precentage.toFixed(6)}% of my life`
    );
    totlaPercentage += precentage;
  }
  console.log(`In total that is ${totlaPercentage.toFixed(5)}% of my life`);
}

logOutSeriesText(); // logs out the text found above
console.log("#################");

const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Kobe ind fra Netto", 3);
saveNote("Wash the dishes", 4);

console.log(notes);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    } else {
      return "You entered wrong id";
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content} `
    );
  }
}
logOutNotesFormatted();

// My idea to make the app better
function missionDone(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      console.log(
        `The mission \"${notes[i].content}\" is Done and hase been deleted from your notes`
      );
      notes.splice(i, 1);
    }
  }
}

missionDone(2);
logOutNotesFormatted();
console.log("#################");

const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date: date, activity: activity, duration: duration });
}
addActivity("21/7/21", "Youtube", 10);
addActivity("21/7/21", "Facebook", 8);
addActivity("21/7/21", "Instagram", 12);
addActivity("21/7/21", "WhatsApp", 14);
addActivity("22/7/21", "Youtube", 15);
addActivity("22/7/21", "Facebook", 7);
addActivity("22/7/21", "Instagram", 21);
addActivity("22/7/21", "WhatsApp", 7);
console.log(activities);

function showStatus(activities) {
  let totalduration = 0;
  const usageLimit = 90;
  if (activities.length == 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    for (let i = 0; i < activities.length; i++) {
      totalduration += activities[i].duration;
    }
    console.log(
      `You have added ${activities.length} activities. They amount to ${totalduration} Minutes of usage `
    );
    totalduration > usageLimit
      ? console.log("No more social media for you")
      : console.log(
          `you can still use social media for ${
            usageLimit - totalduration
          } minutes`
        );
  }
}
showStatus(activities);

console.log("@@@@@@@@@");
function showStatusImprovedVersion(activities, date) {
  let totalduration = 0;
  let specificDateActivities = 0;
  const usageLimit = 45;
  if (activities.length == 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].date === date) {
        totalduration += activities[i].duration;
        specificDateActivities++;
      }
    }
    console.log(
      `You have added ${specificDateActivities} activities. They amount to ${totalduration} Minutes of usage `
    );
    totalduration > usageLimit
      ? console.log("No more social media for you")
      : console.log(
          `you can still use social media for ${
            usageLimit - totalduration
          } minutes`
        );
  }
}
showStatusImprovedVersion(activities, "22/7/21");

function mostSpentTime() {
  const activitiesNames = [];
  const activitysTotalDuration = [];
  for (let i = 0; i < activities.length; i++) {
    if (!activitiesNames.includes(activities[i].activity)) {
      activitiesNames.push(activities[i].activity);
      activitysTotalDuration.push(0);
    }
  }
  console.log(activitiesNames);
  console.log(activitysTotalDuration);
  for (let i = 0; i < activitiesNames.length; i++) {
    for (let j = 0; j < activities.length; j++) {
      if (activitiesNames[i] === activities[j].activity) {
        activitysTotalDuration[i] += activities[j].duration;
      }
    }
  }
  console.log(activitiesNames);
  console.log(activitysTotalDuration);
  console.log(
    ` The most used Activity you spent time with is ${
      activitiesNames[
        activitysTotalDuration.indexOf(Math.max(...activitysTotalDuration))
      ]
    } `
  );
}
mostSpentTime();
