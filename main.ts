function sorGenerator () {
    for (let index = 0; index <= 4; index++) {
        if (elsoSor[index] == 0) {
            elsoSor[index] = randint(0, 3)
        } else {
            elsoSor[index] = elsoSor[index] - 1
        }
    }
}
function sorTarolas () {
    tarolo[0] = elsoSor
}
function taroloAbrazolasa () {
    let x: number;
while (y <= tarolo.length - 1) {
        taroloSor = tarolo[y]
        x = 0
        while (x <= taroloSor.length - 1) {
            if (taroloSor[x] <= 0) {
                led.unplot(x, y)
            } else {
                led.plot(x, y)
            }
            x += 1
        }
        y += 1
    }
}
let taroloSor: number[] = []
let y = 0
let elsoSor: number[] = []
let tarolo: number[][] = []
tarolo = [[0, 0, 0, 0, 0]]
elsoSor = [0, 0, 0, 0, 0]
basic.forever(function () {
    sorGenerator()
    sorTarolas()
    taroloAbrazolasa()
    basic.pause(500)
})
