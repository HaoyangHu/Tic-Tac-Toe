import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from "@react-navigation/native-stack";
import {
    Home,
    SinglePlayerGame,
    Settings,
    Login,
    SignUp,
    ChangePassword,
    ForgotPassword
} from "@screens";
import { colors } from "@utils";

export type StackNavigatorParams = {
    Home: undefined;
    SinglePlayerGame: undefined;
    Settings: undefined;
    Login: undefined;
    SignUp: { username: string } | undefined;
    ChangePassword: undefined;
    ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const navigatorOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.purple
    },
    headerShadowVisible: false,
    headerTintColor: colors.lightGreen,
    headerTitleStyle: {
        fontFamily: "DeliusUnicase_700Bold",
        fontSize: 20
    },
    headerBackTitleStyle: {
        fontFamily: "DeliusUnicase_400Regular",
        fontSize: 14
    }
};

export default function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={navigatorOptions}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="SinglePlayerGame"
                    component={SinglePlayerGame}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Sign-Up" }} />
                <Stack.Screen
                    name="ChangePassword"
                    options={{ title: "Change Password" }}
                    component={ChangePassword}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    options={{ title: "Forgot Password" }}
                    component={ForgotPassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
