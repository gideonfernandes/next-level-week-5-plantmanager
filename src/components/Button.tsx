import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.white,
  },
});
