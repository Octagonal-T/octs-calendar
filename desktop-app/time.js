const timeElement = document.getElementById('currentTime')
const monthElement = document.getElementById('currentMonth')
const yearElement = document.getElementById('currentYear')
const replaceMonth={
	0: "January",
	1: "Febuary",
	2: "March",
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December'
}
const replaceHour ={
	13: 1,
	14: 2,
	15: 3,
	16: 4,
	17: 5,
	18: 6,
	19: 7,
	20: 8,
	21: 9,
	22: 10,
	23: 11,
	24: 12,
}
setInterval(()=>{
	const newDate = new Date()
	const hour24 = newDate.getHours()
	let hour;
	if(replaceHour[hour24]){
		hour = replaceHour[hour24]
	}else{
		hour = hour24
	}
	const time = `${hour}:${newDate.getMinutes().toString().length == 1 ? `0${newDate.getMinutes()}` : newDate.getMinutes()}:${newDate.getSeconds().toString().length == 1 ? `0${newDate.getSeconds()}` : newDate.getSeconds()} ${replaceHour[newDate.getHours()] && newDate.getHours() != 24 ? "PM" : "AM"}`
	const month = replaceMonth[newDate.getMonth()]
	const year = newDate.getFullYear()
	timeElement.innerHTML = time
	monthElement.innerHTML = month
	yearElement.innerHTML = year
}, 1000)
