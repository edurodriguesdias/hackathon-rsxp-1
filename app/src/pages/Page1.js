import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Page1({ navigation }) {
  async function handleSubmit() {
    navigation.navigate("Page2");
  }
  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <View style={styles.form}>
        <Text style={styles.nossaFont}>Ola</Text>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
let fontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nossaFont: {
    fontSize: 20
  }
});
