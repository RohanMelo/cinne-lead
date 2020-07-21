import React from 'react'
import { Button } from 'react-native-paper'

export default function CustomButton(props) {
    return (
        <Button
            mode="contained"
            color={'#1976D2'}
            contentStyle={{ height: 70, width: 140 }}
            style={{ borderRadius: 30, margin: 10 }} {...props}
        >{props.children}</Button>
    )
}