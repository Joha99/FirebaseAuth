import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { auth, db } from "../../Firebase/firebase";
import React from "react";

export default function HomeScreen({}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
