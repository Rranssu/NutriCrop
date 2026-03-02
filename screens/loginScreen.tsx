import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView,
  ScrollView,
  ActivityIndicator, 
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { RootStackParamList } from '../App';
import styles from './styles/loginScreen.styles'; 

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter your username and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://nutricropguide.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: username.trim(), 
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) {
          await AsyncStorage.setItem('userToken', data.token);
          if (data.user) {
            await AsyncStorage.setItem('userData', JSON.stringify(data.user));
          }
        }
        navigation.navigate('Main'); 
      } else {
        let errorMessage = "Invalid username or password.";
        if (Array.isArray(data) && data.length > 0) {
          errorMessage = data[0].message;
        } else if (data.message) {
          errorMessage = data.message;
        }
        Alert.alert("Login Failed", errorMessage);
      }
    } catch (error) {
      console.error("Login Network Error:", error);
      Alert.alert("Connection Error", "Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F7E8' }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            bounces={false} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.innerContainer}>
              
              <View style={styles.logoSection}>
                <View style={styles.logoCircle}>
                  <Ionicons name="leaf-outline" size={80} color="white" />
                </View>
                <Text style={styles.title}>NutriCrop</Text>
                <Text style={styles.subtitle}>Agriculture Monitoring Platform</Text>
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <Ionicons name="person-outline" size={20} color="#555" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Username" 
                    placeholderTextColor="#7B8D76"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    editable={!loading}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#7B8D76"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    editable={!loading}
                  />
                </View>
              </View>

              <TouchableOpacity 
                style={[styles.loginButton, loading && { opacity: 0.7 }]}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.loginButtonText}>Login</Text>
                )}
              </TouchableOpacity>

              <View style={styles.footerSection}>
                <Text style={styles.versionText}>
                  Version 1.0.0 • Secure Agriculture Platform
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} disabled={loading}>
                  <Text style={styles.footerText}>
                    Don't have account? <Text style={styles.signUpText}>Sign-up</Text>
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;