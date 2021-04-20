import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handlInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handlInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit() {
    navigation.navigate("Confirmation");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? "😀" : "🙂"} </Text>
                <Text style={styles.title}>
                  Como podemos {"\n"} chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderBottomColor: colors.green,
                  },
                ]}
                placeholder="Digite seu nome"
                onBlur={handlInputBlur}
                onFocus={handlInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  form: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  header: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    marginTop: 20,
    color: colors.heading,
  },

  input: {
    width: "100%",
    color: colors.heading,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    fontSize: 18,
  },
  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
