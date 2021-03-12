const isMagicSquare = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[0][0] + arr[1][0] + arr[2][0] === 15 && arr[0][1] + arr[1][1] + arr[2][1] === 15 && arr[0][2] + arr[1][2] + arr[2][2] === 15 &&
        arr[0][0] + arr[0][1] + arr[0][2] === 15 && arr[1][0] + arr[1][1] + arr[1][2] === 15 && arr[2][0] + arr[2][1] + arr[2][2] === 15 &&
        arr[0][0] + arr[1][1] + arr[2][2] === 15 && arr[0][2] + arr[1][1] + arr[2][0] === 15) {  // désolé pour le pâté mais étant donné le timing, j'ai fais au plus simple
        return 'Je suis un carré magique'
      } else {
        return 'Je ne suis pas un carré magique'
      }
    }
  }
}


console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]))




  //(arr[0][0] + arr[1][0] + arr[2][0] === 15 && arr[0][0] + arr[0][1] + arr[0][2] === 15 && arr[0][0] + arr[1][1] + arr[2][2] === 15)