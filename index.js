var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var obj = {};
 obj['itemName'] = item;
 obj['itemPrice'] = Math.floor(Math.random() * 101);
 if (cart.length === 0){
    cart[0] = obj;
 }
 else{
   cart.push(obj);
 }
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0 ){
    return 'Your shopping cart is empty.';
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var sentence = `In your cart, you have`;
  for (var i =0; i < cart.length - 1 ; i++){
    sentence = sentence + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  }
  return `${sentence} and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
