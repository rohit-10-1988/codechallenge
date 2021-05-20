import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Fetchdata} from '../action/index'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Storydata = () => {

    const dispatch = useDispatch()
    const post = useSelector((state) => state)
    useEffect( ()=>{
         dispatch(Fetchdata())
    },[])
    return ( <> 
        
        <List>
        {post.fetchData.map((item)=>
        { return  <ListItem key={item.id}>
                  <ListItemText
                    primary={<Typography  style={{ fontSize:'20px', color: '#000' }}>{item.title}</Typography>}
                    secondary={<Typography type="body2" style={{ color: 'purple' }}>Comment : {item.descendants}</Typography>}
                  />
                </ListItem>})}
        </List>
        
        </>)
   
}



export default Storydata