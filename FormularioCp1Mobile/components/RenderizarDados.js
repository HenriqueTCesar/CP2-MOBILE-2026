import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default (props) => {
  return (
    <View style={styles.resultado}>
      <Text style={styles.tituloResultado}>Dados Recebidos:</Text>
      <Text style={styles.info}>Nome: {props.nome}</Text>
      <Text style={styles.info}>Curso: {props.curso}</Text>
      <Text style={styles.info}>Disciplina: {props.disciplina}</Text>
      <Text style={styles.info}>Descrição: {props.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ed145b',
    marginTop: 20
  },
  tituloResultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ed145b'
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#444'
  }
});