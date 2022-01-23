import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function LoginScreen({}) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View styles={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={() => {}}
          styles={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={() => {}}
          styles={styles.input}
          secureTextEntry
        />
      </View>
      <View styles={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {},
  input: {},
  buttonContainer: {},
  button: {},
  buttonOutline: {},
  buttonOutlineText: {},
});
