'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')
const forma9 = document.getElementById('forma9')
const item9 = document.getElementById('item9')

function mudarCor (){
    forma1.classList.toggle('vermelho')
}

function mudarForma(){
    forma2.classList.toggle('circulo')
}

function rotacionar(){
    forma3.classList.toggle('rotacionar')
}

function desaparecer(){
    forma4.classList.toggle('desaparecer')
}

function imagem(){
    forma5.classList.toggle('imagem')
}

function diminuir(){
    forma6.classList.toggle('diminuir')
}

function criarGradiente(){
    forma7.classList.toggle('gradiente')
}

function transformar(){
    forma8.classList.toggle('pulsar')
}

function mudarTema(){
    forma9.classList.toggle('cor_forma')
    item9.classList.toggle('cor_item')
}




forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', rotacionar)
forma4.addEventListener('click', desaparecer)
forma5.addEventListener('click', imagem)
forma6.addEventListener('click', diminuir)
forma7.addEventListener('click', criarGradiente )
forma8.addEventListener('click', transformar)
forma9.addEventListener('click', mudarTema)
