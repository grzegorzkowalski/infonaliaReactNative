import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/Home";
import CityWeather from "./screens/CityWeather";
import FindWeather from "./screens/FindWeather";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CityWeather" component={CityWeather} />
        <Stack.Screen name="FindWeather" component={FindWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
