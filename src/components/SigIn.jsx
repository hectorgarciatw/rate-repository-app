import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

const SigIn = () => {
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <Button title="Go to Repositories" onPress={() => navigate("/repositories")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default SigIn;
