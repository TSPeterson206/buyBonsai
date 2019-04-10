function checkoutFunction () {
  // Shipping and Billing variables

  const name = document.querySelector('#shipName')
  const address1 = document.querySelector('#shipAdd1')
  const address2 = document.querySelector('#shipAdd2')
  const city = document.querySelector('#shipCity')
  const state = document.querySelector('#shipState')
  const zip = document.querySelector('#shipZip')
  const email = document.querySelector('#shipEmail')

  const allShipping = [name, address1, address2, city, state, zip, email]

  const billName = document.querySelector('#billName')
  const billAddress1 = document.querySelector('#billAdd1')
  const billAddress2 = document.querySelector('#billAdd2')
  const billCity = document.querySelector('#billCity')
  const billState = document.querySelector('#billState')
  const billZip = document.querySelector('#billZip')
  const billEmail = document.querySelector('#billEmail')

  var checkBox = document.querySelector('#copyToBilling')

  var allBilling = [billName, billAddress1, billAddress2, billCity, billState, billZip, billEmail]
  // Billing info copy event listener and function
  checkBox.addEventListener('change', billingCopy)

  function billingCopy () {
    if (checkBox.checked) {
      billName.value = name.value
      billAddress1.value = address1.value
      billAddress2.value = address2.value
      billCity.value = city.value
      billState.value = state.value
      billZip.value = zip.value
      billEmail.value = email.value
    } else {
      allBilling.forEach(element => {
        element.value = ''
      })
    }
  }

  // Info event listener and function
  const subButton1 = document.querySelector('.infoSubmit')

  subButton1.addEventListener('click', giveInfoResult)

  function giveInfoResult () {
    if (
      name.value.length > 0 &&
            address1.value.length > 0 &&
            city.value.length > 0 &&
            state.value.length > 0 &&
            zip.value.length > 0 &&
            email.value.length > 0 &&
            billName.value.length > 0 &&
            billAddress1.value.length > 0 &&
            billCity.value.length > 0 &&
            billState.value.length > 0 &&
            billZip.value.length > 0 &&
            billEmail.value.length > 0
    ) alert('Thank You! Please proceed.')

    else {
      alert('Please fill out all fields in both the shipping and billing forms. If the billing information is identical to the shipping address, feel free to click on the checkbox to fill it in automatically')
    }
  }
  // Credit Card event listener and function

  const creditName = document.querySelector('.creditName')
  const creditNumber = document.querySelector('.creditNumber')
  const creditCVV = document.querySelector('.creditCVV')
  const creditExpire = document.querySelector('.creditExpire')
  const subButton2 = document.querySelector('.creditSubmit')
  const allCredit = [creditName, creditNumber, creditCVV, creditExpire]

  subButton2.addEventListener('click', giveCreditResult)

  function giveCreditResult () {
    if (creditName.value.length > 0 &&
            creditNumber.value.length === 16 &&
            creditCVV.value.length === 3 &&
            creditExpire.value.length === 5) {
      alert('Thank you!')
    } else {
      alert('Please complete all credit card info before proceeding')
    }
  };

  // Cart items, prices, and images from local storage

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
  let cartPrices = JSON.parse(localStorage.getItem('cartPrices')) || []
  let cartCount = Number(localStorage.getItem('cartCount'))
  const numberInCart = document.querySelector('.number-in-cart')
  let recentImages = JSON.parse(localStorage.getItem('recentImages'))
  let recentItems = JSON.parse(localStorage.getItem('recentItems'))

  // Cart items and prices

  const boughtItem1 = document.querySelector('.boughtItem1')
  const boughtItem2 = document.querySelector('.boughtItem2')
  const boughtItem3 = document.querySelector('.boughtItem3')
  const boughtItem4 = document.querySelector('.boughtItem4')
  const boughtItem5 = document.querySelector('.boughtItem5')
  const boughtItem6 = document.querySelector('.boughtItem6')
  const boughtItem7 = document.querySelector('.boughtItem7')
  const boughtItem8 = document.querySelector('.boughtItem8')

  const boughtItem1price = document.querySelector('.boughtItem1price')
  const boughtItem2price = document.querySelector('.boughtItem2price')
  const boughtItem3price = document.querySelector('.boughtItem3price')
  const boughtItem4price = document.querySelector('.boughtItem4price')
  const boughtItem5price = document.querySelector('.boughtItem5price')
  const boughtItem6price = document.querySelector('.boughtItem6price')
  const boughtItem7price = document.querySelector('.boughtItem7price')
  const boughtItem8price = document.querySelector('.boughtItem8price')

  function populateItems () {
    boughtItem1.innerHTML = cartItems[0] || ''
    boughtItem2.innerHTML = cartItems[1] || ''
    boughtItem3.innerHTML = cartItems[2] || ''
    boughtItem4.innerHTML = cartItems[3] || ''
    boughtItem5.innerHTML = cartItems[4] || ''
    boughtItem6.innerHTML = cartItems[5] || ''
    boughtItem7.innerHTML = cartItems[6] || ''
    boughtItem8.innerHTML = cartItems[7] || ''

    boughtItem1price.innerHTML = cartPrices[0] || 0
    boughtItem2price.innerHTML = cartPrices[1] || 0
    boughtItem3price.innerHTML = cartPrices[2] || 0
    boughtItem4price.innerHTML = cartPrices[3] || 0
    boughtItem5price.innerHTML = cartPrices[4] || 0
    boughtItem6price.innerHTML = cartPrices[5] || 0
    boughtItem7price.innerHTML = cartPrices[6] || 0
    boughtItem8price.innerHTML = cartPrices[7] || 0
  }

  populateItems()

  // Display total

  function displayTotal () {
    const total = document.querySelector('.total')

    let sumOfAll =
            parseFloat(boughtItem1price.textContent) +
            parseFloat(boughtItem2price.textContent) +
            parseFloat(boughtItem3price.textContent) +
            parseFloat(boughtItem4price.textContent) +
            parseFloat(boughtItem5price.textContent) +
            parseFloat(boughtItem6price.textContent) +
            parseFloat(boughtItem7price.textContent) +
            parseFloat(boughtItem8price.textContent)

    total.innerHTML = 'Total: $' + sumOfAll.toFixed(2)
  }

  displayTotal()

  // Recently viewed items, images and text (localstorage)

  const recentItem1image = document.querySelector('#recent1image')
  const recentItem2image = document.querySelector('#recent2image')
  const recentItem3image = document.querySelector('#recent3image')
  const recentItem4image = document.querySelector('#recent4image')
  const recentItem5image = document.querySelector('#recent5image')

  recentItem1image.innerHTML = `<img class="recent-img" src="${recentImages[0]}" alt='' style="width: 100%; height: 120px">`
  recentItem2image.innerHTML = `<img class="recent-img" src="${recentImages[1]}" alt='' style="width: 100%; height: 120px">`
  recentItem3image.innerHTML = `<img class="recent-img" src="${recentImages[2]}" alt='' style="width: 100%; height: 120px">`
  recentItem4image.innerHTML = `<img class="recent-img" src="${recentImages[3]}" alt='' style="width: 100%; height: 120px">`
  recentItem5image.innerHTML = `<img class="recent-img" src="${recentImages[4]}" alt='' style="width: 100%; height: 120px">`

  const recentItem1text = document.querySelector('#recent1text')
  const recentItem2text = document.querySelector('#recent2text')
  const recentItem3text = document.querySelector('#recent3text')
  const recentItem4text = document.querySelector('#recent4text')
  const recentItem5text = document.querySelector('#recent5text')

  recentItem1text.innerHTML = `<p class="recent-item">${recentItems[0]}</p>`
  recentItem2text.innerHTML = `<p class="recent-item">${recentItems[1]}</p>`
  recentItem3text.innerHTML = `<p class="recent-item">${recentItems[2]}</p>`
  recentItem4text.innerHTML = `<p class="recent-item">${recentItems[3]}</p>`
  recentItem5text.innerHTML = `<p class="recent-item">${recentItems[4]}</p>`

  // Checkout button
  const boughtItems = [boughtItem1, boughtItem2, boughtItem3, boughtItem4, boughtItem5, boughtItem6, boughtItem7, boughtItem8]
  const boughtItemsPrices = [boughtItem1price, boughtItem2price, boughtItem3price, boughtItem4price, boughtItem5price, boughtItem6price, boughtItem7price, boughtItem8price]
  const checkoutButton = document.querySelector('.checkoutButton')

  checkoutButton.addEventListener('click', checkOut)

  function checkOut () {
    if (name.value.length > 0 &&
            address1.value.length > 0 &&
            city.value.length > 0 &&
            state.value.length > 0 &&
            zip.value.length > 0 &&
            email.value.length > 0 &&
            billName.value.length > 0 &&
            billAddress1.value.length > 0 &&
            billCity.value.length > 0 &&
            billState.value.length > 0 &&
            billZip.value.length > 0 &&
            billEmail.value.length > 0 &&
            creditName.value.length > 0 &&
            creditNumber.value.length === 16 &&
            creditCVV.value.length === 3 &&
            creditExpire.value.length === 5
    ) {
      alert('Your Order Is Complete! Thank you!')

      allBilling.forEach(element => {
        element.value = ''
      })
      allCredit.forEach(element => {
        element.value = ''
      })
      allShipping.forEach(element => {
        element.value = ''
      })
      boughtItems.forEach(element => {
        element.textContent = ''
      })
      boughtItemsPrices.forEach(element => {
        element.textContent = ''
      })
      numberInCart.textContent = '0 Items'
      localStorage.removeItem('cartItems')
      localStorage.removeItem('cartPrices')
      localStorage.removeItem('cartCount')
    } else {
      alert('Please fill out all fields')
    }
  }

  // Clear Buttons

  const clear1 = document.querySelector('#clearItem1')
  const clear2 = document.querySelector('#clearItem2')
  const clear3 = document.querySelector('#clearItem3')
  const clear4 = document.querySelector('#clearItem4')
  const clear5 = document.querySelector('#clearItem5')
  const clear6 = document.querySelector('#clearItem6')
  const clear7 = document.querySelector('#clearItem7')
  const clear8 = document.querySelector('#clearItem8')

  clear1.addEventListener('click', () => clearAndReplace(0))
  clear2.addEventListener('click', () => clearAndReplace(1))
  clear3.addEventListener('click', () => clearAndReplace(2))
  clear4.addEventListener('click', () => clearAndReplace(3))
  clear5.addEventListener('click', () => clearAndReplace(4))
  clear6.addEventListener('click', () => clearAndReplace(5))
  clear7.addEventListener('click', () => clearAndReplace(6))
  clear8.addEventListener('click', () => clearAndReplace(7))

  function clearAndReplace (idx) {
    if (cartItems.length > 0) {
      cartItems.splice(idx, 1)
      cartPrices.splice(idx, 1)
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      localStorage.setItem('cartPrices', JSON.stringify(cartPrices))
      populateItems()
      displayTotal()
    }

    if (cartCount > 0) {
      cartCount--
      localStorage.setItem('cartCount', JSON.stringify(cartCount))
      numberInCart.textContent = cartCount + ' Items'
    }
  }
}

module.exports = { checkoutFunction }
