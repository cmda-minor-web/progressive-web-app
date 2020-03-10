import filter from './modules/filter.mjs'

const filterButtons = document.querySelectorAll('#filters label')
filterButtons.forEach(filterButton => filterButton.addEventListener('click', e => filter(e.target)))