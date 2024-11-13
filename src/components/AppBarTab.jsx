import React from "react";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    tab: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
});

const AppBarTab = ({ title, to }) => {
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <Text style={styles.tab}>{title}</Text>
        </Link>
    );
};

export default AppBarTab;
