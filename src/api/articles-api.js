const axios = require('axios').default;

export async function getAllArticles(){
    const res = await axios.get('http://localhost:5050/articles')
    const {data} = res
    return data
}

export async function getArticleById(id){
    const res = await axios.get(`http://localhost:5050/articles/${id}`)
    const {data} = res
    return data
}