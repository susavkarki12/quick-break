import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashBoard, OnBoardingScreen } from "../screens";
import { Setting } from "../screens/Setting";
import MainPermission from "../screens/MainPermission";
import BreathingExercise from "../screens/BreathingExercise";
import VipComponent from "../screens/VIP";
import PermissionStart from "../screens/PermissionStart";
import PreAppSelection from "../screens/PreAppSelection";
import SeeMoreGraph from "../screens/SeeMoreGraph";
import ReminderPage from "../screens/ReminderPage";
import ConfirmPage from "../screens/ConfirmPage";
import StillusingPage from "../screens/StillusingPage";
import IntentionPage from "../screens/IntentionPage";
import Finalhour from "../screens/Finalhour";
import Ownrisk from "../screens/Ownrisk";
import BreakPage from "../screens/BreakPage";






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
      <AppStack.Screen name="BreathingExercise" component= {BreathingExercise} />
      <AppStack.Screen name="ReminderPage" component= {ReminderPage} />
      <AppStack.Screen name="ConfirmPage" component= {ConfirmPage} />
      <AppStack.Screen name="StillusingPage" component= {StillusingPage} />
      <AppStack.Screen name="IntentionPage" component= {IntentionPage} />
      <AppStack.Screen name="Finalhour" component= {Finalhour} />
      <AppStack.Screen name="Ownrisk" component= {Ownrisk} />
      <AppStack.Screen name="BreakPage" component= {BreakPage} />

    </AppStack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
