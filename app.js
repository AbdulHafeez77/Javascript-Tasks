// task no 1
// var names = ["ahmed", "ali","khan", "muhammad"];

// names[0] = [names[3], names[3] = names[0]][0];

// console.log(names);


// Task no 2
// var input = prompt("Enrter a palindrome word.");
// var reverse = input.split("").reverse().join("");

// if (input === reverse) {
//     alert("It's a palindrome word.")
// }
// else{
//     alert("It's not a palindrome word.")
// }


// Task no 3
// var input = prompt("Enrter a palindrome word.");
// var reverse = "";

// for (var i = input.length -1; i >= 0; i--) {
//     reverse = reverse + input[i];
// }
// if (input == reverse) {
//    alert("It's a palindrome word.")
// }
// else{
//     alert("It's not a palindrome word.")
// }


// Task no 4
// Sorting without sort-method

// var arr = [12,14,23,34,11,25,29,10,9,8];

// for(var i = 0; i < arr.length; i++){
//     for(var x = i+1; x < arr.length; x++){
//         if(arr[i] > arr[x]){
//             arr[i] = [arr[x] , arr[x] = arr[i]][0];
//         }
//     }
// }
// console.log(arr);

// task no 5
// small and large number from sorted

// var small = arr[0];
// console.log(small);

// var large = arr[arr.length -1];
// console.log(large);

// task no 6
// smallest number of Array
// var arr = [12,,11,13,10,9,11,5,8,7,6];
// var a = arr[0];

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] < a){
//         a = arr[i];
//     }
// }
// console.log(a);

// task no 7
// largest number of Array
// var arr = [60,13,70,91,59,05,88,27,36,45];
// var a = arr[0];

// for(var i = 0; i < arr.length; i++){
    // if(arr[i] > a){
        // a = arr[i];
    // }
// }
// console.log(a);


// task no 8
// finding missing number
// var arr = [21,22,23,25,26,27,28,29,30,32];
// var x = arr[0];

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == x){
//         x = arr[i]; 
//         x++;
//     }
// }
// console.log(x);

// task no 8
// finding missing number without using extra variable
// var arr  = [21,22,23,25,26,27,28,29,30];

// for(var i = 0; i < arr.length; i++){
    // if(arr[i+1] - arr[i] !=1){
    // console.log(arr[i]+1);
    // break;
    // }
// }


// task no 9
// var str = "ab2h8shd1h3hh2hd9d7bcj1ks9sjcc9cja3bj"
// var nums = str.split("").sort().splice(0,10);
// var alphas = str.split("").sort().slice(11);

// console.log(nums);
// console.log(alphas);


// task n0 9
// making counting tabel
// for(var i = 1; i <= 20; a = i+10 ){
    // for(j = i+1; j <= 20; j++ )
    // document.write(i,j);
// }

// capitalizing string
// var str = "abdul hafeez" ;
// var firstLetter = str[0].toUpperCase();
// var result = firstLetter + str.slice(1);

// console.log(result);
 
// Covert the text to toLowerCase
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();

// for (var i = 0; i <= cleanestCities.length; i++) {
// if (cityToCheck === cleanestCities[i]) {
// alert("It's one of the cleanest cities");
// }
// }


// alerting double spacing
// var str = prompt("Enter any word....");

// for (var i = 0; i < str.length; i++){
    // if (str.slice(i, i + 2) == "  "){
        // alert("No Double Space!")
        // break;
    // }
// }

// replacing string value 
// var str = "ghous saylani ahmed";
// var index = str.indexOf("saylani");

// if(index !== -1){
//    var first = str.slice(0,index);
//    var sec = "smit";
//    var last = str.slice(index + 7);
// }
// console.log(first + sec + last);


// var str = "hafeeez";
// var firstLetter = str[0].toUpperCase();
// console.log(firstLetter + str.slice(1));



// var str = prompt("Enter some text");

// for(var i = 0; i < str.length; i++){
//     if(str.slice(i, i+2) === "  "){
//         alert("NO DOUBLE SPACE!")
//         break;
//     }
// }



// var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var smallLetters = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "0123456789";
// var symbols = "!@#$%^&*()_+-={}[];\',./~`";
// var password = '';

// for(var i = 0; i < 3; i++){
//     password += capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
//     password += smallLetters[Math.floor(Math.random() * smallLetters.length)];
//     password += numbers[Math.floor(Math.random() * numbers.length)];
// }
// password += symbols[Math.floor(Math.random() * symbols.length)];

// console.log(password);


// var x = 10;
// function  foo(){
//     console.log(x)
//     var x = 20
// }
 
// foo()

// function updateArray(arr){
//     arr[1].name = 'ahmed';
//     return arr
// }

// let obj = {name : 'ghous' };
// let result = updateArray([obj])

// console.log(result)






