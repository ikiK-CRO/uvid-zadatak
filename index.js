document.querySelector('#test').addEventListener('click', e => {
  //document.querySelector('input').value
  const arr = [5,3,9,8]
  let i = 1
  const loop = arr.length - i
  let result = []

  for (i; i < loop; i++) {
    //console.log(arr[i])
    const right = arr.slice(i + 1)
    const left = arr
      .slice()
      .reverse()
      .slice(-i)

    if (sumarr(right) === sumarr(left)) {
      result.push(i)
    }
    document.querySelector('#result').innerHTML = result
  }
})

let sumarr = ar => {
  let res = 0
  ar.forEach(s => {
    res += s
  })
  return res
}
