import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DateTimePicker } from '@react-native-community/datetimepicker';

const RegistrationForm = () => {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [childrenCount, setChildrenCount] = useState(0);
  const [children, setChildren] = useState([]);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const handleAddChild = () => {
    setChildren([...children, { name: '', dob: '' }]);
  };

  const handleChildNameChange = (index, value) => {
    const updatedChildren = [...children];
    updatedChildren[index].name = value;
    setChildren(updatedChildren);
  };

  const handleChildDobChange = (index, value) => {
    const updatedChildren = [...children];
    updatedChildren[index].dob = value;
    setChildren(updatedChildren);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name*</Text>
        <TextInput style={styles.input} placeholder="Type Your Name" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Mobile Number*</Text>
        <TextInput style={styles.input} placeholder="000-000-0000" keyboardType="phone-pad" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>WhatsApp Number*</Text>
        <TextInput style={styles.input} placeholder="000-000-0000" keyboardType="phone-pad" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email ID*</Text>
        <TextInput
          style={styles.input}
          placeholder="abcr123@xyz.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Marital Status</Text>
        <Picker
          selectedValue={maritalStatus}
          style={styles.picker}
          onValueChange={(itemValue) => setMaritalStatus(itemValue)}>
          <Picker.Item label="Select option" value="" />
          <Picker.Item label="Single" value="single" />
          <Picker.Item label="Married" value="married" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Date of Anniversary*</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Spouse Name*</Text>
        <TextInput style={styles.input} placeholder="Type Spouse Name" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Spouse Contact Number*</Text>
        <TextInput style={styles.input} placeholder="000-000-0000" keyboardType="phone-pad" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Spouse Birthday*</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Number of Children*</Text>
        <View style={styles.childrenContainer}>
          <TextInput
            style={styles.input}
            value={childrenCount.toString()}
            onChangeText={(value) => setChildrenCount(Number(value))}
            keyboardType="numeric"
          />
          <Button title="+" onPress={handleAddChild} />
        </View>
      </View>

      {children.map((child, index) => (
        <View key={index} style={styles.formGroup}>
          <Text style={styles.label}>Child ({index + 1}) Name*</Text>
          <TextInput
            style={styles.input}
            placeholder="Type Your Child’s Name"
            value={child.name}
            onChangeText={(value) => handleChildNameChange(index, value)}
          />
          <Text style={styles.label}>Child ({index + 1}) Date of Birth*</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => handleChildDobChange(index, selectedDate)}
            />
          )}
        </View>
      ))}

      <View style={styles.formGroup}>
        <Text style={styles.label}>Communication Address*</Text>
        <TextInput style={styles.input} placeholder="Address line" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="State" />
        <TextInput style={styles.input} placeholder="PIN code" keyboardType="numeric" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  childrenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  submitButton: {
    backgroundColor: '#ffcc00',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegistrationForm;
