function goToParibahan() {
    const buttonBuyTickets = document.getElementById("btn-buy-tickets");
    const paribahanSection = document.getElementById("Shemoli-Paribahan");
    paribahanSection.scrollIntoView();
}

let grandTotal = 0;

function selectSeat() {


    const button = document.getElementsByClassName("seat");

    console.log(button);
}
let totalSeat = document.getElementById("total-seat").innerText;
totalSeat = parseInt(totalSeat);
const allBtn = document.getElementsByClassName("seat");

let seatNumber = document.getElementById("seat-number").innerText;
seatNumber = parseInt(seatNumber);
const seatDetails = document.getElementById("seat-details");

let totalPrice = document.getElementById("total-price").innerText;
totalPrice = parseInt(totalPrice);
// console.log(typeof(totalPrice));
for (const btn of allBtn) {
    // console.log(btn);
    btn.addEventListener("click", function (e) {

        
        const fare = 550;
        let button = btn.innerText;
        // console.log(typeof(fare));
        seatNumber++;
        totalSeat--;
        if(totalSeat < 4){
            alert("You can't select more than 4 seats")
            return;
         }
        // console.log(totalSeat);
        else{
            btn.style.backgroundColor = "#1DD100";
            btn.style.color = "white";
            btn.disabled = true;
             document.getElementById("total-seat").innerText = totalSeat;
             document.getElementById("seat-number").innerText = seatNumber;

             let para1 = document.createElement("p");
             let para2 = document.createElement("p");
             let para3 = document.createElement("p");
             
             para1.textContent = button;
             para2.textContent = "Economy";
             para3.textContent = "550";
            seatDetails.appendChild(para1);
            seatDetails.appendChild(para2);
            seatDetails.appendChild(para3);

            totalPrice = totalPrice + 550;
            document.getElementById("total-price").innerText = totalPrice;
            grandTotal = totalPrice;
            document.getElementById("grand-total").innerText = grandTotal;
            
             
        }

    });
}

function couponCode() {
    const couponContainer = document.getElementById("coupon-container");
    let discount15 = (15*grandTotal)/100;
    let discount20 = (20*grandTotal)/100;
    // console.log(discount15);
    
    let input = document.getElementById("input-coupon").value.trim();
    
    if(input === "New15" ){
        couponContainer.classList.add('hidden');
        
        grandTotal = grandTotal - discount15;
        document.getElementById("grand-total").innerText = grandTotal;
        
    }
    else if(input === "Couple 20"){
        couponContainer.classList.add('hidden');
        grandTotal = grandTotal - discount20;
        document.getElementById("grand-total").innerText = grandTotal;
    }
    


}