async function getUsers(){
    const response = await fetch('https://reqres.in/api/users')
  var x = await response.json();

    console.log(x);
    
}
getUsers();