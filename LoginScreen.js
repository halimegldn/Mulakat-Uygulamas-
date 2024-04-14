User
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async () => {
    try {
      const db = firebase.firestore();
      const usersRef = db.collection('users');
      const snapshot = await usersRef.where('email', '==', email).where('password', '==', password).get();
      
      if (snapshot.empty) {
        throw new Error('Kullanıcı adı veya şifre hatalı!');
      } else {
        console.log('Başarıyla giriş yapıldı!');
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Giriş yaparken bir hata oluştu:', error.message);
      setError(error.message);
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=' }} style={styles.backgroundImage}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Giriş Yap</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 10 }}
          onChangeText={setEmail}
          value={email}
          placeholder="E-posta"
        />
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 10 }}
          onChangeText={setPassword}
          value={password}
          placeholder="Şifre"
          secureTextEntry
        />
        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: 'blue', borderRadius: 5 }} onPress={handleLogin}>
          <Text style={{ color: 'white' }}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const AnaSayfa = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Main Page!</Text>
      <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Tıkla</Text>
       
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Tıkla</Text>
        <Text style={{ color: 'white', marginLeft: 5 }}>Bu derse tıkla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Tıkla</Text>
        <Text style={{ color: 'white', marginLeft: 5 }}>Bu derse tıkla</Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <AnaSayfa />
      ) : (
        <LoginPage onLogin={handleLoginSuccess} />
      )}
      {isLoggedIn && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hoşgeldin</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default WelcomePage;
