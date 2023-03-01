import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Reports = () => {
  return (
    <View>
    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Sales Summary Report</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Day sales Report</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Z Report</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Sales By Department</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Item Moment Summary</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Employee Activity Summary</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Tax Collection By Tax Rates</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.reportList}>
      <Text style={styles.reportText}>Item Stock Report</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Reports

const styles = StyleSheet.create({
  reportList:{
    padding:'4%'
  },
 reportText:{
  fontSize:20
 }

})