// https://reactnative.dev/docs/button
import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import SelectionButton from './selectionButton';

const Separator = () => (
    <View style={styles.separator} />
);


// TODO: Extract constants
const Mainpage = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>Please select the aspect ratio of photo to scan: </Text>
            <Separator />
        </View>
        <View>
            <SelectionButton title="4x6 photo" />
        </View>
        <Separator />
        <View>
            <SelectionButton title="5x7 photo" />
        </View>
        <Separator />
        <View>
            <SelectionButton title="8x10 photo" />
        </View>
        <Separator />
        <View>
            <SelectionButton title="12x18 photo" />
        </View>
    </SafeAreaView >
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Mainpage;