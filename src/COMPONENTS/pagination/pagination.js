import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Paginationss = ({ onPageChange,totalpage_count }) => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = totalpage_count; // total pages you want to show
  const maxVisiblePages = 3; // maximum visible page buttons

  // Function to get the range of visible pages
  const getVisiblePages = () => {
    let start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let end = start + maxVisiblePages - 1;

    // Adjust the start and end if they exceed total pages
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    return Array.from({length: end - start + 1}, (_, index) => start + index);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1); // Set to the first page
  };

  const handleLast = () => {
    setCurrentPage(totalPages); // Set to the last page
  };

  const visiblePages = getVisiblePages(); // Get the visible pages based on current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page); // Call the onPageChange prop
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFirst}>
        <Text style={styles.button}>
          <Icon name="chevron-double-left" size={40} />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePrev} disabled={currentPage === 1}>
        <Text
          style={[styles.button, currentPage === 1 && styles.disabledButton]}>
          <Icon name="chevron-left" size={40} />
        </Text>
      </TouchableOpacity>

      {visiblePages.map(pageNumber => (
        <TouchableOpacity
          key={pageNumber}
          onPress={() =>handlePageChange(pageNumber)} // Clicking on page number sets it as current
        >
          <Text
            style={[
              styles.num_button,
              {paddingHorizontal: pageNumber > 9 ? wp(1.5) : wp(2.5)},
            ]}>
            {pageNumber}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        onPress={handleNext}
        disabled={currentPage === totalPages}>
        <Text
          style={[
            styles.button,
            currentPage === totalPages && styles.disabledButton,
          ]}>
          <Icon name="chevron-right" size={40} />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLast}>
        <Text style={styles.button}>
          <Icon name="chevron-double-right" size={40} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(4),
    flexWrap: 'wrap', // Added to allow buttons to wrap

    gap: hp(1.3),
  },
  button: {
    paddingVertical: hp(0.4),

    backgroundColor: 'black',
    color: 'white',
  },
  num_button: {
    paddingVertical: hp(0.4),
    backgroundColor: 'black',
    color: 'white',

    fontSize: 30,
  },
  activeButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default Paginationss;
