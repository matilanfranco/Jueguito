'use strict'
addEventListener("keypress", iniciarJuego);

function iniciarJuego() {
	// Variables del juego y clearinterval
	let puntos = 0;
	let tiempo = 20;
	let contadordetiempo = document.getElementById("tiempo");
	let puntaje = document.getElementById('puntos');
	let findejuego = false;
	let textotiempo = document.getElementById("tiempo");
	let jugadorrojito = document.getElementById('player');
	let movimientodelenemigo = setInterval(movimientoRandom,1000);
	let timer = setInterval(restarTiempo,1000)


	puntaje.innerHTML = "Puntos: 0/15 --";

	//tiempo

	contadordetiempo.innerHTML = "Tiempo restante: " + tiempo + " s";
	restarTiempo();
	function restarTiempo() {
		textotiempo.innerHTML = "Tiempo restante: " + tiempo + " s";
		if(tiempo < 1){
			alert("Perdiste!");
			textotiempo.innerHTML = "Presiona una tecla para jugar";
			clearInterval(timer);
			clearInterval(movimientodelenemigo);
			findejuego = true;
			puntos = 0;
		}else{
			tiempo--;
		}
		if (findejuego == true) {
			clearInterval(timer);
		}
	
	}
	// Jugador rojito

	jugadorrojito.addEventListener("click", sumarPuntos);
	function sumarPuntos() {
		puntos++;
		puntaje.innerHTML = "Puntos: " + puntos + "/15 --";
		let randnum1 = Math.round(Math.random()*440);
		let randnum2 = Math.round(Math.random()*440);
		document.getElementById('player').style.marginTop = randnum1 + "px";
		document.getElementById('player').style.marginLeft = randnum2 + "px";
		if(puntos >= 15) {
			alert("Ganaste!");
			clearInterval(timer);
			clearInterval(movimientodelenemigo);
			findejuego = true;
			textotiempo.innerHTML = "Presiona una tecla para jugar";
			puntos = 0;
		}

	}

	// El enemigo

	function movimientoRandom () {
		let randnum1enemigo = Math.round(Math.random()*440);
		let randnum2enemigo = Math.round(Math.random()*440);
		document.getElementById('enemigo').style.marginTop = randnum1enemigo + "px";
		document.getElementById('enemigo').style.marginLeft = randnum2enemigo + "px";
	}

	document.getElementById('enemigo').addEventListener("mouseover", function(){
		alert("Te morfaste el enemigo, PERDISTE");
		clearInterval(movimientodelenemigo);
		clearInterval(timer);
		findejuego = true;
		textotiempo.innerHTML = "Presiona una tecla para jugar";
		puntos = 0;
	});

	if (findejuego == true) {
		clearInterval(movimientodelenemigo);
		clearInterval(timer);
	}


}




