import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        paddingHorizontal: 16,
        height: 100,
    },
    scrollView: {
        flexDirection: "row",
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <AppBarTab title="Repositories" to="/repositories" />
                <AppBarTab title="Sig In" to="/sigin" />
            </ScrollView>
        </View>
    );
};

export default AppBar;
