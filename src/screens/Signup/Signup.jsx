import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import { setUser } from "../../features/auth/authSlice";
import styles from "./Signup.styles";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../services/authApi";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // Validación de contraseñas
  const [successMessage, setSuccessMessage] = useState(""); // Mensaje de éxito
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (password === confirmPass) {
      setPasswordsMatch(true);
      triggerSignup({
        email,
        password,
      });
      if (result.isSuccess) {
        setSuccessMessage("Registro exitoso");
        dispatch(setUser(result));
      }
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Crea tu usuario para ingresar</Text>

        <TextInput
          style={styles.inputEmail}
          placeholder="Ingresar Email"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.inputPasswordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Ingresar Contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            style={({ pressed }) => [
              styles.showPasswordButton,
              { opacity: pressed ? 0.5 : 1 },
            ]}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.showPasswordButtonText}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </Text>
          </Pressable>
        </View>

        <View style={styles.inputPasswordContainer}>
          <TextInput
            style={[styles.inputPassword, !passwordsMatch && styles.inputError]}
            placeholder="Confirmar Contraseña"
            secureTextEntry={!showPassword}
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
          <Pressable
            style={({ pressed }) => [
              styles.showPasswordButton,
              { opacity: pressed ? 0.5 : 1 },
            ]}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.showPasswordButtonText}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </Text>
          </Pressable>
        </View>

        {!passwordsMatch && (
          <Text style={styles.errorMessage}>Las contraseñas no coinciden</Text>
        )}

        {successMessage && (
          <Text style={styles.successMessage}>{successMessage}</Text>
        )}

        <Pressable
          style={({ pressed }) => [
            styles.loginButton,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={onSubmit}
        >
          <Text style={styles.loginButtonText}>Registrarme!!</Text>
        </Pressable>

        <Text>Ya tienes cuenta?</Text>
        <Pressable
          style={({ pressed }) => [
            styles.loginButton,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <Text style={styles.loginButtonText}>Ingresar!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
