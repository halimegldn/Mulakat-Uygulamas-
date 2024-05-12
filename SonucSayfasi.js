import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SonucSayfasi = ({ route }) => {
  const { englishCorrectCount, analyticCorrectCount, sozelCorrectCount } = route.params;

  // İngilizce, analitik ve sözel başarı durumlarını belirle
  const englishSuccess = englishCorrectCount >= 3;
  const analyticSuccess = analyticCorrectCount >= 3;
  const sozelSuccess = sozelCorrectCount >= 3;
  
  // İngilizce, analitik ve sözel başarılı veya başarısız mesajlarını belirle
  const englishMessage = englishSuccess ? 'Geçtiniz!' : 'Geçemediniz!';
  const analyticMessage = analyticSuccess ? 'Geçtiniz!' : 'Geçemediniz!';
  const sozelMessage = sozelSuccess ? 'Geçtiniz!' : 'Geçemediniz!';

  // Başarı durumlarına göre kutu renklerini belirle
  const englishColor = englishSuccess ? 'green' : 'red';
  const analyticColor = analyticSuccess ? 'green' : 'red';
  const sozelColor = sozelSuccess ? 'green' : 'red';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Sonuçları</Text>
      <View style={[styles.resultContainer, { backgroundColor: englishColor }]}>
        <Text style={styles.resultMessage}>İngilizce: {englishMessage}</Text>
      </View>
      <View style={[styles.resultContainer, { backgroundColor: analyticColor }]}>
        <Text style={styles.resultMessage}>Analitik: {analyticMessage}</Text>
      </View>
      <View style={[styles.resultContainer, { backgroundColor: sozelColor }]}>
        <Text style={styles.resultMessage}>Sözel: {sozelMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  resultMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
export default SonucSayfasi;
