export async function GET() {
    try {
      const res = await fetch('http://localhost:8000/sales');
      const sales = await res.json();    
      return new Response(JSON.stringify({ sales }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 }); // Handle errors with proper status code
    }
  }
