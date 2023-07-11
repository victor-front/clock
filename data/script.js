const imgEstrela = 'data/img/estrela.png';
const imgSolMet = 'data/img/sol-me.png';
const imgSol = 'data/img/sol.png';
const imgLua = 'data/img/lua.png';

function load(){
	let data = new Date();
	hora = [data.getHours(), data.getMinutes()];
	document.querySelector('.hora-exb').innerHTML = `${hora[0]}:${hora[1]}`;
	setTimeout(()=>{
		if(hora[0] >= 0 && hora[0] < 6){
			document.querySelector('.icone').style.backgroundImage = `url("${imgEstrela}")`;
		}else if(hora[0] >= 6 && hora[0] < 12){
			document.querySelector('.icone').style.backgroundImage = `url("${imgSolMet}")`;
			document.querySelector('.icone').style.backgroundSize = '190px';
			document.querySelector('.icone').style.backgroundPosition = 'center 25px';
		}else if(hora[0] >= 12 && hora[0] < 16){
			document.querySelector('.icone').style.backgroundImage = `url("${imgSol}")`;
		}else if(hora[0] >= 16 && hora[0] < 18){
			document.querySelector('.icone').style.backgroundImage = `url("${imgSolMet}")`;
			document.querySelector('.icone').style.backgroundSize = '190px';
			document.querySelector('.icone').style.backgroundPosition = 'center 25px';			
		}else if(hora[0] >= 18 && hora[0] <= 23){
			document.querySelector('.icone').style.backgroundImage = `url("${imgLua}")`;
		}
		load();
	}, 100);
}load();