import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Features() {
    const featuresData = [
        {
        icon: 'comments',
        title: 'Interacción Amigable',
        description: 'El chatbot está diseñado para interactuar de manera amigable y educativa con los niños.',
        },
        {
        icon: 'graduation-cap',
        title: 'Educación Personalizada',
        description: 'Ofrece contenidos adaptados para mejorar el aprendizaje y la comprensión de los niños.',
        },
        {
        icon: 'lock',
        title: 'Seguridad con Firebase',
        description: 'El sistema de autenticación de Firebase garantiza un acceso seguro y controlado.',
        },
        {
        icon: 'brain',
        title: 'Integración con OpenAI',
        description: 'El chatbot utiliza OpenAI para ofrecer respuestas inteligentes y conversaciones enriquecidas.',
        },
        {
            icon: 'refresh',
            title: 'Sincronización en la Nube',
            description: 'El historial de chat y las configuraciones se sincronizan a través de Firebase en tiempo real.',        
        },
        {
        icon: 'language',
        title: 'Soporte Multilingüe',
        description: 'El chatbot ofrece soporte en varios idiomas para una experiencia inclusiva.',
        },
    ];

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>CARACTERÍSTICAS PRINCIPALES</Text>
        <View style={styles.featuresRow}>
            {featuresData.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
                <View style={styles.iconContainer}>
                <FontAwesome name={feature.icon} size={40} color="#ffffff" />
                </View>
                <Text style={styles.title}>{feature.title}</Text>
                <Text style={styles.description}>{feature.description}</Text>
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
    featuresRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    featureCard: {
        flexBasis: '30%',
        alignItems: 'center',
        marginBottom: 30,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
    },
});
