// Get input fields
const shipNumberInput = document.getElementById("ship-number");
const arrivalTimeInput = document.getElementById("arrival-time");

// Get attack button
const attackButton = document.getElementById("attack-button");

// Add click event to attack button
attackButton.addEventListener("click", function() {
  const shipNumber = shipNumberInput.value;
  const arrivalTime = arrivalTimeInput.value;

  attackTown(arrivalTime, shipNumber);
});
