import React, { useEffect, useState, useCallback } from 'react';

// https://reactnativeelements.com/docs
import { ListItem } from 'react-native-elements'

import api from '../api/list'

const SearchList = ({ navigation, keyword }) => {
  
  const [list, setList] = useState([]);
  console.log("--search list--")
  console.log(list)

  console.log("--keyword--")
  console.log(keyword)

  const getSearch = useCallback(async (keyword) => {
    if(keyword && keyword.length > 1) {
      const result = await api.search(keyword);
      console.log(result);
      setList(result.data);
    }
  }, [])
  
  useEffect(()=> {
    getSearch(keyword);
  }, [keyword]);
  
  if(keyword && keyword.length > 1){
    return(
      list.map((item, i) => (
        <ListItem containerStyle={{width:"80%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('Details', {id: item.id})}}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
    )  
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;