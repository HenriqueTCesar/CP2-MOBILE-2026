import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TelaPerfil({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://github.com/HenriqueTCesar.png" }}
        style={styles.fotoPerfil}
      />
      <Text style={styles.nomeAluno}>Henrique Teixeira Cesar</Text>
      <Text style={styles.rmAluno}>RM: 563088</Text>

      <View style={styles.cardInfo}>
        <Text style={styles.labelHeader}>DADOS REGISTRADOS</Text>

        <View style={styles.itemInfo}>
          <Text style={styles.info}>Curso: {user.curso}</Text>
        </View>
        <View style={styles.divisor} />

        <View style={styles.itemInfo}>
          <Text style={styles.info}>Telefone: {user.telefone}</Text>
        </View>
        <View style={styles.divisor} />

        <View style={styles.itemInfo}>
          <Text style={styles.info}>CPF: {user.cpf}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.linkVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoLink}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  fotoPerfil: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#ed145b",
  },
  nomeAluno: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  rmAluno: {
    fontSize: 18,
    color: "#ed145b",
    marginBottom: 10,
    fontWeight: "500",
  },
  cardInfo: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    // AQUI VOLTOU A BORDA DA FIAP:
    borderLeftWidth: 6,
    borderLeftColor: "#ed145b",
  },
  labelHeader: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#888",
    marginBottom: 10,
    letterSpacing: 1,
  },
  itemInfo: {
    paddingVertical: 12,
  },
  info: {
    fontSize: 16,
    color: "#444",
  },
  divisor: {
    height: 1,
    backgroundColor: "#f0f0f0",
    width: "100%",
  },
  linkVoltar: {
    marginTop: 35,
  },
  textoLink: {
    color: "#ed145b",
    fontWeight: "bold",
  },
});
