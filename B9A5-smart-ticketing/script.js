function goToParibahan() {
    const buttonBuyTickets = document.getElementById("btn-buy-tickets");
    const paribahanSection = document.getElementById("Shemoli-Paribahan");
    paribahanSection.scrollIntoView();
}

function selectSeat(){
    let totalSeat = document.getElementById("total-seat").innerText;
    totalSeat = parseInt(totalSeat);
    
    const button = document.getElementsByClassName("seat");

    console.log(button);
}