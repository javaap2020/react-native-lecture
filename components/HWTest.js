import React, { useCallback, useEffect, useState } from 'react';
import { Button, Platform, PermissionsAndroid  } from 'react-native';
import { Text, View } from 'react-native';

// https://github.com/Agontuk/react-native-geolocation-service
import Geolocation from 'react-native-geolocation-service';

const HWTest = () => {

  const [location, setLocation] = useState({});
  console.log("--location--");
  console.log(location);

  const requestPermissions = useCallback(async ()=>{
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
     });
    }
  
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }    
  }, [])

  const getLocation = useCallback(()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        console.log("--position--");
        console.log(position);
        setLocation(position.coords);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  useEffect(()=>{
    requestPermissions();
  }, [])

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Button color="tomato" onPress={()=>{getLocation()}} title="Get Location" />
      <Text>lat: {location.latitude}</Text>
      <Text>lng: {location.longitude}</Text>
    </View>
  )
}
export default HWTest;