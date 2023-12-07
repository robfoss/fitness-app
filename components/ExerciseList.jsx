import { View, FlatList } from 'react-native';
import React from 'react';
import ExerciseCard from './ExerciseCard';
import { useRouter } from 'expo-router';

const ExerciseList = ({ data }) => {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <ExerciseCard index={index} item={item} router={router} />
        )}
      />
    </View>
  );
};

export default ExerciseList;
