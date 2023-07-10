function load(){
	let data = new Date();
	hora = [data.getHours(), data.getMinutes()];
	document.querySelector('.hora-exb').innerHTML = `${hora[0]}:${hora[1]}`;
}load();