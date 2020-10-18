def sorGenerator():
    for index in range(5):
        if elsoSor[index] == 0:
            elsoSor[index] = randint(0, 3)
        else:
            elsoSor[index] = elsoSor[index] - 1
def sorTarolas():
    tarolo.insert_at(len(tarolo), [])
def taroloAbrazolasa():
    global taroloSor, y
    while y <= len(tarolo) - 1:
        taroloSor = tarolo[y]
        x = 0
        while x <= len(taroloSor) - 1:
            if taroloSor[x] <= 0:
                led.unplot(x, y)
            else:
                led.plot(x, y)
            x += 1
        y += 1
taroloSor: List[number] = []
y = 0
elsoSor: List[number] = []
tarolo: List[List[number]] = []
tarolo = [[0, 0, 0, 0, 0]]
elsoSor = [0, 0, 0, 0, 0]

def on_forever():
    sorGenerator()
    sorTarolas()
    taroloAbrazolasa()
    basic.pause(500)
basic.forever(on_forever)
