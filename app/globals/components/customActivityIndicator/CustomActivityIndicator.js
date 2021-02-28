import React from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { GlobalStyles } from "../../globalStyles";
import { Colors } from "../../globalStyles";

export const CustomActivityIndicator = props => {
    return (
        <View style={[GlobalStyles.loading]}>
            <ActivityIndicator size="large" color={Colors.COLOR_BLACK} />
        </View>
    )
}