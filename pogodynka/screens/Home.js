import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const Home = ({route, navigation}) => {
    const cities = [
        {
            id: 1,
            name: "Warsaw"
        },
        {
            id: 2,
            name: "London"
        },
        {
            id: 3,
            name: "Pekin"
        },
        {
            id: 4,
            name: "Chicago"
        },
        {
            id: 5,
            name: "Cairo"
        },
        {
            id: 6,
            name: "Sydney"
        }
    ];
    return (
        <View style={styles.container}>
            <Text>Strona główna</Text>
            <FlatList
                data={cities}
                keyExtractor={item => item.id}
                renderItem={(item) => {
                    console.log(item);
                    const {name} = item.item;
                    return (
                        <Button
                            title={name}
                            onPress={() => navigation.navigate("CityWeather", {city: name})}
                        />
                        )
                }}
            />
            <StatusBar style="auto" />
            <Button
                title="FindWeather"
                onPress={() => navigation.navigate("FindWeather")}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Home;
