import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Utiliza íconos de FontAwesome o cualquier otra librería

export default function About() {
    const aboutData = [
        {
            icon: 'building',
            title: 'Nuestra Misión',
            description: 'Proveer herramientas tecnológicas educativas que ayudan a los niños a crecer y aprender.',
        },
        {
            icon: 'users',
            title: 'Nuestro Equipo',
            description: 'Compuesto por expertos en tecnología, pedagogía, y diseño para crear la mejor experiencia.',
        },
        {
            icon: 'handshake-o',
            title: 'Nuestro Compromiso',
            description: 'Brindar una experiencia segura, amigable y educativa para todos nuestros usuarios.',
        },
        {
            icon: 'globe',
            title: 'Impacto Global',
            description: 'Llevamos la educación más allá de las fronteras con soporte multilingüe y diversidad cultural.',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Acerca de Nosotros</Text>
            <View style={styles.aboutRow}>
                {aboutData.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name={item.icon} size={40} color="#ffffff" />
                        </View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    aboutRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    card: {
        flexBasis: '45%',
        alignItems: 'center',
        marginBottom: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: '#F2E9D3',
        backgroundColor: '#F2E9D3',
        borderRadius: 10,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FBC63C', // Color azul como en la imagen de ejemplo
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
    },
});
