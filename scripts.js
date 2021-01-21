let currentYear = new Date().getFullYear(); //current year
let since1970 = new Date().getTime(); //ms 1/1/1970 - today
let birth1 = new Date('11/28/1988').getTime(); //ms 1/1/1970 - j birth
let birth2 = new Date('01/24/1990').getTime(); //ms 1/1/1970 - l birth
let dating = new Date('09/16/2007').getTime(); //ms 1/1/1970 - first "date"
let engagement = new Date('10/15/2017').getTime(); //ms 1/1/1970 - engagement
let wedding = new Date('10/12/2018').getTime(); //ms 1/1/1970 - wedding
let jAge = since1970 - birth1;
let lAge = since1970 - birth2;
let datingLength = since1970 - dating; //ms since we started dating
let engagementLength = since1970 - engagement; //ms since we got engaged
let weddingLength = since1970 - wedding; //ms since we got married

//turn ms into years:
function years(date) {
  let totalYears = (date / (1000 * 3600 * 24)) / 365; //dividing by 365 does not account for leap years
  // console.log('years: '+ totalYears);
  return totalYears;
}
//turn ms into days:
function days(date) {
  let totalDays = date / (1000 * 3600 * 24);
  // console.log('days: '+ totalDays);
  return totalDays;
}
function percentage(longerLength, shorterLength) {
  let timePercentage = shorterLength / longerLength;
  // console.log('percentage: '+ timePercentage);
  let percent = timePercentage.toString();
  // console.log(typeof(percent))
  console.log(percent.substring(2,4))
  return percent.substring(2, 4);
}
let jDays = days(jAge);
let lDays = days(lAge);
let dDays = days(datingLength);
let eDays = days(engagementLength);
let wDays = days(weddingLength);
let dYears = years(datingLength);
let wYears = years(weddingLength);
console.log("percentage of life j has been dating l");
percentage(jDays, dDays);
console.log("percentage of life since j got engaged");
percentage(jDays, eDays);
console.log("percentage of life j has been married");


//!TOGETHER
//days
document.getElementById('togetherDays').innerText = parseInt(dDays);
//years-ish
document.getElementById('togetherYears').innerText = `${dYears.toFixed(2)}-ish`;
//percentage of l's life
document.getElementById('lDateJPercent').innerText = `${percentage(lDays, dDays)}%`;
//percentage of j's life
document.getElementById('jDateLPercent').innerText = `${percentage(jDays, dDays)}%`;

//!MARRIED
//days
document.getElementById('marriedDays').innerText = parseInt(wDays);
//years-ish
document.getElementById('marriedYears').innerText = `${wYears.toFixed(2)}-ish`;
//percentage of l's life
document.getElementById('lMarryJPercent').innerText = `${percentage(lDays, wDays)}%`;
//percentage of j's life
document.getElementById('jMarryLPercent').innerText = `${percentage(jDays, wDays)}%`;

//!VISUALIZATION TEXT
//j birth
document.getElementById('visJ').style.top = '97%';
//l birth
document.getElementById('visL').style.top = '94%';
//dating
document.getElementById('visD').style.top = `${percentage(jDays, dDays)}%`;
//engagement
document.getElementById('visE').style.top = `${percentage(jDays, eDays)}%`;
//wedding
document.getElementById('visW').style.top = `${percentage(jDays, wDays)}%`;
//today
document.getElementById('visT').style.top = '0%';
document.getElementById('visTSpan').innerText = `${currentYear}: `;