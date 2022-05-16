var yearsPrinted = 0;
var currentYear = 2022;
while (yearsPrinted < 5) 
{ 
if ((currentYear % 4 === 0))
{
document.write(currentYear + "<br>");
yearsPrinted++;
currentYear++;
} 
else 
{
currentYear++;
}
}
leapYears();