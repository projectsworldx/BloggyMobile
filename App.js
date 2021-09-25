import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, ImageBackground, Alert, FlatList, TouchableWithoutFeedback  } from 'react-native';
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
  // console.log(x);

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

  const [people, setPeople] = useState([
    { name: 'Money heist 5 part 1', language: 'Release Sep 3', id: '1' },
    { name: 'Money heist 5 part 2', language: 'Release Sep 3' ,id: '2' },
    { name: 'Money heist 5 part 3', language: 'Release Sep 3' ,id: '3' },
    // { name: 'Money heist 5 part 4', language: 'Release Sep 3' ,id: '4' },
    // { name: 'Money heist 5 part 5', language: 'Release Sep 3' ,id: '5' },
    // { name: 'Money heist 5 part 6', language: 'Release Dec 3' ,id: '6' },
    // { name: 'Money heist 5 part 7', language: 'Release Dec 3' ,id: '7' },
    // { name: 'Money heist 5 part 7', language: 'Release Dec 3' ,id: '8' },
  ])

  const SearchFilterFunction = (text) => {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  //handling onPress action  
  const getListViewItem = (item) => {  
    // Alert.alert(item.name);  
    // Alert.alert(
    //   item.name,
    //   item.language,
    //   [
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // );
    // Route concept
     navigation.navigate('View blogs', item)

  } 

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%"}}>
      <View style={styles.home_container}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}> 
          <Image source = {require('../Bloggy/assets/user.png')} style = {{ position: 'absolute', right: 20, top: 20, width: 75, height: 75 }} />
        </TouchableWithoutFeedback >
        <Text style={styles.title}>Blog</Text>
        <Text style={styles.text_content}>Hey buggy</Text>
      </View>
      <TextInput
          style={styles.textInputStyle}
          onChangeText={text => SearchFilterFunction(text)}
          // value={state.text}
          underlineColorAndroid="transparent"
          clearButtonMode="always"
          placeholder="Search for blog"
          placeholderTextColor="#000"
        />
        <Text style={styles.title}>Latest concept</Text>
      <View>
        <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item, index }) => {
            return <View style={{flexDirection: 'row-reverse'}}>
                <View style={styles.image_item}>
                  <TouchableWithoutFeedback  onPress={getListViewItem.bind(this, item)}> 
                    <Image source = {require('../Bloggy/assets/next.png')} style = {{ alignItems: 'center', justifyContent: 'center', marginEnd: 20, width: 40, height: 40 }} />
                  </TouchableWithoutFeedback >
                </View>
                <View style={styles.text_item}>
                  <Text>{item.name}</Text>
                  <View style={styles.space_between_text}></View>
                  <Text>{item.language}</Text>
                </View>
            </View>
        }}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Create blog')}> 
        <Image source = {require('../Bloggy/assets/plus.png')} style = {{ position: 'absolute', top: "90%", left: "80%", right: "20%", bottom: "10%", justifyContent: 'center', alignItems: 'center', width: 50, height: 50 }} />
      </TouchableWithoutFeedback >
    </View>
  )
}

function ViewScreen({route}) {

  // console.warn(route)

  const onPressHandler = () => {
    navigation.goBack();
  }

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%", flex: 1}}>
      <View style={{ flexDirection: "column", justifyContent: 'flex-start', alignItems: 'flex-end'}}>
        <Text style = {{ position: 'relative', right: 20, top: 20, width: "20%", fontWeight: "bold", color: "#AB2524", fontSize: 18, }}>Netflix</Text>
        <Text style = {{ position: 'relative', right: 20, top: 20, width: "23%", color: "#AB2524", fontSize: 16 }}>Post author</Text>
      </View>
      <View style={{ flexDirection: "column", justifyContent: 'flex-start', marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontWeight: "bold", fontSize: 20 }}> { route.params.name }</Text>
        <Image source = {require('../Bloggy/assets/moneyheist.jpg')} style = {{alignItems: 'center', position: 'relative', left: 20, right: 20, width: "90%", height: 200, borderRadius: 20, marginTop: 10 }} />
        <Text style = {{ position: 'relative', left: 20, right: 20, width: "90%", color: "#000", fontSize: 14, marginTop: 10 }}>Money Heist (Spanish: La casa de papel, "The House of Paper") is a Spanish heist crime drama television series created by Álex Pina.</Text>
        <Text style = {{ position: 'relative', left: 20, right: 20, width: "90%", color: "#000", fontSize: 14, marginTop: 10 }}>The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). {"\n"}{"\n"} The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity.{"\n"}{"\n"} Studies have shown that the most popular language is English, although the series is Spanish.</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginStart: 20, marginEnd: 20 }}/>
      <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontWeight: "bold", fontSize: 20 }}>Comments (0)</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginStart: 20, marginEnd: 20 }}/>
      <View style={styles.SectionStyle}>
        <Image source={require('../Bloggy/assets/chat.png')} style={styles.ImageStyle}/>
        <TextInput placeholder="Add a new comment" underlineColorAndroid="transparent" />
      </View>
    </View>
  </View>
  )

}

function AddScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [title, setTitle] = React.useState(null);  
  const [content, setContent] = React.useState(null); 
  const [details, setDetails] = React.useState(null);

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%", flex: 1}}>
      <View style={{  marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontSize: 18 }}>Title</Text>
    </View>
    <View style={{  borderColor: '#000', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 20, marginEnd: 20 }}>
      <UselessTextInput numberOfLines={2} placeholderTextColor="#f67d48" placeholder="Add title" onChangeText={setTitle} value={title} />
    </View>
    <View style={{  marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontSize: 18 }}>Caption</Text>
    </View>
    <View style={{  borderColor: '#000', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 20, marginEnd: 20 }}>
      <UselessTextInput numberOfLines={2} placeholderTextColor="#f67d48" placeholder="Add caption included double quotes" onChangeText={setContent} value={content} />
    </View>
    <View style={{  marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontSize: 18 }}>Details</Text>
    </View>
    <View style={{  borderColor: '#000', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 20, marginEnd: 20 }}>
      <TextInput value={details} onChangeText={setDetails} multiline={true} placeholderTextColor="#f67d48" placeholder="Add Details about blog" numberOfLines={8} />
    </View>
    <View style={ styles.bottomView}>
          <TouchableOpacity style={styles.button_full_bg} onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Create </Text>
          </TouchableOpacity>
        </View>
  </View>
  )

}

function ProfileScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Diaog",
      "Are you sure want to logout",
      [
        {
          text: "No",
          onPress: () => console.log("Canceled"),
          style: "No"
        },
        { text: "Yes", onPress: () => navigation.navigate('Home Lists') }
      ]
    );

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%"}}>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}> 
          <Image source = {require('../Bloggy/assets/user.png')} style = {{ width: 140, height: 140, marginTop: 60 }} />
        </TouchableWithoutFeedback >
        <Text style={styles.profile_title}>ProjectX</Text>
        <Text style={styles.profile_text_content}>Trichy</Text>
        <Text style={styles.profile_text_content}>8903830040</Text>
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20, marginStart: 20, marginEnd: 20 }}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style = {{ color: "#000", fontWeight: "bold", fontSize: 20, marginStart: 20, alignSelf: 'center' }}>Profile Info</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Personal info')}> 
          <Image source = {require('../Bloggy/assets/next.png')} style = {{ alignItems: 'center', justifyContent: 'center', marginEnd: 20, width: 40, height: 40 }} />
        </TouchableWithoutFeedback >
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginStart: 20, marginEnd: 20 }}/>

      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginStart: 20, marginEnd: 20 }}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style = {{ color: "#000", fontWeight: "bold", fontSize: 20, marginStart: 20, alignSelf: 'center' }}>Our blogs</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Our blogs')}> 
          <Image source = {require('../Bloggy/assets/next.png')} style = {{ alignItems: 'center', justifyContent: 'center', marginEnd: 20, width: 40, height: 40 }} />
        </TouchableWithoutFeedback >
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginStart: 20, marginEnd: 20 }}/>

      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginStart: 20, marginEnd: 20 }}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style = {{ color: "#000", fontWeight: "bold", fontSize: 20, marginStart: 20, alignSelf: 'center' }}>Change password</Text>
        <TouchableWithoutFeedback  onPress={() => navigation.navigate('Change password')} > 
          <Image source = {require('../Bloggy/assets/next.png')} style = {{ alignItems: 'center', justifyContent: 'center', marginEnd: 20, width: 40, height: 40 }} />
        </TouchableWithoutFeedback >
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginStart: 20, marginEnd: 20 }}/>

      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginStart: 20, marginEnd: 20 }}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <Text style = {{ color: "#000", fontWeight: "bold", fontSize: 20, marginStart: 20, alignSelf: 'center' }}>Logout</Text>
        <TouchableWithoutFeedback onPress={createTwoButtonAlert}> 
          <Image source = {require('../Bloggy/assets/next.png')} style = {{ alignItems: 'center', justifyContent: 'center', marginEnd: 20, width: 40, height: 40 }} />
        </TouchableWithoutFeedback >
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginStart: 20, marginEnd: 20 }}/>
    </View>
  )

}

function ChangeScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [value, onChangeText] = React.useState(null);  

  return( 
    <View style={styles.login_container}>
      <ImageBackground source= {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/forgot.png')} resizeMode="cover" style={styles.bg_login_image}>
      <View style={{  borderColor: '#f67d48',padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 75, marginStart: 20, marginEnd: 20 }}>
          <UselessTextInput numberOfLines={2} placeholder="Current Password" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={{  borderColor: '#f67d48',padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 30, marginStart: 20, marginEnd: 20 }}>
          <UselessTextInput numberOfLines={2} placeholder="Password" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 30, marginStart: 20, marginEnd: 20, marginBottom: 75 }}>
          <UselessTextInput numberOfLines={2} placeholder="Confirm password" placeholderTextColor="#f67d48" onChangeText={onChangeText} value={value} />
        </View>
        <View style={styles.button_space}>
          <TouchableOpacity style={styles.button_bg}  onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Update </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

function PersonalScreen({navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [name, setName] = React.useState(null);  
  const [dob, setDOB] = React.useState(null);  
  const [email, setEmail] = React.useState(null); 
  const [mobile, setMobile] = React.useState(null); 
  const [location, setLocation] = React.useState(null); 
  // console.log(x);

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%", flex: 1}}>
      <ImageBackground source= {require('C:/Users/giriv/Desktop/react_native_demo/blog_project/Bloggy/assets/register.png')} resizeMode="cover" style={styles.personal_bg_image}>
        <View style={{  borderColor: '#f67d48', padding: 10, borderWidth: 1,borderRadius: 10, marginStart: 30, marginEnd: 30, marginTop: 80 }}>
          <UselessTextInput numberOfLines={2} placeholder="Full name" placeholderTextColor="#f67d48" onChangeText={setName} value={name} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, borderWidth: 1,borderRadius: 10, marginStart: 30, marginEnd: 30, marginTop: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Date of birth" placeholderTextColor="#f67d48"  onChangeText={setDOB} value={dob} />
        </View>
        <View style={{  borderColor: '#f67d48',padding: 10, borderWidth: 1,borderRadius: 10, marginStart: 30, marginEnd: 30, marginTop: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Email address" placeholderTextColor="#f67d48" onChangeText={setEmail} value={email} />
        </View>
        <View style={{  borderColor: '#f67d48',padding: 10, borderWidth: 1,borderRadius: 10, marginStart: 30, marginEnd: 30, marginTop: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Mobile number" placeholderTextColor="#f67d48"  onChangeText={setMobile} value={mobile} />
        </View>
        <View style={{  borderColor: '#f67d48', padding: 10, borderWidth: 1,borderRadius: 10, marginStart: 30, marginEnd: 30, marginTop: 30 }}>
          <UselessTextInput numberOfLines={2} placeholder="Location" placeholderTextColor="#f67d48"  onChangeText={setLocation} value={location} />
        </View>
        <View style={ styles.bottomView}>
          <TouchableOpacity style={styles.button_full_bg} onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Update </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>      
    </View>
  )
}

function BlogScreen({navigation}) {

  const [people, setPeople] = useState([
    { name: 'Money heist 5 part 1', language: 'Release Sep 3', id: '1' },
    { name: 'Money heist 5 part 2', language: 'Release Sep 3' ,id: '2' },
    { name: 'Money heist 5 part 3', language: 'Release Sep 3' ,id: '3' },
    { name: 'Money heist 5 part 4', language: 'Release Sep 3' ,id: '4' },
    { name: 'Money heist 5 part 5', language: 'Release Sep 3' ,id: '5' },
  ])

  //handling onPress action  
  const getListViewItem = (item) => {  
     navigation.navigate('Update blog', item)
  } 

  const createTwoButtonAlert = (item) => {
    Alert.alert(
      "Alert Diaog",
      "Are you sure want to delete " + item.name + " post blog",
      [
        {
          text: "No",
          onPress: () => console.log("Canceled"),
          style: "No"
        },
        { text: "Yes", onPress: () => console.log("Deleted") }
      ]
    );
    // Alert.alert(item.name);
  }

  const onPressHandler = () => {
    navigation.goBack();
  }

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%", flex: 1}}>
        <Text style={styles.title}>Total post (5)</Text>
        <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item, index }) => {
            return <View style={{ backgroundColor: "#fff", height: "100%", flex: 1}}>
                <View style={{ flexDirection: 'row', backgroundColor: '#fef2ec', borderWidth: 1, borderColor: '#fef2ec', marginStart: 20, marginTop: 15, marginEnd: 20, padding: 20, borderRadius: 20}}>
                  <TouchableWithoutFeedback onPress={createTwoButtonAlert.bind(this, item)}> 
                    <Image source = {require('../Bloggy/assets/delete.png')} style = {{ alignItems: 'center', justifyContent: 'center', marginEnd: 20, width: 40, height: 40, marginStart: 0, marginTop: 5 }} />
                  </TouchableWithoutFeedback >
                    <View style={{ flexDirection: 'column', }}>
                      <Text>{item.name}</Text>
                      <View style={styles.space_between_text}></View>
                      <Text>{item.language}</Text>
                    </View>
                    <View style={{ flexDirection: 'column',  position: 'absolute', right: 20, top: 0, paddingTop: 25}}>
                      <TouchableWithoutFeedback  onPress={getListViewItem.bind(this, item)}> 
                        <Image source = {require('../Bloggy/assets/next.png')} style = {{ width: 40, height: 40 }} />
                      </TouchableWithoutFeedback >
                    </View>
                </View>
            </View>
        }}
        />
    </View>
  )
}

function UpdateScreen({route, navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const [title, setTitle] = React.useState(route.params.name);  
  const [content, setContent] = React.useState('Money Heist (Spanish: La casa de papel, "The House of Paper") is a Spanish heist crime drama television series created by Álex Pina.'); 
  const [details, setDetails] = React.useState('The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). \n\n The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity.\n\n Studies have shown that the most popular language is English, although the series is Spanish.');

  return( 
    <View style={{ backgroundColor: "#fff", height: "100%", flex: 1}}>
      <View style={{  marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontSize: 18 }}>Title</Text>
    </View>
    <View style={{  borderColor: '#000', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 20, marginEnd: 20 }}>
      <UselessTextInput numberOfLines={2} placeholderTextColor="#f67d48" placeholder="Add title" onChangeText={setTitle} value={title} />
    </View>
    <View style={{  marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontSize: 18 }}>Caption</Text>
    </View>
    <View style={{  borderColor: '#000', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 20, marginEnd: 20 }}>
      <UselessTextInput numberOfLines={2} placeholderTextColor="#f67d48" placeholder="Add caption included double quotes" onChangeText={setContent} value={content} />
    </View>
    <View style={{  marginTop: 10}}>
        <Text style = {{ position: 'relative', left: 20, right: 0,  width: "100%", marginTop: 10, color: "#000", fontSize: 18 }}>Details</Text>
    </View>
    <View style={{  borderColor: '#000', padding: 10, textAlignVertical : "top",borderWidth: 1,borderRadius: 10, marginTop: 20, marginStart: 20, marginEnd: 20 }}>
      <TextInput value={details} onChangeText={setDetails} multiline={true} placeholderTextColor="#f67d48" placeholder="Add Details about blog" numberOfLines={8} />
    </View>
    <View style={ styles.bottomView}>
          <TouchableOpacity style={styles.button_full_bg} onPress={onPressHandler} >
            <Text style={styles.button_text_content_bg}> Update </Text>
          </TouchableOpacity>
        </View>
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
        <Stack.Screen name="View blogs" component={ViewScreen} />
        <Stack.Screen name="Create blog" component={AddScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Change password" component={ChangeScreen} />
        <Stack.Screen name="Personal info" component={PersonalScreen} />
        <Stack.Screen name="Our blogs" component={BlogScreen} />
        <Stack.Screen name="Update blog" component={UpdateScreen} />
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
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingStart: 20,
    borderColor: '#000',
    backgroundColor: '#00000000',
    borderRadius: 20,
    marginTop: 40,
    marginEnd: 20,
    marginStart: 20,
  },
  image_item: {
    width: '15%',
    marginTop: 15,
    paddingTop: 35,
    paddingBottom: 30,
    marginEnd: 20,
    backgroundColor: '#fef2ec',
    borderWidth: 1,
    borderColor: '#fef2ec',
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  text_item: {
    width: '75%',
    marginTop: 15,
    paddingTop: 30,
    paddingBottom: 30,
    paddingStart: 20,
    marginStart: 20,
    backgroundColor: '#fef2ec',
    borderWidth: 1,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: '#fef2ec',
    fontSize: 18
  },
  space_between_text: {
    margin: 5,
  },
  view_container: {
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 45,
    borderRadius: 5,
    marginEnd: 20,
    marginStart: 20,
},
ImageStyle: {
    padding: 10,
    marginEnd: 15,
    marginStart: 15,
    marginTop: 5,
    marginBottom: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
},
bottomView: {
  width: '100%', 
  justifyContent: 'center', 
  alignItems: 'center',
  position: 'absolute',
  color: "#fff",
  bottom: 10
},
button_full_bg: {
  width: '80%', 
  alignItems: 'center',
  backgroundColor: '#f67d48',
  margin: 20,
  padding: 10,
  borderRadius: 10,
  textTransform: 'lowercase', // Notice this updates the default style
},
profile_title: {
  marginTop: 10,
  fontSize: 20,
  fontWeight: "bold",
  color: "#000"
},
profile_text_content: {
  marginTop: 10,
  color: "#000",
  fontSize: 16,
},
personal_bg_image: {
  flex: 1,
},
personal_container: {
  flex: 1,
},
});
