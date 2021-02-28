import React, { useState, useEffect } from 'react';
import { Platform, ToastAndroid, Alert } from 'react-native';

export const CustomToast = msg => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }
    else {
        Alert.alert(msg)
    }
}