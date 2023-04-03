let section = document.getElementById('sec-clock'); //Definir a funcção principal

//teste ao componente do clock
const clock = (msg) => `
	<div style="background-color: white; color: black;">
		<p>${msg}</p>
	</div>
`;

function load(){//Quando a página for carregada (também serve pro looping para atualizar a hora)
	let data = new Date();
	hora = [data.getHours(), data.getMinutes()];
	//hora = [5, 00]; (essa linha é pra testar se o relógio funciona corretamente)
	if(hora[0] >= 0 && hora[0] < 6){//Se for maior/ou igual a 0 e menor que 6
		console.log(`São ${hora[0]}:${hora[1]}. Boa madrugada!`);
	}else if(hora[0] >= 6 && hora[0] <= 12){//Se for maior/ou igual a 8 e menor/ou igual a 12
		console.log(`São ${hora[0]}:${hora[1]}. Bom dia!`);
	}else if(hora[0] > 12 && hora[0] < 18){//Se for maior/ou igual a 12 e menor que 18
		console.log(`São ${hora[0]}:${hora[1]}. Boa tarde!`);
	}else if(hora[0] >= 18 && hora[0] <= 23){//Se for maior/ou igual a 18 e menor/ou igual a 23
		console.log(`São ${hora[0]}:${hora[1]}. Boa noite!`);
	}
	
	document.body.innerHTML = clock('testezinn');
}