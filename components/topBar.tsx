import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/topBar.styles';

interface TopBarProps {
  title: string;
  subtitle: string;
  onMenuPress: () => void;
  onNotificationPress?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ 
  title, 
  subtitle, 
  onMenuPress, 
  onNotificationPress 
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4E7D42" />
      
      <View style={styles.headerRow}>
        {/* Left: Menu Icon */}
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Ionicons name="menu-outline" size={32} color="white" />
        </TouchableOpacity>

        {/* Center: Titles */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle !== "" && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        {/* Right: Notification Bell */}
        <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;