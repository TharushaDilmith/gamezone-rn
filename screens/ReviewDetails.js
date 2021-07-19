import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/global'

const ReviewDetails = ({navigation,route}) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{route.params.title}</Text>
            <Text style={globalStyles.text}>{route.params.category}</Text>
            <Text style={globalStyles.text}>{route.params.rating}</Text>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({})
