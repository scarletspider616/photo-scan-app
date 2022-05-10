import { TouchableOpacity, Text, StyleSheet } from "react-native"

const SelectionButton = (props) => {
    return <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}>
        <Text> {props.title} </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#f194ff',
        padding: 10
    }
});

export default SelectionButton;