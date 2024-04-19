function Carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var horario = data.getHours()
    var minutos = data.getMinutes()

    // Mostrar a data do sistema
    const diaAtual = data.getDate()
    const mesAtual = data.getMonth() + 1
    const anoAtual = data.getFullYear()

    msg.innerHTML = `Data: <i>${diaAtual}/${mesAtual}/${anoAtual}</i> <br> Agora são exatamente ${horario} horas e ${minutos} minutos!`
    if(horario >= 6 && horario < 12){
        document.body.style.background = '#FFB05D'
        document.querySelector('footer').style.color = 'black'
        document.querySelector('h1').style.color = 'black'
        img.src = 'assets/manha.png'
            //BOM DIA
    }
    else if (horario >= 12 && horario < 18){
        document.body.style.background = '#3D701F'
        //#60993E
        img.src = 'assets/tarde.png'
            //BOA TARDE
    }
    else{
        document.body.style.background = '#08141A'
        img.src = 'assets/noite.png'
            //BOA NOITE
    }
}
