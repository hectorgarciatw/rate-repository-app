import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";
//Components
import AppBar from "./src/components/AppBar";
import Main from "./src/components/Main";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const App = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <AppBar title="Repositories" />
                <Main />
            </View>
        </NativeRouter>
    );
};

export default App;
