  
 export const userdata={
    post: async(data)=>{
        let req = await fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    get:async()=>{
        let req = await fetch(`http://localhost:3000/users`);
        let res = await req.json();
        return res;
    },
    get1:async(email)=>{
        let req = await fetch(`http://localhost:3000/users?email=${email}`);
        let res = await req.json();
        return res;
    },
    patch: async(id,data)=>{
        let req = await fetch(`http://localhost:3000/users/${id}`,{
            method: 'PATCH',
            headers:{"content-type": "application/json"},
            body:json.stringify(data)
        });
    },
    delete: async(id)=>{
        let req = await fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        });
    }
  }

