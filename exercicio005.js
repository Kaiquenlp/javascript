var agora = new Date()
var hora = agora.getHours ()
var diaSem = agora.getDay()
console.log (`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log ('Bom dia')
} else if (hora <= 18){
    console.log ('Boa Tarde')
} else {
    console.log ('Boa noite')
}
switch (diaSem) {
    case 0:
        console.log ('Hoje é Domingo')
    break
    case 1:
        console.log ('Hoje é Segunda')
    break
    case 2: 
        console.log ('Hoje é Terça')
    break
    case 3:
        console.log ('Hoje é Quarta')
    break
    case 4:
        console.log ('Hoje é Quinta')
    break
    case 5: 
        console.log ('Hoje é Sexta')
    break
    case 6: 
        console.log ('Hoje é Sábado')
    break
    case 7:
        console.log ('Hoje é Domingo')
}
