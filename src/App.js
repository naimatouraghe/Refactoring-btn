import './App.css';
import React, { useState, useEffect } from "react";
import { getPlacesData } from './api';
import { PDFDownloadLink } from "@react-pdf/renderer"

import PDFDocument from './components/PDFDocument';

const App = () => {

    const [places, setPlaces] = useState([])

    const [ready, setReady] = useState(false);
    useEffect(() => {
        getPlacesData()
            .then((result) => {
                console.log(result);
                setPlaces(result)
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 0);
    }, []);

    if (!ready) {
        return null;
    } else {


        return (
            <div className="App">
                <PDFDownloadLink document={<PDFDocument />} fileName="test">
                    {({ loading }) =>
                        loading ? (
                            <button >Télécharger</button>
                        ) : (
                            <button places={places} onClick={() => getPlacesData()}>Télécharger</button>
                        )}
                </PDFDownloadLink>
            </div>
        )
    }
}


export default App