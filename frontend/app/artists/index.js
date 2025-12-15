import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";

const mockArtists = [
  { id: 1, name: "Hamid El Kasri", img: "https://i.imgur.com/Jf0p3Qm.png" },
  { id: 2, name: "Hassan Boussou", img: "https://i.imgur.com/Jf0p3Qm.png" },
  { id: 3, name: "Abderrahim Akka", img: "https://i.imgur.com/Jf0p3Qm.png" },
];

export default function ArtistsScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchInput} />

      <FlatList
        data={mockArtists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/artists/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: item.img }} style={styles.avatar} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#FFF",
    flex: 1,
    padding: 20,
  },
  searchInput: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#4B56E8",
    padding: 15,
    height: 130,
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 15,
  },
  name: {
    color: "#FFF",
    fontSize: 18,
  },
});
