import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: 1,
    title: "UberX",
    multiplier: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  },
  {
    id: 2,
    title: "UberXL",
    multiplier: 1.2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: 3,
    title: "UberLUX",
    multiplier: 1.5,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();
  // console.log(selected);
  const timeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`border-b border-gray-100`}>
        <TouchableOpacity
          style={tw`absolute z-50 top-2 left-5 p-1 rounded-full bg-black`}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon name="chevron-left" type="fontawesome" color="white" />
        </TouchableOpacity>
        <Text style={tw`text-center py-3 text-xl`}>
          Select a Ride - {timeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 1 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-5 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>{timeInformation?.duration?.text} Travel time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(
                (timeInformation?.duration?.value * 1.5 * item.multiplier) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!selected?.id && "bg-gray-300"}`}
          disabled={!selected?.id}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
