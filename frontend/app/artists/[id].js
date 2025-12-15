import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";
import { useArtist } from "../../services/artistService";

export default function EventDetails() {
  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useArtist(id);

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#5A67FF" />
      </View>
    );

  if (error)
    return (
      <View style={{ padding: 20 }}>
        <Text>Failed to load artist details</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: data.photo_url }}
        style={styles.headerImage}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="calendar-outline" size={20} color="#5A67FF" />
          </View>
          <View>
            <Text style={styles.infoTitle}>Performance Time</Text>
            <Text style={styles.infoSub}>{data.performance_time}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="location-outline" size={20} color="#5A67FF" />
          </View>
          <View>
            <Text style={styles.infoTitle}>Event Location</Text>
            <Text style={styles.infoSub}>Sahat Al Amal, Agadir</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.push(`/booking?id=${id}`)}
        >
          <Text style={styles.buttonText}>RESERVER ARTISTE</Text>
          <Feather name="arrow-right" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },

  headerImage: { height: 400, justifyContent: "flex-start" },

  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content: { padding: 20 },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#EEF0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  infoTitle: { fontSize: 20, fontWeight: "600" },
  infoSub: { color: "#777", marginTop: 4 },

  button: {
    marginTop: 40,
    backgroundColor: "#5A67FF",
    paddingVertical: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
