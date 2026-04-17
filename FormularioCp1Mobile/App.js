import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaCadastro from "./TelaCadastro";
import TelaPerfil from "./TelaPerfil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cadastro"
        screenOptions={{
          headerStyle: { backgroundColor: "#ed145b" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Cadastro"
          component={TelaCadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{ title: "Meu Perfil" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
