class PRODUCTOS{
    constructor (id,name,price,type){
        this.id = id;
        this.name=name;
        this.price = price;
        this.type = type;
        this.quantity = 0;
    }


    addQuantity(){
        this.quantity++;
    }
    removeQuantity(){
       if(this.quantity > 0) this.quantity-- ;
    }
}