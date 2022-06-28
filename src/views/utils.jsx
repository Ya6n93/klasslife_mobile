import AsyncStorage from '@react-native-async-storage/async-storage';

export const passwordRules =
  'required: upper; required: lower; required: digit; minlength: 8;';

export const BASE_URL = 'https://klasslifegpeetna.loophole.site/api';

export const getValue = async (key) => {
  try {
    const res = await AsyncStorage.getItem(key)
    return res;
  } catch(e) {
    alert('Error: ', e)
  }
}

export const saveValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch(e) {
    alert('Error: ', e)
  }
}

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    alert('Error: ', e)
  }
}