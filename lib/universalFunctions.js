'use strict';

const time = (checkInDate, checkOutDate) => {
	let workingHours = {};
	var today = new Date(checkOutDate);
	console.log('checkInDate', checkInDate, 'checkInDate', checkOutDate);
	var checkInDate = new Date(checkInDate);
	var diffMs = today - checkInDate; // milliseconds between now & Christmas
	workingHours.hours = Math.floor((diffMs % 86400000) / 3600000); // hours
	workingHours.minutes = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
	console.log('workingHours', workingHours);
	return workingHours;
};

const totalMonthWorkingHours = (attandances) => {
	let totalWorkingHours = {
		hours: 0,
		minutes: 0
	};
	attandances.forEach((attandance) => {
		totalWorkingHours.hours = totalWorkingHours.hours + attandance.workingHours.hours;
		totalWorkingHours.minutes = totalWorkingHours.minutes + attandance.workingHours.minutes;
		if (totalWorkingHours.minutes >= 60) {
			totalWorkingHours.hours = totalWorkingHours.hours + 1;
			totalWorkingHours.minutes = totalWorkingHours.minutes - 60;
		}
	});
	return totalWorkingHours;
};

const distance = (lat1, lon1, lat2, lon2, unit) => {
	if (lat1 == lat2 && lon1 == lon2) {
		return 0;
	} else {
		var radlat1 = (Math.PI * lat1) / 180;
		var radlat2 = (Math.PI * lat2) / 180;
		var theta = lon1 - lon2;
		var radtheta = (Math.PI * theta) / 180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = (dist * 180) / Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit == 'K') {
			dist = dist * 1.609344;
		}
		if (unit == 'N') {
			dist = dist * 0.8684;
		}
		return dist;
	}
};
module.exports = {
	time,
	totalMonthWorkingHours,
	distance
};
