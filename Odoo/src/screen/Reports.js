import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import imagesPath from '../constants/imagesPath';

const Reports = () => {
  return (
    <View>
      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Sales Summary Report</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Day sales Report</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Z Report</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Sales By Department</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Item Movement Summary</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Employee Activity Summary</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Tax Collection By Tax Rates</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportList}>
        <Text style={styles.reportText}>Item Stock Report</Text>
        <Image source={imagesPath.SideArrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  reportList: {
    padding: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#000'
  },
  reportText: {
    fontSize: 20,
  },
});
