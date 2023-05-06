/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(base, variaton){
	let baseArray = Array.from(base.split(""));
	let variatonArray = Array.from(variaton.split(""));

	if(baseArray === variatonArray) return true;
	if(baseArray == null || variatonArray == null) return false;
	if(baseArray.length !== variatonArray.length) return false;

	return baseArray.every((element, index) => {
		if (variatonArray.includes(element)) {
			return true;
		}
		return false;
	});
}

console.log(isAnagram("caso", "saco"));
