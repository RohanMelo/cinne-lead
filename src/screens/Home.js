import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";

import MovieList from "../components/MovieList";
import useMovieFetcher from "../services/useMovieFetcher";
import getEnvVars from "../../environment";
import LoadingSpinner from "../components/LoadingSpinner";
import { CustomTextBold } from "../utils/CustomText";

const { apiKey } = getEnvVars();

const Home = () => {
  const [{ data, isLoading }, doFetch] = useMovieFetcher();

  useEffect(() => {
    doFetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1&include_adult=false&sort_by=popularity.desc`
    );
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CustomTextBold
          style={styles.titleText}
          accessibilityLabel="Home Screen, Title"
          accessibilityHint="List of Movies playing now. Bottom screen navigation available"
        >
          NOW PLAYING
        </CustomTextBold>
      </View>
      <ScrollView>
        {data && <MovieList movies={data.results} />}
        {isLoading && <LoadingSpinner />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    marginLeft: 10,
    marginRight: 10
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  safeArea: {
    flex: 1
  }
});

export default Home;
