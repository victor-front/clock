let section = document.getElementById('sec-clock'); //Definir a funcção principal

//teste ao componente do clock
const clock = (msg, hor, min, src, pal) => `
	<style>
		body{
			background-color: ${pal[0]};
		}
	</style>
	<section style="background-color: ${pal[1]}; outline: 5px solid ${pal[2]}" id="sec-clock">
		<div id="clock">
			<h1 id="clock-msg">${hor}:${min}</h1>
		</div>
		<img class="paisagem" src="${src}">
		<p id="mensagem">${msg}</p>
	</section>
	<footer id="madeBy">
		<p>Made by <strong><a href="https://victor-front.github.io/portfolio-victor/" rel="external" target="_blank">Victor Front</a></strong></p>
	</footer>
`

function load(){//Quando a página for carregada (também serve pro looping para atualizar a hora)
	let data = new Date();
	hora = [data.getHours(), data.getMinutes()];
	//hora = [0, 00]; //(essa linha é pra testar se o relógio funciona corretamente)
	if(hora[0] >= 0 && hora[0] < 6){//Se for maior/ou igual a 0 e menor que 6
		document.body.innerHTML = clock('Boa madrugada!', hora[0], hora[1], 'img/noite.jpg', ['#222222', '#555555', '#666666']);
	}else if(hora[0] >= 6 && hora[0] <= 12){//Se for maior/ou igual a 8 e menor/ou igual a 12
		document.body.innerHTML = clock('Bom dia!', hora[0], hora[1], 'img/manha.jpg', ['#802815', '#D47C6A', '#FFB9AA']);
	}else if(hora[0] > 12 && hora[0] < 18){//Se for maior/ou igual a 12 e menor que 18
		document.body.innerHTML = clock('Boa tarde!', hora[0], hora[1], 'img/tarde.jpg', ['#805915', '#D4AE6A', '#FFE0AA']);
	}else if(hora[0] >= 18 && hora[0] <= 23){//Se for maior/ou igual a 18 e menor/ou igual a 23
		document.body.innerHTML = clock('Boa noite!', hora[0], hora[1], 'img/noite.jpg', ['#580F4F', '#90488A', '#AD74A8']);
	}
	setTimeout(()=>{load()}, 1000);
}