import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // Import types from App.tsx
import { styles } from './styles/permissionScreen.styles';

// Define the navigation type for this screen
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Permission'>;

const PermissionScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}
        >
          <Text style={styles.title}>
            Accept all the cookies & grant permission
          </Text>
          
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <View style={styles.buttonGroup}>
            {/* Agree Button - Goes to the Main App Container */}
            <TouchableOpacity 
              style={styles.agreeButton}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Main')}
            >
              <Text style={styles.agreeButtonText}>Agree</Text>
            </TouchableOpacity>

            {/* Cancel Button - Goes back to the previous screen (Verification) */}
            <TouchableOpacity 
              style={styles.cancelButton}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PermissionScreen;