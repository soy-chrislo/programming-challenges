/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


function revertString(string){
	let array = string.split("");
	let length = array.length;
	let reverseArray = [];
	array.forEach((letter) =>	{
		reverseArray[length - 1] = letter;
		length--;
	});

	let reverseString = "";
	reverseArray.forEach((letter) => {
		reverseString += letter;
	});

	
	return reverseString;
}

console.log(revertString("Hola mundo"));
