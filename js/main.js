//Declaring variavle for the forms
var button = document.getElementById('myButton');
var delButton= document.getElementById('DelButton');

// Adding event lister to the form
button.addEventListener('click', showResult);
// Adding Delete 
delButton.addEventListener('click', deleteResult);


// Declaring my function 
function showResult(e){
    e.preventDefault();
    var dd = document.getElementById("dd").value; 
	var mm = document.getElementById("mm").value;
	var yy = document.getElementById("yy").value; 
	var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked; 
    var  months = ['January','February','March','April','May','June',  'July','August','September','October','November','December'];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	var male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
	var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 
	var birth_Date = new Date(mm + '/' + dd + '/' + yy);
    var dayOfTheWeek = birth_Date.getDay(); 
    var month_of_the_year = birth_Date.getMonth();




};










// Deleting result function

function deleteResult(e){
    e.preventDefault();

 
};




