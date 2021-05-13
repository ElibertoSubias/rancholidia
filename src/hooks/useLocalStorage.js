import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PREFIX = 'rancho-lidia-';
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(async() => {
        try {
            const jsonValue = await AsyncStorage.getItem(prefixedKey)
            if (jsonValue != null) return JSON.parse(jsonValue)
            if (typeof initialValue === 'function') {
                return initialValue();
            } else {
                return initialValue;
            }
        } catch(e) {
            // error reading value
        }
    });

    useEffect(() => {
        const storeData = async (value) => {
            try {
              const res = await AsyncStorage.setItem(prefixedKey, JSON.stringify(value))
              console.log(res)
            } catch (e) {
              // saving error
            }
        }
        
        storeData();
        // AsyncStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
}
