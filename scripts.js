const convertButton = document.querySelector(".convert-button")
const moedaSelecionada = document.querySelector(".moeda-selecionada")
const primeiraMoedaSelecionada = document.querySelector(".primeira-moeda-selecionada")

function convertValues() {
    const input = document.querySelector(".input").value
    const valorConverter = document.querySelector(".valor-para-converter")
    const valorConvertido = document.querySelector(".valor-convertido")

    const dolarDia = 4.93
    const euroDia = 5.34
    const libraDia = 6.24
    const bitcoinDia = 254907

    if (primeiraMoedaSelecionada.value == "real"){
        valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }
    
    if (primeiraMoedaSelecionada.value == "dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "euro") {
        valorConverter.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "libra") {
        valorConverter.innerHTML = new Intl.NumberFormat ("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat ("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(input)
    }

    //convertendo real para outras moedas//

    if (moedaSelecionada.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarDia)
    }

    if (moedaSelecionada.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroDia)
    }

    if (moedaSelecionada.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(input / libraDia)
    }

    if (moedaSelecionada.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            minimumFractionDigits: "7",
            currency: "BTC"
        }).format(input / bitcoinDia)
    }

    if (moedaSelecionada.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }

    //convertendo dolar para outras moedas//

    if (primeiraMoedaSelecionada.value == "dolar" && moedaSelecionada.value == "dolar"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-US", {    
            style: "currency",
            currency: "USD"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "dolar" && moedaSelecionada.value == "euro"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            currency: "EUR"
        }).format(input*0.92)
    }

    if (primeiraMoedaSelecionada.value == "dolar" && moedaSelecionada.value == "libra"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-UK", {    
            style: "currency",
            currency: "GBP"
        }).format(input*0.79)
    }

    if (primeiraMoedaSelecionada.value == "dolar" && moedaSelecionada.value == "bitcoin"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            minimumFractionDigits: "7",
            currency: "BTC"
        }).format(input*0.000019)
    }

    if (primeiraMoedaSelecionada.value == "dolar" && moedaSelecionada.value == "real"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("pt-BR", {    
            style: "currency",
            currency: "BRL"
        }).format(input*dolarDia)
    }

    //convertendo euro para outras moedas//

    if (primeiraMoedaSelecionada.value == "euro" && moedaSelecionada.value == "euro"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            currency: "EUR"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "euro" && moedaSelecionada.value == "dolar"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-US", {    
            style: "currency",
            currency: "USD"
        }).format(input*1.08)
    }

    if (primeiraMoedaSelecionada.value == "euro" && moedaSelecionada.value == "libra"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-UK", {    
            style: "currency",
            currency: "GBP"
        }).format(input*0.85)
    }

    if (primeiraMoedaSelecionada.value == "euro" && moedaSelecionada.value == "bitcoin"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            minimumFractionDigits: "7",
            currency: "BTC"
        }).format(input*0.000021)
    }

    if (primeiraMoedaSelecionada.value == "euro" && moedaSelecionada.value == "real"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("pt-BR", {    
            style: "currency",
            currency: "BRL"
        }).format(input*euroDia)
    }

    //convertendo libra para outras moedas//

    if (primeiraMoedaSelecionada.value == "libra" && moedaSelecionada.value == "libra"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-UK", {    
            style: "currency",
            currency: "GBP"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "libra" && moedaSelecionada.value == "dolar"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-US", {    
            style: "currency",
            currency: "USD"
        }).format(input*1.27)
    }

    if (primeiraMoedaSelecionada.value == "libra" && moedaSelecionada.value == "euro"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            currency: "EUR"
        }).format(input*1.17)
    }

    if (primeiraMoedaSelecionada.value == "libra" && moedaSelecionada.value == "real"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("pt-BR", {    
            style: "currency",
            currency: "BRL"
        }).format(input*libraDia)
    }

    if (primeiraMoedaSelecionada.value == "libra" && moedaSelecionada.value == "bitcoin"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            minimumFractionDigits: "7",
            currency: "BTC"
        }).format(input*0.000024)
    }

    //convertendo bitcoin para outras moedas//

    if (primeiraMoedaSelecionada.value == "bitcoin" && moedaSelecionada.value == "bitcoin"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            currency: "BTC"
        }).format(input)
    }

    if (primeiraMoedaSelecionada.value == "bitcoin" && moedaSelecionada.value == "real"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("pt-BR", {    
            style: "currency",
            currency: "BRL"
        }).format(input*bitcoinDia)
    }

    if (primeiraMoedaSelecionada.value == "bitcoin" && moedaSelecionada.value == "dolar"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-US", {    
            style: "currency",
            currency: "USD"
        }).format(input*51975.60)
    }

    if (primeiraMoedaSelecionada.value == "bitcoin" && moedaSelecionada.value == "libra"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("en-UK", {    
            style: "currency",
            currency: "GBP"
        }).format(input*41062.28)
    }

    if (primeiraMoedaSelecionada.value == "bitcoin" && moedaSelecionada.value == "euro"){
        valorConvertido.innerHTML = new Intl.NumberFormat ("de-DE", {    
            style: "currency",
            currency: "EUR"
        }).format(input*48037.41)
    }

}

function mudarMoeda() {
    const moedaNome = document.getElementById("moeda-nome")
    const primeiraMoedaNome = document.getElementById("primeira-moeda-nome")
    const mudarImg = document.querySelector(".imagem-moeda")
    const primeiraMudarImg = document.querySelector(".primeira-imagem-moeda")

    if (moedaSelecionada.value == "dolar") {
        moedaNome.innerHTML = "Dólar Americano"
        mudarImg.src = "./assets/dolar.png"
    }

    if (moedaSelecionada.value == "euro") {
        moedaNome.innerHTML = "Euro"
        mudarImg.src = "./assets/euro.png"
    }

    if (moedaSelecionada.value == "real") {
        moedaNome.innerHTML = "Real"
        mudarImg.src = "./assets/real.png"
    }

    if (moedaSelecionada.value == "bitcoin") {
        moedaNome.innerHTML = "Bitcoin"
        mudarImg.src = "./assets/bitcoin.png"
    }

    if (moedaSelecionada.value == "libra") {
        moedaNome.innerHTML = "Libra Esterlina"
        mudarImg.src = "./assets/libra.png"
    }

    if (primeiraMoedaSelecionada.value == "dolar") {
        primeiraMoedaNome.innerHTML = "Dólar Americano"
        primeiraMudarImg.src = "./assets/dolar.png"
    }

    if (primeiraMoedaSelecionada.value == "euro") {
        primeiraMoedaNome.innerHTML = "Euro"
        primeiraMudarImg.src = "./assets/euro.png"
    }

    if (primeiraMoedaSelecionada.value == "real") {
        primeiraMoedaNome.innerHTML = "Real"
        primeiraMudarImg.src = "./assets/real.png"
    }

    if (primeiraMoedaSelecionada.value == "bitcoin") {
        primeiraMoedaNome.innerHTML = "Bitcoin"
        primeiraMudarImg.src = "./assets/bitcoin.png"
    }

    if (primeiraMoedaSelecionada.value == "libra") {
        primeiraMoedaNome.innerHTML = "Libra Esterlina"
        primeiraMudarImg.src = "./assets/libra.png"
    }

    convertValues()
}

convertButton.addEventListener("click", convertValues)
moedaSelecionada.addEventListener("change", mudarMoeda)
primeiraMoedaSelecionada.addEventListener("change", mudarMoeda)