import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "@env";

const Map = () => {
  //Use slector to pull data form store
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    //Zoom and fit maker
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  // Using google distance matrix API to calculate distance from A to B. And then save it to global store redux
  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      const queryURL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&orgins=${origin.desc}&destinations=${destination.desc}&key=${GOOGLE_API_KEY}`;
      await fetch(queryURL)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };
  }, [origin, destination, GOOGLE_API_KEY]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.latitude,
        longitude: origin.location.longitude,
        //2 parameter below to zoom in out
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.location}
          destination={destination.location}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin.location && (
        <Marker
          coordinate={{
            latitude: origin.location.latitude,
            longitude: origin.location.longitude,
          }}
          //popup when touch the marker
          title="Origin"
          description={origin.desc}
          identifier="origin"
        />
      )}
      {destination.location && (
        <Marker
          coordinate={{
            latitude: destination.location.latitude,
            longitude: destination.location.longitude,
          }}
          //popup when touch the marker
          title="Destination"
          description={destination.desc}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
