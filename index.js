let paisa = document.createElement('img');
paisa.setAttribute('class', 'paisagem');
let msg = document.getElementById('clock-msg');
let can = true;

function load(){
	if (can == true){
		let data = new Date();
		let hora = [data.getHours(), data.getMinutes()];
		let adecir = document.getElementById('adecir');
		let clock = document.getElementById('clock');
		msg.innerHTML = `Now is ${hora[0]}:${hora[1]}.`;
		
		if (hora[0] == 'majin' || hora[1] == 'majin'){
			easterEgg();
		}
		
		if (hora[0] >= 00 && hora[0] < 12){
			document.body.style.backgroundColor = '#6F8FA2';
			paisa.src = 'img/manha.jpg';
			document.getElementById('sec-clock').style.outlineColor = '#20204D';
			document.getElementById('sec-clock').style.color = '#20204D';
			document.getElementById('sec-clock').style.backgroundColor = '#B8D0EE';
			msg.style.color = '#537B9F';
			msg.style.textShadow = '2px 2px 1px #20204D';
			clock.appendChild(paisa);
			adecir.innerHTML = `Good Morning! (◠▽◠)`;
		}else if (hora[0] > 11 && hora[0] < 18 ){
			document.body.style.backgroundColor = '#AA8239';
			paisa.src = 'img/tarde.jpg';
			document.getElementById('sec-clock').style.outlineColor = '#551800';
			document.getElementById('sec-clock').style.color = '#551800';
			document.getElementById('sec-clock').style.backgroundColor = '#FFD2C0';
			msg.style.color = '#C75F39';
			msg.style.textShadow = '2px 2px 1px #551800';
			clock.appendChild(paisa);
			adecir.innerHTML = `Good Afternoon! (o･ω･o)`;
		}else if (hora[0] >= 18 && hora[0] < 24){
			document.body.style.backgroundColor = '#68505E';
			paisa.src = 'img/noite.jpg';
			document.getElementById('sec-clock').style.outlineColor = '#3D163D';
			document.getElementById('sec-clock').style.color = '#3D163D';
			document.getElementById('sec-clock').style.backgroundColor = '#EEB3EE';
			msg.style.color = '#775277';
			msg.style.textShadow = '2px 2px 1px #3D163D';
			clock.appendChild(paisa);
			adecir.innerHTML = `Good Evening! (￣▽￣)`;
		};
		setTimeout(()=>{
			load();
		}, 1 * 1000);
	};
};

function easterEgg(){
	can = false;
	document.getElementById('clock-msg').innerHTML = `Now is Majin.`
	adecir.innerHTML = '低私は狙わない、低私は避ける。';
	document.body.style.backgroundImage = "url('img/sonic.png')";
	document.body.style.backgroundSize = '80px';
	document.body.classList.add('loop');
	document.body.style.backgroundColor = 'black';
	document.getElementById('sec-clock').style.outlineColor = '#141414';
	document.getElementById('sec-clock').style.backgroundColor = 'white';
	document.getElementById('sec-clock').style.color = '#141414';
	msg.style.color = '#141414';
	msg.style.textShadow = '0px 0px 0px black';
	document.getElementById('sec-clock').style.marginTop = '200px';
	document.getElementById('madeBy').innerHTML = '<p>مصنوع بواسطة <strong><a href="https://github.com/victor-4guiar" rel="external" target="_blank">صديقك</a></strong></p>';
	paisa.remove();
}