const guess = (userGuess, secret) => {
  if (userGuess < secret) {
    console.log('Too Small')
  }
  else if (userGuess > secret) {
    console.log('Too big!')
  }
  else if (userGuess === secret) {
    console.log('You win !')
  }
}

guess(24, 24)