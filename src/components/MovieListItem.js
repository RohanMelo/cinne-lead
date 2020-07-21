import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { CustomText, CustomTextBold } from "../utils/CustomText";

const MovieListItem = ({
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
  backdrop_path
}) => {
  const navigation = useNavigation();
  let imgUri = "http://image.tmdb.org/t/p/w92/" + poster_path;
  let noPosterUri = "https://via.placeholder.com/92x138.png?text=No+Poster";

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MovieDetail", {
          title,
          backdrop_path,
          overview,
          release_date,
          vote_average
        })
      }
    >
      <View
        style={styles.container}
        accessibilityHint={`Movie Selected: ${title}. Double tap for movie details.`}
      >
        <View>
          <Image
            source={poster_path ? { uri: imgUri } : { uri: noPosterUri }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardText}>
          <CustomTextBold style={styles.title} numberOfLines={2}>
            {title}
          </CustomTextBold>
          <CustomText style={styles.overview} numberOfLines={3}>
            {overview}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    backgroundColor: "#f5f5f5",
    padding: 10
  },
  cardImage: {
    width: 92,
    height: 138,
    borderRadius: 10
  },
  cardText: {
    flexShrink: 1,
    padding: 10
  },

  title: {
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 18
  },
  overview: {
    flexWrap: "wrap",
    marginTop: 5
  }
});

export default MovieListItem;
