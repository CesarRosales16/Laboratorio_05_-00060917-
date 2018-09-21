var fibonacci = function (numero) {
    var num1 = 0;
    var num2 = 1;    
    var num3;
    var serie = "";
    if (numero == 1){
        serie+=num1.toString()+" ";
    }
    if (numero == 2){
        serie+=num1.toString()+ " ";
        serie+=num2.toString() + " ";
        
    }
    if (numero > 2){
        serie+=num1.toString()+ " ";
        serie+=num2.toString() + " ";
    }
    for(let i = 3; i <= numero; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;        
        serie+=num3.toString()+ " ";
    }
    console.log(serie);
}