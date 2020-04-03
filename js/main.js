function showResult(e) {
  var dd = document.getElementById("dd").value;
  var mm = document.getElementById("mm").value;
  var yy = document.getElementById("yy").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var birth_date = new Date(dd + '/' + mm + '/' + yy);
  var day_of_the_week = birth_date.getDay();

  if (dd <= 0 || dd > 31) {
    alert("Please enter a valid date!");
  } else if ((mm === "September" || mm === "April" || mm === "June" || mm === "November") && (dd <= 0 || dd > 30)) {
    alert("Please enter a valid date!");
  } else if (mm === "------") {
    alert("Please select a month!");

  } else if (yy <= 0000 || yy > 2020) {
    alert("Please enter a valid year!");

  } else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) {
    alert("Please enter a valid date!");

  } else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) {
    alert("Please enter a valid date!");

  } else if (male === true) {
    document.getElementById("result").innerHTML = "You were born on a " + days[day_of_the_week] + ".\n" + "Your Akan name is " + male_names[day_of_the_week] + "!"

  } else if (female === true) {
    document.getElementById("result").innerHTML = "You were born on a " + days[day_of_the_week] + ".\n" + "Your Akan name is " + female_names[day_of_the_week] + "!"
  } else if ((female === false) && (male === false)) {
    alert("Please select gender!");

  } else  {
    alert("Please fill the form");
  }
}


function Cancel(e) {
  document.getElementById("result");
  

}
