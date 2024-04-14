import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const EnglishTestPage = ({ navigation }) => {
  const questions = [
    {
      question: "Capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    },
    {
      question: "Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Dollar"],
      correctAnswer: "Yen"
    },
    {
      question: "Capital of Italy?",
      options: ["London", "Rome", "Paris", "Madrid"],
      correctAnswer: "Rome"
    },
    {
      question: "Which country has the largest population?",
      options: ["India", "China", "USA", "Russia"],
      correctAnswer: "China"
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
    backgroundColor: '#5252FF',
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

export default EnglishTestPage;
