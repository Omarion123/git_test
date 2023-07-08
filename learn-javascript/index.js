// Function to convert a number to words
function convertToWords(amount) {
    var ones = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'
    ];
  
    var tens = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  
    var scale = ['', 'thousand', 'million', 'billion', 'trillion'];
  
    // Function to convert a three-digit group into words
    function convertThreeDigits(num) {
      var words = '';
  
      if (num > 99) {
        words += ones[Math.floor(num / 100)] + ' hundred ';
        num %= 100;
      }
  
      if (num > 19) {
        words += tens[Math.floor(num / 10)] + ' ';
        num %= 10;
      }
  
      if (num > 0) {
        words += ones[num] + ' ';
      }
  
      return words;
    }
  
    if (amount === 0) {
      return 'zero';
    }
  
    var words = '';
    var numArray = String(amount).split(/(?=(?:...)*$)/);
  
    for (var i = 0; i < numArray.length; i++) {
      var groupNum = Number(numArray[i]);
  
      if (groupNum !== 0) {
        words += convertThreeDigits(groupNum) + scale[numArray.length - 1 - i] + ' ';
      }
    }
  
    return words.trim();
  }
  
  // Get user input and convert it to words
  var input = prompt('Enter an amount: ');
  var amount = Number(input);
  
  if (isNaN(amount)) {
    console.log('Invalid input. Please enter a valid number.');
  } else {
    var amountInWords = convertToWords(amount);
    console.log('Amount in words: ' + amountInWords);
  }
  

/*let number = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
function fizzy(num){
    for(let i=1; i<=num; i++){
        if(i % 3 === 0 && i % 5=== 0)
        {
            console.log("fizz buzz");
        }
        else if(i % 3 === 0){
            console.log("fizz");
        }
        else if(i % 5 === 0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}
fizzy(number);*/

/*function lastLetter(str){
    return str.charAt(str.length -1).toLowerCase();// this will take last letter of the word
}
console.log(lastLetter("ghost"));*/

/*function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
}
console.log(capitalize("GHOST"));*/
/*function favoriteAnimal(animal) {
    return animal + " is my favorite pet!"
  }
 
  console.log(favoriteAnimal('Dog'));*/
/*var number=3;
var anotherNumber=5;

function sum(n1, n2){
    return n1+n2;
}
function multiply(n1, n2){
    return n1*n2;
}
var ghost = sum(number, anotherNumber);
var tommy = multiply(prompt("Enter the number"), ghost);
var tasha = ghost+tommy;
document.getElementById("p").innerHTML= "The sum of : "+ghost+"+"+tommy+" is: "+tasha;*/
    //var ghost = sum(number, anotherNumber);
    //document.getElementById("p").innerHTML=ghost;


/*let day="Omar";
switch(day){
    case 'Monday':
        console.log("7 AM");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("9 AM");
        break;
    case 'Friday':
        console.log("8 AM");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("10 AM");
        break;
    default:
        console.log("Thats not the day of week");
}*/

/*let hour=23;
if(hour>=6 && hour<12){
    console.log("good morning");
}
else if(hour>=12 && hour<18){
    console.log("Good Afternoon");
}
else{
    console.log("Good evening");
}*/

/*let username=prompt("Who's there?");
if(username===null){
    alert("Canceled");
}
else if(username=="Admin"){
    password=prompt("Password?");
    if(password===null){
        alert("Canceled");
    }
    else if(password=="TheMaster"){
        alert("Welcome!");
    }
    else{
        alert("Wrong password");
    }
}
else{
    alert("Don't know you");
}*/



/*var my_age= prompt("What's your age?");
if(!(my_age>=14)&& (my_age<=90)){
    document.getElementById("p").innerHTML=`Your Age(${my_age}) is not  btn 14 and 90`;
}
else{
    document.getElementById("p").innerHTML=`Your Age(${my_age}) is completely btn 14 and 90`;
}*/ // learning about how logical operators work!!







//alert( alert(1) ||alert(2) || 3 || alert(4) );
/*let the_time = prompt("What time is it");

if(the_time<10){
    document.getElementById("p").innerHTML="Good Morning";
}
else if(the_time<20){
    document.getElementById("p").innerHTML="Good Day";
}
else{
    document.getElementById("p").innerHTML="Good Evening";
}*/
//let my_name="Omar";
//console.log(my_name);
//document.getElementById("p").innerHTML=my_name;
//alert(`My marks is, ${my_name}`);//this is embed variable
//alert(`My marks are, ${1+3}`);//this is embed expression
//let is_greater=4>1;//this is boolean
//alert(is_greater);//this is alert for boolean

//var my__name="Omar";
/*var real_name=prompt("What is your name");
var my__names_s=document.getElementById("p");

if(real_name == "Omar"){// IF YOU WANT TO IGNORE MIXED CAPITAL AND LOWER U USE ToLowecase() function after variable.ToLowerCase()
    my__names_s.innerHTML=`Welcome to Our website ${real_name}`;
}
else{
    my__names_s.innerHTML=`Get out here Mr ${real_name}`;
}*/

