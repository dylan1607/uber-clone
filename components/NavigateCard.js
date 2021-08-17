import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center p-3 text-xl`}>Good Morning, Dylan</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
              backgroundColor: "white",
              paddingTop: 10,
            },
            textInput: {
              fontSize: 18,
              borderRadius: 5,
              backgroundColor: "#DDDDDF",
            },
            textInputContainer: {
              paddingHorizontal: 20,
            },
          }}
          placeholder="Where To?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          onPress={(data, details = null) => {
            //   console.log(data);
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionCard");
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          query={{ key: GOOGLE_API_KEY, language: "en" }}
          enablePoweredByContainer={false}
        />
      </View>

      {/* Element Navigator Favourites */}
      <View style={tw`flex-1`}>
        <NavFavourites />
      </View>

      {/* Element Navigator Button */}
      <View
        style={tw`flex-row bg-white justify-around py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-black w-24 justify-between px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate("RideOptionCard")}
        >
          <Icon color="white" name="car" type="font-awesome" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row bg-white w-24 justify-between px-4 py-3 rounded-full`}
        >
          <Icon color="black" name="fast-food" type="ionicon" size={16} />
          <Text style={tw`text-black  text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
