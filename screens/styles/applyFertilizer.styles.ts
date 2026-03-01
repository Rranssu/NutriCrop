import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8ED',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    backgroundColor: '#EEF5ED', 
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#4E7D42',
  },
  headerTextContainer: {
    marginLeft: 15,
  },
  headerTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSub: {
    color: '#777',
    fontSize: 13,
  },
  iconBox: {
    width: 45,
    height: 45,
    backgroundColor: '#CFD9C9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBody: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  // Toggle Buttons (Subsidy/Purchase)
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  toggleButton: {
    flex: 0.48,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
  },
  activeToggleButton: {
    backgroundColor: '#558249',
  },
  toggleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#666',
  },
  activeToggleText: {
    color: '#FFFFFF',
  },
  // Square Application Selectors (1st, 2nd, etc)
  stepRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepButton: {
    width: '18%',
    height: 55,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepButton: {
    backgroundColor: '#558249',
  },
  stepNum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  stepSub: {
    fontSize: 8,
    color: '#666',
    fontWeight: 'bold',
  },
  activeStepText: {
    color: '#FFF',
  },
  // Standard Inputs
  inputContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  inputSplitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSplit: {
    width: '48%',
  },
  inputText: {
    fontSize: 15,
    color: '#333',
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    borderColor: '#EEEEEE',
  },
  // Media Box
  mediaBox: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  mediaText: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 8,
  },
  // Buttons
  submitBtn: {
    backgroundColor: '#558249',
    height: 55,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 12,
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cancelBtn: {
    backgroundColor: '#9E9791',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;