import React from "react";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
    tab: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

const AppBarTab = ({ title }) => {
    return (
        <TouchableWithoutFeedback>
            <Text style={styles.tab}>{title}</Text>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
