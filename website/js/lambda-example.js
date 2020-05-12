async function getLambdaResult() {
  const r = await fetch("/.netlify/functions/example")
  const response = await r.json() // convert response to JSON 
  console.log(response)
}

getLambdaResult()
