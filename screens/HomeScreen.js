import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={tw`bg-white h-full pt-5`}>
      <StatusBar animated={true} barStyle={"dark-content"} />
      <View style={tw`p-5`}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: { flex: 0, backgroundColor: "white" },
            textInput: {
              fontSize: 18,
              borderRadius: 5,
              backgroundColor: "lightgray",
            },
            textInputContainer: {
              paddingBottom: 0,
            },
          }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          onPress={(data, details = null) => {
            //   console.log(data);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          query={{ key: GOOGLE_API_KEY, language: "en" }}
          enablePoweredByContainer={false}
        />

        {/* Element navigation */}
        <NavOptions />
        {/* Element Favourite location */}
        <NavFavourites />
      </View>
    </View>
  );
};

export default HomeScreen;
