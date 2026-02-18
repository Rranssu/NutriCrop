import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  content: {
    paddingTop: 15,
  },
  // Filter Chips Section
  filterWrapper: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  chipList: {
    flexDirection: 'row',
    flexWrap: 'wrap', // To match the "two-row" wrap look in your pic
    gap: 10,
    paddingRight: 20,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  activeChip: {
    backgroundColor: '#4E7D42',
    borderColor: '#4E7D42',
  },
  chipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeChipText: {
    color: '#FFFFFF',
  },
  // History Card
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  categoryBadge: {
    backgroundColor: '#EEF5ED',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 11,
    color: '#4E7D42',
    fontWeight: 'bold',
  },
  // Detail Content Box
  detailBox: {
    backgroundColor: '#F4F6F8', // Light grey-blue tint
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  // Footer Pill
  footerPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  footerPillActive: {
    backgroundColor: '#4E7D42', // Green for 'Received'
    borderColor: '#4E7D42',
  },
  footerPillText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  footerPillTextActive: {
    color: '#FFFFFF',
  }
});

export default styles;