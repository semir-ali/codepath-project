const header = document.querySelector('header')

// Creates a header with logo, title, and home button
  const headerContainer = document.createElement('div')
  headerContainer.className = 'header-container'

  const headerLeft = document.createElement('div')
  headerLeft.className = 'header-left'

  const img = document.createElement('img')
  img.src = '/assets/rhode_island.png'
  img.alt = 'Events In Rhode Island logo'
  img.style.height = '56px'
  img.style.width = '56px'
  img.style.objectFit = 'cover'
  img.style.borderRadius = '4px'
  img.style.marginRight = '8px'
  img.style.placeContent = 'center'

  const h1 = document.createElement('h1')
  h1.textContent = 'Events In Rhode Island'

  headerLeft.appendChild(img)
  headerLeft.appendChild(h1)

  const headerRight = document.createElement('div')
  headerRight.className = 'header-right'

  const headerButton = document.createElement('button')
  headerButton.textContent = 'Home'

  headerButton.addEventListener('click', function () {
    window.location = '/'
  })

  headerRight.appendChild(headerButton)

  headerContainer.appendChild(headerLeft)
  headerContainer.appendChild(headerRight)

  header.appendChild(headerContainer)