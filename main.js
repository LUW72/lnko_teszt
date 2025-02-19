import { lnkoTeszt, lnkoTeszt2 } from "./teszt.js";


//lnkoTeszt();
lnkoTeszt2();

export function lnko(a, b)
{
    while (a < 0 && b < 0)
    {
        return "Nem lehet az eredmény negatív!"
    }

    while (a == 0 && b == 0)
    {
        return "Nem lehet nullával osztani."
    }

    while(a != b)
    {
        if (a > b)
        {
            a = a - b;
        }
        else
        {
            b = b - a;
        }
    }
    return a;
}
/* 
console.log(lnko(12, 8)); */
