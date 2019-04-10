const cardGenerator = require('./template')
const { inventory } = require('./data')

function init () {
  // DOM Variables
  const showAll = document.querySelectorAll('.all')
  const products = document.querySelector('.productListings')
  const showBeginners = document.querySelector('.beginner')
  const showSpecialties = document.querySelector('.specialty')
  const showFlowering = document.querySelector('.flowering')
  const showSales = document.querySelector('.sale')
  const lessThan25 = document.querySelector('.lessthan25')
  const lessThan50 = document.querySelector('.lessThan50')
  const lessThan75 = document.querySelector('.lessThan75')
  const lessThan100 = document.querySelector('.lessThan100')

  cardGenerator.render(products, inventory, inventory.length, 'all')

  // Event Listeners
  showAll.forEach(cell => cell.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'all')))
  showBeginners.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Beginner'))
  showSpecialties.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Specialty'))
  showFlowering.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Flowering'))
  showSales.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, 'Sale'))
  lessThan25.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [0, 25]))
  lessThan50.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [25, 50]))
  lessThan75.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [50, 75]))
  lessThan100.addEventListener('click', () => cardGenerator.render(products, inventory, inventory.length, [75, 100]))

  // cardGenerator.newCartItems()
}

module.exports = { init }
