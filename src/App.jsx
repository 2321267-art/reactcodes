function Button(){
  return (
      <>
      <button>Click Me</button>
      </>
  )
}


function App() {
  const myElement = <h5>Hello World</h5>

  const myElement2 = <h5>The Result of 5 + 5 is {5 + 5}
  </h5>

  const name = "Jerez Avelino"

  const age = 23

  return (
    <>
      {myElement}
      {myElement2}
      <h5>Hello, {name}</h5>
      <h5>I am {age} years old</h5>
      <Button/>
    </>
  )
}

export default App
