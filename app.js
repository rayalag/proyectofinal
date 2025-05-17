// Juego: Adivina el número 🎯
console.log("👋 ¡Bienvenido al juego ~Adivina el número~!");

// Pedimos el nombre del jugador
let nombre = prompt("¿Cómo te llamas?");
console.log("Nombre del jugador: " + nombre);

// Generamos un número aleatorio del 1 al 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Creamos una variable para contar los intentos
let intentos = 1;

// Creamos una variable para saber si ganó
let adivino = false;

// Mientras tenga 3 intentos y no haya ganado
while (intentos <= 3 && adivino == false) {
  
  // Pedimos un número
  let numeroUsuario = prompt("Intento " + intentos + ": Adivina el número del 1 al 10");

  // Convertimos a número
  numeroUsuario = Number(numeroUsuario);

  // Verificamos si es válido
  if (numeroUsuario < 1 || numeroUsuario > 10 || isNaN(numeroUsuario)) {
    alert("❗ Solo puedes ingresar números del 1 al 10");
    continue; // No cuenta como intento válido
  }

  // Comparamos con el número secreto
  if (numeroUsuario === numeroSecreto) {
    alert("🎉 ¡Felicidades, " + nombre + "! Adivinaste el número.");
    adivino = true;
  } else if (numeroUsuario < numeroSecreto) {
    alert("📉 Muy bajo");
  } else {
    alert("📈 Muy alto");
  }

  // Sumamos intento si aún no ganó
  if (!adivino) {
    intentos = intentos + 1;
  }
}

// Si no adivinó después de 3 intentos
if (adivino == false) {
  alert("😢 Lo siento " + nombre + ", el número correcto era " + numeroSecreto);
}

console.log("🏁 Fin del juego");
