import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { store } from "./redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "" }}>
        <Navigation />
      </SafeAreaView>
      {/* </SafeAreaProvider>/ */}
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
