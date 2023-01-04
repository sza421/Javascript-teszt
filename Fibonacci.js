const prompt = require('prompt-sync')();

const a = prompt('Elemek száma: ');

const lista = [];

for (let i=0; i<a; i++) {
    if (i==0) {
        lista.push(0)
    }
    if (i==1) {
        lista.push(1)
    }
    if (i>1) {
        lista.push(lista[i-1]+lista[i-2])
    }
}

console.log(lista)


