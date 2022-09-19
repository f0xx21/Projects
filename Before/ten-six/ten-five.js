const groceries = {
   "Orange Juice": {
       price: 1.5,
       discount: 10,
   },
"Chocolate": {
    price: 2,
    discount: 0,
},

}

function getTotalPriceOfShoppingBag(shoppingBag) {
    const shoppingItems = Object.values(shoppingBag)
if (shoppingItems.length === 0){
    return 0

}

let totalPrice = shoppingItems.reduce((acc,currentProduct) => {
    const {product,quantity} = currentProduct
    const productObject = groceries[product]
    const {price,discount} = productObject
    const priceWithDiscount = productObject.price - (price * discount /100)
    let totalProductPrice = priceWithDiscount * quantity
    return acc + totalProductPrice
},0)
console.log(totalPrice)
return totalPrice
}
const shoppingBag = [
    {product: `Chocolate`, quantity: 3},
    {product: `Orange Juice`, quantity:23}
]
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log(`total price:`, totalPrice)