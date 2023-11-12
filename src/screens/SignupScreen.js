import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SignupScreen = ({ navigation }) => {

  const [studentId, setStudentId] = useState('');
  const [studentIdCheckError, setStudentIdCheckError] = useState('');
  const [checkStudentID,setCheckStudentId] = useState(false);
  const [emailCheckNumber, setemailCheckNumber] = useState('');
  const [emailCheckError, setEmailCheckError] = useState(''); 
  const [nickName, setnickName] = useState('');
  const [nickNameCheckError,setnickNameCheckError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleStudentId = () => {
    const studentIdPattern = /^\d{9}$/;

    if (!studentIdPattern.test(studentId)) {
      setStudentIdCheckError('유효한 학번을 입력해주세요.');
      setIsEmailVerified(false);
      setEmailCheckError('');
    } else {
      setIsEmailVerified(true);
      setStudentIdCheckError('');
    }
  }

  const handleEmailCheck = () => {
    if(isEmailVerified){
      if(emailCheckNumber != 666){
        setEmailCheckError('인증번호가 일치하지 않습니다.');
      }
      else{
        setEmailCheckError('')
      }
    }
    else {
      setEmailCheckError('이메일 확인이 필요합니다.');
    }
    
  }
  const handleNickNameCheck = () => {
    
  }

  const handlePasswordChange = (text) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-z\d!@#$%^&*()_+]{8,}$/;

    if (!passwordPattern.test(text)) {
      setPasswordError('비밀번호는 영문, 숫자, 기호를 포함하고 8자리 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }

    setPassword(text);
  };

  const handlePasswordConfirmationChange = (text) => {
    if (text !== password) {
      setPasswordConfirmationError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordConfirmationError('');
    }

    setPasswordConfirmation(text);
  };

  const handleSignup = () => {
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>학번</Text>
          <TextInput
            style={[styles.input, styles.rounded]}
            value={studentId}
            onChangeText={(text) => setStudentId(text)}
          />
          <TouchableOpacity style={styles.checkContainer} onPress={handleStudentId}>
        <Text style={styles.checkBox}>인증메일 발송</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.emptySpace}>
        {studentIdCheckError ? (
        <Text style={styles.errorText}>{studentIdCheckError}</Text>
      ) : null}
      </View>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>이메일 확인</Text>
          <TextInput
            style={[styles.input, styles.rounded]}
            value={emailCheckNumber}
            onChangeText={(text) => setemailCheckNumber(text)}
          />
        <TouchableOpacity style={styles.checkContainer} onPress={handleEmailCheck} disabled={!isEmailVerified}>
        <Text style={styles.checkBox}>인증번호 확인</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.emptySpace}>
        {emailCheckError ? (
        <Text style={styles.errorText}>{emailCheckError}</Text>
      ) : null}
      </View>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>닉네임</Text>
          <TextInput
            style={[styles.input, styles.rounded]}
            value={nickName}
            onChangeText={(text) => setnickName(text)}
          />
        <TouchableOpacity style={styles.checkContainer} onPress={handleNickNameCheck}>
        <Text style={styles.checkBox}>중복 확인</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.emptySpace}>
        {nickNameCheckError ? (
        <Text style={styles.errorText}>{nickNameCheckError}</Text>
      ) : null}
      </View>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>비밀번호</Text>
          <TextInput
            style={[styles.input, styles.rounded]}
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.emptySpace}>
        {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      </View>
        <View style={styles.inputRow}>
          <Text style={styles.smalltitle}>비밀번호 확인</Text>
          <TextInput
            style={[styles.input, styles.rounded, password !== passwordConfirmation ? styles.errorInput : null]}
            value={passwordConfirmation}
            onChangeText={handlePasswordConfirmationChange}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.emptySpace}>
        {passwordConfirmationError ? (
        <Text style={styles.errorText}>{passwordConfirmationError}</Text>
      ) : null}
    </View>
      </View>
      <TouchableOpacity style={styles.footer} onPress={handleSignup}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </ScrollView>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // 상단 정렬로 변경
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: screenHeight,
  },
  header: {
    width: screenWidth,
    height: 60, // 상단 바의 높이 조절
    justifyContent: 'center', // 가운데 정렬
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 10,
  },
  footer: {
    width: '95%',
    alignItems: 'center', // 버튼을 가로로 중앙에 정렬
    marginTop: 225,// 버튼을 화면 하단으로 밀어내기 위한 여백 추가
    backgroundColor: '#22a2f2', // 배경색 추가
    paddingVertical: 10, // 상하 여백 추가
    borderRadius: 10,  
  },
  checkBox: {
    marginTop:8,
    textAlign:'center',
    color: '#22A2F2',
  },
  headerText: {
    color: 'black', // 텍스트 색상 설정
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 30,
    fontSize: 30,
    color: '#000',
  },
  smalltitle: {
    marginLeft: 10,
    fontSize: 15,
    width: 100,
    color: '#000'
  },
  inputContainer: {
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1.5,
    borderColor: 'gray',
    paddingLeft: 10,
    marginRight: 10,
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
  checkContainer:{
    
    height:40,
    borderWidth:1,
    width:100,
    marginRight:10,
    borderColor: '#22A2F2',
    borderRadius: 7,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',
    marginRight:10,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  emptySpace: {
    width:screenWidth,
    marginTop:5,
    height:15,
    marginBottom:10,
  }
});

export default SignupScreen;