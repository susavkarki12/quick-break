import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashBoard, OnBoardingScreen } from "../screens";
import { Setting } from "../screens/Setting";
import MainPermission from "../screens/MainPermission";

import VipComponent from "../screens/VIP";
import PermissionStart from "../screens/PermissionStart";
import PreAppSelection from "../screens/PreAppSelection";
import SeeMoreGraph from "../screens/SeeMoreGraph";


const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="OnBoard" component={OnBoardingScreen} />
      <AppStack.Screen name="DashBoard" component={DashBoard} />
      <AppStack.Screen name="Setting" component= {Setting} />
      <AppStack.Screen name="vip" component={VipComponent} />
      <AppStack.Screen name="MainPermission" component= {MainPermission} />
      <AppStack.Screen name="PermissionStart" component= {PermissionStart} />
      <AppStack.Screen name="PreAppSelection" component= {PreAppSelection} />
      <AppStack.Screen name="SeeMoreGraph" component= {SeeMoreGraph} />
      
    </AppStack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
