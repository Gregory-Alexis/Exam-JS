const information = (prenom, nom, age) => {
  if (age >= 18) {
    console.log(`prénom: ${prenom}`)
    console.log(`nom: ${nom}`)
    console.log(`age: ${age} ans`)
    console.log('Vous êtes majeur depuis ' + (age - 18) + ' ans')
  } else {
    console.log(`prénom: ${prenom}`)
    console.log(`nom: ${nom}`)
    console.log(`age: ${age} ans`)
    console.log('Vous serez majeur dans ' + (18 - age) + ' ans')
  }
}

information('Grégory', 'Alexis', 33)