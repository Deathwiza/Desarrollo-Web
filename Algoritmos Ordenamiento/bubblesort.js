function bubble(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }
document.write('El arreglo a ordenar es: 1,9,2,3,7,6,4,5,5');
document.write('</br>El arreglo ordenado queda: '+bubble([1,9,2,3,7,6,4,5,5]));