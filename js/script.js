'use strict'

addEventListener("keypress", iniciarJuego);

const sonidorojito = new Audio("sonidorojito.wav");
const sonidoperdiste = new Audio("sonidoperdiste.wav");
const sonidoganaste = new Audio("ganasteaudio.wav");
const tecla = new Audio("tecla.wav");
const musicaparajueguito = new Audio("musicaparajueguito.wav");
const findejuegoaudio = new Audio("findejuego.wav");


function iniciarJuego() {
	// Variables del juego y clearinterval
	let puntos = 0;
	let tiempo = 20;
	let contadordetiempo = document.getElementById("tiempo");
	let puntaje = document.getElementById('puntos');
	let findejuego = false;
	let textotiempo = document.getElementById("tiempo");
	let cartel = document.getElementById("cartel");
	let jugadorrojito = document.getElementById('player');
	let movimientodelenemigo = setInterval(movimientoRandom,1000);
	let timer = setInterval(restarTiempo,1000)
	tecla.play();
	musicaparajueguito.play();

	cartel.style.display = "none";
	puntaje.innerHTML = "Puntos: 0/15 --";

	//tiempo
	contadordetiempo.innerHTML = "Tiempo restante: " + tiempo + " s";
	restarTiempo();
	function restarTiempo() {
		textotiempo.innerHTML = "Tiempo restante: " + tiempo + " s";
		if(tiempo < 1){
			musicaparajueguito.pause();
			findejuegoaudio.play();
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
		sonidorojito.play();
		puntos++;
		puntaje.innerHTML = "Puntos: " + puntos + "/15 --";
		let randnum1 = Math.round(Math.random()*440);
		let randnum2 = Math.round(Math.random()*440);
		document.getElementById('player').style.marginTop = randnum1 + "px";
		document.getElementById('player').style.marginLeft = randnum2 + "px";
		if(puntos >= 15) {
			musicaparajueguito.pause();
			sonidoganaste.play();
			clearInterval(timer);
			clearInterval(movimientodelenemigo);
			findejuego = true;
			textotiempo.innerHTML = "Presiona una tecla para jugar";
			puntaje.innerHTML = "Puntos: 15/15 --";
			siguienteNivel();
			cartel.innerHTML = "<b>GANASTE!</b>"
			cartel.style.color = "green";
			cartel.style.display = "block";
		
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
		sonidoperdiste.play();
		musicaparajueguito.pause();
		clearInterval(movimientodelenemigo);
		clearInterval(timer);
		findejuego = true;
		textotiempo.innerHTML = "Presiona una tecla para jugar";
		puntos = 0;
		cartel.innerHTML = "<b>PERDISTE!</b>"
		cartel.style.color = "red";
		cartel.style.display = "block";
	});

	if (findejuego == true) {
		clearInterval(movimientodelenemigo);
		clearInterval(timer);
	}


	//siguiente nivel}

	function siguienteNivel() {
		let botonsignivel = document.getElementById("siguientenivel");
		botonsignivel.style.display = "block";
		botonsignivel.addEventListener("mouseover", function(){
			botonsignivel.style.background = "green";
		})
		botonsignivel.addEventListener("mouseout", function(){
			botonsignivel.style.background = "red";
		})
		botonsignivel.addEventListener("click", function(){
		     window.location.href = "nivel_2/nivel2.html";
		})
		
	}
}
