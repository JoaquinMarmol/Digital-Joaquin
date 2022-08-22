const binarySearch = (list, item) => {
	// punto mas bajo
	let low = 0;
	// punto mas alto
	let high = list.length - 1;

	// mientras que low sea menor o igual que high
	while (low <= high) {
		// encontramos la mitad entre low y high
		const mid = Math.floor((low + high) / 2);

		// adivinar si el valor es el de la mitad
		const guess = list[mid];
		// si es asi, retornar esa posiciona
		if (guess === item) {
			return mid;
		}
		// si lo propuesto es mayor que lo
		// que estamos buscando
		if (guess > item) {
			//
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null; // si no encontramos nada
};

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let buscar = 11;
console.log(binarySearch(list, buscar));