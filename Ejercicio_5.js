var areaCirculo = function (radio) {
    if(radio<=0) {
        return -1;
    }
    else {
        return Math.PI*Math.pow(radio,2);
    }
}