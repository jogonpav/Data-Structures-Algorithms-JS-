/*
    El algoritmo de Fisher-Yates es un método para generar 
    una permutación aleatoria de un conjunto finito
*/

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Paso 1: Generar un índice aleatorio entre 0 e i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Paso 2: Intercambiar los elementos en las posiciones i y j
      // Desestructuración del array: 
      // [a, b] = [10, 20];
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Ejemplo de uso:
  const myArray = [1, 2, 3, 4, 5];
  console.log("Array original:", myArray);
  
  const shuffledArray = shuffleArray(myArray);
  console.log("Array permutado:", shuffledArray);