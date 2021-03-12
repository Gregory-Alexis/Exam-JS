const average = arrNum => {
  let add = 0
  for (let i = 0; i < arrNum.length; i++) {
    add += arrNum[i]
  }
  let resultat = add / arrNum.length
  return resultat
}


console.log(average([2, 6]))