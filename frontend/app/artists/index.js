import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { useArtists } from "../../services/artistService";
import { MotiPressable } from "moti/interactions";

export default function ArtistsScreen() {
  const { data, isLoading } = useArtists();

  if (isLoading) return <Text style={{ marginTop: 50 }}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search artist..."
        placeholderTextColor="#999"
        style={styles.searchInput}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Link href={`/artists/${item.id}`} asChild>
            <MotiPressable
              animate={({ pressed }) => {
                "worklet";
                return {
                  scale: pressed ? 0.97 : 1,
                  opacity: pressed ? 0.85 : 1,
                  shadowRadius: pressed ? 2 : 6,
                };
              }}
              transition={{
                type: "spring",
                damping: 14,
                stiffness: 180,
              }}
              style={styles.card}
            >
              <Image source={{ uri: item.photo_url }} style={styles.avatar} />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>
                  Performance: {item.performance_time}
                </Text>
              </View>
            </MotiPressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    flex: 1,
  },

  searchInput: {
    backgroundColor: "#F5F6FA",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  card: {
    backgroundColor: "#4B56E8",
    padding: 15,
    height: 120,
    marginBottom: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
  },

  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
  },

  subtitle: {
    color: "#E3E4FF",
    fontSize: 14,
  },
});
