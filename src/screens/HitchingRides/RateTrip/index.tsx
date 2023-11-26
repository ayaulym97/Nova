import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../utils';
import {scale} from '../../../scale';
import {Rating} from 'react-native-ratings';
import {CustomButton} from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
export const RateTrip = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const handleRating = seat => {
    navigation.navigate('HitchingRides');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вы прибыли в пункт назначения!</Text>
      <Text style={styles.subTitle}>Как прошла ваша поездка?</Text>
      <Rating
        ratingCount={5}
        style={{
          alignItems: 'flex-start',
          marginVertical: scale(19),
        }}
        tintColor={COLORS.PRIMARY}
        imageSize={scale(50)}
        startingValue={rating}
      />
      <Text style={styles.subTitle}>
        Пожалуйста, оставьте свой отзыв для других пассажиров
      </Text>
      <TextInput
        value={comment}
        placeholder="Комментарий"
        style={styles.commentInput}
        onChangeText={value => setComment(value)}
      />
      <CustomButton
        text={'Оставить'}
        style={styles.orderBtn}
        txtStyle={styles.orderTxt}
        onPress={() => handleRating()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '80%',
    fontSize: scale(30),
    color: COLORS.GREEN,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: scale(45),
  },
  subTitle: {
    width: '90%',
    color: 'white',
    textAlign: 'center',
    fontSize: scale(16),
  },
  commentInput: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: scale(18),
    padding: 8,
  },
  orderBtn: {
    width: '90%',
    marginTop: scale(35),
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(24),
    paddingVertical: scale(12),
  },
  orderTxt: {
    color: COLORS.PRIMARY,
    fontSize: scale(19),
    fontWeight: '800',
  },
});
