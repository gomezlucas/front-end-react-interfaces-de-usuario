function findUserByEmail(users, email) {
  return users.find((user) => user.user.email === email);
}


export async function GET(req ) {
    try {
      const params = req.nextUrl.searchParams
      const emailUser = params.get("email");
      const passwordUser = params.get("password");

       const res = await fetch('http://localhost:8000/users');
       const users = await res.json();    
       console.log(users)
       const userExists = findUserByEmail(users,emailUser)
      
       console.log(userExists.user.password,passwordUser)
       if (!userExists || userExists.user.password !== passwordUser ){
        return new Response(JSON.stringify({error: "Usuario/Password inexistente"}), { status: 200 });
       }
        return new Response(JSON.stringify({userExists}), { status: 200 });
      
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 }); // Handle errors with proper status code
    }
  }


  export async function POST(req) {
    try {
      const {user} = await req.json();        
      const response = await fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({  user }),
        });    
        return new Response(JSON.stringify({ message: `User saved in database` }), { status: 200 });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to save user in database' }), { status: 500 }); // Handle errors with proper status code

      } 
    }