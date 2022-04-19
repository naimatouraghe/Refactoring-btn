import {
    StyleSheet,
    Text,
    View
} from "@react-pdf/renderer";
import React from 'react';

export const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#e4e4e4',
        textTransform: 'uppercase',
    },
    subtitle: {
        margin: 10,
        fontSize: 18,
        textAlign: 'left',
        backgroundColor: '#e4e4e4',
    },
    card: {
        height: 610,
        width: 525,
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
        margin: 16,
    }
})
const Note = () => {
    return (
        <>
            <Text style={styles.title} break>Notes</Text>
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

export default Note;