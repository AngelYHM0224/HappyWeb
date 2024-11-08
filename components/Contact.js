import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        console.log('Información enviada:', { name, email, phone, message });
    };

    return (
        <ImageBackground 
            source={require('../assets/image/c2.png')} // Reemplaza con la ruta correcta de tu imagen
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.heading}>CONTACTO</Text>
                <Text style={styles.subheading}>Estamos a su disposición para cualquier consulta o ayuda que necesite.</Text>
                <View style={styles.formContainer}>
                    <View style={styles.leftContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Name *"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Your Email *"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Your Phone *"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.rightContainer}>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Your Message *"
                            value={message}
                            onChangeText={setMessage}
                            multiline
                            numberOfLines={4}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>SEND MESSAGE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

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
        maxWidth: 1200, // Ajusta este valor para controlar el ancho máximo
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20, // Añade margen para centrar el contenedor
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
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite el ajuste si hay poco espacio
        width: '100%',
        marginBottom: 20,
        justifyContent: 'space-between', // Espaciado adecuado entre los contenedores
    },
    leftContainer: {
        flex: 1,
        marginRight: 5, // Ajusta el margen para mejorar el espaciado
        minWidth: '45%', // Controla el ancho mínimo
    },
    rightContainer: {
        flex: 1,
        marginLeft: 5, // Ajusta el margen para mejorar el espaciado
        minWidth: '45%', // Controla el ancho mínimo
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        backgroundColor: '#FFF',
        marginBottom: 15,
    },
    textArea: {
        height: 120,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});
