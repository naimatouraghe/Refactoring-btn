import {
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  Text,
  View
} from "@react-pdf/renderer";
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Card from "./Card";
import QRCode from "qrcode";
import Note from "./Note";
import Map from "./Map";
import { roadTripActivities } from '../api';



const fontMontserrat = "./fonts/Montserrat-Italic-VariableFont_wght.ttf";
Font.register({ family: 'Montserrat', src: fontMontserrat });

export const styles = StyleSheet.create({
  font: {
    fontFamily: "Montserrat"
  },
  page: {
    padding: 30,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    color: '#004F90',
  },

  header: {
    display: 'flex',
    flexDirection: 'row'
  },

  title: {
    fontSize: '32px',
    textAlign: 'center',
  },
  author: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
  },
  img: {
    width: '539px',
    height: '273px',
    borderRadius: '20px',
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: '20px',
    textAlign: 'left',
    width: '120px',
    fontWeight: 600,
  },
  QRCode: {
    width: 100,
    alignSelf: 'center',
    color: '#004F90',
    marginTop: '40',
    marginBottom: '10'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    right: 20,
    textAlign: 'left',
  },
});


const PDFDocument = ({ places }) => {
  console.log(places);
  const [activities, setActivities] = useState([])

  useEffect(() => {
    roadTripActivities()
      .then((res) => {
        console.log(res);
        setActivities(res)
      })
  }, [])


  return (
    <Document style={styles.body} >
      <Page size="A4" wrap style={styles.page}>
        <Header style={styles.header} />
        <Text style={styles.title}></Text>
        <Text style={styles.author}>by </Text>

        <Image style={styles.img} src="43pac5ow5zhtdw9qi5pi7a3y1436.png" />
        <Text style={styles.descriptionTitle}> Description </Text>
        <Text></Text>

        <Text >Scannez pour retrouver l'itinéraire sur Henri Trip</Text>

        {
          activities.map((activity) => (
            <Card key={activity.id} activity={activity}></Card>
          ))
        }


        <Map />
        <Note />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber }) => `${pageNumber} `}
          fixed
        />

      </Page>
    </Document>
  )
};

export default PDFDocument;


