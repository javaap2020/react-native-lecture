import React, { useCallback, useEffect, useState } from 'react';
import { Button, Platform, PermissionsAndroid  } from 'react-native';
import { Text, View } from 'react-native';

// https://github.com/Agontuk/react-native-geolocation-service
import Geolocation from 'react-native-geolocation-service';

// https://react-native-sensors.github.io/docs/Installation.html
// https://react-native-sensors.github.io/docs/API.html
import { accelerometer, setUpdateIntervalForType, SensorTypes } from "react-native-sensors";

const HWTest = () => {
  const [location, setLocation] = useState({});
  console.log("--location--");
  console.log(location);

  // 위치정보 권한요청 메소드
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

    setUpdateIntervalForType(SensorTypes.accelerometer, 1000); // 1000ms
    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
      console.log({ x, y, z, timestamp })
    );
    
    // unmounting 됐을 실행되는 clean-up 함수
    return (()=> {
      subscription.remove();
    })
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