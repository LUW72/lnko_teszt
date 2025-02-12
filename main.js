import { lnkoTeszt, lnkoTeszt2 } from "./teszt.js";


//lnkoTeszt();
lnkoTeszt2();

export function lnko(a, b)
{
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
