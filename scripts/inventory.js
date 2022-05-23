 var arr = JSON.parse(localStorage.getItem("products"));

 arr.map(function(el, index){
     var box = document.createElement("div");
     box.id="box"

     var type = document.createElement("p");
     type.innerText=el.type;

     var desc = document.createElement("p");
     desc.innerText=el.desc;

     var price = document.createElement("p");
     price.innerHTML=el.price;

     var image = document.createElement("img");
     image.src=el.image;

     var btn = document.createElement("button");
     btn.innerText="Remove Product";
     btn.id="remove_product"
     btn.addEventListener("click", function (){
         removeProduct(el,index);
     });


     box.append(image,type,desc,price,btn);
     document.querySelector("#all_products").append(box);
 })


 function removeProduct(el,index){

    arr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();
 }