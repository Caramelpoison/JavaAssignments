
function initializeCart() {
    if (localStorage.getItem("cart") == null) {
      const cart = {
        id:  [],
        name : [],
        price: []
      };
      
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  function addItem(item, cost) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.id = Date.now();
    cart.name = item;
    cart.price = cost;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

function removeItem(itemID){
    var cart = JSON.parse(localStorage.getItem("cart"))
    cart.items = cart.items.filter(item => item.id !== itemID)
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
}

  const addItemButton = document.querySelector ("#addItem")
  addItemButton.addEventListener('click', event => {
    event.preventDefault()
    const itemName = document.getElementById('itemName').value;
    const itemCost = document.getElementById('itemPrice').value;
    addItem(itemName,itemCost)
    addItemButton.reset();
  })

  const displayButton = document.querySelector ("#displayCartButton")
  displayButton.addEventListener('click',displayCart,false)

  initializeCart();
