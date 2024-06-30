export async function GET() {
    try {
      const res = await fetch('http://localhost:8000/users');
      const users = await res.json();    
      return new Response(JSON.stringify({ users }), { status: 200 });
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