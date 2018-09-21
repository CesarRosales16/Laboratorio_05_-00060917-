var palindromo = function (palabra) {
    let palabraReverse = "";
    for(var i=0;i<palabra.length;i++) {
        palabraReverse = palabra[i] + palabraReverse;
    }
    if(palabra==palabraReverse) {
        return true;
    }
    return false;
}