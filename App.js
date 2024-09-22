import { s } from "./App.style";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { Posts } from "./pages/Posts/Posts";
import { FocusNews } from "./pages/FocusNews/FocusNews.jsx";
import { NewsDetail } from "./pages/NewsDetail/NewsDetail.jsx";
import { SectionLists } from "./pages/SectionLists/SectionLists.jsx";
import { Forecasts } from "./pages/Forecasts/Forecasts.jsx";
import { Alert, ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import { useEffect, useState, useReducer} from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { StatusBar } from "react-native";
import { actionCreators, initialState, reducer } from "./utils/posts-utils.js";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    // subscribeToNotifications();
    // App is in background or killed and then the notification is pressed
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(
        "addNotificationResponseReceivedListener",
        response.notification.request.content.data
      );
    });
    // App is opened and notification and is received
    Notifications.addNotificationReceivedListener((notification) => {
      console.log(
        "addNotificationReceivedListener",
        notification.request.content.data
      );
    });
    getUserCoordinates();
  }, []);

  useEffect(() => {
     dispatch(actionCreators.loading())
     const timer = setTimeout(() => {
      if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
    }, 1000); 
  }, [coordinates]);

  async function subscribeToNotifications() {
    let token;
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Failed to get permissions");
          return;
        }
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig.extra.projectId,
        })
      ).data;
      // Send the token to the backend for it to store
      console.log("Token EXPO", token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  const handleRetryPress = () => {
    dispatch(actionCreators.loading())
    const timer = setTimeout(() => {
      if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
    }, 1000); 
    console.log("retry tapped")
  };

  async function fetchWeatherByCoords(coords) {
    try {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
    console.log("weatherResponse",weatherResponse )
    }catch (err) {
      Alert.alert("Aouch !", err);
    }
  }

  async function fetchCityByCoords(coords) {
    try {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
    } catch (err) {
      Alert.alert("Aouch !", err);
    }
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsByCity(city);
      setCoordinates(coordsResponse);
    } catch (err) {
      Alert.alert("Aouch !", err);
    }
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "48.85", lng: "2.35" });
    }
  }

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar translucent backgroundColor="blue" />
      <ImageBackground
        imageStyle={s.img}
        style={s.img_background}
        source={backgroundImg}
      >
        <SafeAreaProvider>
          {/* <SafeAreaView style={s.container}> */}
            {isFontLoaded && weather && (
              <Stack.Navigator
                screenOptions={{
                  // headerTransparent: true,
                  headerShown: true,
                  animation: "fade",
                  // headerTitle: "HOME",
                  headerTintColor: "white",
                  headerBackTitleVisible: false,
                  animationDuration: 20,
                  headerStyle: {
                    backgroundColor: 'transparent',  // Set your desired background color
                  },
                  headerTitleStyle: {
                    fontWeight: 'bold',         // Optional: Set title font style
                    fontSize: 22,
                  },
                }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home" options={{ title: "" }}>
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCoordsByCity}
                    />
                  )} 
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} options={{ title: "FORECASTS" }} />
                <Stack.Screen name="Posts" component={Posts} options={{ title: "POSTS" }} />
                <Stack.Screen name="SectionLists" component={SectionLists} options={{ title: "SECTION LIST" }} />
                <Stack.Screen name="FocusNews" component={FocusNews}  options={{ title: "FOCUS NEWS" }}/>
                <Stack.Screen name="NewsDetail" component={NewsDetail} options={{ title: "NEWS DETAIL" }} />
              </Stack.Navigator>
            )}
          {/* </SafeAreaView> */}
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
