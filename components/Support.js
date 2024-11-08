import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Usa una librería de íconos si es necesario

export default function Support() {
    const supportSteps = [
        {
        step: '01',
        title: 'Integración de Firebase',
        description: 'Asistimos en la configuración de Firebase para la autenticación de usuarios, base de datos y almacenamiento en tiempo real, asegurando seguridad y escalabilidad.',
        icon: 'database',
        },
        {
        step: '02',
        title: 'Integración de OpenAI',
        description: 'Proporcionamos soporte para integrar OpenAI en tu chatbot, permitiendo respuestas inteligentes y adaptadas a las necesidades del usuario.',
        icon: 'comments',
        },
        {
        step: '03',
        title: 'Optimización de la Aplicación',
        description: 'Ayudamos a mejorar el rendimiento general del chatbot, optimizando la lógica, tiempo de respuesta y asegurando una experiencia de usuario fluida.',
        icon: 'cogs',
        },
        {
        step: '04',
        title: 'Despliegue y Soporte Continuo',
        description: 'Ofrecemos soporte para el despliegue de la aplicación en diferentes plataformas y proporcionamos mantenimiento continuo para mejoras y corrección de errores.',
        icon: 'rocket',
        },
    ];

    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Nuestro Proceso de Soporte</Text>
        {supportSteps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
            <View style={styles.stepHeader}>
                <Text style={styles.stepNumber}>{step.step}</Text>
                <FontAwesome name={step.icon} size={30} color="#000" style={styles.icon} />
            </View>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
        ))}
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    stepContainer: {
        marginBottom: 40,
        alignItems: 'center',
        width: '90%',
    },
    stepHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    stepNumber: {
        fontSize: 40,
        fontWeight: 'bold',
        marginRight: 15,
        color: '#555',
    },
    icon: {
        marginLeft: 10,
    },
    stepTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    stepDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginTop: 5,
    },
});
