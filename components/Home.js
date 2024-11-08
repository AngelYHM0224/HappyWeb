import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

const images = [
    require('../assets/image/fondo1.jpg'), // Reemplaza con tus rutas de imágenes
    require('../assets/image/f4.png'),
    require('../assets/image/f5.png'),
    ];

    export default function Home() {
    const scrollRef = useRef(null);
    let scrollPosition = 0;

    useEffect(() => {
        const interval = setInterval(() => {
        if (scrollRef.current) {
            scrollPosition += Dimensions.get('window').width;
            if (scrollPosition >= Dimensions.get('window').width * images.length) {
            scrollPosition = 0; // Reiniciar el scroll cuando llegue al final
            }
            scrollRef.current.scrollTo({ x: scrollPosition, animated: true });
        }
        }, 4000);

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    return (
        <View style={styles.container}>
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            style={styles.scrollView}
        >
            {images.map((image, index) => (
            <View key={index} style={styles.slide}>
                <Image source={image} style={styles.image} />
            </View>
            ))}
        </ScrollView>
        {/* Overlay fijo */}
        <View style={styles.overlay}>
            <Text style={styles.title}>Bienvenido a Happy GPT</Text>
            <Text style={styles.subtitle}>El aprendizaje es el futuro de los niños</Text> {/* Subtítulo añadido */}
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        position: 'relative',
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    slide: {
        width: Dimensions.get('window').width,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Cambia la opacidad según tu necesidad
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: { // Estilo para el subtítulo
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});
