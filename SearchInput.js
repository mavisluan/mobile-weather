import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

class SearchInput extends Component {
    state = {
        text: ''
    }

    updateInput = ( text ) => this.setState({ text })

    handleSubmit = () => {
        const { onSubmit } = this.props
        const { text } = this.state
        if(text) {
            onSubmit(text)
            this.setState({ text: ''})
        }
    }
    render() {
        return (
            <TextInput 
                autoCorrect={false}
                clearButtonMode='always'
                style={styles.inputStyle}
                value={this.state.text}
                placeholder='Search city'
                placeholderTextColor='white'
                onChangeText={this.updateInput}
                onSubmitEditing={this.handleSubmit}
                backgroundColor='gray'
            />
        )
    }
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 50, 
        width: 340,
        borderRadius: 8,
        backgroundColor: 'darkgray',
        color: 'white',
        paddingLeft: 20,
        marginTop: 40,
        fontSize: 20,
        alignSelf: 'center'
      }
})
export default SearchInput