import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 115,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    }
    ,
    text: {
        fontSize: 40,
        fontFamily: 'PoppinsLight',
        alignSelf: 'center',
    },
})