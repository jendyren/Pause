/*establish three variables in local storage:
  - waterinput --> contains the number of minutes to wait before providing a notif to drink water, default value is 30
  - stretchinput: same as above but for stretching, default is 30
  - wildinput: same as above but for wildcard, default is 30

establist a list in local storage called wildcard_activities, append to this list every time a new wildcard is added
*/
var img = "assets/img/small-logo.png"
if (localStorage.getItem("waterinput") === null || localStorage.getItem("waterinput") == "" || localStorage.getItem("waterinput") == 0) {
  localStorage.setItem("waterinput", "10")
}
  let timer1 = new Timer(1, parseFloat(localStorage.getItem("waterinput")) * 60);
  timer1.draw();
  timer1.startTimer();


if (localStorage.getItem("stretchinput") === null || localStorage.getItem("stretchinput") == "" || localStorage.getItem("stretchinput") == 0) {
  localStorage.setItem("stretchinput", "10")
}
  let timer2 = new Timer(2, parseFloat(localStorage.getItem("stretchinput")) * 60);
  timer2.draw();
  timer2.startTimer();


if (localStorage.getItem("wildinput") === null || localStorage.getItem("wildinput") == "" || localStorage.getItem("wildinput") == 0) {
  localStorage.setItem("wildinput", "10")
}
  let timer3 = new Timer(3, parseFloat(localStorage.getItem("wildinput")) * 60);
  timer3.draw();
  timer3.startTimer();


if (localStorage.getItem("wildcards") === null) {
  localStorage.setItem("wildcard_activities", "")
}
console.log(localStorage.getItem("waterinput"))
console.log(localStorage.getItem("stretchinput"))
console.log(localStorage.getItem("wildinput"))
//set timers for water, stretch, and wildcard 
//Note: setInterval takes milliseconds
var watertimer = setInterval(waterNotif, parseFloat(localStorage.getItem("waterinput")) * 60000)
var stretchtimer = setInterval(stretchNotif, parseFloat(localStorage.getItem("stretchinput")) * 60000)
var wildcardtimer = setInterval(wildcardNotif, parseFloat(localStorage.getItem("wildinput")) * 60000)

//check if enter key is pressed to update timers

//make custom timer functions that line up with timer definition above
function water_refresh() {
  event.preventDefault();
  if (localStorage.getItem("waterinput") != document.getElementById("waterinput").value && document.getElementById("waterinput").value != "" && document.getElementById("waterinput").value != 0) {
    localStorage.setItem("waterinput", document.getElementById("waterinput").value);
    console.log(localStorage.getItem("waterinput"))
    clearInterval(watertimer);
    watertimer = setInterval(waterNotif, parseFloat(localStorage.getItem("waterinput")) * 60000)
    timer1.updateTimer(parseFloat(localStorage.getItem("waterinput")) * 60)
    //timer1.draw();
    //timer1.startTimer();
  }
}
function waterNotif() {
  notifyMe("drink water")
  clearInterval(watertimer);
  timer1.updateTimer(parseFloat(localStorage.getItem("waterinput")) * 60)
  watertimer = setInterval(waterNotif, parseFloat(localStorage.getItem("waterinput")) * 60000)
}
function stretch_refresh() {
 event.preventDefault();
 if (localStorage.getItem("stretchinput") != document.getElementById("stretchinput").value && document.getElementById("stretchinput").value != "" && document.getElementById("stretchinput").value != 0) {
   localStorage.setItem("stretchinput", document.getElementById("stretchinput").value);
   console.log(localStorage.getItem("stretchinput"))
   clearInterval(stretchtimer);
   stretchtimer = setInterval(stretchNotif, parseFloat(localStorage.getItem("stretchinput")) * 60000)
   timer2.updateTimer(parseFloat(localStorage.getItem("stretchinput")) * 60)
 }
}
function stretchNotif() {
  notifyMe("stretch")
  clearInterval(stretchtimer);
  stretchtimer = setInterval(stretchNotif, parseFloat(localStorage.getItem("stretchinput")) * 60000)
  timer2.updateTimer(parseFloat(localStorage.getItem("stretchinput")) * 60)
}
function wildcard_refresh() {
  event.preventDefault();
 if (localStorage.getItem("wildinput") != document.getElementById("wildinput").value && document.getElementById("wildinput").value != "" && document.getElementById("wildinput").value != 0) {
   localStorage.setItem("wildinput", document.getElementById("wildinput").value);
   console.log(localStorage.getItem("wildinput"))
   clearInterval(wildcardtimer);
   wildcardtimer = setInterval(wildcardNotif, parseFloat(localStorage.getItem("wildinput")) * 60000)
   timer3.updateTimer(parseFloat(localStorage.getItem("wildinput")) * 60)
  }

}
function wildcardNotif() {
  activities = JSON.parse(localStorage.getItem("wildcards"));
  random_el = activities[Math.floor(Math.random() * activities.length)]
  notifyMe(random_el)
  clearInterval(wildcardtimer);
  wildcardtimer = setInterval(wildcardNotif, parseFloat(localStorage.getItem("wildinput")) * 60000)
  timer3.updateTimer(parseFloat(localStorage.getItem("wildinput")) * 60)
}
function notifyMe(notifType) {
  console.log(Notification['permission'])
  if (!window.Notification) {
    console.log('Browser does not support notifications.');
  } else {
    // check if permission is already granted
    if (Notification['permission'] === 'granted') {
      // show notification here
      var notify = new Notification('Hi from Pause!', {
        body: "It's time to: " + notifType,
        icon: img 
      });
      
      
      console.log(notifType + " sent!")
      
      setTimeout(function () { alert(notifType); }, 500);
      
    } else {
      // request permission from user
      Notification.requestPermission().then(function (p) {
        if (p === 'granted') {
          // show notification here
          var notify = new Notification('Hi from Pause!', {
            body: "It's time to: " + notifType,
          });

        } else {
          console.log('User blocked notifications.');
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }
}
