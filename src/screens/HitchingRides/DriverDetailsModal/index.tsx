import React from 'react';
import {
  View,
  FlatList,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../utils';
import {CustomButton} from '../../../components/CustomButton';
import {scale} from '../../../scale';
import {Logo} from '../../../components/Logo';
import {Comments} from '../CommentCard';
const CustomBox = ({count, text}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.boxTxt}>{count}</Text>
      <Text style={styles.boxTxt}>{text}</Text>
    </View>
  );
};
export const DriverDetailsModal = ({
  driver,
  handleOrder,
  modalVisible,
  closeModal,
}) => {
  const comments = [
    {
      id: 0,
      name: 'Омар',
      star: 4,
      comment:
        'Спасибо водителю.Отличная поездка! Спасибо водителю.Отличная поездка!',
    },
    {id: 1, name: 'Дулат', star: 4, comment: 'Спасибо водителю'},
    {id: 2, name: 'Кристина', star: 5, comment: 'Безопасно довез до города'},
  ];
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <ScrollView style={styles.modalContainer}>
        <View style={styles.header}>
          <CustomButton
            type={'icon'}
            icon={'close'}
            iconColor={'white'}
            size={scale(30)}
            onPress={() => closeModal()}
          />
          <Text style={styles.title}>Объявление водителя</Text>
        </View>
        <View style={styles.row}>
          <Logo size={scale(30)} style={styles.logo} />
          <CustomBox count={'55'} text={'поездок'} />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="star" size={scale(12)} color={'white'} />
              <Text style={styles.boxTxt}>4.6</Text>
            </View>
            <Text style={styles.boxTxt}>рейтинг</Text>
          </View>
          <CustomBox count={'3'} text={'отзывов'} />
        </View>
        <Text
          style={styles.driverName}>{`${driver.name}, ${driver.price}₸`}</Text>
        <Text style={styles.dirTxt}>{`${driver.from} -> ${driver.to}`}</Text>
        <Text style={styles.date}>{driver.date}</Text>
        <Text style={styles.date}>{driver.car}</Text>
        <Text style={styles.createdAt}>Cоздано {driver.createdAt}</Text>
        <Text style={styles.commentTitle}>Отзывы</Text>
        <FlatList
          data={comments}
          renderItem={({item}) => <Comments item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={[styles.row, {marginTop: 14}]}>
          <CustomButton
            text={'Забронировать место'}
            style={styles.orderBtn}
            txtStyle={styles.orderTxt}
            onPress={() => handleOrder()}
          />
          <CustomButton
            type={'icon'}
            icon={'phone'}
            size={scale(20)}
            style={styles.phone}
            iconColor={COLORS.PRIMARY}
            onPress={() => {}}
          />
          <TouchableOpacity style={styles.phone}>
            <FontAwesomeIcon
              name="whatsapp"
              size={scale(20)}
              color={COLORS.PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone: {
    width: scale(40),
    aspectRatio: 1,
    borderWidth: 0,
    backgroundColor: COLORS.GREEN,
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dirTxt: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: '600',
    marginTop: 9,
  },
  date: {
    color: 'white',
    fontSize: scale(14),
    marginTop: 9,
  },
  createdAt: {
    color: COLORS.GRAY,
    fontSize: scale(10),
    marginTop: 9,
  },
  orderBtn: {
    width: '70%',
    height: scale(40),
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(24),
  },
  orderTxt: {
    color: COLORS.PRIMARY,
    fontSize: scale(15),
    fontWeight: '800',
  },
  header: {
    height: scale(54),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    width: '90%',
    fontSize: 20,
    color: 'white',
    marginLeft: scale(30),
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 16,
  },

  driverName: {
    fontSize: scale(20),
    color: COLORS.GREEN,
    fontWeight: '700',
    marginTop: scale(16),
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logo: {
    width: scale(80),
    aspectRatio: 1,
    borderWidth: 0,
    backgroundColor: COLORS.GRAY,
    borderRadius: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTxt: {
    color: 'white',
    fontSize: scale(15),
    fontWeight: '900',
  },
  commentTitle: {
    color: 'white',
    fontSize: scale(15),
    fontWeight: '900',
    marginTop: 16,
    marginBottom: 10,
  },
});
