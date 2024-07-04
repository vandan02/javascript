const getdata=(data)=>{
    return document.getElementById(data).value
}

const createTag = (tagName, value) => {
    let tag = document.createElement(tagName)
    tagName == "img" ? tag.src = value : tag.innerHTML = value
    return tag
}
export {createTag}
export default getdata