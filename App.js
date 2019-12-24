import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [bonus, setBonus] = useState(1);
  const [fertilizer, setFertilizer] = useState(9);

  const clickHandler = () => {
    setCount(count + bonus);
  };

  const handleBonus = () => {
    setCount(count - fertilizer);
    setBonus(bonus + 1);
    setFertilizer(fertilizer + 10);
  };
  let pic = {
    uri: "https://cb2.scene7.com/is/image/CB2/PottedMonsteraPlantSHS19/?$web_product_hero$&190410160828&wid=625&hei=625"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tabFontSize}>{count === 0 ? "Tap to start" : "$" + count} </Text>
      <TouchableHighlight onPress={clickHandler}>
        <Image source={pic} style={{ width: 193, height: 200 }} />
      </TouchableHighlight>
      <View>{count >= fertilizer ? <Button title={`Fertilize $ ${fertilizer}`} onPress={handleBonus} style={styles.tabFontSize} /> : <Text style={styles.tabFontSize}>Tap Tap Tap</Text>}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column"
  },
  tabFontSize: {
    fontSize: 30
  }
});
