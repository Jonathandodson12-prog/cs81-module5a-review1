const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Function to calculate total time spent on hobbies
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Function to get unique hobbies
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}

// Function to filter sessions longer than a certain number of minutes
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// Function to count the number of sessions with a particular mood
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

// New function to calculate average time spent on hobbies
function averageTime(log) {
  const total = totalTime(log); // Use totalTime to get the sum of all minutes
  return total / log.length; // Calculate average by dividing total by number of sessions
}

// New function to count how many sessions are for a specific hobby
const countSessionsForHobby = function(log, hobby) {
  return log.filter(entry => entry.hobby === hobby).length;
};

// Test the functions
console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
console.log("Average time spent on hobbies:", averageTime(hobbyLog), "minutes");
console.log("Number of drawing sessions:", countSessionsForHobby(hobbyLog, "drawing"));
