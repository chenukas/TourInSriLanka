import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";

const SearchHotel = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, height: "100%" }}>
        <View>
          <ImageBackground
            style={{ width: "100%", height: 275 }}
            imageStyle={{ borderBottomRightRadius: 65 }}
          >
            <View style={styles.darkOverlay}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    margin: 4,
                    borderColor: "#fafbfc",
                    backgroundColor: "#fafbfc",
                    fontSize: 16,
                  }}
                  placeholder="Where are you going?"
                  returnKeyType="next"
                ></TextInput>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignSelf: "center",
                    margin: 3,
                  }}
                >
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      margin: 3,
                      width: "49%",
                      borderColor: "#fafbfc",
                      backgroundColor: "#fafbfc",
                      fontSize: 16,
                    }}
                    placeholder="Check-in"
                    maxLength={10}
                    keyboardType="number-pad"
                    returnKeyType="next"
                  ></TextInput>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      margin: 3,
                      width: "49%",
                      borderColor: "#fafbfc",
                      backgroundColor: "#fafbfc",
                      fontSize: 16,
                    }}
                    placeholder="Check-out"
                    maxLength={10}
                    keyboardType="number-pad"
                    returnKeyType="next"
                  ></TextInput>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignSelf: "center",
                    margin: 3,
                  }}
                >
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      margin: 3,
                      width: "49%",
                      borderColor: "#fafbfc",
                      backgroundColor: "#fafbfc",
                      fontSize: 16,
                    }}
                    placeholder="Guests"
                    keyboardType="number-pad"
                    returnKeyType="next"
                  ></TextInput>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderRadius: 10,
                      margin: 3,
                      width: "49%",
                      borderColor: "#fafbfc",
                      backgroundColor: "#fafbfc",
                      fontSize: 16,
                    }}
                    placeholder="Rooms"
                    keyboardType="number-pad"
                    returnKeyType="done"
                  ></TextInput>
                </View>
                <TouchableOpacity>
                  <View
                    style={{
                      borderRadius: 10,
                      height: 50,
                      margin: 4,
                      backgroundColor: "#2b569a",
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        margin: 10,
                        fontSize: 20,
                        color: "white",
                      }}
                    >
                      Find Accommodation
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate("leGrand")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#2b569a",
                width: "95%",
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../../assets/images/legrand.jpg")}
                style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
              ></Image>
              <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
                <Text style={styles.hotelNames}>Le Grand Galle</Text>
                <Text style={styles.prices}>$250/per night</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: 3 }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#2b569a",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/jetwinglighthouse.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Jetwing Lighthouse</Text>
              <Text style={styles.prices}>$400/per night</Text>
            </View>
          </View>
          <View style={{ height: 3 }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#2b569a",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/amarigalle.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Amari Galle</Text>
              <Text style={styles.prices}>$350/per night</Text>
            </View>
          </View>
          <View style={{ height: 3 }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#2b569a",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/tamarindhill.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Tamarind Hill</Text>
              <Text style={styles.prices}>$175/per night</Text>
            </View>
          </View>
          <View style={{ height: 3 }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#2b569a",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/jetwingkurulubedda.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Jetwing Kurulubedda</Text>
              <Text style={styles.prices}>$750/per night</Text>
            </View>
          </View>
          <View style={{ height: 3 }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchHotel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkOverlay: {
    position: "absolute",

    height: 250,
    width: "96%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    margin: 10,
  },
  hotelNames: {
    padding: 5,
    fontSize: 20,
    paddingTop: 20,
    fontFamily: "Kanit-Medium",
  },
  prices: {
    fontSize: 16,
    padding: 5,
    paddingTop: 15,
    alignSelf: "flex-end",
    paddingRight: 20,
    fontFamily: "Kanit-Thin",
  },
});
