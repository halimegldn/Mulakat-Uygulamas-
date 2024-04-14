import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const AnalitikTestPage = ({ navigation }) => {
  const questions = [
    {
      question: "10 - 5 kaçtır?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5"
    },
    {
      question: "8 / 2 işleminin sonucu nedir?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "4"
    },
    {
      question: "9 * 3 işleminin sonucu kaçtır?",
      options: ["24", "25", "26", "27"],
      correctAnswer: "27"
    },
    {
      question: "3 karekök 9 işlemi nedir?",
      options: ["3", "6", "9", "27"],
      correctAnswer: "3"
    },
    {
      question: "12 + 7 kaç eder?",
      options: ["17", "18", "19", "20"],
      correctAnswer: "19"
    },
    {
      question: "15 - 8 kaçtır?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7"
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

export default AnalitikTestPage;
