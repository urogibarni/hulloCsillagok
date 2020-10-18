def sorAbrazolas():
    global index
    while index <= 4:
        if sor[index] <= 0:
            led.unplot(index, 0)
        else:
            led.plot(index, 0)
        index += 1
index = 0
sor: List[number] = []
oszlop: List[number] = []
sor = [0, 1, 0, 0, 0]

def on_forever():
    sorAbrazolas()
basic.forever(on_forever)
