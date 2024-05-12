const prodoctsDom= document.querySelector(".prodoct")


import { prodoctsData } from "./prodocts.js";
class Prodocts{

    getProdoct(){
      return prodoctsData
    }
}
class UI{
    displayProdocts(prodocts){
        let result=""
        prodocts.forEach(data => {
            result+= `<div class="card">
            <img src= ${data.url} alt="" class="card__img">
            <div class="card__title">
              <p class="card__title__price">${data.price}$</p>
              <p class="card__title__hotelName">${data.hotelName}</p>
            </div>
            <button class="add" dataid=${data.id}>add to cart</button>
          </div>`
          prodoctsDom.innerHTML= result
        });
    }
}
class Storage{
   static savaProdocts(prodoct){
    localStorage.setItem("prodoct",JSON.stringify(prodoct))
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    const prodocts= new Prodocts()
    const prodoctsData= prodocts.getProdoct()
    console.log(prodoctsData);
    const ui= new UI()
    ui.displayProdocts(prodoctsData)
    Storage.savaProdocts(prodoctsData)
})