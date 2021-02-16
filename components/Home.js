import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Text, View, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

import { fetchActions } from '../redux/actions/actions'

const Home = ({navigation}) => {

  // local state
  const [keyword, setKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('-- fetch actions --')
    dispatch(fetchActions())
  }, []);  

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="Type Here..."
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>         
    </View>
  )
}

export default Home;