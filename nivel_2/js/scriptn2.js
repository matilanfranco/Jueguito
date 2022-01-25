'use strict'
addEventListener("keypress", iniciarJuego);

const tecla = new Audio("tecla.wav");
const sonidoganaste = new Audio("ganasteaudio.wav");
const sonidoperdiste = new Audio("sonidoperdiste.wav");
const sonidorojito = new Audio("sonidorojito.wav");
const musicaparajueguito = new Audio("musicaparajueguito.wav");
const findejuegoaudio = new Audio("findejuego.wav");

function iniciarJuego() {
	// Variables del juego y clearinterval
	let puntos = 0;
	let tiempo = 20;
	let contadordetiempo = document.getElementById("tiempo");
	let cartel = document.getElementById("cartel");
	let puntaje = document.getElementById('puntos');
	let findejuego = false;
	let textotiempo = document.getElementById("tiempo");
	let jugadorrojito = document.getElementById('player');
	let movimientodelenemigo = setInterval(movimientoDelosenemigos, 1000);
	let timer = setInterval(restarTiempo,1000)
	tecla.play();
	musicaparajueguito.play();
	puntaje.innerHTML = "Puntos: 0/15 --";
	cartel.style.display = "none";

	//tiempo

	contadordetiempo.innerHTML = "Tiempo restante: " + tiempo + " s";
	restarTiempo();
	function restarTiempo() {
		textotiempo.innerHTML = "Tiempo restante: " + tiempo + " s";
		if(tiempo < 1){
			musicaparajueguito.pause();
			findejuegoaudio.play();
			textotiempo.innerHTML = "Presiona una tecla para jugar";
			limpiezaInterval();
			findejuego = true;
			puntos = 0;
			cartel.innerHTML = "<b>PERDISTE!</b>"
			cartel.style.color = "red";
			cartel.style.display = "block";
		}else{
			tiempo--;
		}
		if (findejuego == true) {
			limpiezaInterval();
		}
	
	}

	// movimiento automatizado de enemigo2

	let enemigo2datos = document.getElementById("enemigo2");
	let movenemigo2 = setInterval(mov1,1000);
		function mov1(){
			if(enemigo2datos.style.height == "30px"){
			enemigo2datos.style.height = 90 + "px";
			enemigo2datos.style.width = 30 + "px";
		}else{
			enemigo2datos.style.height = 30 + "px";
			enemigo2datos.style.width = 90 + "px";
		}
	}

	// 	}
		
	// };
	// function mov1(){setInterval(mov2,1500)}
	// enemigo2datos.style.height 
	// console.log();
//	setInterval(movEnemigo2, 1000);
//	function movEnemigo2(){
//		if
//	}
	// Jugador rojito

	jugadorrojito.addEventListener("click", sumarPuntos);
	function sumarPuntos() {
		sonidorojito.play();
		puntos++;
		puntaje.innerHTML = "Puntos: " + puntos + "/15 --";
		let randnum1 = Math.round(Math.random()*400);
		let randnum2 = Math.round(Math.random()*400);
		document.getElementById('player').style.marginTop = randnum1 + "px";
		document.getElementById('player').style.marginLeft = randnum2 + "px";
		if(puntos >= 15) {
			musicaparajueguito.pause();
			sonidoganaste.play();
			limpiezaInterval();
			findejuego = true;
			textotiempo.innerHTML = "Presiona una tecla para jugar";
			puntos = 0;
			cartel.innerHTML = "<b>GANASTE!</b>"
			cartel.style.color = "green";
			cartel.style.display = "block";
		}

	}

	// funcion para capturar a los dos enemigos en Setinterval
	function movimientoDelosenemigos(){
		movimientoRandom("enemigo");
		movimientoRandom("enemigo2");
	}
	function movimientoRandom (pelotita) {
		let randnum1enemigo = Math.round(Math.random()*440);
		let randnum2enemigo = Math.round(Math.random()*440);
		document.getElementById(pelotita).style.marginTop = randnum1enemigo + "px";
		document.getElementById(pelotita).style.marginLeft = randnum2enemigo + "px";
	}

	//Funcion que capture ambos enemigos, ver en el futuro de laburar con algo que simplifique codigo

	let pelotitasazules = document.getElementsByClassName('enemigo');
	pelotitasazules[0].addEventListener("mouseover", perdisteChoque);
	pelotitasazules[1].addEventListener("mouseover", perdisteChoque);

	function perdisteChoque(){
		sonidoperdiste.play();
		musicaparajueguito.pause();
		limpiezaInterval();
		findejuego = true;
		textotiempo.innerHTML = "Presiona una tecla para jugar";
		puntos = 0;
		cartel.innerHTML = "<b>PERDISTE!</b>"
		cartel.style.color = "red";
		cartel.style.display = "block";
	};

	if (findejuego == true) {
		clearInterval(movimientodelenemigo);
		clearInterval(timer);
	}

	function limpiezaInterval() {
		clearInterval(movimientodelenemigo);
		clearInterval(timer);
		clearInterval(movenemigo2);
	}


}
