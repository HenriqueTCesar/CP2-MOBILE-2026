# Projeto de Formulário React Native - Checkpoint 02 - Mobile Application Development

Este repositório contém o código-fonte de um aplicativo mobile desenvolvido em React Native. O projeto implementa um formulário de cadastro com navegação entre telas, máscaras de entrada e persistência de dados.

## Funcionalidades e Arquitetura

O aplicativo foi estruturado para demonstrar o uso de navegação dinâmica, armazenamento local e a manipulação de estados no ecossistema React.

### Principais Recursos:
* **Navegação entre Telas**: Utiliza Stack Navigator para gerenciar a transição entre a tela de cadastro e a tela de perfil do usuário.
* **Máscaras de Entrada**: Implementação da biblioteca react-native-mask-text para padronizar os campos de Telefone e CPF.
* **Persistência e Autopreenchimento**: 
    * Async Storage: Utilizado para salvar os dados no dispositivo antes da navegação.
    * useEffect: Configurado para buscar os dados salvos e preencher o formulário automaticamente sempre que o app for aberto.
* **Validação de Formulário**: Verificação de campos obrigatórios com feedback via Alert.alert() para impedir a navegação caso faltem informações.

## Tecnologias Utilizadas

* **React Native**: Framework principal para a construção da interface.
* **Async Storage**: Biblioteca para armazenamento persistente de dados locais.
* **React Navigation**: Biblioteca para gerenciamento de rotas e navegação.
* **StyleSheet**: Estilização nativa focada na identidade visual da FIAP.

## Estrutura de Pastas

* `/assets`: Armazena recursos estáticos como logotipos e imagens.
* `App.js`: Ponto de entrada da aplicação e configuração da navegação.
* `TelaCadastro.js`: Lógica de formulário, validações e persistência de dados.
* `TelaPerfil.js`: Exibição das informações do aluno e dados recuperados.

## Como Executar

1. Certifique-se de ter o ambiente **React Native** (ou Expo) configurado.
2. Clone este repositório.
3. cd CP2-MOBILE-2026/
4. cd FormularioCp1Mobile/
5. Execute `npm install` para baixar as dependências.
6. Utilize `npx expo start` ou `npx react-native run-android` para iniciar o projeto.

---
*Este projeto faz parte de uma avaliação técnica de desenvolvimento mobile - Checkpoint 02.*
---