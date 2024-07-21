
export const userdata={
    post: async(data)=>{
        let req = await fetch(`http://localhost:3000/quize`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    get:async()=>{
        let req = await fetch(`http://localhost:3000/quize`);
        let res = await req.json();
        return res;
    },
   
    patch: async(id,data)=>{
        let req = await fetch(`http://localhost:3000/quize/${id}`,{
            method: 'PATCH',
            headers:{"content-type": "application/json"},
            body:json.stringify(data)
        });
    },
    delete: async(id)=>{
        let req = await fetch(`http://localhost:3000/quize/${id}`,{
            method: 'DELETE'
        });
    }
  }

