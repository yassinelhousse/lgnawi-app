import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0A0F2C", padding: 20 }}>
      <Image
        source={{ uri: "https://i.imgur.com/4ZQZ4pM.png" }}
        style={{
          width: "100%",
          height: 420,
          borderRadius: 20,
          marginTop: 30
        }}
      />

      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#FFF",
          marginTop: 20,
        }}
      >
        La Grande soirée{"\n"}Gnawi - Agadir
      </Text>

      <Link href="/artists" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            paddingVertical: 15,
            paddingHorizontal: 25,
            borderRadius: 20,
            marginTop: 30,
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 18 }}>
            Voir les artistes
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
