var annioBisiesto = function (annio) {
    if(annio%4==0 && (!(annio%100==0) || annio%400==0)) {
        return true;
    }
    return false;
}