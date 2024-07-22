  
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

  const createTag = (tagName, value) => {
    let tag = document.createElement(tagName)
    tagName == "img" ? tag.src = value : tag.innerHTML = value
    return tag
}
export {createTag}

export const nav=()=>{
    const nav=(login = "login", signup = "signup")=>{
        return ``
    }
}
