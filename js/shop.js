// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]
 // Array with products (objects) added directly with push(). Products in this array are repeated.
 var cartList = [];
 
 // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
 var cart = [];
 
 var total = 0;
 
 // Exercise 1
 function buy(id) {
       for(let i = 0; i < products[length].id; i++ ){
           cartList.push(products[id]);
        }
         console.log(cartList);
         calculateTotal();
         generateCart() 

     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 }
 
 // Exercise 2
 function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    total = 0;
    document.getElementById("total_price").innerHTML = total
    
 }
 
 // Exercise 3
 function calculateTotal() {
    //  total = 0
    // let largoCartList = cartList.length
    // for(let i = 0; i < largoCartList; i++ ){
    //     total += cartList[i].price; 
    // }
    // document.getElementById("total_price").innerHTML = total;

    // console.log(total);

    total = 0

    for(let i = 0; i < cart.length; i++ ){
        total += cart[i].price * cart[i].quantity; 
    }
    document.getElementById("total_price").innerHTML = total;

    console.log(total);
    
             
     // Calculate total price of the cart using the "cartList" array

 }
 
 // Exercise 4
 function generateCart() {
    let largoCartList = cartList.length;
    for(let i = 0; i < largoCartList; i++){  
        if (!cart.includes(cartList[i])){
            cartList[i].quantity=1;
            
            
            cart.push(cartList[i]);
        }else if (cart.includes(cartList[i])) {
            cartList[i].quantity++;
        }   
    }
    applyPromotionsCart();
    console.log(cart);
    
    
     // Using the "cartlist" array that contains all the items in the shopping cart, 
     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
 }
 
 // Exercise 5
 function applyPromotionsCart() {
     // Apply promotions to each item in the array "cart"
    for(let i = 0 ; i < cart.length; i++){
        if(cart[i].id === 1  && cart[i].quantity >= 3){
            let descuento = cart[i].subtotalWithDiscount= (total - 10.5);
            document.getElementById("total_price").innerHTML = descuento;
           
        }if(cart[i].id === 3 && cart[i].quantity >= 10){
            let descuento2 = cart[i].subtotalWithDiscount= (total - 20);
            document.getElementById("total_price").innerHTML = descuento2;
        }
           //ARREGLAR Y MEJORAR LO DE EL DESCEUNTO NO CALCULA BIEN
    }
    
    

 }
 
 // Exercise 6
 const lista  = document.getElementById("cart_list");
 
 function printCart() {
     document.getElementById("cart_list").innerHTML = " "; //para que en el carrito no se duplique 
     cart.forEach(item => {
         console.log(item)
         
         const tr = document.createElement ("tr");
         tr.textContent = ""
         lista.appendChild(tr);
        
         const th = document.createElement ("th");
         th.textContent = item.name;
         lista.appendChild(th);

         const price = document.createElement ("td");
         price.textContent = item.price;
         lista.appendChild(price);

         const quantity = document.createElement ("td");
         quantity.textContent = item.quantity;
         lista.appendChild(quantity);

         const desceunto = document.createElement ("td");
         desceunto.textContent = item.subtotalWithDiscount ;
         lista.appendChild(desceunto);

         const tableRemove = document.createElement('td');
            tableRemove.innerHTML = '<button class="btn btn-outline-dark" onclick="removeFromCart('+item.id+')"><i class="fa fa-trash"></button>';
            lista.appendChild(tableRemove);
    
    });
     // Fill the shopping cart modal manipulating the shopping cart dom
 }
 
 
 // ** Nivell II **
 
 // Exercise 7
 function addToCart(id) {
     for(let i = 0; i < products[length].id; i++ ){
        
            if(!cart.includes(products[id])){
                products[id].quantity =+ 1;

                cart.push(products[id]);
               
            } else if(cart.includes(products[id])){
                products[id].quantity++;
        
            }    
     }
        console.log(cart);
        calculateTotal();
        applyPromotionsCart();
}
    // usar el array cart directamente 

     // Refactor previous code in order to simplify it 
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cart array or update its quantity in case it has been added previously.
 
 
 // Exercise 8
 function removeFromCart(id) {
    for(let i = 0 ; i< cart.length ; i++ ){
            
    }
     // 1. Loop for to the array products to get the item to add to cart
     // 2. Add found product to the cartList array
 }
 
 function open_modal(){
    
     console.log("Open Modal");
    //  generateCart();
     printCart();
     
 }