import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function EventDetails() {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../../assets/images/gnawa.png")}
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
        <Text style={styles.title}>International Band{"\n"}Music Concert</Text>

        
        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="calendar-outline" size={20} color="#5A67FF" />
          </View>
          <View>
            <Text style={styles.infoTitle}>14 December, 2021</Text>
            <Text style={styles.infoSub}>Tuesday, 4:00PM - 9:00PM</Text>
          </View>
        </View>

        
        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Ionicons name="location-outline" size={20} color="#5A67FF" />
          </View>
          <View>
            <Text style={styles.infoTitle}>Sahat Al Amal Agadir</Text>
            <Text style={styles.infoSub}>36 El Wilaya, Agadir, MA</Text>
          </View>
        </View>

        
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.push("/booking")}
        >
          <Text style={styles.buttonText}>RESERVER ARTISTE</Text>
          <Feather name="arrow-right" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  headerImage: {
    height: 280,
    justifyContent: "flex-start",
    height: 400,
  },

  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  infoRow: {
    
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: auto,
  },

  iconBox: {
    position: "relative",
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#EEF0FF",
    justifyContent: "center",
    alignItems: "center",
    gap: 34,

    marginRight: 15,
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  infoSub: {
    color: "#777",
    marginTop: 4,
  },

  button: {
    marginTop: 120,
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
