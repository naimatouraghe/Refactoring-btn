import {
    StyleSheet,
    Image,
    Text,
    View,
} from "@react-pdf/renderer";
import React from 'react';

export const styles = StyleSheet.create({
    title: {
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#e4e4e4',
        textTransform: 'uppercase',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'left',
        backgroundColor: '#e4e4e4',
    },
    fill1: {
        height: '280px',
        width: 525,
        borderRadius: '20px',
    },
    card: {
        height: '305px',
        width: 525,
        top: '30px',
        borderWidth: 1,
        borderColor: '#004F90',
        borderStyle: 'solid',
        borderRadius: '20px',
        padding: '20px'
    },
    lines: {
        borderBottomWidth: 1,
        borderBottomColor: '#004F90',
        borderBottomStyle: 'dashed',
        margin: 14,
    }
});
const Map = () => {
    return (
        <>
            <Text style={styles.title} break>Carte</Text>
            <Image src="map.jpeg" style={styles.fill1} />
            <Text style={styles.subtitle}>Notes</Text>
            <View style={styles.card}>
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
                <Text style={styles.lines} />
            </View>
        </>
    );
};

export default Map;