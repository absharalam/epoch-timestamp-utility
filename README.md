# Epoch Timestamp Utility With Timezone

This simple library will be simplified our daily use epoch timestamp task in simple steps.

Installation step

```
npm install epoch-timestamp-utility
 ```

Now require this library in your working file.
```
const epochTime = require('epoch-timestamp-utility);
```

## Example

```
console.log(epochTime.epochToDateTime(1703012451, 'DD-M-YYYY | hh:mm:ss a')); // 20-12-2023 | 12:30:51 am

console.log(epochTime.epochToDateTime(1703010600, 'DD-MMM-YYYY | hh:mm:ss a')); //20-Dec-2023 | 12:00:00 am

console.log(epochTime.epochToDateTime(1702838203, 'DD-MMM-YYYY | hh:mm:ss a', 'Asia/Riyadh')); //17-Dec-2023 | 09:36:43 pm

console.log(epochTime.epochToDateTime(1702838203, 'DD-MMM-YYYY | ZThh:mm:ss a')); //18-Dec-2023 | +05:30T12:06:43 am

console.log(epochTime.epochToDateTime(1702838203, 'DD-MMM-YYYY | ZZThh:mm:ss a')); //18-Dec-2023 | +0530T12:06:43 am

console.log(epochTime.epochToDateTime(1702838203, 'DD-MMMM-YYYY | HH:mm:ss')); //18-December-2023 | 00:06:43

console.log(epochTime.epochToDateTime(1702838203, 'DD-MMMM-YYYY | kk:mm:ss')); //18-December-2023 | 24:06:43

console.log(epochTime.currentTimestamp()); //1702841600

console.log(epochTime.addDayToCurrentEpoch(1)); //1702928000

console.log(epochTime.addDayToGivenEpoch(1, 1702926051)); //1703012451

console.log(epochTime.dateToEpoch("12/20/2023", 'Asia/Calcutta')); //1703010600

console.log(epochTime.currentDate("Asia/Riyadh")); //2023-12-17 19:33:20

console.log(epochTime.addDurationToCurrentDate(1, "Days")); //2023-12-19 01:03:20

console.log(epochTime.getDurationBetweenTwoDate("12-17-2023", "12-18-2023", "hour")); 
[
  '12 AM', '1 AM',  '2 AM',
  '3 AM',  '4 AM',  '5 AM',
  '6 AM',  '7 AM',  '8 AM',
  '9 AM',  '10 AM', '11 AM',
  '12 PM', '1 PM',  '2 PM',
  '3 PM',  '4 PM',  '5 PM',
  '6 PM',  '7 PM',  '8 PM',
  '9 PM',  '10 PM', '11 PM',
  '12 AM'
]

console.log(epochTime.getDurationBetweenTwoDate("12-17-2023", "12-20-2023", "date"));  
[ '2023-12-17', '2023-12-18', '2023-12-19', '2023-12-20' ]


console.log(epochTime.timeDifference(1703010600, 1702840661, "days")); // 1
```
