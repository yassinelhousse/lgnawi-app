import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useCreateBooking } from "../services/bookingService";

export default function BookingForm() {
  const { id: artist_id } = useLocalSearchParams(); // artist id
  const createBooking = useCreateBooking();

  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets_count, setTickets] = useState("1");

  const handleSubmit = () => {
    if (!full_name || !email) {
      Alert.alert("Missing information", "Please fill all fields.");
      return;
    }

    createBooking.mutate(
      {
        full_name,
        email,
        tickets_count: Number(tickets_count),
        artist_id: Number(artist_id),
      },
      {
        onSuccess: (data) => {
          Alert.alert(
            "Reservation Confirmed 🎉",
            `Your confirmation code:\n${data.confirmation_code}`,
            [
              {
                text: "OK",
                onPress: () =>
                  router.push(`/success?code=${data.confirmation_code}`),
              },
            ]
          );
        },
        onError: () => {
          Alert.alert("Error", "Failed to create reservation. Try again.");
        },
      }
    );
  };

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
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={22} color="#888" />
        <TextInput
          placeholder="abc@email.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="ticket-outline" size={22} color="#888" />
        <TextInput
          placeholder="Number of tickets"
          placeholderTextColor="#999"
          keyboardType="numeric"
          style={styles.input}
          value={tickets_count}
          onChangeText={setTickets}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={handleSubmit}
        disabled={createBooking.isLoading}
      >
        {createBooking.isLoading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <>
            <Text style={styles.buttonText}>CONFIRMER RESERVER</Text>
            <Ionicons name="arrow-forward" size={22} color="#FFF" />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },

  backBtn: { marginTop: 40, marginBottom: 30 },

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
    marginBottom: 40,
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
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
