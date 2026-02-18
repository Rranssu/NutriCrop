import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, 
  },
  cropCard: {
    backgroundColor: '#EEF5ED', 
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#4E7D42',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: '#DDE6D5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cropTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cropSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  cropMeta: {
    fontSize: 13,
    color: '#555',
    marginTop: 5,
  },
  statusBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#CFD9C9',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    color: '#4E7D42',
    fontWeight: 'bold',
  },
  mainActionBtn: {
    backgroundColor: '#4E7D42',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  mainActionBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  activityCard: {
    backgroundColor: '#F7F3E9', 
    borderRadius: 15,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityIconCircle: {
    marginRight: 15,
  },
  activityInfo: {
    flex: 1,
  },
  activityLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  dateContainer: {
    alignItems: 'flex-end',
  },
  activityDate: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  daysAgo: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#4E7D42',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default styles; // THIS IS THE KEY