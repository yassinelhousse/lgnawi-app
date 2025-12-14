import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";

export default function ArtistDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: "https://i.imgur.com/Jf0p3Qm.png" }}
        style={{ width: "100%", height: 300 }}
      />

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Artist #{id}</Text>

        <Text style={{ marginTop: 10, color: "#666" }}>
          Performance Time: 21:00
        </Text>

        <Link href="/booking" asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#4B56E8",
              padding: 15,
              marginTop: 30,
              borderRadius: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 18 }}>
              RESERVER ARTISTE
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
