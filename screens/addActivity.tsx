import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/addActivity.styles';

interface AddActivityProps {
  onPlantPress: () => void;
  onPesticidePress: () => void;
  onHarvestPress: () => void; // Added the Harvest prop
}

const AddActivity: React.FC<AddActivityProps> = ({ 
  onPlantPress, 
  onPesticidePress, 
  onHarvestPress 
}) => {
  const activities = [
    { id: '1', title: 'Plant Crop', icon: 'calendar-outline' },
    { id: '2', title: 'Apply Fertilizer', icon: 'leaf-outline' },
    { id: '3', title: 'Apply Pesticide', icon: 'water-outline' },
    { id: '4', title: 'Harvest Crop', icon: 'calendar-outline' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {activities.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card} 
            activeOpacity={0.8}
            onPress={() => {
              if (item.title === 'Plant Crop') onPlantPress();
              if (item.title === 'Apply Pesticide') onPesticidePress();
              if (item.title === 'Harvest Crop') onHarvestPress(); // Link to Harvest
              
              // We can add 'Apply Fertilizer' here once we build its screen
            }}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as any} size={60} color="white" />
            </View>
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AddActivity;