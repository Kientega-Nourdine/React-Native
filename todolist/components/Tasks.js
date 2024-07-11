import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Task = ({text}) => {

    return (

        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};  

const styles = StyleSheet.create({
    item: { backgroundColor: '#fff', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, },
    itemLeft: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', },
    square: { width: 30, height: 30, backgroundColor: '#55BCF6', opacity: .4, borderRadius: 5, marginRight: 15, },
    itemText: { maxWidth: '80%', },
    circular: { width: 14, height: 14, borderColor: '#55BCF6', borderWidth: 2, borderRadius: 5, },
});

export default Task;