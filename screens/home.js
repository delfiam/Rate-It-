import React from "react";
import { View, Text, StyleSheet, Button, TextInputBase, TextInput } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeScreen () {
    const [peliculas, setPeliculas] = useState([]);
    const [series, setSeries] = useState([]);

    const conseguirPeliculas = async (titulo) => {
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${titulo}&apikey=3069e472`)
        response.data.Search.map((pelicula) => {
            setPeliculas(pelicula.Title);
        })
    }
    console.log(setPeliculas);
    return (

        <View style={styles.container}>
        <TextInput  placeholder="Buscar Pelicula" onChangeText={conseguirPeliculas} /> 
        <Text> ${peliculas}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  