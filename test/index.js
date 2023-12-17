const epochTime = require("../index");

console.log(epochTime.epochToDateTime(1703012451, 'DD-M-YYYY | hh:mm:ss a'));
console.log(epochTime.epochToDateTime(1703010600, 'DD-MMM-YYYY | hh:mm:ss a'));
console.log(epochTime.epochToDateTime(1702838203, 'DD-MMM-YYYY | hh:mm:ss a', 'Asia/Riyadh'));
console.log(epochTime.epochToDateTime(1702838203, 'DD-MMM-YYYY | ZThh:mm:ss a'));
console.log(epochTime.epochToDateTime(1702838203, 'DD-MMM-YYYY | ZZThh:mm:ss a'));
console.log(epochTime.epochToDateTime(1702838203, 'DD-MMMM-YYYY | HH:mm:ss'));
console.log(epochTime.epochToDateTime(1702838203, 'DD-MMMM-YYYY | kk:mm:ss'));

console.log(epochTime.currentTimestamp());

console.log(epochTime.addDayToCurrentEpoch(1));
console.log(epochTime.addDayToGivenEpoch(1, 1702926051));
console.log(epochTime.dateToEpoch("12/20/2023", 'Asia/Calcutta'));
console.log(epochTime.dateToEpochTime("20/12/2023"));
console.log(epochTime.currentDate("Asia/Riyadh"));
console.log(epochTime.addDurationToCurrentDate(1, "Days"));
console.log(epochTime.getDurationBetweenTwoDate("12-17-2023", "12-18-2023", "hour"));
console.log(epochTime.getDurationBetweenTwoDate("12-17-2023", "12-20-2023", "date"));
console.log(epochTime.timeDifference(1703010600, 1702840661, "days"));