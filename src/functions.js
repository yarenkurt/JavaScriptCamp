function addToCard(quantity,productName="Elma") {
    console.log("Sepete eklendi: "+productName+" adet : "+quantity)
}

// addToCard()
 addToCard(10)
// addToCard(15)

//arrowfunction, değişknelere func atanabilir.
let sayHello = () =>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello world2")
}

sayHello2();

function addToCart2(productName,quantity,unitPrice) {

    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Miktar : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
    
}
addToCart3(product1)
//veri sayısalsa değer tip,objeyse referans tip
let product2 = {productName:"elma",unitPrice:10,quantity:5}
let product3 = {productName:"elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName = "karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
sayi2=100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:10,quantity:5},
    {productName:"karpuz",unitPrice:10,quantity:5}
]

addToCart4(products);

function add(bisey,...numbers) {
    let total = 0
    for(let i=0;i<numbers.length;i++){
       total = total + numbers[i] 
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers=[20,30,500,12,700]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icASehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name : "İç Anadolu", population:"20M"},
    {name : "Marmara", population:"30M"},
    {name : "Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Rize","Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(karadeniz)
console.log(icASehirleri)

let newProductName,newProductPrice,newProductQuantity
({productName:newProductName,productPrice:newProductPrice,productQuantity:newProductQuantity} 
    = {productName:"Elma",productPrice:10,productQuantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
