import { lnko } from "./main.js";

export function lnkoTeszt()
{
    let a = 15;
    let b = 9;
    let vart = 3;
    let kapott = lnko(a,b);

    console.log("1. Teszteset - a és b nem relatív prímek");
    //console.log(`a: ${a} b: ${b} várt: ${vart} kapott: ${kapott}`);
    //console.log(`eredmeny: ${vart===kapott}`);
    console.assert(
        vart===kapott,
        "%o",
        `a: ${a} b: ${b} várt: ${vart} kapott: ${kapott}`,

    );

    a = 15;
    b = 9;
    vart = 3;
    kapott = lnko(a,b);

    console.log("1. Teszteset - a és b nem relatí prímek");
    console.assert(
        vart===kapott,
        "%o",
        `a: ${a} b: ${b} várt: ${vart} kapott: ${kapott}`,

    );


}

export function lnkoTeszt2()
{
    let tesztObjektumLista = [
        {
            a: 15,
            b: 9,
            vart: 3,
            tesztesetNev: 
            "1. Teszteset - a és b nem relatív prímek",
        },
        {
            a: 6,
            b: 3,
            vart: 3,
            tesztesetNev: 
            "2. Teszteset - a és b nem relatív prímek a b többszörösének",
        },
        {
            a: 9,
            b: 15,
            vart: 3,
            tesztesetNev: 
            "3. Teszteset - ",
        },
        {
            a: 7,
            b: 10,
            vart: 1,
            tesztesetNev: 
            "4. Teszteset - ",
        },
        {
            a: 15,
            b: 8,
            vart: 1,
            tesztesetNev: 
            "5. Teszteset - ",
        },
    ];


    for (let index = 0; index < tesztObjektumLista.length; index++) 
    {
        let a = tesztObjektumLista[index].a;
        let b = tesztObjektumLista[index].b;
        let vart = tesztObjektumLista[index].vart;
        let kapott = lnko(a, b);
        console.assert
        (
            vart === kapott,
            "%o",
            `a: ${a} b: ${b} várt: ${vart} kapott: ${kapott}`,
            `${tesztObjektumLista[index].tesztesetNev}`,
        );
    }
    
}
