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
	let bala1 = document.getElementById('bala1');
	let timer = setInterval(restarTiempo,1000)
	let pelotitalila = document.getElementsByClassName('enemigo');
	let movimientodelenemigo = setInterval(movimientoRandom, 1000);
	tecla.play();
	musicaparajueguito.play();
	puntaje.innerHTML = "Puntos: 0/15 --";
	cartel.style.display = "none";

	// disparo de bala1

	function posicionBala1() {
		bala1.style.display = "none";
		bala1.style.marginLeft = pelotitalila.style.marginLeft;
		bala1.style.marginTop = pelotitalila.style.marginTop;
	}
	function desplazamientoBala1(){
		bala1.style.marginLeft = 0 + "px";
	}

	

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
	let pase = false;

	function movimientoRandom (pelotita) {

		if(pase == false){
			let randnum1enemigo = Math.round(Math.random()*400);
			let randnum2enemigo = Math.round(Math.random()*400);
			// document.getElementById("bala1").style.display = "none";
			document.getElementById("enemigo").style.marginTop = randnum1enemigo + "px";
			document.getElementById("enemigo").style.marginLeft = randnum2enemigo + "px";
			document.getElementById("bala1").style.marginTop = (randnum1enemigo + 35) + "px";
			document.getElementById("bala1").style.marginLeft = (randnum2enemigo + 30) + "px";
			document.getElementById("bala1").style.visibility = "hidden";
			// document.getElementById("bala2").style.marginTop = randnum1enemigo + "px";
			// document.getElementById("bala2").style.marginLeft = randnum2enemigo + "px";
			// document.getElementById("bala3").style.marginTop = randnum1enemigo + "px";
			// document.getElementById("bala3").style.marginLeft = randnum2enemigo + "px";
			// document.getElementById("bala4").style.marginTop = randnum1enemigo + "px";
			// document.getElementById("bala4").style.marginLeft = randnum2enemigo + "px";
			pase = true;
		}else{
			// document.getElementById("bala1").style.display = "block";
			document.getElementById("bala1").style.visibility = "visible";
			movimientoBala1();
			pase = false;
		}
	}

	
	function movimientoBala1() {

		document.getElementById("bala1").style.marginLeft = "-100px";
	}


	// pruebas de las balas

	// let intervalbala = setInterval(movimientoBala, 1000)

	// function movimientoBala(){
	// 	if(bala1.style.marginLeft == "-100px") {
	// 		bala1.style.transition = "all 0s";
	// 		bala1.style.marginLeft = pelotitamarginleft;

	// 	}else{
	// 		bala1.style.transition = "all 1s";
	// 		bala1.style.marginLeft = "-100px";


	// 	}
	// }

	//Funcion que capture ambos enemigos, ver en el futuro de laburar con algo que simplifique codigo

	
	// pelotitasazules[0].addEventListener("mouseover", perdisteChoque);
	// pelotitasazules[1].addEventListener("mouseover", perdisteChoque);

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
	}


}
