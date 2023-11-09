document.addEventListener("click", async (event) => {
  if (event.target.classList.value.includes("btn-close")) {
    event.preventDefault();
    const positionId = event.target.closest("tr").dataset.positionid;
    const response = await fetch(`/positions/${positionId}`, {
      method: "DELETE",
    });
    const positionToDelete = await response.json();
    if (positionToDelete.positionToDelete) {
      event.target.closest("tr").remove();
    }
  } else if (event.target.classList.value.includes("orderSend")) {
    try {
      event.preventDefault();
      const userId = document.querySelector("#navbarNav").dataset.userid;
      const response = await fetch(`/orders/user/${userId}`, {
        method: "GET",
      });
      const order = await response.json();
      const orderId = order.id;
      const response2 = await fetch(`/orders/isDone/${orderId}`, {
        method: "PUT",
      });
      if (response2.status == 200) {
        window.location = "/bucket";
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
});
