console.log("merhaba kodlama.io");

//Typesafe değil
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// veri tipi const olduğundan bu olmaz ! "euroDun = 11"

console.log(euroDun)

//birden fazla veriyi aynı değişkende kullanmak için array kullanılır. Çoğul isimlendirme daha uygundur.
//camelCasing, ilk harf küçük sonra büyük
//PascalCasing, ilk harfler büyük
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")   
}
console.log("</ul>")

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)