
import {
    StyleSheet,
    Text,
} from '@react-pdf/renderer';

import Logo from './Logo';

export const styles = StyleSheet.create({

    header: {
        textAlign: 'left',

        borderBottomWidth: 0.5,
        borderBottomColor: '#112131',
        borderBottomStyle: 'dashed',
        alignItems: 'stretch',
        marginBottom: 30,
        lineHeight: 2,
        fontSize: '14px',
    },

});

const Header = ({ title }) => (
    <>
        <Text style={styles.header} fixed>
            Road Trip: {title}
        </Text>

    </>
)

export default Header;