import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import style from "../../styles/index";

export const Container = (prop) => <SafeAreaView style={style.Layout.container}>{prop.children}</SafeAreaView>

export const SelectContainer = (prop) => <View style={style.Select.Select}>{prop.children}</View>

export const SelectItemContainer = (prop) => <View style={style.Select.SelectItem}>{prop.children}</View>