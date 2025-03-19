let amigo = {nome:'Milena',
sexo: 'F', 
peso: 60.9,
engorda (p=0){
    console.log ('Engordou')
    this.peso += p

}}
amigo.engorda(10)
console.log (amigo.peso)
console.log (amigo.nome)

//funções dentro de variáveis

