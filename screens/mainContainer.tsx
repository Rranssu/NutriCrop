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
import Messages from './messages'; 
import Profile from './profile';
import FarmMap from './map';
import Forum from './forum';
import History from './history';
import SubsidyTracker from './subsidy';
import Notifications from './notifications';
import Settings from './settings'; // 1. Import Settings Screen

const MainContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Updated type to include 'Settings'
  const [activeTab, setActiveTab] = useState<TabName | 'Forum' | 'History' | 'Subsidy' | 'Notifications' | 'Settings'>('Home');
  
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard');
  const [recordView, setRecordView] = useState<'list' | 'add' | 'plant' | 'pesticide' | 'harvest'>('list');

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
      
      case 'Settings': 
        // 3. Header for Settings
        return { title: 'Account Settings', sub: 'Manage your account' };

      case 'Record': 
        if (recordView === 'list') return { title: 'Details', sub: 'Review current state' };
        if (recordView === 'plant') return { title: 'Add Crop', sub: 'Plant a new crop' };
        return { title: 'Add Activity', sub: 'Select an activity' };
      default: return { title: 'NutriCrop', sub: '' };
    }
  };

  const header = getHeaderInfo();

  return (
    <View style={styles.container}>
      {/* Integrated Top Bar */}
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
        
        {/* 4. Render Settings Screen */}
        {activeTab === 'Settings' && <Settings />}
        
        {/* Record Navigation Flow */}
        {activeTab === 'Record' && (
          <>
            {recordView === 'list' && <Records onAddPress={() => setRecordView('add')} />}
            {recordView === 'add' && (
                <AddActivity 
                    onPlantPress={() => setRecordView('plant')} 
                    onPesticidePress={() => setRecordView('pesticide')}
                    onHarvestPress={() => setRecordView('harvest')}
                />
            )}
            {recordView === 'plant' && <PlantCrop onCancel={() => setRecordView('add')} />}
            {recordView === 'pesticide' && <ApplyPesticide onCancel={() => setRecordView('add')} />}
            {recordView === 'harvest' && <HarvestCrop onCancel={() => setRecordView('add')} />}
          </>
        )}
      </View>

      {/* Bottom Navigation */}
      <BottomBar 
        // Reset Bottom Bar highlight to 'Home' if we are on a sidebar-only screen
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
            
            // 5. Unified Navigation Logic for Sidebar
            if (item === 'Dashboard') setActiveTab('Home');
            if (item === 'Messages') setActiveTab('Messages');
            if (item === 'Profile') setActiveTab('Profile');
            if (item === 'Crop Monitoring') setActiveTab('Record');
            if (item === 'Forum') setActiveTab('Forum');
            if (item === 'History') setActiveTab('History');
            if (item === 'Subsidy Records') setActiveTab('Subsidy');
            if (item === 'Announcements') setActiveTab('Notifications');
            
            // 6. Linked Settings in Sidebar
            if (item === 'Settings') {
                setActiveTab('Settings');
            }
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