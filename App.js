import React, { useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Tools from './components/Tools';
import Support from './components/Support';
import Contact from './components/Contact';

export default function App() {
  const scrollViewRef = useRef();

  const handleNavigate = (section) => {
    let yOffset = 0;
    switch (section) {
      case 'características':
        yOffset = 400; // Ajusta esta posición según tu diseño de la vista "Características"
        break;
      case 'about': // Sección "Acerca de"
        yOffset = 800; // Ajusta esta posición según tu diseño de la vista "Acerca de"
        break;
      case 'tools': // Sección "Tools"
        yOffset = 1000; // Ajusta esta posición según tu diseño de la vista "Tools"
        break;
      case 'soporte':
        yOffset = 1200; // Ajusta esta posición según tu diseño de la vista "Soporte"
        break;
      case 'contacto':
        yOffset = 1600; // Ajusta esta posición según tu diseño de la vista "Contacto"
        break;
      default:
        yOffset = 0; // Para la vista "Inicio"
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
        <Tools />
        <Support />
        <Contact />
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
