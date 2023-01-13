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
        setPeliculas(response.data.Search);
    }
    console.log(setPeliculas);
    return (

        <View>
        <TextInput  placeholder="Buscar Pelicula" onChangeText={conseguirPeliculas} /> 
        </View>
    );
};
