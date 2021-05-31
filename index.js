const inputEl = document.querySelector('input')
const resultEl = document.querySelector('#result')

document.querySelector('#test').addEventListener('click', e => {
  const arr = inputEl.value.split(' ')
  validate(inputEl.value) == true
    ? doMath(arr)
    : (resultEl.innerHTML =
        'Dozvoljeni format je niz cjelih brojeva podjeljen s jednim razmakom.')
})

const validate = val => {
  if (/^([0-9]+ )+[0-9]+$|^[0-9]]+$/.test(val)) {
    // dozvoljeni samo cjeli brojevi s jednim razmakom isključivo između brojeva
    return true
  } else {
    return false
  }
}

const doMath = arr => {
  let result = [] // array pošto je dozvoljena 0 kao cjeli broj, primjer: 5 3 0 0 8 - rezultat 2 i 3

  for (let i = 1; i < arr.length - 1; i++) {
    const right = arr.slice(i + 1)
    const left = arr
      .slice()
      .reverse()
      .slice(-i)

    if (sumArr(right) === sumArr(left)) {
      result.push(i)
    }
    if (result.length == 0) {
      resultEl.innerHTML = 'Rezultata: 0'
    } else {
      resultEl.innerHTML = 'Rezultat: ' + result
    }
  }
}

const sumArr = ar => {
  let res = 0
  ar.forEach(val => {
    res += parseInt(val)
  })
  return res
}
