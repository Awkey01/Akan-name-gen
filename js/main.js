function ShowResult() {
	var dd = document.getElementById("dd").value;
	var mm = document.getElementById("mm").value;  
	var yy = document.getElementById("yy").value;
	var male = document.getElementById("male").checked; 
	var female = document.getElementById("female").checked; 
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
	var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
	var birthDate = new Date(dd + '/' + mm + '/' + yy);
	var dayOfTheWeek = birthDate.getDay(); //output day of the week

	if (dd <= 0 || dd > 31) { 
		document.getElementById("error").innerText = "Oops didn't selected a valid date!"  
	} else if ((mm === "September" || mm === "April" || mm === "June" || mm === "November") && (dd <= 0 || dd > 30)) {
		document.getElementById("error").innerText = "Oops didn't selected a valid date!"  
	} else if (mm === "------") { 
		document.getElementById("error").innerText = "Oops you didn't selected a month!"
		
	} else if (yy <= 0 && yy <2020) { 
		document.getElementById("error").innerText = "Please enter a valid year!" 

	} else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) { 
		document.getElementById("error").innerText = "Oops didn't selected a valid date!!" 
	
	} else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) {  
		document.getElementById("error").innerText = "Oops didn't selected a valid date!!" 
		
	} else if (male === true) { 
		document.getElementById("result").innerHTML = "You were born on  " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!" //shows result by replacing the  HTML content in the id=result
	
	} else if (female === true) { 
		document.getElementById("result").innerHTML = "You were born on  " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!" //shows result by replacing the HTML content in the id=result

	} else if ((female === false) && (male === false)) { 
		document.getElementById("error").innerText = "Please select gender!" 
		
	}
};
