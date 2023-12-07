import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BodyPartCard from './BodyPartCard';
import { bodyParts } from '../constants';
import { useRouter } from 'expo-router';

const BodyParts = () => {
  const router = useRouter();
  return (
    <View className='mx-4'>
      <Text
        style={{ fontSize: hp(3) }}
        className='font-semibold text-neutral-700'
      >
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} router={router} />
        )}
      />
    </View>
  );
};

export default BodyParts;
