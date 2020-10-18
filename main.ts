function sorTarolas () {
    tarolo.push(elsoSor)
}
function taroloAbrazolasa () {
    for (let x = 0; x <= tarolo.length; x++) {
        taroloSor = tarolo[x]
        for (let y = 0; y <= taroloSor.length; y++) {
            if (taroloSor[y] <= 0) {
                led.unplot(y, 0)
            } else {
                led.plot(y, 0)
            }
        }
    }
}
let taroloSor: number[] = []
let elsoSor: number[] = []
let tarolo: number[][] = []
tarolo = []
elsoSor = [0, 1, 0, 0, 0]
basic.forever(function () {
    sorTarolas()
    taroloAbrazolasa()
    while (true) {
    	
    }
})
