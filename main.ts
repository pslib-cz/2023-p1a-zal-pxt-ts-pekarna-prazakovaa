//cas je doba za kterou pocitame prikon (h)
//prikon je mnozstvi spotrebovane energie (Wh)

const cena: number = 6.70; //1kWh = 6.70kcz
let dopeceno: boolean = false;
let prumernaspotreba: number = 0;
let celkovaspotreba: number = 0;
let celkovacena: number = 0;
let celkovycas: number = 0

type Odber = {
    cas: number //milisekundy
    prikon: number //watty
}

let data: Array<Odber> = [
    { cas: 1, prikon: 3500 }, // data[0].prikon
    { cas: 0.8, prikon: 3200 },
    { cas: 0.5, prikon: 0 },
    { cas: 1.3, prikon: 5000 },
    { cas: 0.7, prikon: 3700 },
    { cas: 0.4, prikon: 0 }
]

for (let pekarna of data) {
    celkovaspotreba += pekarna.prikon
    prumernaspotreba = Math.round(celkovaspotreba / data.length) / 1000;
    celkovacena = celkovaspotreba / 1000 * cena
    celkovycas += pekarna.cas * 60
}

console.log(prumernaspotreba + " kWh") //2.567Wh
console.log(celkovacena + " kcz") //103.18kcz
console.log(celkovycas + " min")