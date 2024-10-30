import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const OnBoardingRenderItem = ({ item }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
  };

  switch (item.type) {
    case "static":
      return (
        <View style={styles.staticContainer}>
          
            <Image source={item.image} style={styles.image} />
          
          <View style={styles.textBox}>
            <Text style={styles.title1}>{item.title1}</Text>
            {item.title2 ? (
              <Text style={styles.title2}>{item.title2}</Text>
            ) : null}
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      );

    case "dynamic":
      return (
        <View style={styles.dynamicContainer}>
          <Text style={styles.appName}>APP_NAME</Text>
          <View style={styles.questionBox}>
            <Text style={styles.question}>{item.question}</Text>
            <View style={styles.optionsContainer}>
              {item.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.option,
                    selectedOption === option && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      );
  }
};

export default OnBoardingRenderItem;

const styles = StyleSheet.create({
  staticContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: Dimensions.get("screen").width,
  },
  
  image: {
    width: "90%",
    height: "70%",
  },
  textBox: {
    textAlign: "center",
  },
  title1: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "-2%",
    fontFamily: "TTHoves",
  },
  title2: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1%",
    fontFamily: "TTHoves",
  },
  description: {
    color: "white",
    fontSize: 20,
    marginVertical: "2%",
    textAlign: "center",
    fontFamily: "TTHoves",
  },
  dynamicContainer: {
    flex: 1,
    width: Dimensions.get("screen").width,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontSize: 35,
    color: "white",
    padding: 30,
    fontWeight: "bold",
    marginTop: "17%",
    marginBottom: "8%",
  },
  questionBox: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    marginVertical: "3%",
    padding: "3.5%",
   
    borderRadius: 35,
  },
  question: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: "8%",
    textAlign: "center",
  },
  optionsContainer: {
    width: "100%",
  },
  option: {
    fontSize: 20,
    padding: "4%",
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 60,
    marginVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#cce7ff",
  },
  optionText: {
    fontSize: 18,
  },
});
