let yafue = false;

function load(){
	let data = new Date();
	let hora = [data.getHours(), data.getMinutes()];
	let msg = document.getElementById('clock-msg');
	let adecir = document.getElementById('adecir');
	let clock = document.getElementById('clock');
	let paisa = document.createElement('img');
	paisa.setAttribute('class', 'paisagem');
	msg.innerHTML = `Now is ${hora[0]}:${hora[1]}.`;
	
	if (yafue == false){
		if (hora[0] >= 00 && hora[0] < 12){
			document.body.style.backgroundColor = '#6F8FA2';
			paisa.src = 'img/manha.jpg';
			clock.appendChild(paisa);
			adecir.innerHTML = `Good Morning! (◠▽◠)`;
		}else if (hora[0] > 12 && hora[0] < 18 ){
			document.body.style.backgroundColor = '#AA8239';
			paisa.src = 'img/tarde.jpg';
			clock.appendChild(paisa);
			adecir.innerHTML = `Good Afternoon! (o･ω･o)`;
		}else if (hora[0] >= 18 && hora[0] < 24){
			document.body.style.backgroundColor = '#68505E';
			paisa.src = 'img/noite.jpg';
			clock.appendChild(paisa);
			adecir.innerHTML = `Good Evening! ＼(￣▽￣)／`;
		};
		yafue = true;
	};
	
	setTimeout(()=>{
		load();
	}, 1 * 1000);
};