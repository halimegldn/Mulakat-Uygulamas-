import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import WelcomePage from './WelcomePage';
import { ImageBackground } from 'react-native';

const App = () => {
  const [isFirebaseConnected, setIsFirebaseConnected] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyCVyySe5SVh59bi0K7v8m7Cw1KpR6-Yl2Q",
      projectId: "flutter-e0bf4",
      projectName:"flutter",
      appId: "1:178213261498:android:38b7010a2c94bb1505f283"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      setIsFirebaseConnected(true);
      console.log("Firebase'e başarıyla bağlandı!");
    }
  }, []);

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

  if (isLoggedIn) {
    return <WelcomePage />;
  }

  return (
    <ImageBackground source={{ uri: 'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=' }} style={styles.backgroundImage}>
      <div style={{ margin: 'auto', maxWidth: 400, padding: 20 }}>
        {isFirebaseConnected && (
          <div style={{ backgroundColor: 'green', color: 'white', padding: 10, marginBottom: 10 }}>
            Firebase'e başarıyla bağlandı!
          </div>
        )}
        <h2 style={{ textAlign: 'center' }}>Kayit Yap</h2>
        <div style={{ marginBottom: 10 }}>
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input 
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, borderRadius: 5, border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={handleLogin} style={{ padding: '8px 16px', borderRadius: 5, background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
            Kayıt Yap
          </button>
        </div>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </div>
    </ImageBackground>
  );
};

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default App;
