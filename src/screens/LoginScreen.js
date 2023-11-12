import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SignupScreen from './SignupScreen';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 처리 로직을 호출
  };

  const handleForgotPassword = () => {
    // 비밀번호 찾기 로직을 호출
  };

  const handleSignup = () => {
        navigation.navigate('Signup');
  };   

  return (
    <View style={styles.container}>
      <Image
        source = {require('./../../assets/img/ylogo1.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>YMATE</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>학번</Text>
          <TextInput
            style={[styles.input, styles.rounded]}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>비밀번호</Text>
          <TextInput
            style={[styles.input, styles.rounded]}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="로그인" onPress={handleLogin} />
      </View>
      <TouchableOpacity onPress={handleSignup} style={styles.signupLink}>
          <Text style={styles.signupText}>아직 회원이 아니신가요? <Text style={styles.blueText}>회원가입</Text></Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // 상단 정렬로 변경
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },
  title: {
    marginBottom: 30,
    fontSize: 30,
    color: '#000',
  },
  smalltitle: {
    fontSize: 15,
    width: 60,
    color: '#000'
  },
  inputContainer: {
    width: '80%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '50%',
    borderRadius: 10,
  },
  rounded: {
    borderRadius: 10,
  },
  image: {
    marginTop: 50,
    width: '100%',
    height: 200,
  },
  forgotPassword: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 10,
  },
  signupLink: {
    marginTop: 10,
  },
  signupText: {
    fontSize: 14,
    color: '#000',
  },
  blueText: {
    color: 'blue',
  },

});

export default LoginScreen;