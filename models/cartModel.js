module.exports = function cart(oldCart) {

    this.items = oldCart.items || {};
    this.totalPrice = oldCart.totalPrice || 0;
    this.totalQty = oldCart.totalQty || 0;
    this.add = function (product, productId) {
        var storedItem = this.items[productId];

        if (!storedItem) {
            storedItem = this.items[productId] = {
                product: product,
                incart: 0,
                price: 0
            }
        } 
            storedItem.incart++;
            storedItem.price = product.price_Kindle;
            
            //  here price will be added
            this.totalPrice += storedItem.price ;
            this.totalQty+=1;
           
    };
    this.generateArray=function(){
        
        var arr=[];
        for(var id in this.items)
        {
            arr.push(this.items[id]);
        } 
        return arr; 
    };
    this.increase= function(productId){

        this.items[productId].incart++;
        this.totalQty++;
        
        this.totalPrice+=this.items[productId].price;   

    }
    this.decrease= function(productId){

        this.items[productId].incart--;
        this.totalQty--;
        this.totalPrice-=this.items[productId].price; 

        if(this.items[productId].incart==0)
        delete this.items[productId];

    }
    this.remove=function(productId)
    {
        if(this.items[productId])
        {
            this.totalPrice-=(this.items[productId].price)*(this.items[productId].incart);
           
            this.totalQty=this.totalQty-this.items[productId].incart;
            delete this.items[productId];
        }
    }
};