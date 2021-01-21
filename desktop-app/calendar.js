console.log("----------------------Made by Octagonal T---------------------------")
const newDate = new Date()
let browsingMonth = newDate.getMonth()+1
let browsingYear = newDate.getFullYear()
document.getElementById('browsingMonth').innerHTML = replaceMonth[newDate.getMonth()]
document.getElementById('browsingYear').innerHTML = newDate.getFullYear()
async function calculateDate(year, month){
	const todayDate = new Date(`${year}-${month}-1`).getDay()
	switch(todayDate){
		case 6:
			var placeholder6 = document.getElementById("placeholder6").style.display = 'none';
			break;
		case 5:
			var placeholder6 = document.getElementById("placeholder6").style.display = 'none';
			var placeholder5 = document.getElementById("placeholder5").style.display = 'none';
			break;
		case 4:
			var placeholder6 = document.getElementById("placeholder6").style.display = 'none';
			var placeholder5 = document.getElementById("placeholder5").style.display = 'none';
			var placeholder4 = document.getElementById("placeholder4").style.display = 'none';
			break;
		case 3:
			var placeholder6 = document.getElementById("placeholder6").style.display = 'none';
			var placeholder5 = document.getElementById("placeholder5").style.display = 'none';
			var placeholder4 = document.getElementById("placeholder4").style.display = 'none';
			var placeholder3 = document.getElementById("placeholder3").style.display = 'none';
		case 2:
			var placeholder6 = document.getElementById("placeholder6").style.display = 'none';
			var placeholder5 = document.getElementById("placeholder5").style.display = 'none';
			var placeholder4 = document.getElementById("placeholder4").style.display = 'none';
			var placeholder3 = document.getElementById("placeholder3").style.display = 'none';
			var placeholder2 = document.getElementById("placeholder2").style.display = 'none';
			break;
		case 1:
			var placeholder6 = document.getElementById("placeholder6").style.display = 'none';
			var placeholder5 = document.getElementById("placeholder5").style.display = 'none';
			var placeholder4 = document.getElementById("placeholder4").style.display = 'none';
			var placeholder3 = document.getElementById("placeholder3").style.display = 'none';
			var placeholder2 = document.getElementById("placeholder2").style.display = 'none';
			var placeholder1 = document.getElementById("placeholder1").style.display = 'none';
			break;
		default:
			var thingy = "poop";

	}

	const daysInMonth = new Date(year, month, 0).getDate();
	if(daysInMonth == 28){
		document.getElementById('29').style.display = 'none'
		document.getElementById('30').style.display = 'none'
		document.getElementById('31').style.display = 'none'
	}else if(daysInMonth == 29){
		document.getElementById('30').style.display = 'none'
		document.getElementById('31').style.display = 'none'
	}else if(daysInMonth == 30){
		document.getElementById('31').style.display = 'none'
	}
	if(document.getElementById('currentMonth').innerHTML === document.getElementById('browsingMonth').innerHTML && document.getElementById('currentYear').innerHTML === document.getElementById('browsingYear').innerHTML){
		const todayDay = newDate.getDate()
		const renaming = document.getElementById(todayDay).innerHTML = `<span class="active">${todayDay}</span>`
	}
}

calculateDate(newDate.getFullYear(), newDate.getMonth()+1)
const todayDay = newDate.getDate()
const renaming = document.getElementById(todayDay).innerHTML = `<span class="active">${todayDay}</span>`
setInterval(()=>{
	if(document.getElementById('currentMonth').innerHTML === document.getElementById('browsingMonth').innerHTML && document.getElementById('currentYear').innerHTML === document.getElementById('browsingYear').innerHTML){
		const todayDay = newDate.getDate()
		const renaming = document.getElementById(todayDay).innerHTML = `<span class="active">${todayDay}</span>`
	}
}, 1000)

async function prev(){
	document.getElementById('29').style.display = 'inline-block'
	document.getElementById('30').style.display = 'inline-block'
	document.getElementById('31').style.display = 'inline-block'
	document.getElementById('placeholder1').style.display = 'inline-block'
	document.getElementById('placeholder2').style.display = 'inline-block'
	document.getElementById('placeholder3').style.display = 'inline-block'
	document.getElementById('placeholder4').style.display = 'inline-block'
	document.getElementById('placeholder5').style.display = 'inline-block'
	document.getElementById('placeholder6').style.display = 'inline-block'
	const todayDay = newDate.getDate()
	const renaming = document.getElementById(todayDay).innerHTML = `${todayDay}`
	if(browsingMonth == 1){
		browsingMonth = 12
		browsingYear--
		document.getElementById('browsingMonth').innerHTML = replaceMonth[browsingMonth-1]
		document.getElementById('browsingYear').innerHTML = browsingYear
		await calculateDate(browsingYear, browsingMonth)
	}else{
		browsingMonth--
		document.getElementById('browsingMonth').innerHTML = replaceMonth[browsingMonth-1]
		document.getElementById('browsingYear').innerHTML = browsingYear
		await calculateDate(browsingYear, browsingMonth)
	}
}
async function next(){
	document.getElementById('29').style.display = 'inline-block'
	document.getElementById('30').style.display = 'inline-block'
	document.getElementById('31').style.display = 'inline-block'
	document.getElementById('placeholder1').style.display = 'inline-block'
	document.getElementById('placeholder2').style.display = 'inline-block'
	document.getElementById('placeholder3').style.display = 'inline-block'
	document.getElementById('placeholder4').style.display = 'inline-block'
	document.getElementById('placeholder5').style.display = 'inline-block'
	document.getElementById('placeholder6').style.display = 'inline-block'
	const todayDay = newDate.getDate()
	const renaming = document.getElementById(todayDay).innerHTML = `${todayDay}`
	if(browsingMonth == 12){
		browsingMonth = 1
		browsingYear++
		document.getElementById('browsingMonth').innerHTML = replaceMonth[browsingMonth-1]
		document.getElementById('browsingYear').innerHTML = browsingYear
		await calculateDate(browsingYear, browsingMonth)
	}else{
		browsingMonth++
		document.getElementById('browsingMonth').innerHTML = replaceMonth[browsingMonth-1]
		document.getElementById('browsingYear').innerHTML = browsingYear
		await calculateDate(browsingYear, browsingMonth)
	}
	document.getElementById('browsingMonth').innerHTML = replaceMonth[browsingMonth-1]
	document.getElementById('browsingYear').innerHTML = browsingYear
	$('.calDates').animate({left: ''}, 500)
}
