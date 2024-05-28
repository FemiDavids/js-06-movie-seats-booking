const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  // console.log(selectedSeats);

  const selectedSeatsCount = selectedSeats.length;

  // console.log(selectedSeatsCount);
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log(e.target);
    e.target.classList.toggle("selected");
  }
});
