import React from "react";
import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";

//components
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <RepositoryList />
        </View>
    );
};

export default Main;