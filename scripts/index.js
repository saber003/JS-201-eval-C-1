//store the products array in localstorage as "products"

let arr = JSON.parse(localStorage.getItem("products")) || [];

function Products (t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}



document.querySelector("#products").addEventListener("submit",myFunction);



function myFunction(){
    event.preventDefault();
    
    let form = document.getElementById("products");
    let type = form.type.value;
    let desc= form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new Products(type,desc,price,image);
    
    arr.push(p1);
     document.getElementById("products").reset();
    localStorage.setItem("products",JSON.stringify(arr));
}
