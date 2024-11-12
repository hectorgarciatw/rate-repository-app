import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        paddingHorizontal: 16,
        height: 100,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title="Repositories" />
        </View>
    );
};

export default AppBar;
