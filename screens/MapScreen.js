import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute z-50 top-16 left-5 bg-gray-100 rounded-full shadow-lg p-3`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
