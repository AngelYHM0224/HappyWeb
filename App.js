import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Support from './components/Support';
import Contact from './components/Contact'; // Importa la sección Contact

export default function App() {
  const scrollViewRef = useRef();

  const handleNavigate = (section) => {
    let yOffset = 0;
    switch (section) {
      case 'features':
        yOffset = 400; // Ajusta esta posición según el diseño de tu vista de Features
        break;
      case 'about':
        yOffset = 800; // Ajusta esta posición según la posición de la vista "About"
        break;
      case 'support':
        yOffset = 1200; // Ajusta esta posición según la posición de la vista "Support"
        break;
      case 'contact':
        yOffset = 1600; // Ajusta esta posición según la posición de la vista "Contact"
        break;
      default:
        yOffset = 0; // Para la vista de inicio
    }

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <Navbar onNavigate={handleNavigate} />
      <ScrollView ref={scrollViewRef}>
        <Home />
        <Features />
        <About />
        <Support />
        <Contact /> {/* Agrega la sección de Contacto aquí */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
