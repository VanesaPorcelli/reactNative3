import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import styles from "./login.styles";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Logueate para </Text>
        
        <TextInput
          style={styles.inputEmail}
          placeholder="Ingresa tu Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.inputEmail}
          placeholder="Ingresar Contraseña"
          secureTextEntry 
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Pressable style={styles.loginButton}>
          <Text style={{ color: "white" }}>Ingresar!</Text>
        </Pressable>
        <Text>No tienes cuenta?</Text>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: "white" }}>Registrate!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
