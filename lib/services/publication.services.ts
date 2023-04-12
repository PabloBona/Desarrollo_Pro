import axios from "../helpers/axios.helper.";
import useSWR from 'swr';

//get publications
function usePublications(){
    const {data,error,isLoading,mutate } = useSWR('/publications')
    return{
        data,
        error,
        isLoading,
        mutate,
    }
}

/*function useJson (){
    return(
        axios.get('./publi.json')
        .then(res=>res.data)
    )
}*/

//post publications
function createPublication (data:any) {
    return axios.post('/publications',data)
}

//delete publications
function deletePublications (id:any) {
    return axios.post('/publications',id)
}

//update publications
function updatePublications (data:any,id:any) {
    return axios.patch('/publications',id,data) 
}

/*
function getPublications (){
    return axios.get('/publications')
}*/

export { usePublications, createPublication, }