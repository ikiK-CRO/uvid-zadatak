const inputEl = document.querySelector('input')
const resultEl = document.querySelector('#result')
const morph = document.querySelector('#morph')

document.querySelector('#test').addEventListener('click', e => {
  const arr = inputEl.value.split(' ')

  morph.classList.add('morph-inset')

  setTimeout(function () {
    morph.classList.remove('morph-inset')
  }, 200)

  validate(inputEl.value) == true
    ? doMath(arr)
    : ((resultEl.innerHTML =
        ' <i class="fa fa-exclamation-triangle fa-fw" aria-hidden="true"></i> Dozvoljeni format je niz cjelih brojeva podijeljen s jednim razmakom.'),
      resultEl.classList.remove('alert-info', 'alert-success'),
      resultEl.classList.add('alert-error'))
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
      resultEl.innerHTML =
        '<i class="fa fa-info-circle" aria-hidden="true"></i> Rezultata: 0'
      resultEl.classList.remove('alert-error', 'alert-success')
      resultEl.classList.add('alert-info')
    } else {
      resultEl.innerHTML =
        '<i class="fa fa-check-circle" aria-hidden="true"></i> Rezultat: ' +
        result
      resultEl.classList.remove('alert-error', 'alert-info')
      resultEl.classList.add('alert-success')
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
