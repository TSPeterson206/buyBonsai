(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const inventory = [
  {
    title: 'Gensing Grafted Ficus',
    img: 'https://www.flowerbud.com/sites/default/files/flowers/ggf_0.png',
    description: 'New to the Bonsai world?  Our Gensing Grafted Ficus Bonsai Tree is perfect for beginners.  It is an indoor Bonsai that does well in any light condition. ',
    price: 24.99,
    category: 'Beginner',
    stars: 3,
    id: 1
  },
  {
    title: 'Money Tree Bonsai',
    img: 'https://www.flowerbud.com/sites/default/files/flowers/MoneyTree.jpg',
    description: 'The Money Tree is an age-old sign of good luck and an invitation to good fortune.  It is also said that it brings prosperity and wealth.  With that, what a great gift idea for a loved ones home, office or dorm room.',
    price: 79.99,
    category: 'Specialty',
    stars: 4,
    id: 2
  },
  {
    title: 'Fringe Flower Bonsai',
    img: 'https://www.flowerbud.com/sites/default/files/flowers/FringeFlower.jpg',
    description: 'Pink Blooms explode in the month of April on our Fringe Flower Bonsai.  This flowering Bonsai Tree would be a perfect addition to your outdoor patio or deck.',
    price: 45.99,
    category: 'Flowering',
    stars: 5,
    id: 3
  },
  {
    title: 'Juniper Bonsai',
    img: './bonsai-1.jpg',
    description: 'Our Juniper Tree leaves are needle-like, the plant is most often grown in the same classic Bonsai styles as the pine. Our Juniper has a wonderful fragrance.',
    price: 19.99,
    category: 'Beginner',
    stars: 4,
    id: 4
  },
  {
    title: 'Satsuki Azalea Bonsai',
    img: 'https://www.flowerbud.com/sites/default/files/ad/main/SatsukiAzalea.jpg',
    description: 'An outdoor, easy to care for, a perfect choice for the beginner Bonsai enthusiast.  The Satsuki Azalea Bonsai blooms in late spring, producing beautiful pink flowers for one special month.',
    price: 68.99,
    category: 'Flowering',
    stars: 3,
    id: 5

  },
  {
    title: 'Chinese Elm',
    img: 'https://www.flowerbud.com/sites/default/files/flowers/file_1_6_0.png',
    description: 'Our Chinese Elm Bonsai trees are imported to the US from Chinese nurseries.  The branches have been trained for years.',
    price: 99.99,
    category: 'Specialty',
    stars: 5,
    id: 6
  },
  {
    title: 'Miniature Golden Gate Ficus',
    img: 'https://www.easternleaf.com/v/vspfiles/photos/801620-03-1.jpg',
    description: 'Like many ficus bonsai trees, the Golden Gate Ficus Bonsai Tree or Taiwan Ficus Bonsai Tree can be kept both indoors and outdoors, and is also one of the most hardy species.',
    price: 13.95,
    category: 'Sale',
    stars: 3,
    id: 7
  },
  {
    title: 'Japanese Maple',
    img: 'https://www.easternleaf.com/v/vspfiles/photos/807850-03-1.jpg',
    description: 'This unique variety of Japanese Maple is sometimes called a full moon maple and features a burnt-orange and gold shade when exposed to more sun.',
    price: 18.95,
    category: 'Sale',
    stars: 4,
    id: 8
  },
  {
    title: 'Ponytail Palm',
    img: 'https://cdn1.bigcommerce.com/server4100/6ys4nr/products/274/images/6656/PonyTail__52958.1447701073.190.285.jpg?c=2',
    description: 'The Ponytail Palm is a native of Southeastern Mexico and despite its name, isn’t actually a Palm at all (it’s actually a Lily, we just haven’t had the heart to tell it).',
    price: 21.95,
    category: 'Sale',
    stars: 5,
    id: 9
  }
]

module.exports = {
  inventory
}
},{}],2:[function(require,module,exports){
const { inventory } = require('./data');
const products = require('./products')
const scriptcheck = require('./scriptcheck')
const cardGenerator = require('./template');
const numberInCart = document.querySelector('.number-in-cart')
let cartCount = Number(localStorage.getItem('cartCount'))
let recentImages = JSON.parse(localStorage.getItem('recentImages')) || false
let recentItems = JSON.parse(localStorage.getItem('recentItems')) || false


if (!recentImages && !recentItems) {
    localStorage.setItem('recentImages', JSON.stringify(['#', '#', '#', '#', '#']))
    localStorage.setItem('recentItems', JSON.stringify(['', '', '', '', '']))
}

if (cartCount) {
    numberInCart.textContent = cartCount + ' Items'
}

const onSaleFooter = document.querySelector('.on-sale-footer')

const onSale = inventory.filter ( bonsai => bonsai.category === 'Sale' )

function saleFooterTemplate ( {title, price} ) {
    return `<li>${title}, ${price}</li>`
}

const onSaleStrings = onSale.map( bonsai => saleFooterTemplate(bonsai))

const onSaleHTML = onSaleStrings.join('')

onSaleFooter.innerHTML = onSaleHTML

if (window.location.pathname === '/') {
    const homePageProducts = document.querySelector('.newArrivals')
    cardGenerator.render(homePageProducts, inventory, 3, "all");
    //products on the homepage can also be added to the cart
    cardGenerator.newCartItems()
}

else if (window.location.pathname === '/products.html') {
    products.init()
}

else if (window.location.pathname === '/checkout.html') {
    scriptcheck.checkoutFunction()
}
},{"./data":1,"./products":3,"./scriptcheck":4,"./template":5}],3:[function(require,module,exports){
const cardGenerator = require('./template');
const { inventory } = require('./data');

function init() {
    //DOM Variables
    const showAll = document.querySelectorAll('.all');
    const products = document.querySelector('.productListings');
    const showBeginners = document.querySelector('.beginner');
    const showSpecialties = document.querySelector('.specialty');
    const showFlowering = document.querySelector('.flowering');
    const showSales = document.querySelector('.sale');
    const lessThan25 = document.querySelector('.lessthan25');
    const lessThan50 = document.querySelector('.lessThan50');
    const lessThan75 = document.querySelector('.lessThan75');
    const lessThan100 = document.querySelector('.lessThan100')


    cardGenerator.render(products, inventory, inventory.length, 'all');

    //Event Listeners
    showAll.forEach(cell => cell.addEventListener("click", () => cardGenerator.render(products, inventory, inventory.length, 'all')));
    showBeginners.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Beginner'));
    showSpecialties.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Specialty'));
    showFlowering.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Flowering'));
    showSales.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Sale'));
    lessThan25.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [0, 25]));
    lessThan50.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [25, 50]));
    lessThan75.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [50, 75]));
    lessThan100.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [75, 100]));

    //cardGenerator.newCartItems()
}




module.exports = { init }
},{"./data":1,"./template":5}],4:[function(require,module,exports){
function checkoutFunction() {

    // Shipping and Billing variables

    const name = document.querySelector('#shipName');
    const address1 = document.querySelector('#shipAdd1');
    const address2 = document.querySelector('#shipAdd2');
    const city = document.querySelector('#shipCity');
    const state = document.querySelector('#shipState');
    const zip = document.querySelector('#shipZip');
    const email = document.querySelector('#shipEmail');

    const allShipping = [name, address1, address2, city, state, zip, email]

    const billName = document.querySelector('#billName');
    const billAddress1 = document.querySelector('#billAdd1');
    const billAddress2 = document.querySelector('#billAdd2');
    const billCity = document.querySelector('#billCity');
    const billState = document.querySelector('#billState');
    const billZip = document.querySelector('#billZip');
    const billEmail = document.querySelector('#billEmail');

    var checkBox = document.querySelector('#copyToBilling');

    var allBilling = [billName, billAddress1, billAddress2, billCity, billState, billZip, billEmail]
    // Billing info copy event listener and function
    checkBox.addEventListener('change', billingCopy)

    function billingCopy() {
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
                element.value = ""
            });
        }
    }

    // Info event listener and function
    const subButton1 = document.querySelector('.infoSubmit')

    subButton1.addEventListener('click', giveInfoResult)

    function giveInfoResult() {
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
        ) alert("Thank You! Please proceed.")

        else {
            alert("Please fill out all fields in both the shipping and billing forms. If the billing information is identical to the shipping address, feel free to click on the checkbox to fill it in automatically")
        }
    }
    //Credit Card event listener and function

    const creditName = document.querySelector('.creditName')
    const creditNumber = document.querySelector('.creditNumber')
    const creditCVV = document.querySelector('.creditCVV')
    const creditExpire = document.querySelector('.creditExpire')
    const subButton2 = document.querySelector('.creditSubmit')
    const allCredit = [creditName, creditNumber, creditCVV, creditExpire]

    subButton2.addEventListener('click', giveCreditResult)

    function giveCreditResult() {
        if (creditName.value.length > 0 &&
            creditNumber.value.length === 16 &&
            creditCVV.value.length === 3 &&
            creditExpire.value.length === 5) {
            alert("Thank you!")
        } else {
            alert("Please complete all credit card info before proceeding")
        }
    };


    //Cart items, prices, and images from local storage

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    let cartPrices = JSON.parse(localStorage.getItem('cartPrices')) || []
    let cartCount = Number(localStorage.getItem('cartCount'))
    const numberInCart = document.querySelector('.number-in-cart')
    let recentImages = JSON.parse(localStorage.getItem('recentImages'))
    let recentItems = JSON.parse(localStorage.getItem('recentItems'))

    //Cart items and prices

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

    function populateItems() {
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

    populateItems();

    //Display total

    function displayTotal() {

        const total = document.querySelector('.total')

        let sumOfAll =
            parseFloat(boughtItem1price.textContent) +
            parseFloat(boughtItem2price.textContent) +
            parseFloat(boughtItem3price.textContent) +
            parseFloat(boughtItem4price.textContent) +
            parseFloat(boughtItem5price.textContent) +
            parseFloat(boughtItem6price.textContent) +
            parseFloat(boughtItem7price.textContent) +
            parseFloat(boughtItem8price.textContent);

        total.innerHTML = "Total: $" + sumOfAll.toFixed(2)
    }

    displayTotal()

        //Recently viewed items, images and text (localstorage)

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
    
    


    //Checkout button
    const boughtItems = [boughtItem1, boughtItem2, boughtItem3, boughtItem4, boughtItem5, boughtItem6, boughtItem7, boughtItem8]
    const boughtItemsPrices = [boughtItem1price, boughtItem2price, boughtItem3price, boughtItem4price, boughtItem5price, boughtItem6price, boughtItem7price, boughtItem8price]
    const checkoutButton = document.querySelector('.checkoutButton')

    checkoutButton.addEventListener('click', checkOut)

    function checkOut() {

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
            alert("Your Order Is Complete! Thank you!");

            allBilling.forEach(element => {
                element.value = ""
            });
            allCredit.forEach(element => {
                element.value = ""
            });
            allShipping.forEach(element => {
                element.value = ""
            });
            boughtItems.forEach(element => {
                element.textContent = ""
            });
            boughtItemsPrices.forEach(element => {
                element.textContent = ""
            });
            numberInCart.textContent = '0 Items'
            localStorage.removeItem('cartItems')
            localStorage.removeItem('cartPrices')
            localStorage.removeItem('cartCount')

        } else {
            alert("Please fill out all fields")
        }
    }

    //Clear Buttons

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


    function clearAndReplace(idx) {
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

},{}],5:[function(require,module,exports){
const { inventory } = require('./data');

const cardTemplate = ({ id, img, title, description, price, category, stars }) => {
  return `
      <div class="card m-3 border" style="min-width: 25%; ;">
          <img class="card-img-top productPic" src="${img}" alt="${title}" style="width: 100%;">
          <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${description}</p>
        </div>
        <div class="card-footer priceBar">
        <p class = "priceText">$${price}</p>
        </div>
        <div class="card-footer text-muted">
        <button data-id="${id}" type="button" class="btn btn-secondary cart-button">Add To Cart</button>
        </div>
        <div class="card-footer dataBar">
        <p class = "productInfo">RATED: <strong>${stars} STARS</strong></p>
        <p class = "productInfo">CATEGORY: <strong>${category}</strong></p>
    </div>
      </div>
    `
}

const rowTemplate = (item) => {
  return `
      <div class="row">
        <div class="col">
          <div class="card-deck justify-content-around">
            ${item}
          </div>
        </div>
      </div>
    `
}

const generateList = (arr, filter) => {
  const productList = [];
  if (filter === 'all') {
    return arr;
  } else {
    for (products of arr) {
      if (products.category === filter) {
        productList.push(products)
      }
    }
    return productList;
  }
}

const generateListPrice = (arr, range) => {
  const productList = [];
  for (products of arr) {
    if (products.price >= range[0] && products.price <= range[1]) {
    productList.push(products)
    }
  }
  return productList;
}

const generateCards = (trees, num) => {
  let cardList = [];
  if (trees.length <= num) {
    for (let i = 0; i < trees.length; i++) {
      cardList.push(cardTemplate(trees[i]))
    }
  } else {
  for (let i = 0; i < num; i++) {
    cardList.push(cardTemplate(trees[i]))
  }
}
  return cardList
}

const render = (container, products, num, filter) => {
  if (typeof filter !== "string") {
    const productList = generateListPrice(products, filter);
    const cards = generateCards(productList, num);
    const cardRow = rowTemplate(cards.join('\n'));
    container.innerHTML = cardRow;
    newCartItems()
  } else {
    const productList = generateList(products, filter)
    const cards = generateCards(productList, num);
    const cardRow = rowTemplate(cards.join('\n'));
    container.innerHTML = cardRow;
    newCartItems()
  }
}


function newCartNumber() {
  const numberInCart = document.querySelector('.number-in-cart')
  let cartCount = Number(localStorage.getItem('cartCount'))

  if (cartCount) {
      cartCount++
      localStorage.setItem('cartCount', cartCount)
  }
  else {
      cartCount++
      localStorage.setItem('cartCount', 1)
  }
  numberInCart.textContent = cartCount + ' Items'
}

function newCartItems() {
  const cartButtons = document.querySelectorAll('.cart-button')
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
  let cartPrices = JSON.parse(localStorage.getItem('cartPrices')) || []
  let recentImages = JSON.parse(localStorage.getItem('recentImages'))
  let recentItems = JSON.parse(localStorage.getItem('recentItems'))

  for (button of cartButtons) {
      button.addEventListener('click', function (event) {
          newCartNumber()
          //add partciular item to local storage
          for (item of inventory) {
              if (item.id === Number(event.target.getAttribute('data-id'))) {
                  cartItems.push(item.title)
                  cartPrices.push(item.price)
                  recentImages.pop()
                  recentItems.pop()
                  recentImages.unshift(item.img)
                  recentItems.unshift(item.title)
              }
          }
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
          localStorage.setItem('cartPrices', JSON.stringify(cartPrices))
          localStorage.setItem('recentImages', JSON.stringify(recentImages))
          localStorage.setItem('recentItems', JSON.stringify(recentItems))
      })
  }
}

module.exports = {
  render,
  newCartItems
}
},{"./data":1}]},{},[2]);
