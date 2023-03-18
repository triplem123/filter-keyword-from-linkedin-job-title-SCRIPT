
javascript:
var icons = document.querySelectorAll('[id^=IconItem]');
var printStr = "";
printStr += document.getElementsByClassName('nameContainer')[0].outerText + "xyz";
printStr += icons[0].outerText.split('·')[0] + "xyz";
printStr += icons[1].outerText + "xyz";
printStr += icons[2].outerText;
console.log(printStr);

javascript: var icons = document.querySelectorAll('[id^=IconItem]'); var printStr = ""; printStr += document.getElementsByClassName('nameContainer')[0].outerText + "xyz"; printStr += icons[0].outerText.split('·')[0] + "xyz"; printStr += icons[1].outerText + "xyz"; printStr += icons[2].outerText; console.log(printStr);
