let stocks = {

    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = true;

let toppings_choice = ()=>{

    return new Promise((result,reject)=>{
        setTimeout(() => {
            console.log('which topping would you love?');
        }, 3000);
    })
}

async function kitchen(){
    console.log("A")
    console.log("B")
    console.log("C")

    await toppings_choice()


    console.log("D")
    console.log("E")
   


}

kitchen()

console.log("doing the dishes");
console.log('cleaning the tables');
console.log('taking others orders');