import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function Page2({ navigation }) {
  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <View style={styles.form}>
        <Text style={styles.nossaFont}>tudo bem?</Text>

        {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity> */}
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
