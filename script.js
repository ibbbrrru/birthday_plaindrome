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

var date = {
    day:8,
    month:2,
    year:2020
}; // This is object
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
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]; //0 to 11
    // if(month===2){
    //     if(isLeapYear(year)){
    //         if(day>29){
    //             day=1;
    //             month++
    //         }
    //     }
    //     else{
    //         if(day>28){
    //             day=1;
    //             month++;
    //         }
    //     }
    // }
    // else{
    //     if(day>daysInMonth[month-1]){
    //         day=1;
    //         month++;
    //     }
    // }
    // if(month>12){
    //     month=1;
    //     year++;
    // }
    // return{
    //     day: day,
    //     month: month,
    //     year: year
    // };
}