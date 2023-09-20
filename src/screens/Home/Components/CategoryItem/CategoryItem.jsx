import React from "react";
import { Pressable, Text,View } from "react-native";
import { Card } from "../../../../components";
import styles from "./CategoryItem.style";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() =>navigation.navigate('Products')}
    style={styles.container}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
