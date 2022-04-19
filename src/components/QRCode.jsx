import QRCode from "qrcode";
import { useEffect, useState, useRef } from 'react';
import {
    Document,
    Font,
    Page,
    StyleSheet,
    Image,
    Text,
    View,
} from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    img: {
        width: '20%',
        height: '20%',
        color: '#004F90'
    }

});


const QR = ({ text }) => {
    const canva = useRef(null);
    const [src, setSrc] = useState('');

    useEffect(() => {
        QRCode.toDataURL(text).then((setSrc));
    },
        []);

    return (
        <img ref={canva} src={src} />
    );

}

export default QR;