function Carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagens')
    var data = new Date()
    var horario = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${horario} horas e ${minutos} minutos!`
        if(horario >= 0 && horario < 12){
            document.body.style.background = '#828a1b'
            img.src = 'foto-manha250.png'
            //BOM DIA
        }
        else if (horario >= 12 && horario < 18){
        document.body.style.background = '#b45721'
            img.src = 'foto-tarde250.png'
            //BOA TARDE
        }
        else{
            document.body.style.background = '#08161d'
            img.src = 'foto-noite250.png'
            //BOA NOITE
        }
    }