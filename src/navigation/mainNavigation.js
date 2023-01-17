import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import mainScreen from "../screens/mainScreen";
import profileScreen from "../screens/profileScreen";
import settingsScreen from "../screens/settingsScreen";
import Privacy from "../screens/Privacy";
import AboutUs from "../screens/AboutUs";
import QRCodeScreen from "../screens/QRCodeScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";
import EditeUsernameScreen from "../screens/EditeUsernameScreen";
import EditeEmailScreen from "../screens/EditeEmailScreen";
import EditeLocationScreen from "../screens/EditeLocationScreen";
import EditeSportsTypeScreen from "../screens/EditeSportsTypeScreen";
import EditeFacebookIdScreen from "../screens/EditeFacebookIdScreen";
import StepCounterScreen from "../screens/StepCounterScreen";
import FeedBackScreen from "../screens/FeedBackScreen";
import BmiColculatorScreen from "../screens/BmiColculatorScreen";

import colors from "../utils/colors";
import DrawerContent from "../screens/DrawerContent";
import StudioScreen from "../screens/StudioScreen";
import SingleStudioScreen from "../screens/SingleStudioScreen";
import SingleHealthTopicScreen from "../screens/SingleHealthTopicScreen";
import SingleStudioLocationScreen from "../screens/SingleStudioLocationScreen";
import SingleStudioTimeScreen from "../screens/SingleStudioTimeScreen";
import SingleStudioSportTypes from "../screens/SingleStudioSportTypes";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ setLocal }) => (
  <Drawer.Navigator
    initialRouteName="Main"
    drawerStyle={{ backgroundColor: colors.white }}
    drawerContent={(props) => <DrawerContent {...props} setLocal={setLocal} />}
  >
    <Drawer.Screen name="Main" component={mainScreen} />
    <Drawer.Screen name="Profile" component={profileScreen} />
    <Drawer.Screen name="Settings" component={settingsScreen} />
    <Drawer.Screen name="AboutUs" component={AboutUs} />
    <Drawer.Screen name="Privacy" component={Privacy} />
    <Drawer.Screen name="QRCode" component={QRCodeScreen} />
    <Drawer.Screen name="Subscription" component={SubscriptionScreen} />
    <Drawer.Screen name="EditeUsername" component={EditeUsernameScreen} />
    <Drawer.Screen name="EditeEmail" component={EditeEmailScreen} />
    <Drawer.Screen name="EditeLocation" component={EditeLocationScreen} />
    <Drawer.Screen name="EditeSportsType" component={EditeSportsTypeScreen} />
    <Drawer.Screen name="EditeFacebookId" component={EditeFacebookIdScreen} />
    <Drawer.Screen name="StepCounter" component={StepCounterScreen} />
    <Drawer.Screen name="FeedBack" component={FeedBackScreen} />
    <Drawer.Screen name="Bmi" component={BmiColculatorScreen} />
    <Drawer.Screen name="Studio" component={StudioScreen} />
    <Drawer.Screen name="SingleStudio" component={SingleStudioScreen} />
    <Drawer.Screen name="SingleHealth" component={SingleHealthTopicScreen} />
    <Drawer.Screen name="StudioTime" component={SingleStudioTimeScreen} />
    <Drawer.Screen name="StudioSports" component={SingleStudioSportTypes} />
    <Drawer.Screen
      name="StudioLocation"
      component={SingleStudioLocationScreen}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
