document.addEventListener('click', async (event) => {
  if (event.target.classList.value.includes('addToBucketButton')) {
    event.preventDefault();
    const quantity = event.target
      .closest('div')
      .querySelector('.quantity').value;
    const designId = event.target.closest('div.card').dataset.designid;
    const userId = document.querySelector('#navbarNav').dataset.userid;
    const response = await fetch(`/orders/user/${userId}`, {
      method: 'GET',
    });
    const order = await response.json();
    const orderId = order.id;
    const response2 = await fetch('/positions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: Number(orderId),
        designId,
        quantity: Number(quantity),
      }),
    });
    const position = await response2.json();
    if (position.id) {
      event.target.innerText = 'Successfully';
      setTimeout(() => (event.target.innerText = 'Add to bucket'), 1000);
    } else {
      event.target.innerText = 'Error';
    }
  }

  if (event.target.classList.value.includes('addToFavoritesButton')) {
    event.preventDefault();
    const userId = document.querySelector('#navbarNav').dataset.userid;
    const designId = event.target.closest('div.card').dataset.designid;
    const response = await fetch('/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        designId,
      }),
    });
    const newFavorite = await response.json();
    if (newFavorite.id) {
      event.target.classList.add('disabled');
      event.target.style['background-color'] = 'transparent';
      event.target.style['color'] = 'black';
      event.target.innerText = 'Added';
    }
  }
});
