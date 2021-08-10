/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState([]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log("in useEffect");

    sampleApiCall();
  }, [])

  // useEffect(() => {
  // }, [data])

  const sampleApiCall = () => {
    console.log("in sampleApi");
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://breakingbadapi.com/api/quotes')
      .then(response => response.json())
      .then(json => {
        console.log("JSON RESPONSE---", json);
        setData(json)
      }
      )
  }
  const _renderItem = (item) => {
    // console.log("ITEM===,", item);
    return (
      <View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, color: "black" }}>
            {item.item.author}
          </Text>
        </View>
      </View>
    )

  }


  return (
    <SafeAreaView style={backgroundStyle}>
      {/* {console.log("data---", data)} */}
      <FlatList
        data={data}
        renderItem={_renderItem}
        extraData={true}
      // keyExtractor={item.userId}
      // renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
