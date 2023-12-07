import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView } from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { fetchExercisesByBodyPart } from '../api/exerciseDB';
import ExerciseList from '../components/ExerciseList';

const Exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodyPart(bodypart);
    setExercises(data);
  };

  return (
    <ScrollView className='mt-20'>
      <StatusBar style='light' />
      <Image
        source={item.image}
        style={{
          width: wp(100),
          height: hp(45),
        }}
        className='rounded-b-[40px]'
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className='bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center pl-3'
        style={{
          height: hp(5.5),
          width: hp(5.5),
          marginTop: hp(7),
        }}
      >
        <MaterialIcons
          name='arrow-back-ios'
          size={hp(4)}
          color='white'
          className='border-[3px] border-neutral-300'
        />
      </TouchableOpacity>
      <View className='mx-4 space-y-3 mt-4'>
        <Text
          style={{ fontSize: hp(3) }}
          className='font-semibold text-neutral-700'
        >
          {item.name} Exercises
        </Text>
        <View className='mb-10'>
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
