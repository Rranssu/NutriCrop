import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/topBar.styles';

interface TopBarProps {
  title: string;
  subtitle: string;
  onMenuPress: () => void;
  onNotificationPress?: () => void;
  flatBottom?: boolean; // Prop we added earlier for Dashboard styling
}

const TopBar: React.FC<TopBarProps> = ({ 
  title, 
  subtitle, 
  onMenuPress, 
  onNotificationPress,
  flatBottom
}) => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        if (jsonValue != null) {
          const user = JSON.parse(jsonValue);
          // 'firstname' matches your Sequelize migration column name
          setFirstName(user.firstname);
        }
      } catch (e) {
        console.log("Error reading user data in TopBar:", e);
      }
    };

    getUserData();
  }, []);

  // Logic: If we are on the Dashboard, override the subtitle with the user's real name
  const displaySubtitle = title === 'Dashboard' && firstName 
    ? `Welcome back, ${firstName}` 
    : subtitle;

  return (
    <View style={[styles.container, flatBottom && styles.flatBottom]}>
      <StatusBar barStyle="light-content" backgroundColor="#4E7D42" />
      
      <View style={styles.headerRow}>
        {/* Left: Menu Icon */}
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Ionicons name="menu-outline" size={26} color="white" />
        </TouchableOpacity>

        {/* Center: Titles */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {displaySubtitle !== "" && (
            <Text style={styles.subtitle}>{displaySubtitle}</Text>
          )}
        </View>

        {/* Right: Notification Bell */}
        <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;