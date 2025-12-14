import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

const mockArtists = [
  { id: 1, name: "Hamid El Kasri", img: "https://i.imgur.com/Jf0p3Qm.png" },
  { id: 2, name: "Hassan Boussou", img: "https://i.imgur.com/Jf0p3Qm.png" },
  { id: 3, name: "Abderrahim Akka", img: "https://i.imgur.com/Jf0p3Qm.png" },
];

export default function ArtistsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search..."
        style={{
          backgroundColor: "#f1f1f1",
          padding: 15,
          borderRadius: 15,
          marginBottom: 20,
        }}
      />

      <FlatList
        data={mockArtists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/artists/${item.id}`} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "#4B56E8",
                padding: 15,
                marginBottom: 15,
                borderRadius: 15,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.img }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 15,
                  marginRight: 15,
                }}
              />
              <Text style={{ color: "#FFF", fontSize: 18 }}>{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
