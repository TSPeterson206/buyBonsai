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

// Recently viewed items, images and text (localstorage)

const recentItem1image = document.querySelector('#recent1image')
const recentItem2image = document.querySelector('#recent2image')
const recentItem3image = document.querySelector('#recent3image')
const recentItem4image = document.querySelector('#recent4image')
const recentItem5image = document.querySelector('#recent5image')

recentItem1image.innerHTML = localStorage.getItem('recentImageFirst')
recentItem2image.innerHTML = localStorage.getItem('recentImageSecond')
recentItem3image.innerHTML = localStorage.getItem('recentImageThird')
recentItem4image.innerHTML = localStorage.getItem('recentImageFourth')
recentItem5image.innerHTML = localStorage.getItem('recentImageFifth')

const recentItem1text = document.querySelector('#recent1text')
const recentItem2text = document.querySelector('#recent2text')
const recentItem3text = document.querySelector('#recent3text')
const recentItem4text = document.querySelector('#recent4text')
const recentItem5text = document.querySelector('#recent5text')

recentItem1text.innerHTML = localStorage.getItem('recentTextFirst')
recentItem2text.innerHTML = localStorage.getItem('recentTextSecond')
recentItem3text.innerHTML = localStorage.getItem('recentTextThird')
recentItem4text.innerHTML = localStorage.getItem('recentTextFourth')
recentItem5text.innerHTML = localStorage.getItem('recentTextFifth')

// Cart items

const boughtItem1 = document.querySelector('.boughtItem1')
const boughtItem2 = document.querySelector('.boughtItem2')
const boughtItem3 = document.querySelector('.boughtItem3')
const boughtItem4 = document.querySelector('.boughtItem4')
const boughtItem5 = document.querySelector('.boughtItem5')
const boughtItem6 = document.querySelector('.boughtItem6')
const boughtItem7 = document.querySelector('.boughtItem7')
const boughtItem8 = document.querySelector('.boughtItem8')

boughtItem1.value = localStorage.getItem('boughtItem1')
boughtItem2.value = localStorage.getItem('boughtItem2')
boughtItem3.value = localStorage.getItem('boughtItem3')
boughtItem4.value = localStorage.getItem('boughtItem4')
boughtItem5.value = localStorage.getItem('boughtItem5')
boughtItem6.value = localStorage.getItem('boughtItem6')
boughtItem7.value = localStorage.getItem('boughtItem7')
boughtItem8.value = localStorage.getItem('boughtItem8')

const boughtItems = [boughtItem1, boughtItem2, boughtItem3, boughtItem4, boughtItem5, boughtItem6, boughtItem7, boughtItem8]

// Cart prices

const boughtItem1price = document.querySelector('.boughtItem1price')
const boughtItem2price = document.querySelector('.boughtItem2price')
const boughtItem3price = document.querySelector('.boughtItem3price')
const boughtItem4price = document.querySelector('.boughtItem4price')
const boughtItem5price = document.querySelector('.boughtItem5price')
const boughtItem6price = document.querySelector('.boughtItem6price')
const boughtItem7price = document.querySelector('.boughtItem7price')
const boughtItem8price = document.querySelector('.boughtItem8price')

boughtItem1price.value = localStorage.getItem('boughtItem1price')
boughtItem2price.value = localStorage.getItem('boughtItem2price')
boughtItem3price.value = localStorage.getItem('boughtItem3price')
boughtItem4price.value = localStorage.getItem('boughtItem4price')
boughtItem5price.value = localStorage.getItem('boughtItem5price')
boughtItem6price.value = localStorage.getItem('boughtItem6price')
boughtItem7price.value = localStorage.getItem('boughtItem7price')
boughtItem8price.value = localStorage.getItem('boughtItem8price')

// Checkout button and total function

const checkoutButton = document.querySelector('.checkoutButton')
const total = document.querySelector('.total')
const boughtItemsPrices = [boughtItem1price, boughtItem2price, boughtItem3price, boughtItem4price, boughtItem5price, boughtItem6price, boughtItem7price, boughtItem8price]

checkoutButton.addEventListener('click', checkOut)

boughtItemsPrices.forEach(element => {
  element.value = element.value || 0
})

let sumOfAll =
    parseInt(boughtItem1price.value) +
    parseInt(boughtItem2price.value) +
    parseInt(boughtItem3price.value) +
    parseInt(boughtItem4price.value) +
    parseInt(boughtItem5price.value) +
    parseInt(boughtItem6price.value) +
    parseInt(boughtItem7price.value) +
    parseInt(boughtItem8price.value)

total.innerHTML = 'Total: $' + sumOfAll

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
    boughtItems.forEach(element => {
      element.value = ''
    })
    boughtItemsPrices.forEach(element => {
      element.value = ''
    })
    allShipping.forEach(element => {
      element.value = ''
    })
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

clear1.addEventListener('click', () => clearAndReplace(boughtItem1, boughtItem1price))
clear2.addEventListener('click', () => clearAndReplace(boughtItem2, boughtItem2price))
clear3.addEventListener('click', () => clearAndReplace(boughtItem3, boughtItem3price))
clear4.addEventListener('click', () => clearAndReplace(boughtItem4, boughtItem4price))
clear5.addEventListener('click', () => clearAndReplace(boughtItem5, boughtItem5price))
clear6.addEventListener('click', () => clearAndReplace(boughtItem6, boughtItem6price))
clear7.addEventListener('click', () => clearAndReplace(boughtItem7, boughtItem7price))
clear8.addEventListener('click', () => clearAndReplace(boughtItem8, boughtItem8price))

function clearAndReplace (a, b) {
  a.value = ''; b.value = ''
}
