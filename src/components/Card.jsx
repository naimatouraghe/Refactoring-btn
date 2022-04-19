import {
  StyleSheet,
  Image,
  Text,
  View,
  Link
} from "@react-pdf/renderer";
import React from 'react';


export const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
  },
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
  },
  text: {
    width: '80%',
    textAlign: 'justify',
    fontSize: '12px',
    margin: 10,
  },
  link: {
    fontSize: '12px',
    margin: 10,
  },
  fill1: {
    width: '214px',
    height: '205px',
    borderRadius: '20px',
    position: 'absolute',
    top: '70px',
  },
  fill2: {
    flexGrow: 1,
    flexDirection: 'col',
    backgroundColor: 'white',
    position: 'absolute',
    width: '370px',
    height: '205px',
    left: '172px',
    top: '70px',
  },
  card: {
    height: '105px',
    width: 525,
    top: '230px',
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

const Card = ({ activity }) => {


  return (
    <>
      <View style={styles.body} break>
        <Text style={styles.title}>Jour </Text>


        <Image src="Le_Port_de_la_Daurade.jpg" style={styles.fill1} />

        <View style={styles.fill2}>
          <Text style={styles.text}>{activity.title}</Text>
          <Text style={styles.text}>Description: {activity.description}</Text>

          <Text style={styles.text}>Téléphone : {activity.phone_number} </Text>
          <Text style={styles.text}>Adresse : {activity.address}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.lines} />
          <Text style={styles.lines} />
          <Text style={styles.lines} />
        </View>
      </View>


    </>
  );
}

export default Card