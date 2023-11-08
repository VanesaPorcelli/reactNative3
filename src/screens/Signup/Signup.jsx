import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { setUser } from "../../features/auth/authSlice";
import styles from "./Signup.styles";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../services/authApi";
import { Alert } from "react-native";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const onSubmit = () => {
    if (email.trim() === "") {
      setError("El campo de correo electrónico no puede estar vacío");
      return; // Prevent further execution
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return; // Prevent further execution
    }

    if (password === confirmPass) {
      setError(""); // Clear any previous error message
      setPasswordsMatch(true);
      triggerSignup({
        email,
        password,
      })
        .unwrap()
        .then((result) => {
          console.log(result);
          dispatch(setUser(result));
          setSuccessMessage("Registro exitoso");
        })
        .catch((err) => console.log(err));
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
            onPress={toggleShowPassword}
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
            secureTextEntry={!showConfirmPass}
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
          <Pressable
            style={({ pressed }) => [
              styles.showPasswordButton,
              { opacity: pressed ? 0.5 : 1 },
            ]}
            onPress={toggleShowConfirmPass}
          >
            <Text style={styles.showPasswordButtonText}>
              {showConfirmPass ? "Ocultar" : "Mostrar"}
            </Text>
          </Pressable>
        </View>
        {error !== "" && <Text style={styles.errorMessage}>{error}</Text>}
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
