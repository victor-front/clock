function load(){
	let data = new Date();
	let hora = [data.getHours(), data.getMinutes()];
	let msg = document.getElementById('clock-msg');
	let adecir = document.getElementById('adecir');
	msg.innerHTML = `Now is ${hora[0]}:${hora[1]}.`;
	
	if (hora[0] >= 00 && hora[0] < 12){
		adecir.innerHTML = `Good Morning!`;
	}else if (hora[0] > 12 && hora[0] < 18 ){
		adecir.innerHTML = `Good Afternoon!`;
	}else if (hora[0] >= 18 && hora[0] < 24){
		adecir.innerHTML = `Good Evening!`;
	}
}