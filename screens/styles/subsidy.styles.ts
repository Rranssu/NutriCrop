import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  // Top Summary Row
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  aidCard: {
    backgroundColor: '#4E7D42',
    width: (width - 55) / 2,
    borderRadius: 20,
    padding: 15,
    height: 130,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    width: (width - 55) / 2,
    borderRadius: 20,
    padding: 15,
    height: 130,
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  aidValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: 12,
    color: '#4E7D42',
    fontWeight: '600',
    marginLeft: 4,
  },
  // History Section
  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingTop: 20,
    flex: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
  },
  historyTitle: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: '#DDE6D5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  columnLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#777',
    textTransform: 'uppercase',
  },
  // List Items
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  subsidyName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  programLabel: {
    fontSize: 11,
    color: '#999',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  amountValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default styles;