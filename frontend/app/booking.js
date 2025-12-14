import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function BookingForm() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 30 }}>
        Reservation
      </Text>

      <TextInput
        placeholder="Full name"
        style={{
          backgroundColor: "#f1f1f1",
          padding: 15,
          borderRadius: 15,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="abc@email.com"
        style={{
          backgroundColor: "#f1f1f1",
          padding: 15,
          borderRadius: 15,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="tele number"
        style={{
          backgroundColor: "#f1f1f1",
          padding: 15,
          borderRadius: 15,
          marginBottom: 15,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#4B56E8",
          padding: 15,
          borderRadius: 15,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 18 }}>CONFIRMER RESERVER</Text>
      </TouchableOpacity>
    </View>
  );
}
