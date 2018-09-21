var decimalBinario = function(num) {
    let binario = "";
    while(num>=2) {
        binario = (num%2).toString() + binario;
        num = Math.trunc(num/2);
    }
    binario = num.toString() + binario;
    return binario;
}