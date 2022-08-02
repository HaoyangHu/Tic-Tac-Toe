import React, { ReactElement, useRef, useState } from "react";
import { ScrollView, TextInput as NativeTextInput, Alert, TouchableOpacity } from "react-native";
import { GradientBackground, TextInput, Button, Text } from "@Components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "@config/navigator";
import { Auth } from "aws-amplify";
import styles from "./login.styles";

type LoginProps = {
    navigation: NativeStackNavigationProp<StackNavigatorParams, "Login">;
};

export default function Login({ navigation }: LoginProps): ReactElement {
    const passwordRef = useRef<NativeTextInput | null>(null);
    const [form, setForm] = useState({
        username: "hhy",
        password: "Hhyb2011!"
    });
    const [loading, setLoading] = useState(false);
    const setFormInput = (key: keyof typeof form, Value: string) => {
        setForm({ ...form, [key]: Value });
    };

    const login = async () => {
        setLoading(true);
        const { username, password } = form;
        try {
            await Auth.signIn(username, password);
            navigation.navigate("Home");
        } catch (error) {
            const { message } = error as Error;
            if (message === "UserNotConfirmedException") {
                navigation.navigate("SignUp", { username });
            } else {
                Alert.alert("Error!", message || "An error has occured");
            }
        }
        return () => {
            setLoading(false);
        };
    };
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    value={form.username}
                    onChangeText={Value => {
                        setFormInput("username", Value);
                    }}
                    returnKeyType="next"
                    placeholder="Username"
                    style={{ marginBottom: 20 }}
                    onSubmitEditing={() => {
                        passwordRef.current?.focus();
                    }}
                />
                <TextInput
                    value={form.password}
                    onChangeText={Value => {
                        setFormInput("password", Value);
                    }}
                    style={{ marginBottom: 30 }}
                    ref={passwordRef}
                    returnKeyType="done"
                    secureTextEntry
                    placeholder="Password"
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ForgotPassword");
                    }}
                >
                    <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button loading={loading} title="Login" onPress={login} />

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                >
                    <Text style={styles.registerLink}> Don&apos;t have an account? </Text>
                </TouchableOpacity>
            </ScrollView>
        </GradientBackground>
    );
}
