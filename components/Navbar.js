import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Navbar({ onNavigate }) {
    return (
        <View style={styles.container}>
        <Image source={require('../assets/image/logosinfondo.png')} style={styles.logo} />
        <View style={styles.navItems}>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('home')}>
            <Text style={styles.navText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('features')}>
            <Text style={styles.navText}>Características</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('about')}>
            <Text style={styles.navText}>Acerca de</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('support')}>
            <Text style={styles.navText}>Soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('contact')}>
            <Text style={styles.navText}>Contacto</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
    },
    logo: {
        width: 50,
        height: 50,
        marginLeft: 20,
    },
    navItems: {
        flexDirection: 'row',
    },
    navItem: {
        marginHorizontal: 20,
    },
    navText: {
        fontSize: 16,
        color: '#a77b00',
        fontWeight: '400',
    },
});
