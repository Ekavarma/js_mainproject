let searchData = JSON.parse(localStorage.getItem("searchData")) || [];
let inputdata = document.getElementById("singlecard");


inputdata.style.display = "flex";
inputdata.style.flexWrap = "wrap";
inputdata.style.justifyContent = "space-around";
inputdata.style.gap = "20px";
inputdata.style.margin = "20px";


function displaycard(y) {
    inputdata.innerHTML = "";
    if (y.length === 0) {
        inputdata.innerHTML = `<h2>No Results Found</h2>`;
        return;
    }
    y.forEach(x => {
        let card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.width = "25%";
        card.style.padding = "10px";
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        card.style.textAlign = "center";

        card.innerHTML = `
            <img src="${x.Image}" style="border-radius: 10px; width: 100%; height: 200px; object-fit: cover;"/>
            <h2>${x.name}</h2>
            <h3>₹${x.Price}</h3>
            <div style="display:flex;justify-content:space-around";><button class="addtocart">AddtoCart</button><button><a href="../cart/addtocart.html" style>gotocart</a></button></div>
        `;
        const button = card.querySelector(".addtocart")
        button.addEventListener("click",()=>{
            let cartdata=JSON.parse(localStorage.getItem("cartdata")) || []
            cartdata.push(x);
            localStorage.setItem("cartdata",JSON.stringify(cartdata));
            alert("added to card")
    });
    inputdata.append(card);
    

  })
}


displaycard(searchData);
