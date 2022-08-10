"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var daysWords = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const now = new Date();
var WeekendDay = daysWords[now.getDay()];
const tom = new Date();
tom.setDate(tom.getDate() + 1);
const today = document.getElementById("HeadingDayH");
const tommorow = document.getElementById("HeadingDayM");
today.textContent = "Heute, den " + now.toLocaleDateString();
tommorow.textContent = "Morgen, den " + tom.toLocaleDateString();
const tableH = document.getElementsByClassName("TableToday");
const tableM = document.getElementsByClassName("TableTommorow");
const days = fs.readFileSync('example.csv', {
    encoding: 'utf-8'
}).split('\n').map((row) => {
    return row.split(',');
});
for (let day of days) {
    if (day[0] === WeekendDay) {
        console.log(day[0]);
    }
}
const TestHeader = document.getElementById("Heading");
TestHeader.textContent = WeekendDay;
//# sourceMappingURL=Beta1.js.map
