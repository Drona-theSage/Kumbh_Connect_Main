import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
const NavOptions = () => {
  return (
    <TouchableOpacity>
        <View>
            <Icon style={tw`p-2 bg-black rounded-full w-[15%] mt-4`}
               type='antdesign'
               name='arrowright'
               color='white'
            />
        </View>
    </TouchableOpacity>
  )
}

export default NavOptions
