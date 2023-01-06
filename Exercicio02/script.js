function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute(`src`, `imagem/menino.png`)
            }else {
                if (idade < 21) {
                    //jovem
                    img.setAttribute(`src`, `imagem/jovem-m.png`)
                } else {
                    if (idade < 50) {
                        //adulto
                        img.setAttribute(`src`, `imagem/adulto-m.png`)
                    }else {
                        //idoso
                        img.setAttribute(`src`, `imagem/velho-m.png`)
                    }
                }
            }
        } else {
            if (fsex[1].checked) {
                genero = `Mulher`
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute(`src`, `imagem/menina.png`)
                }else {
                    if (idade < 21) {
                        //jovem
                        img.setAttribute(`src`, `imagem/jovem-f.png`)
                    } else {
                        if (idade < 50) {
                            //adulto
                            img.setAttribute(`src`, `imagem/adulto-f.png`)
                        }else {
                            //idoso
                            img.setAttribute(`src`, `imagem/velho-f.png`)
                        }
                    }
                }
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}