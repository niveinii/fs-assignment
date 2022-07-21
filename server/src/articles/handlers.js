import {data}from '../datasource/data'

export function getAllArticles(req,res){
    // mock DB call
    res.send(data)
}

export function getArticleById(req,res){
    const {id} = req.params
    const filteredId = data.find((a) => a.id === parseInt(id))
    res.send(filteredId)
}