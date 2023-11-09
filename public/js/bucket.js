document.addEventListener("click", async (event) => {
  if (event.target.classList.value.includes("btn-close")) {
    const positionId = event.target.closest("tr").dataset.positionid;
    const response = await fetch(`/positions/${positionId}`, {
      method: "DELETE",
    });
    const positionToDelete = await response.json();
    if (positionToDelete.positionToDelete) {
      event.target.closest("tr").remove();
    }
  }
});
