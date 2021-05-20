import {FETCH_DATA} from '../constant'
import axios from 'axios'

const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
const topstories = `${baseUrl}topstories.json`
const storyUrl = `${baseUrl}item/`


export const Fetchdata = () => {

        var stories=[]
        return async (dispatch) => {
        const res = await axios.get(topstories).then(({data})=> data);
        const results = res.slice(0,10)
        results.forEach(async (id)=>{
            const newres = await axios.get(`${storyUrl + id}.json`).then(({data})=> data)
            stories.push(newres)
            if(stories.length === results.length){
                dispatch({
                    type:FETCH_DATA,
                    payload: stories
                })
            }

        })

    }

}