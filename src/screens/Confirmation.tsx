import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😀</Text>
        <Text style={styles.title}>Prontinho!</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado!
        </Text>
      </View>

      <View style={styles.footer}>
        <Button title="Começar" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    width: "100%",
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: "center",
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.heading,
    paddingVertical: 10,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
