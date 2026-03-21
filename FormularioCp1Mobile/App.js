import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';

import RenderizarDados from './Components/RenderizarDados';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    console.log("Aplicativo iniciado");
  }, []);

  const enviarDados = () => {
    setExibir(true);
  };

  return (
    <SafeAreaView style={styles.principalProjeto}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Image 
          style={styles.logoFiap} 
          source={require('./assets/fiaplogo.png')} 
        />

        <View style={styles.formAluno}>
          <Text style={styles.tituloPrimario}>Cadastro de Aluno</Text>

          <Text style={styles.tituloSecundario}>Nome</Text>
          <TextInput 
            style={styles.textoFormulario}
            placeholder="Digite seu nome completo"
            autoCapitalize="words"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.tituloSecundario}>Curso</Text>
          <TextInput 
            style={styles.textoFormulario}
            placeholder="Nome do seu curso"
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.tituloSecundario}>Disciplina</Text>
          <TextInput 
            style={styles.textoFormulario}
            placeholder="Nome da disciplina"
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.tituloSecundario}>Descrição Pessoal</Text>
          <TextInput 
            style={[styles.textoFormulario, { height: 80 }]}
            placeholder="Fale um pouco sobre você"
            value={descricao}
            onChangeText={setDescricao}
            multiline={true}
            numberOfLines={3}
          />

          <View style={styles.containerBotao}>
            <Button 
              title="ENVIAR" 
              onPress={enviarDados} 
              color="#ed145b" 
            />
          </View>
        </View>

        {exibir && (
          <RenderizarDados 
            nome={nome}
            curso={curso}
            disciplina={disciplina}
            descricao={descricao}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principalProjeto: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  logoFiap: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },
  formAluno: {
    marginBottom: 30
  },
  tituloPrimario: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ed145b',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  tituloSecundario: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  textoFormulario: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    fontSize: 16
  },
  containerBotao: {
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});