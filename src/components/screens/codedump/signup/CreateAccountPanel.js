import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./CreateAccountPanel.style";

const CreateAccountPanel = (props) => {
  const {iconImg,textOne,textTwo} = props;
  return (
    <View style={styles.container}>

      <View style={styles.container2}>
        <View style={{ width: "70%" }}>
          <Text style={styles.headingText}>{textOne}</Text>
          <View>
            <Text style={styles.headingTextTwo}>
              {textTwo}
            </Text>
          </View>
        </View>
        <View style={{width:'30%',alignItems:'flex-end'}}>
        <Image
          source={
            iconImg
          }
          style={styles.iconStyle}
        />
        </View>
      </View>
    </View>
  );
};

export default CreateAccountPanel;
