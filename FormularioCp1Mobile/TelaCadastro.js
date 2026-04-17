import React, { useState, useEffect } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaskedTextInput } from "react-native-mask-text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@dados_usuario");
        if (jsonValue != null) {
          const dados = JSON.parse(jsonValue);
          setNome(dados.nome);
          setCurso(dados.curso);
          setTelefone(dados.telefone);
          setCpf(dados.cpf);
        }
      } catch (e) {
        console.error(e);
      }
    };
    carregarDados();
  }, []);

  const handleSalvar = async () => {
    if (!nome.trim() || !curso.trim() || !telefone.trim() || !cpf.trim()) {
      Alert.alert("Atenção", "Preencha todos os campos obrigatórios!");
      return;
    }

    if (cpf.length < 14 || telefone.length < 15) {
      Alert.alert("Erro", "CPF ou Telefone incompletos.");
      return;
    }

    const usuario = { nome, curso, telefone, cpf };

    try {
      await AsyncStorage.setItem("@dados_usuario", JSON.stringify(usuario));
      navigation.navigate("Perfil", { user: usuario });
    } catch (e) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  return (
    <SafeAreaView style={styles.principalProjeto}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.logoFiap}
          source={require("./assets/fiaplogo.png")}
        />

        <View style={styles.formAluno}>
          <Text style={styles.tituloPrimario}>Cadastro de Aluno</Text>

          <Text style={styles.tituloSecundario}>Nome</Text>
          <TextInput
            style={styles.textoFormulario}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome completo"
          />

          <Text style={styles.tituloSecundario}>Curso</Text>
          <TextInput
            style={styles.textoFormulario}
            value={curso}
            onChangeText={setCurso}
            placeholder="Seu curso"
          />

          <Text style={styles.tituloSecundario}>Telefone</Text>
          <MaskedTextInput
            mask="(99) 99999-9999"
            value={telefone}
            onChangeText={setTelefone}
            style={styles.textoFormulario}
            keyboardType="numeric"
          />

          <Text style={styles.tituloSecundario}>CPF</Text>
          <MaskedTextInput
            mask="999.999.999-99"
            value={cpf}
            onChangeText={setCpf}
            style={styles.textoFormulario}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.botaoPrincipal}
            onPress={handleSalvar}
          >
            <Text style={styles.textoBotao}>SALVAR DADOS/CONTINUAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principalProjeto: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logoFiap: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  formAluno: { marginBottom: 30 },
  tituloPrimario: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ed145b",
    textAlign: "center",
    marginVertical: 20,
  },
  tituloSecundario: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  textoFormulario: {
    borderWidth: 1,
    borderColor: "#ed145b",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  botaoPrincipal: {
    backgroundColor: "#ed145b",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  textoBotao: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
