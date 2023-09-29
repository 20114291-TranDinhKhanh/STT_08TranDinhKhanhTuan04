import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0, 204, 249, 0.36)", "#00CCF9"]}
        style={styles.background}
      ></LinearGradient>
      <StatusBar style="auto" />
      <View style={styles.view1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
        >
          <circle cx="70" cy="70" r="62.5" stroke="black" stroke-width="15" />
        </svg>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>GROW {"\n"} YOUR BUSINESS</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.view4}>
        <button role="button" style={styles.buttonLogin}>
          LOGIN
        </button>
        <button role="button" style={styles.buttonSignUp}>
          SIGN UP
        </button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexShrink: 0,
  },
  view1: {
    position: "absolute",
    top: 170,
    width: 140,
    height: 140,
    flexShrink: 1,
  },
  view2: {
    position: "absolute",
    top: 350,
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  view3: {
    position: "absolute",
    bottom: 300,
  },
  text2: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: 350,
  },
  view4: {
    position: "absolute",
    flexDirection: "row",
    bottom: 150,
  },
  buttonLogin: {
    width: 119,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#E3C000",
    fontWeight: "bold",
  },
  buttonSignUp: {
    marginLeft: 45,
    width: 119,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#E3C000",
    flexShrink: 0,
    fontWeight: "bold",
  },
});
