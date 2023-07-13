//Caminho das imagens/icones do relógio.
const imgEstrela = 'data/img/estrela.png';
const imgSolMet = 'data/img/sol-me.png';
const imgSol = 'data/img/sol.png';
const imgLua = 'data/img/lua.png';

function load(){//Função que executa microfunções fundamentais para o funcionamento do Relógio.
	let data = new Date();
	hora = [data.getHours(), data.getMinutes()];
	document.querySelector('.hora-exb').innerHTML = `${hora[0]}:${hora[1]}`;
	setTimeout(()=>{//Delay que depois de 100 milissegundos, executa o que está dentro do bloco. Isso atualiza o relógio, atualizando a hora e os minutos, também o desenho.
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
}load();//Chamar a função load();