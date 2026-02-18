import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/bottomBar.styles';

// Define the available tabs
export type TabName = 'Home' | 'Map' | 'Record' | 'Messages' | 'Profile';

interface BottomBarProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ activeTab, onTabPress }) => {
  
  const tabs: { name: TabName; icon: string; type: 'Ionicons' | 'Material' }[] = [
    { name: 'Home', icon: 'home-outline', type: 'Ionicons' },
    { name: 'Map', icon: 'map-outline', type: 'Ionicons' },
    { name: 'Record', icon: 'leaf-outline', type: 'Ionicons' },
    { name: 'Messages', icon: 'chatbubble-outline', type: 'Ionicons' },
    { name: 'Profile', icon: 'person-outline', type: 'Ionicons' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => onTabPress(tab.name)}
            style={[
              styles.tabItem,
              isActive && styles.activeTabItem
            ]}
            activeOpacity={0.7}
          >
            <Ionicons
              name={tab.icon as any}
              size={24}
              color={isActive ? '#4A7C44' : '#7D6E65'}
            />
            <Text 
              style={[
                styles.label,
                isActive ? styles.activeLabel : styles.inactiveLabel
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomBar;