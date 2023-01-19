function contar() {
    var ini = document.querySelector(`input#txti`)
    var fim = document.querySelector(`input#txtf`)
    var passo = document.querySelector(`input#txtp`)
    var res = document.querySelector(`div#res`)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] Faltam Dados!`)
        res.innerHTML = `Impossível Contar!!`
    } else { 
        res.innerHTML = `Contando: ` 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var passo = Number(passo.value)
        if (passo <= 0) {
            window.alert(`Passo Invalido! Considerando Passo 1 `)
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c = c + passo) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
            res.innerHTML += `\u{1f3c1}`
        } else {
            for(var c = i; c >= f; c = c - passo) {
                res.innerHTML += ` ${c} \u{1f449} `
            }
            res.innerHTML += `\u{1f3c1}`
        }

        
    }
}