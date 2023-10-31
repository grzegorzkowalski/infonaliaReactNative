import {StyleSheet, Text, View} from "react-native";

const DisplayWeather = ({weather}) => {
    console.log(weather)
    let desc = "";
    switch (weather.weather[0].main) {
        case "sun":
            desc = "słonecznie";
            break;
        case "cloud":
            desc = "chmury";
            break;
        default:
            desc = "brak informacji";
    }
    return (
        <>
            {
                weather.main && <View>
                    <Text style={styles.text}>Temperatura: {weather.main.temp} C</Text>
                    <Text style={styles.text}>Ciśnienie: {weather.main.pressure}</Text>
                    <Text style={styles.text}>Opis: {weather.weather[0].main}, {weather.weather[0].description}</Text>
                </View>
            }
            {
                weather.cod === "404" && <Text style={{color: "white"}}>{weather.message}</Text>
            }
        </>


    );
};

const styles = StyleSheet.create({
    text: {
        color: "#FFF"
    }
});

export default DisplayWeather;
