import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        width: "80%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    tab: {
        color: "000000",
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
});

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

const SigIn = () => {
    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.tab}>Sig In</Text>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ handleSubmit }) => (
                    <View style={styles.formContainer}>
                        <FormikTextInput name="username" placeholder="Username" />
                        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default SigIn;
