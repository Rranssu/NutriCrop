import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles/forum.styles';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: 'grid-outline' },
    { name: 'Corn', icon: 'corn', type: 'Material' },
    { name: 'Wheat', icon: 'wheat', type: 'Material' },
    { name: 'Rice', icon: 'bowl-rice', type: 'Material' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        
        {/* Search and Post Header */}
        <View style={styles.headerRow}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={18} color="#888" />
            <TextInput 
              placeholder="Search discussions..." 
              style={styles.searchInput}
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.postButton} activeOpacity={0.8}>
            <Ionicons name="add" size={20} color="white" />
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

        {/* Categories Chips */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.categoriesContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity 
              key={cat.name}
              style={[styles.chip, selectedCategory === cat.name && styles.activeChip]}
              onPress={() => setSelectedCategory(cat.name)}
            >
              {cat.type === 'Material' ? (
                <MaterialCommunityIcons 
                  name={cat.icon as any} 
                  size={18} 
                  color={selectedCategory === cat.name ? 'white' : '#555'} 
                />
              ) : (
                <Ionicons 
                  name={cat.icon as any} 
                  size={18} 
                  color={selectedCategory === cat.name ? 'white' : '#555'} 
                />
              )}
              <Text style={[styles.chipText, selectedCategory === cat.name && styles.activeChipText]}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Post Feed */}
        <ForumPost 
          initials="SJ"
          avatarColor="#2ECC71"
          title="Brown spots appearing on corn leaves - N..."
          author="Sarah Johnson"
          time="about 15 hours ago"
          body="I've noticed brown spots appearing on my corn leaves over the past week..."
          comments={12}
          views={234}
          likes={8}
          tag="corn"
        />

        <ForumPost 
          initials="RM"
          avatarColor="#1ABC9C"
          title="Best time to harvest wheat in Zone 7?"
          author="Robert Martinez"
          time="1 day ago"
          body="First time growing winter wheat in Zone 7. The heads are turning golden..."
          comments={8}
          views={156}
          likes={5}
          tag="wheat"
        />

        <ForumPost 
          initials="JC"
          avatarColor="#3498DB"
          title="Rice blast prevention tips for the rainy se..."
          author="Juan Cruz"
          time="2 days ago"
          body="With the upcoming wet season, I'm worried about rice blast..."
          comments={24}
          views={542}
          likes={15}
          tag="rice"
        />

      </ScrollView>
    </SafeAreaView>
  );
};

// Helper Component for Forum Post items
const ForumPost = ({ 
  initials, avatarColor, title, author, time, body, comments, views, likes, tag 
}: any) => (
  <TouchableOpacity style={styles.postItem} activeOpacity={0.7}>
    <View style={styles.postHeader}>
      <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.postTitleContainer}>
        <Text style={styles.postTitle} numberOfLines={1}>{title}</Text>
        <Text style={styles.authorText}>{author} • {time}</Text>
      </View>
    </View>
    
    <Text style={styles.postBody} numberOfLines={2}>{body}</Text>
    
    <View style={styles.postFooter}>
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Ionicons name="chatbubble-outline" size={16} color="#888" />
          <Text style={styles.statText}>{comments}</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="eye-outline" size={16} color="#888" />
          <Text style={styles.statText}>{views}</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="thumbs-up-outline" size={16} color="#888" />
          <Text style={styles.statText}>{likes}</Text>
        </View>
      </View>
      <View style={styles.tagBadge}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Forum;