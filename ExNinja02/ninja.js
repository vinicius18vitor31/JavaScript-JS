function numeros(a, b, c){
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    } else {
    if (a !== undefined && b !== undefined && c=== undefined) {
        return a + b;
    } else{
        if (a !== undefined && b !== undefined && c !== undefined) {
            return (a + b) / c;
        } else{
            if (a === undefined && b === undefined && c === undefined) {
                return 'false';
            } else{
                return numeros = null;
            }
        }
    } 
    }
}

console.log(numeros(5, 9, 8, 6))