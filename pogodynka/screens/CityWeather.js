import {View, Text, Button, StyleSheet, Image} from "react-native";
import {useState, useEffect} from "react";
import DisplayWeather from "../components/DisplayWeather";
const CityWeather = ({route, navigation}) => {
    const {city} = route.params;
    console.log(city);
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState(false);
    useEffect(() => {
        const API_key = "5b2965ceb7056ac1cb87a3f4581e90b4";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(res => res.json())
            //.then(res => console.log(res));
            .then(re => setWeather(re));
    }, []);

    useEffect(() => {
        if (weather) {
            fetch(`https://pixabay.com/api/?key=6799546-801a9e48e0e142c05114f0377&q=${city}+${weather.weather[0].main}&image_type=photo`)
                .then(res => res.json())
                .then(re => {
                    if (re?.hits[0]?.largeImageURL) {
                        setImage(re?.hits[0]?.largeImageURL)
                    } else {
                        setImage("https://cdn.pixabay.com/photo/2017/11/11/21/55/freedom-2940655_960_720.jpg");
                    }
                })
        }
    }, [weather]);

    return (
        <View style={styles.container}>
            <Text>CityWeather - {city}</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <View>
                { image ? <Image source={image} style={{width: 300, height: 400}} /> : <></> }
            </View>
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
    text: {
        color: "#FFF"
    }
});

export default CityWeather;
