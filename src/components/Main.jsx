import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

// Components
import RepositoryList from "./RepositoryList";
import SigIn from "./SigIn";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Routes>
                <Route path="/sigin" element={<SigIn />} />
                <Route path="/repositories" element={<RepositoryList />} />
                {/* Unknown route */}
                <Route path="*" element={<Navigate to="/repositories" replace />} />
            </Routes>
        </View>
    );
};

export default Main;
