'use strict'
const moment = require("moment");
require("moment-timezone");

module.exports = {
    epochToDateTime: (timestamp, format = 'd/M/Y h:m:s', timezone = "Asia/Calcutta", hrsFormat = "24") =>{
            timestamp = parseInt(timestamp);
            timestamp = (timestamp.toString().length > 10) ? timestamp : timestamp * 1000;
            return moment(timestamp).tz(timezone).format(format);
    },
    currentTimestamp: (timezone = "Asia/Calcutta") => {
        return moment().tz(timezone).unix();
    },
    
    addDayToCurrentEpoch: (day = 1, timezone = "Asia/Riyadh") => {
        return moment(new Date()).tz(timezone).add(day, 'day').unix();
    },
    addDayToGivenEpoch: (day = 1, epochTime = 1702839511, timezone = "Asia/Riyadh") => {
        return moment.unix(epochTime).tz(timezone).add(day, 'day').unix();
    },
    dateToEpoch: (date = "", timezone = "Asia/Calcutta") => {
        if(date !== ""){
            let dateString = moment(new Date(date)).tz(timezone).unix();
            return dateString;
        }
        return "";
    },
    dateToEpochTime: (date, GMT = "") => {
        if(GMT !== ""){
            return new Date(date+' '+GMT).getTime() / 1000;
        }else{
            return new Date(date).getTime() / 1000;
        }
    },
    currentDate: (timezone = "Asia/Calcutta", format = "Y-MM-DD HH:mm:ss") => {
        let date = moment().tz(timezone).utc();
        return date.format(format);
    },
    addDurationToCurrentDate: (addDuration = null, unitOfTime = "days", format = "Y-MM-DD HH:mm:ss", timezone = "Asia/Calcutta") => {
        let date = moment().tz(timezone);
        if(addDuration != null && unitOfTime !== null && unitOfTime !== ""){
            date = date.add(addDuration, unitOfTime);
        }
        return date.format(format);
    },
    getDurationBetweenTwoDate: (from, to, format = "date", timezone = "Asia/Calcutta") =>{
    
        var from  = new Date(from),
            to    = new Date(to),
            dates = [];
    
        // from.setDate(day);
        // to.setDate(day); 
        if(format === "hour"){
            while(from <= to){   
                // console.log(moment().tz('Asia/Riyadh').hours);    
                // let newDate = new Date(from);
                // console.log(newDate.getTimezoneOffset(), newDate.getUTCHours())
                // var hours = newDate.getHours();
                // var minutes = newDate.getMinutes();
                // var seconds = newDate.getSeconds();
                var newDate = moment(from).tz(timezone);
                // console.log(hours)
                var hours = newDate.hours();
                let strTime = '';
                // if(hrsFormat == "12"){
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                // let minute = (minutes < 10 ? '0'+minutes : minutes);
                strTime = hours + ' ' + ampm;
                dates.push(strTime); 
                from.setHours( from.getHours() + 1 );
            }
        }
        if(format === "date"){
            while(from <= to){        
                let newDate = moment(from).tz(timezone);
                // console.log(moment(from).tz('Asia/Riyadh').dates())
                let month = module.exports.pad(newDate.month() + 1, 2);
                let date = module.exports.pad(newDate.date(), 2);
                dates.push(newDate.year() + '-'+ month + '-' + date);       
                
                from.setDate( newDate.date() + 1 );
            }
        }
        if(format === "month"){
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            while(from <= to){        
                let newDate = moment(from).tz(timezone);
                dates.push(months_arr[newDate.month()] + ', ' +newDate.year());       
                
                from.setMonth( newDate.month() + 1 );
            }
        }
    
        return dates;
    
    },
    timeDifference(fromtimeStamp, toTimeStamp, diff = "days") {
        var difference = fromtimeStamp * 1000 - toTimeStamp * 1000;
    
        var daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24
    
        var hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60
    
        var minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60
    
        var secondsDifference = Math.floor(difference/1000);
    
        // console.log('difference = ' + 
        //   daysDifference + ' day/s ' + 
        //   hoursDifference + ' hour/s ' + 
        //   minutesDifference + ' minute/s ' + 
        //   secondsDifference + ' second/s ');
        if(diff === "hour"){
            return hoursDifference;
        }else if(diff === "second"){
            return secondsDifference;
        }else if(diff === "minute"){
            return minutesDifference;
        }else if(diff === "days"){
            return daysDifference;
        }
    },
    pad:(n, width, z) => {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    },
}