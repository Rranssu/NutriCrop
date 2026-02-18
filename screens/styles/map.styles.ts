import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },
  // Map Type Toggles
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  activeToggle: {
    backgroundColor: '#4E7D42',
  },
  toggleText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#FFF',
  },
  expandBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Map Visualization Area
  mapContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#DED9CE', // Beige map ground
    borderRadius: 25,
    padding: 20,
    position: 'relative',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  plotBox: {
    position: 'absolute',
    backgroundColor: '#EEF5ED',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    minWidth: 100,
  },
  plotStatusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginBottom: 4,
  },
  plotName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  plotCrop: {
    fontSize: 12,
    color: '#666',
  },
  plotArea: {
    fontSize: 11,
    color: '#888',
  },
  sensorIconContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  sensorText: {
    fontSize: 10,
    color: '#444',
    marginTop: 2,
    fontWeight: '500',
  },
  // Stats Row
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  statsText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  // Info Cards (Legend & Status)
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendBox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    marginRight: 12,
    borderWidth: 1,
  },
  legendLabel: {
    fontSize: 14,
    color: '#444',
  },
  // Sensor Status Row
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  statusLabel: {
    fontSize: 14,
    color: '#444',
  },
  activeBadge: {
    backgroundColor: '#EEF5ED',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  activeBadgeText: {
    fontSize: 12,
    color: '#4E7D42',
    fontWeight: 'bold',
  },
});

export default styles;