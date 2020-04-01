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

    console.log('Who are you');

};





// Deleting Items function

function deleteResult(e){
    e.preventDefault();

 
};




