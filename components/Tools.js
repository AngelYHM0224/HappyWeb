    import React, { useState } from 'react';
    import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';

    const Tools = () => {
    const [hoveredTool, setHoveredTool] = useState(null);

    const tools = [
        { name: 'React Native', logo: require('../assets/image/react.png'), url: 'https://reactnative.dev/' },
        { name: 'Firebase', logo: require('../assets/image/fire.png'), url: 'https://firebase.google.com/' },
        { name: 'OpenAI', logo: require('../assets/image/Open.png'), url: 'https://openai.com/' },
        { name: 'Google Cloud', logo: require('../assets/image/clous.jpeg'), url: 'https://cloud.google.com/' },
    ];

    const handlePress = (url) => {
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };

    return (
        <ImageBackground
        source={require('../assets/image/ft.jpeg')}
        style={styles.background}
        resizeMode="cover"
        >
        <View style={styles.container}>
            <Text style={styles.heading}>Herramientas Utilizadas</Text>
            <Text style={styles.subheading}>
            Estas son algunas de las tecnologías y herramientas clave que hemos utilizado.
            </Text>
            <View style={styles.toolsContainer}>
            {tools.map((tool, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => handlePress(tool.url)}
                onMouseEnter={() => setHoveredTool(index)}
                onMouseLeave={() => setHoveredTool(null)}
                style={[
                    styles.toolItem,
                    hoveredTool === index && styles.hoveredToolItem // Aplicar el estilo si está "hovered"
                ]}
                >
                <Image source={tool.logo} style={styles.toolLogo} resizeMode="contain" />
                <Text style={styles.toolName}>{tool.name}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
        </ImageBackground>
    );
    };

    const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        width: '90%',
        maxWidth: 1200,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        color: '#CCCCCC',
        marginBottom: 20,
        textAlign: 'center',
    },
    toolsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    },
    toolItem: {
        width: '20%',
        marginVertical: 15,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        padding: 10,
        transition: 'background-color 0.3s', // Para animación suave en la web
    },
    hoveredToolItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Cambia el color de fondo cuando está "hovered"
    },
    toolLogo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    toolName: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    });

    export default Tools;
