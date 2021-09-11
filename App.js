import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Stack = createStackNavigator();

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={50}
    />
  );
}

function ChooseScreen({navigation}) {

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
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <View>
          <Image source = {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/choose.png')} style = {{alignItems: 'center', width: "100%", height: 350 }} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text_content}>Hello everyone post any type of related topics and share your thoughts.</Text>
        </View>
        <View style={styles.space_between_mid}></View>
        <View style={styles.button_space}>
          <TouchableOpacity style={styles.button_bg} onPress={() => navigation.navigate('Create new account')}>
            <Text style={styles.button_text_content_bg}> Sign up </Text>
          </TouchableOpacity>
          <View style={styles.space_between_min}></View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
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

function RegistrationScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [name, setName] = React.useState(null);  
  const [email, setEmail] = React.useState(null); 
  const [mobile, setMobile] = React.useState(null); 
  const [location, setLocation] = React.useState(null); 
  const [password, setPassword] = React.useState(null);  
  const [confirmPassword, setConfirmPassword] = React.useState(null);
  console.log("My log text");

  return( 
    <View style={styles.register_container}>
      <ImageBackground source= {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/register.png')} resizeMode="cover" style={styles.bg_image}>
        <View style={{ textAlignVertical: 'top', color: "#000", fontSize: 16, textAlign: 'left',  marginTop: 20, marginStart: 20, marginEnd: 20 }}>
          <Text>Sign up and get started</Text>
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 30, marginEnd: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Full name" placeholderTextColor="#f67d48" onChangeText={setName} value={name} />
        </View>
        <View style={{  borderColor: '#f67d48',padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 30, marginEnd: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Email address" placeholderTextColor="#f67d48" onChangeText={setEmail} value={email} />
        </View>
        <View style={{  borderColor: '#f67d48',padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 30, marginEnd: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Mobile number" placeholderTextColor="#f67d48"  onChangeText={setMobile} value={mobile} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 30, marginEnd: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Location" placeholderTextColor="#f67d48"  onChangeText={setLocation} value={location} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 30, marginEnd: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Password" placeholderTextColor="#f67d48"  onChangeText={setPassword} value={password} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 30, marginEnd: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Confirm password" placeholderTextColor="#f67d48"  onChangeText={setConfirmPassword} value={confirmPassword} />
        </View>
        <View style={styles.button_space}>
          <TouchableOpacity style={styles.button_bg} onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Register </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>      
    </View>
  )
}

function LoginScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [value, onChangeText] = React.useState(null);  

  return( 
    <View style={styles.login_container}>
      <ImageBackground source= {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/login.png')} resizeMode="cover" style={styles.bg_login_image}>
        <View style={{ textAlignVertical: 'top', color: "#000", fontSize: 16, textAlign: 'left',  marginTop: 20, marginStart: 20, marginEnd: 20 }}>
          <Text>Login our account</Text>
        </View>
        <View style={{  borderColor: '#f67d48',padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 75, marginStart: 20, marginEnd: 20 }}>
          <UselessTextInput numberOfLines={2} placeholder="Mobile number" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 30, marginStart: 20, marginEnd: 20, marginBottom: 75 }}>
          <UselessTextInput numberOfLines={2} placeholder="Password" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={styles.button_space}>
          <TouchableOpacity style={styles.button_bg} onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Login </Text>
          </TouchableOpacity>
        </View>
        <Text style={{  color: "#000", fontSize: 16, textAlign: 'center' }} onPress={() => navigation.navigate('Forgot password')}>Forgot password?</Text>
      </ImageBackground>
    </View>
  )
}

function ForgotScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [value, onChangeText] = React.useState(null);  

  return( 
    <View style={styles.login_container}>
      <ImageBackground source= {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/forgot.png')} resizeMode="cover" style={styles.bg_login_image}>
        <View style={{  borderColor: '#f67d48',padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 75, marginStart: 20, marginEnd: 20 }}>
          <UselessTextInput numberOfLines={2} placeholder="Password" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 30, marginStart: 20, marginEnd: 20, marginBottom: 75 }}>
          <UselessTextInput numberOfLines={2} placeholder="Confirm password" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={styles.button_space}>
          <TouchableOpacity style={styles.button_bg} onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Update </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

function HomeScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  return( 
    <View>
      <View style={styles.home_container}>
        <Image source = {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/user.png')} style = {{ position: 'absolute', right: 20, top: 20, width: 75, height: 75 }} />
        <Text style={styles.title}>Blog</Text>
        <Text style={styles.text_content}>Hey buggy</Text>
      </View>
      <Text style = {{ position: 'relative', top: 250, left: 0, right: 0, bottom: 0, color: "#f67d48", fontSize: 24, textAlign: 'center', }}>No blog available</Text>
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Choose" component={ChooseScreen} options={{ header: () => null }}/>
        <Stack.Screen name="Create new account" component={RegistrationScreen} />
        <Stack.Screen name="Welcome" component={LoginScreen} />
        <Stack.Screen name="Forgot password" component={ForgotScreen} />
        <Stack.Screen name="Home Lists" component={HomeScreen} options={{ header: () => null }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
  },
  register_container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  bg_image: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  login_container: {
    flex: 1,
    justifyContent: 'center',
  },
  bg_login_image: {
    flex: 1,
    justifyContent: 'center',
  },
  home_container: {
    flexDirection: "column",
    justifyContent: 'flex-start',
    marginTop: 40
  },
  home_text_content: {
    justifyContent: 'center',
    flexWrap: "wrap",
    alignContent: "center",
    color: "#f67d48", 
    fontSize: 24,
    textAlign: 'center',
    height: "100%"
  },
});
