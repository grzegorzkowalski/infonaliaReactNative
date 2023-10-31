import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState, useEffect} from "react";
import DisplayWeather from "../components/DisplayWeather";

const FindWeather = ({route, navigation}) => {
    const [cityText, setCityText] = useState("");
    const [weather, setWeather] = useState(false);

    const clickHandler = () => {
        const API_key = "5b2965ceb7056ac1cb87a3f4581e90b4";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_key}&units=metric`)
            .then(res => res.json())
            //.then(res => console.log(res));
            .then(re => setWeather(re))
            .catch(err => console.log(err));
    }

    return (
        <View style={styles.container}>
            <Text>Wyszukaj pogodę dla miasta</Text>
            <TextInput
                style={styles.input}
                value={cityText}
                onChangeText={setCityText}
            />
            <Button
                title="Szukaj"
                onPress={() => clickHandler()}
            />
            {
                weather && <DisplayWeather weather={weather} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        border: "1px solid white"
    }
});

export default FindWeather;
