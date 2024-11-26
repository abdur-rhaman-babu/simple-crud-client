import "./App.css";

function App() {
  const handleAddUser = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value
    const user = {name, email}
    console.log(user)
    fetch('http://localhost:8000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" />
          <br />
          <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
