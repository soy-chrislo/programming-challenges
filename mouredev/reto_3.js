/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


for (let i = 1; i <= 1000; i++){
	if (i == 1) continue;
	//if (i % 2 == 0 && i != 2) continue;
	//if ((i % 3 == 0 && i != 3) || (i % 5 == 0 && i != 5) || (i % 7 == 0 && i != 7) || (i % 11 == 0 && i != 11) || (i % 13 == 0 && i != 13)) continue;
	
	let j = 2;
	let isPrime = true;
	while (j < 1000){
		if (i % j == 0 && i != j){
			isPrime = false;
			break;
		}
		j++;
	}
	if (isPrime){
		console.log(i)
	}
}
