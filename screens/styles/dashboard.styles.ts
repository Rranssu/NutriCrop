import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2; // Calculation for 2-column grid

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED', 
  },
  scrollContent: {
    paddingBottom: 20,
    paddingTop: 10, // Small gap after the TopBar
  },
  // New Status Grid Layout
  statusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    width: cardWidth,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EEF5ED', // Light green tint for icon bg
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#7B8D76',
    textTransform: 'uppercase',
  },
  statMainValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E7D42', // Dark Green
  },
  statUnit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7B8D76',
  },
  // Badges (Percentage and Status)
  badgeRow: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  percentText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  nutrientBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flex: 0.48,
    alignItems: 'center',
  },
  nutrientText: {
    fontSize: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // Legacy Card Styles (for the charts below)
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    padding: 20,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chartPlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;