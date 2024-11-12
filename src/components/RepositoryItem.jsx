import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        marginLeft: 10,
        flex: 1,
    },
    fullName: {
        fontWeight: "bold",
        fontSize: 16,
    },
    language: {
        color: "#0366d6",
        fontWeight: "bold",
        marginTop: 5,
    },
    stadistics: {
        flexDirection: "row",
        gap: 10,
        flex: 1,
    },
});

//The numeric representation
const setNumber = (n) => {
    if (n >= 1000) {
        let result = (n / 1000).toFixed(1);
        return result.endsWith(".0") ? result.slice(0, -2) + "k" : result + "k";
    } else {
        let result = n.toFixed(1);
        return result.endsWith(".0") ? result.slice(0, -2) : result;
    }
};

const RepositoryItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.info}>
            <Text style={styles.fullName}>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.language}>{item.language}</Text>
            <View style={styles.stadistics}>
                <View>
                    <Text style={{ fontWeight: "bold" }}>{setNumber(item.stargazersCount)}</Text>
                    <Text>Stars</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>{setNumber(item.forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>{setNumber(item.reviewCount)}</Text>
                    <Text>Reviews</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>{setNumber(item.ratingAverage)}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    </View>
);

export default RepositoryItem;
