function manageLastTwoButtons(totalItems) {
    console.log("Managing last two buttons for total items:", totalItems); // Log here
    const cards = document.querySelectorAll(".card");
    if (totalItems >= 2) {
        const secondLastCard = cards[cards.length - 2];
        const lastCard = cards[cards.length - 1];
        
        const secondLastButton = secondLastCard.querySelector(".btn");
        const lastButton = lastCard.querySelector(".btn");

        if (secondLastButton) {
            secondLastButton.style.display = "none";
            console.log("Second last button hidden"); // Log here
        }

        if (lastButton) {
            lastButton.style.display = "none";
            console.log("Last button hidden"); // Log here
        }
    }
}