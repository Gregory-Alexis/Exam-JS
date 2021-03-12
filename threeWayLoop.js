const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

/* for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
} */


/* for (elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
} */

tab.forEach(elem => console.log(`${elem}, length: ${elem.length}`))