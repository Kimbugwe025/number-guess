/*function speak(){
    console.log("hello");
}
speak();*/
/*const calcArea = function(r){
    return 3.14*r**2;
};
const area = calcArea(5);
console.log(area);
const vol = function(area){
    return area*3.14
};
const volume = vol(area);
console.log(volume);*/
/*const calcArea = (a,b) => a-b;
const area = calcArea(7,4);
console.log(area);*/
/*const great = ()=> 'hello, world';
const result = great();
console.log(result);*/
const bill = (products,tax)=>{
    let total = 0;
    for(let i =0; i< products.lenth;i++){
        total += products[i] + products [i] * tax;
    }
    return total;
};
console.log(bill([10,15,30],0.2));