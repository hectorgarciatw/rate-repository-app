import React from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { useField } from "formik";

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput {...field} {...props} style={[styles.input, showError && styles.inputError]} />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    inputError: {
        borderColor: "#d73a4a",
    },
    errorText: {
        color: "red",
        marginTop: 5,
    },
});

export default FormikTextInput;
