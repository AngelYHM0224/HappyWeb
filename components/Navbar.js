import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Navbar({ onNavigate }) {
    const [activeNav, setActiveNav] = useState('inicio');

    const handleNavigate = (navItem) => {
        setActiveNav(navItem);
        onNavigate(navItem);
    };

    return (
        <View style={styles.container}>
        <Image source={require('../assets/image/logosinfondo.png')} style={styles.logo} />
        <View style={styles.navItems}>
            {['Inicio', 'Características', 'About', 'Tools', 'Soporte', 'Contacto'].map((item) => (
            <TouchableOpacity
                key={item}
                style={[
                styles.navItem,
                activeNav === item.toLowerCase() && styles.activeNavItem
                ]}
                onPress={() => handleNavigate(item.toLowerCase())} // Convertimos el item a minúsculas
            >
                <Text style={[styles.navText, activeNav === item.toLowerCase() && styles.activeNavText]}>
                {capitalizeFirstLetter(item)}
                </Text>
            </TouchableOpacity>
            ))}
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
        padding: 10,
        borderRadius: 5,
    },
    activeNavItem: {
        backgroundColor: '#FBC63C',
    },
    navText: {
        fontSize: 16,
        color: '#a77b00',
        fontWeight: '400',
    },
    activeNavText: {
        color: '#fff',
    },
});

// Utility function to capitalize the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
