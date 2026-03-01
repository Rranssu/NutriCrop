import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/topBar';
import BottomBar, { TabName } from '../components/bottomBar';
import Sidebar from '../components/sidebar';

// Screen Imports
import Dashboard from './dashboard';
import Records from './records';
import AddActivity from './addActivity'; 
import PlantCrop from './plantCrop'; 
import ApplyPesticide from './applyPesticide';
import HarvestCrop from './harvestCrop';
import ApplyFertilizer from './applyFertilizer'; // 1. Import Fertilizer Screen
import Messages from './messages'; 
import Profile from './profile';
import FarmMap from './map';
import Forum from './forum';
import History from './history';
import SubsidyTracker from './subsidy';
import Notifications from './notifications';
import Settings from './settings';

const MainContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [activeTab, setActiveTab] = useState<TabName | 'Forum' | 'History' | 'Subsidy' | 'Notifications' | 'Settings'>('Home');
  
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard');
  
  // 2. Updated state to include 'fertilizer' view
  const [recordView, setRecordView] = useState<'list' | 'add' | 'plant' | 'pesticide' | 'harvest' | 'fertilizer'>('list');

  const getHeaderInfo = () => {
    switch (activeTab) {
      case 'Home': return { title: 'Dashboard', sub: 'Welcome back, Juan' };
      case 'Map': return { title: 'Farm Mapping', sub: 'Interactive plot visualization' };
      case 'Forum': return { title: 'Crop Forum', sub: 'Discuss and share farming tips' };
      case 'Messages': return { title: 'Messages', sub: 'Chat with agriculturists' };
      case 'Profile': return { title: 'Farmer Profile', sub: '' };
      case 'History': return { title: 'Farm History', sub: 'Track your agricultural activities' };
      case 'Subsidy': return { title: 'Subsidy Tracker', sub: 'Manage and track government assistance' };
      case 'Notifications': return { title: 'Notifications', sub: 'Stay updated with alerts' };
      case 'Settings': return { title: 'Account Settings', sub: 'Manage your account' };

      case 'Record': 
        if (recordView === 'list') return { title: 'Crop Monitoring', sub: 'Farm Overview' };
        if (recordView === 'plant') return { title: 'Plant New Crop', sub: 'Record your planting activity and details.' };
        // Fertilizer uses the "Add Activity" header style from your screenshots
        if (recordView === 'add' || recordView === 'fertilizer' || recordView === 'pesticide' || recordView === 'harvest') {
          return { title: 'Activity Menu', sub: '' };
        }
        return { title: 'Add Activity', sub: 'Select an activity' };
      default: return { title: 'NutriCrop', sub: '' };
    }
  };

  const header = getHeaderInfo();

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <TopBar 
        title={header.title} 
        subtitle={header.sub} 
        onMenuPress={() => setIsMenuOpen(true)}
        onNotificationPress={() => setActiveTab('Notifications')}
        flatBottom={activeTab === 'Home'} 
      />

      {/* Main Content Area */}
      <View style={styles.content}>
        {activeTab === 'Home' && <Dashboard />}
        {activeTab === 'Map' && <FarmMap />}
        {activeTab === 'Messages' && <Messages />}
        {activeTab === 'Profile' && <Profile />}
        {activeTab === 'Forum' && <Forum />}
        {activeTab === 'History' && <History />}
        {activeTab === 'Subsidy' && <SubsidyTracker />}
        {activeTab === 'Notifications' && <Notifications />}
        {activeTab === 'Settings' && <Settings />}
        
        {/* Record Navigation Flow */}
        {activeTab === 'Record' && (
          <>
            {/* 1. Main List of Active Crops */}
            {recordView === 'list' && (
                <Records 
                    onCropPress={() => setRecordView('add')}    
                    onAddPress={() => setRecordView('plant')}   
                />
            )}

            {/* 2. The Vertical Activity Menu */}
            {recordView === 'add' && (
                <AddActivity 
                    onBack={() => setRecordView('list')}
                    onPesticidePress={() => setRecordView('pesticide')}
                    onHarvestPress={() => setRecordView('harvest')}
                    onFertilizerPress={() => setRecordView('fertilizer')} // 3. Linked Fertilizer
                />
            )}

            {/* 3. The Plant New Crop Form */}
            {recordView === 'plant' && (
                <PlantCrop onCancel={() => setRecordView('list')} />
            )}

            {/* 4. Pesticide Application Form */}
            {recordView === 'pesticide' && (
                <ApplyPesticide onCancel={() => setRecordView('add')} />
            )}

            {/* 5. Harvest Crop Form */}
            {recordView === 'harvest' && (
                <HarvestCrop onCancel={() => setRecordView('add')} />
            )}

            {/* 6. Fertilizer Application Form */}
            {recordView === 'fertilizer' && (
                <ApplyFertilizer onCancel={() => setRecordView('add')} />
            )}
          </>
        )}
      </View>

      {/* Bottom Navigation */}
      <BottomBar 
        activeTab={['Forum', 'History', 'Subsidy', 'Notifications', 'Settings'].includes(activeTab) ? 'Home' : activeTab as TabName} 
        onTabPress={(tab) => {
          setActiveTab(tab);
          if (tab !== 'Record') setRecordView('list');
        }} 
      />

      {/* Sidebar Drawer */}
      <Sidebar 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        activeItem={activeSidebarItem}
        onNavigate={(item) => {
            setActiveSidebarItem(item);
            
            if (item === 'Dashboard') setActiveTab('Home');
            if (item === 'Messages') setActiveTab('Messages');
            if (item === 'Profile') setActiveTab('Profile');
            if (item === 'Crop Monitoring') {
                setActiveTab('Record');
                setRecordView('list');
            }
            if (item === 'Forum') setActiveTab('Forum');
            if (item === 'History') setActiveTab('History');
            if (item === 'Subsidy Records') setActiveTab('Subsidy');
            if (item === 'Announcements') setActiveTab('Notifications');
            if (item === 'Settings') setActiveTab('Settings');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF8ED' },
  content: { flex: 1 },
});

export default MainContainer;