import React from "react";
import { useState } from "react"; 
import { View, Text, Alert, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { TextInputMask } from 'react-native-masked-text';

import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [loading, setLoading] = useState(false);

    async function getCadastro() {
        try {
            setLoading(true);
            setTimeout(() => {
                if (!nome || !email || !telefone || !dataNascimento) {
                    Alert.alert('Atenção', 'Digite os campos obrigatórios');
                    setLoading(false);
                    return;
                }

                if (nome === 'Hugo' && email === 'hugo@exemplo.com' && telefone.replace(/\D/g, '') === '11123456789' && dataNascimento === '01/01/2000') {
                    Alert.alert('Erro', 'Usuário já cadastrado');
                } else {
                    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
                }
                setLoading(false);
            }, 3000);

        } catch (error) {
            Alert.alert('Erro', 'Erro ao Cadastrar');
        }

    }

    return (
        <View style={styles.container}>
            
            <View style={styles.boxTop}>
                <Text style={styles.text}>Cadastro de Clientes</Text>
            </View>

            <View style={styles.boxMid}>
                <View>
                    <Text style={styles.titleInput}>NOME</Text>
                    <View style={styles.boxInput}>
                        <TextInput
                            placeholder="Digite seu nome"
                            value={nome}
                            onChangeText={setNome}
                            style={styles.input}
                        />

                        <MaterialIcons
                            name="person"
                            size={20}
                            color={themas.colors.gray}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.titleInput}>ENDEREÇO DE E-MAIL</Text>
                    <View style={styles.boxInput}>
                        <TextInput
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                        />

                        <MaterialIcons
                            name="email"
                            size={20}
                            color={themas.colors.gray}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.titleInput}>TELEFONE</Text>
                    <View style={styles.boxInput}>
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: '(99) 99999-9999'
                            }}
                            placeholder="Digite seu telefone"
                            value={telefone}
                            onChangeText={setTelefone}
                            keyboardType="numeric"
                            style={styles.input}
                        />

                        <MaterialIcons
                            name="phone"
                            size={20}
                            color={themas.colors.gray}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.titleInput}>DATA DE NASCIMENTO</Text>
                    <View style={styles.boxInput}>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            placeholder="Digite sua data de nascimento"
                            value={dataNascimento}
                            onChangeText={setDataNascimento}
                            keyboardType="numeric"
                            style={styles.input}
                        />

                        <MaterialIcons
                            name="calendar-today"
                            size={20}
                            color={themas.colors.gray}
                        />
                    </View>
                </View>

            </View>

            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.button} onPress={() => getCadastro()}>
                    {loading ? <ActivityIndicator color={'#ffff'} size={'small'} />
                        :
                        <Text style={styles.textButton}>Cadastrar</Text>
                    }
                </TouchableOpacity>
                <Text style={styles.textBottom}>Já está cadastrado? 
                    <Text style={styles.textBottomLink}>Entre Agora</Text>
                </Text>
            </View>
        </View>
    );
}