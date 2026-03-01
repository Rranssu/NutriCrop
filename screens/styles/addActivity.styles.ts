import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light greyish background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FAF8ED',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7B8D76',
    marginLeft: 20,
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  // Main Action Cards
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#E8F5E9', // Very light green
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Recent Activity Section
  sectionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#999',
    marginTop: 15,
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  recentItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  recentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F1F5EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  recentDate: {
    fontSize: 11,
    color: '#AAA',
    marginTop: 2,
  },
  // Info Alert Box
  infoBox: {
    backgroundColor: '#EBF0E8',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginLeft: 10,
  },
});

export default styles;