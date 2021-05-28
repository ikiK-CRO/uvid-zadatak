document.querySelector('#test').addEventListener('click', e => {
  //document.querySelector('input').value
  const arr = [3,2,1,1,3,3]
  
  let result = []

  for (let i = 1; i < arr.length - 1; i++) {
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
