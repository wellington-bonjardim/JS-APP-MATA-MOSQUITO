var height = 0
var width = 0
var life = 1
var time = 15

var newTimeMosquito = 1500

var level = window.location.search
level = level.replace('?', '')

if(level === 'normal') {
    //1500
    var newTimeMosquito = 1500
} else if(level === 'dificil') {
    //1000
    var newTimeMosquito = 1000
} else if(level === 'chucknorris') {
    //750
    var newTimeMosquito = 750
}

function screenAdjust () {
    height = window.innerHeight
    width = window.innerWidth

    console.log(width, height)
}
screenAdjust()
/*A FUNÇÃO ACIMA SERVIU PARA POSSIBILITAR O AJUSTE DO TAMANHO DA TELA CASO SEJA AUMENTADA OU DIMINUIDA PELO USUÁRIO DURANTE O JOGO. PARA QUE FUNCIONE, É NECESSÁRIO CHAMAR ESSA FUNÇÃO NO BODY DO HTML ATRAVÉS DO "onresize: screenAdjust()"*/ 

var stopwatch = setInterval(function() {

    time -= 1

    if(time < 0) {
        clearInterval(stopwatch)
        clearInterval(newMosquito)
        window.location.href = 'you_win.html'
    } else {
        document.getElementById('stopwatch').innerHTML = time
    }
}, 1000)

function randomPosition() {

    //remover o mosquito anterior (CASO EXISTA)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //console.log('O valor escolhido foi: life' + life)
        if(life > 3) {
            
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('life' + life).src = "/assets/coracao_vazio.png"

            life++
        }
    }
    

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //positionY e positionX serviram para criar as posições randomicas

    //criando o elemento html de forma programática
    var mosquito = document.createElement('img')
    mosquito.src = '/assets/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function randomSide() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'Aside'
        
        case 1:
            return 'Bside'
    }
}


