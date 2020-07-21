import React from 'react'
import { View } from 'react-native'

import { CustomTextBold } from './CustomText'

const ErrorMessage = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 }}>
            <CustomTextBold>Oops, something went wrong. Please try again later.</CustomTextBold>
        </View>
    )
}

export default ErrorMessage
