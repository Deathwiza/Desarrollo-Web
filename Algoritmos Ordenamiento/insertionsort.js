function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

document.write('El arreglo a ordenar es: 1,12,14,36,25,21,20,36,50,9,8,6,3');
document.write('</br>El arreglo ordenado queda: '+insertionSort([1,12,14,36,25,21,20,36,50,9,8,6,3]));