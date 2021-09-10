import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync(); 
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2 }} onLayout={onLayoutRootView}>
        <View>
          <Image source = {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/choose.png')} style = {{alignItems: 'center', width: "100%", height: 350 }} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text_content}>Hello everyone post any type of related topics and share your thoughts.</Text>
        </View>
        <View style={styles.space_between_mid}></View>
        <View style={styles.button_space}>
          <TouchableOpacity style={styles.button_bg} onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.button_text_content_bg}> Sign up </Text>
          </TouchableOpacity>
          <View style={styles.space_between_min}></View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.button_text_content}> Sign in </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.space_between_mid}></View>
        <View style={styles.button_space}>
          <TouchableOpacity onPress={() => navigation.navigate('Home Lists')}>
            <Text style={styles.text_content_bg}> Skip to home </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
  title: {
    marginTop: 20,
    marginVertical: 15,
    fontSize: 20,
    marginStart: 20,
    fontWeight: "bold",
    color: "#000"
  },
  text_content: {
    color: "#000",
    marginStart: 20,
    fontSize: 16,
  },
  text_content_bg: {
    textAlign: 'right',
    justifyContent: 'center',
    marginEnd: 20,
    color: "#f67d48",
    fontSize: 18,
  },
  button_space: {
    textAlign: 'center',
    marginVertical: 20,
  },
  button_bg: {
    alignItems: 'center',
    backgroundColor: '#f67d48',
    padding: 10,
    borderRadius: 10,
    marginEnd: "25%",
    marginStart: "25%",
    textTransform: 'lowercase', // Notice this updates the default style
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#f67d48",
    borderRadius: 50,
    padding: 10,
    borderRadius: 10,
    marginEnd: "25%",
    marginStart: "25%",
    textTransform: 'lowercase', // Notice this updates the default style
  },
  button_text_content_bg: {
    color: "#fff",
    fontSize: 18,
  },
  button_text_content: {
    color: "#000",
    fontSize: 18,
  },
  space_between_min: {
    margin: 15
  },
  space_between_mid: {
    margin: 25
  },
  space_between_max: {
    margin: 45
  }
});
