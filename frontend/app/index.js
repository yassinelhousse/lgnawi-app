import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/gnawa.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>La Grand soiree Gnawi-agadir</Text>

        <Pressable
          onPress={() => router.push("/artists")}
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
        >
          <Text style={styles.buttonText}>Voir les artistes</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#CAAE72",
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 70,
    marginTop: 200,
  },
  button: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#e9d4fe5b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    width: "70%",
    height: 80,
  },
  buttonText: {
    color: "#FEFEFE",
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "400",
  },
});
