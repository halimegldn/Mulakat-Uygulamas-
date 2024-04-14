import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const SozelTestPage = ({ navigation }) => {
  const questions = [
    {
      question: "Hangi ülke Avrupa Birliği üyesi değildir?",
      options: ["Fransa", "Almanya", "İsviçre", "İspanya"],
      correctAnswer: "İsviçre"
    },
    {
      question: "Hangi yazar 'Savaş ve Barış' adlı eseri yazmıştır?",
      options: ["Leo Tolstoy", "Fyodor Dostoyevski", "Anton Çehov", "İvan Turgenyev"],
      correctAnswer: "Leo Tolstoy"
    },
    {
      question: "Hangi ünlü ressam 'Üç Müzisyen' adlı tabloyu yapmıştır?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dali", "Claude Monet"],
      correctAnswer: "Pablo Picasso"
    },
    {
      question: "Hangi antik şehir, İtalya'nın güneybatısında yer alır?",
      options: ["Atina", "Roma", "Pompeii", "Kahire"],
      correctAnswer: "Pompeii"
    },
    {
      question: "Hangi yılbaşı gecesi, James Joyce'un romanı 'Ulysses'te geçer?",
      options: ["1922", "1913", "1901", "1937"],
      correctAnswer: "1922"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
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
                  onPress={() => handleAnswer(questionIndex, optionIndex)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => console.log(selectedAnswers)}>
        <Text style={styles.buttonText}>Biti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 14,
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
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
    margin: 3,
  },
  optionText: {
    color: 'white',
    fontSize: 12,
  },
  selectedOption: {
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default SozelTestPage;
