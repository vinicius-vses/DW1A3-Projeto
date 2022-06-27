const cartItems = localStorage.getItem('TENIS&TENIS:CART')
const cart = JSON.parse(cartItems) || []
const addCartBtn = document.getElementById("addCartBtn")
const list = document.getElementById("itemList")

addCartBtn.addEventListener("submit", function () {
    const formData = document.getElementById("campoCriaModelo")
    addCart(formData.value)
    formData.value = ''
})

function addCart(item) {
    let atualCart = [...cart, item]
    localStorage.setItem('TENIS&TENIS:CART', JSON.stringify(atualCart))
}

function removeCart(itemRemove) {
    const newCart = cart.filter(item => item !== itemRemove)
    localStorage.setItem('TENIS&TENIS:CART', JSON.stringify(newCart))
}

// display items
cart.map((item) => {
    const listItem = `
        <li>
            <button class="CartItemRemove" value="${item}">${item}</button>
        </li>
    `
    list.innerHTML += listItem
})

// get items displayed
const cartItemRemove = document.querySelectorAll(".CartItemRemove")

cartItemRemove.forEach(button => {
    button.addEventListener("click", (e) => {
        removeCart(e.target.value)
        document.location.reload()
    }) 
});