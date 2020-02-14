import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Profile from "../screens/Profile/ProfileScreen";
import EditScreenOne from "../screens/Profile/EditScreenOne";
import EditScreenTwo from "../screens/Profile/EditScreenTwo";
const stackNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Profile"
  }
);
export default (stackNav);