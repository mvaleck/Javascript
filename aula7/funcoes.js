function parimp(n) {
    if (n%2==0) {
        return 'Par'     
    } else { 
        return 'Ímpar'    
    }
    
}

let res = parimp (12)
console.log(res)

console.log(parimp(13)) // direto

function soma(n1=0, n2=0) { //=0 para definir se n tiver valor 
    return n1+n2
}
console.log(soma(8))

//RECURSIVIDADE (chama a função dentro da função)
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }   
}
console.log(fatorial(5))