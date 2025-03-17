function carregar() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var text = document.getElementById('text')
    //var hora = 15
    

    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        msg.innerHTML += ' da manhã.'
        img.src = 'manha.jpg' 
        document.body.style.background = 'rgba(242, 233, 102, 0.8)'
        text.innerHTML = 'Bom Dia!'
        
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        msg.innerHTML += ' da tarde.'
        img.src = 'tarde.jpg'  
        document.body.style.background = 'rgba(100, 88, 110, 1)'
        text.innerHTML = 'Boa Tarde!'


    } else {
        // BOA NOITE
        msg.innerHTML += ' da noite.'
        img.src = 'noite.jpg' 
        document.body.style.background ='rgba(33, 33, 33, 1)'
        text.innerHTML = 'Boa Noite!'

    }
}
