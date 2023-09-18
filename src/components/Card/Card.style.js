import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        shadowColor: colors.tertiary,
        shadowOffset: { height: 5, width: 4 },
        elevation: 10,
        shadowOpacity: 10,
        shadowRadius: 1,
        marginStart:3,
    },
})