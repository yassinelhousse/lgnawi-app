import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function BookingForm() {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={26} color="#111" />
      </TouchableOpacity>

      <Text style={styles.title}>Reservation</Text>

      
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={22} color="#888" />
        <TextInput
          placeholder="Full name"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={22} color="#888" />
        <TextInput
          placeholder="abc@email.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={22} color="#888" />
        <TextInput
          placeholder="tele number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

    
      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={styles.buttonText}>CONFIRMER RESERVER</Text>
        <Ionicons name="arrow-forward" size={22} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },

  backBtn: {
    marginTop: 40,
    marginBottom: 30,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C9AE74", 
    textAlign: "center",
    marginBottom: 50,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 50,
    backgroundColor: "#FFF",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#111",
  },

  button: {
    
    backgroundColor: "#5A67FF",
    height: 60,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginBottom: 30,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
