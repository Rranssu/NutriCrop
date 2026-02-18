import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 80,
    paddingBottom: 20, // Adjustment for safe area
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    // Soft shadow for the bar
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  activeTabItem: {
    backgroundColor: '#EEF5ED', // Very light green background
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  activeLabel: {
    color: '#4A7C44', // Dark green
  },
  inactiveLabel: {
    color: '#7D6E65', // Brownish muted color
  },
});

export default styles;