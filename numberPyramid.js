const pyramid = (base) => {

  for (let i = 0; i <= base; ++i) {
    console.log(`${i}`.repeat(i))

  }
}

pyramid(9)