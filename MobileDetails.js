import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Item from './Item';
import ItemSection from '../ItemSection';

const MobileDetails = props => {
  const {headContainer, headerText, imageStyle} = styles;
  const {mobile} = props;

  return (
    <Item>
      <ItemSection>
        <View style={headContainer}>
          <Text style={headerText.text}>Brand: {props.mobile.name}</Text>
          <Text style={headerText.text}>Model: {props.mobile.type}</Text>
          <Text style={headerText.text}>URL: {props.mobile.url}</Text>
        </View>
      </ItemSection>
    </Item>
  );
};

styles = {
  headContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  imageStyle: {
    height: 300,
    flex: 1,
  },
};

export default MobileDetails;
