// LOGIN
function login(){
  const name = document.getElementById("username").value;
  if (name === "") return;
  localStorage.setItem("user", name);
  startApp();
}

function startApp(){
  const user = localStorage.getItem("user");
  if (user){
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("welcomeText").innerText = "Welcome, " + user;
  }
}
startApp();

// DARK MODE
function toggleDark(){
  document.body.classList.toggle("dark");
}

// DAILY CHALLENGE
function challenge(){
  const list = ["Pray for someone", "Help someone", "Thank God for 3 things", "Read the Bible", "Be kind"];
  document.getElementById("challengeText").innerText = list[Math.floor(Math.random()*list.length)];
}

// STREAK
let streak = localStorage.getItem("streak") || 0;
function updateStreak(){
  document.getElementById("streakCount").innerText = streak + " days";
}
function increaseStreak(){
  streak++;
  localStorage.setItem("streak", streak);
  updateStreak();
}
updateStreak();

// BIBLE VERSE
function showVerse(){
  const v = ["John 3:16", "Psalm 23", "Philippians 4:13"];
  document.getElementById("bibleText").innerText = v[Math.floor(Math.random()*v.length)];
}

// FIND CHURCH
function findChurch(){
  window.open("https://www.google.com/maps/search/catholic+church+near+me");
}
