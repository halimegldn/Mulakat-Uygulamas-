import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const AnalitikTestPage = ({ navigation }) => {
  // Sorular ve cevaplar
const questions = [
    {
      question: "Bir arabanın hızı saatte 60 km ise, bu araba 4 saatte kaç km yol alır?",
      options: ["180 km", "240 km", "300 km", "320 km"],
      correctAnswer: "240 km"
    },
    {
      question: "Bir işletmenin bir ürün için üretim maliyeti 500 TL ve bu ürünü satışa 750 TL'ye koymuşsa, bu üründen ne kadar kar elde etmiş olur?",
      options: ["150 TL", "200 TL", "250 TL", "300 TL"],
      correctAnswer: "250 TL"
    },
    {
      question: "Bir kutuda 12 kırmızı, 8 mavi ve 6 yeşil top bulunmaktadır. Kutudan rastgele çekilen bir topun mavi olma olasılığı nedir?",
      options: ["1/3", "2/9", "1/4", "3/8"],
      correctAnswer: "2/9"
    },
    {
      question: "Bir işletmenin yıllık geliri 200.000 TL, giderleri ise 150.000 TL ise, bu işletmenin yıllık net karı ne kadardır?",
      options: ["50.000 TL", "100.000 TL", "150.000 TL", "200.000 TL"],
      correctAnswer: "50.000 TL"
    }
  ];

  // Seçilen cevapları ve doğru cevap sayısını tutmak için state
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Cevap seçildiğinde çalışacak fonksiyon
  const handleAnswer = (questionIndex, optionIndex, correctAnswer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);

    if (questions[questionIndex].options[optionIndex] === correctAnswer) {
      // Doğru cevaplanan soru sayısını artır
      setCorrectAnswersCount(prevCount => prevCount + 1);
    }
  };

  // Bitir butonuna basıldığında çalışacak fonksiyon
  const handleFinishTest = () => {
    navigation.navigate('SonucSayfasi', { analyticCorrectCount: correctAnswersCount });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {questions.map((item, questionIndex) => (
          <View key={questionIndex} style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
            <View style={styles.optionsContainer}>
              {item.options.map((option, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={[styles.optionButton, selectedAnswers[questionIndex] === optionIndex && styles.selectedOption]}
                  onPress={() => handleAnswer(questionIndex, optionIndex, item.correctAnswer)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleFinishTest}>
        <Text style={styles.buttonText}>Bitir</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCFF', // Arka plan rengi
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  questionContainer: {
    marginBottom: 10,
  },
  questionText: {
    fontSize: 13, // Soru metin boyutu daha da küçültüldü
    marginBottom: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: 'blue',
    borderRadius: 20, // Seçenek kutusu yuvarlatıldı
    margin: 5,
    width: 100, // Seçenek kutusu genişliği küçültüldü
    height: 30, // Seçenek kutusu yüksekliği düşürüldü
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 10, // Seçenek metin boyutu daha da küçültüldü
  },
  selectedOption: {
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: '#5252FF',
    paddingVertical: 8,
    paddingHorizontal: 20, // Bitir butonu yatay padding artırıldı
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default AnalitikTestPage;
