  
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
    get_email:async(email)=>{
        let req = await fetch(`http://localhost:3000/users?email=${email}`);
        let res = await req.json();
        return res;
    },
 
  }
