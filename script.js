function reverseStr(str){
    var listOfChars = str.split(''); // ['h','e','l'...]
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    var reversedStr;
    return reversedStr;
    //return str.split('').reverse().join('');
}
// console.log(reverseStr('hello'));

function isPalindrome(str){
    var reverse = reverseStr(str);
    return str === reverse;
    // if(str===reverse){
    //     return true;
    // }
    // return false; 
}
// console.log(isPalindrome('242'));


function convertDateToStr(date){
    var dateStr = {day:'',month:'',year:''}

    if(date.day<10){
        dateStr.day='0'+date.day; // It converts to string when concatinated
    }
    else{
        dateStr.day=date.day.toString(); // But here we need to convert it to string
    }
    if(date.month<10){
        dateStr.month='0'+date.month;
    }
    else{
        dateStr.month=date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr;
}
//console.log(convertDateToStr(date));

function getAllDateFormats(date){
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    
    return[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}
//console.log(getAllDateFormats(date));

function checkPalindromeForAllDateFormats(date){
    var toCheckPalindrome = getAllDateFormats(date);
    var flag = false;
    for(var i=0; i<toCheckPalindrome.length; i++){
        if(isPalindrome(toCheckPalindrome[i])){
            flag = true;
            break;
        }
    }
    return flag;
}
//console.log(checkPalindromeForAllDateFormats(date));


// check for leap year
function isLeapYear(year){
    if((year%100===0 && year%400===0) || (year%100!==0 && year%4===0)){ 
    return true;
}return false;
}

// gets next date
function getNextDate(date){
    var day = date.day + 1;  // increment the day
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]; //0 to 11
    // check for february
    if(month===2){ // check for leap year
        if(isLeapYear(year)){
            if(day>29){
                day=1;
                month++ // increment the month
            }
        }
        else{
            if(day>28){
                day=1;
                month++; // increment the month
            }
        }
    }
    // check for other months
    else{
        // check if day exceeds the no.of days in month
        if(day>daysInMonth[month-1]){
            day=1;
            month++; // increment the month
        }
    }
    // increment the year if month is greater than 12
    if(month>12){
        month=1;
        year++;
    }
    return{
        day: day,
        month: month,
        year: year
    };
}

// get next palindrome date
function getNextPalindromeDate(date){
    var ctr = 0;
    var nextDate = getNextDate(date);

    while(1){
        ctr++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
        break;
        }
        nextDate = getNextDate(nextDate);
    }
    return[ctr,nextDate];
}

// var date = {
//     day:8,
//     month:8,
//     year:2021
// }; // This is object

// console.log(getNextPalindromeDate(date))

var dateInput = document.querySelector("#bday-input");
var showBtn = document.querySelector("#show-btn");
var resultOutput = document.querySelector("#result");

showBtn.addEventListener("click",clickHandler);

function clickHandler(e){
    var bdayStr = dateInput.value; // 2020-10-11
    if(bdayStr!==""){
        var listOfDate = bdayStr.split('-'); //['2020','10','11']
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        };
        } resultOutput.innerText = "please enter a proper date format 😡";
        // console.log(date);
        var isPalindrome = checkPalindromeForAllDateFormats(date);
        if(isPalindrome){
            resultOutput.innerText = "Yay! your birthday is a palindrome!! 🥳🥳";
        }
        else{
            var[ctr, nextDate] = getNextPalindromeDate(date);
            resultOutput.innerText = `your birthday is not a palindrome😏. 
            But, ${ctr} days after your birthday (${dateInput.value}) is a palindrome date which is (${nextDate.day}-${nextDate.month}-${nextDate.year}).` ;   //${} -> this is turnary operator
        }

    }
