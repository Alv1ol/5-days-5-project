const board = document.querySelector('#board')
const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARE_NUMBER = 500

for (let i = 0; i < SQUARE_NUMBER; i++){ 
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => { 
    setColor(square)
  })

  square.addEventListener('mouseleave', () => { 
    removeColor(square)
  })

  board.append(square)
}

function setColor(element){ 
  const color = getRandomColor()
  element.style.backgroundColor = color
}

function removeColor(element){ 
  element.style.backgroundColor = '#1d1d1d'
}

function getRandomColor(){ 
  const index = Math.floor(Math.random() * color.length)
  return color[index]
}