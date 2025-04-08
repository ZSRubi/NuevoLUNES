//const showMessage=(message)=>{
    //return message;
//}
//console.log(showMessage('hola coo etas'))
//console.log("segundo ")

//var a=8
//if(a%2==0){
   // console.log("es un numero par");
//}else{
  //  console.log("es un numero impar");
//}

function busquedalineal(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i;
        }
    }
    return -1;
}

const arreglo = [10, 2, 3, 8, 4, 9, 7];
const elementobuscado = 8;
const indice = busquedalineal(arreglo, elementobuscado);

console.log(`El elemento ${elementobuscado} se encuentra en el índice ${indice}`);
