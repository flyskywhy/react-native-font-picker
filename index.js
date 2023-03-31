import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CustomPicker} from '@flyskywhy/react-native-custom-picker';

const defaultFonts = [
  // upper or lower case is distinguished on Android, not distinguished on iOS and Web
  'arial',
  // 'arial narrow', // will cause error `Unrecognized font family` on iOS, so comment them
  // 'arial black',
  'courier new',
  'georgia',
  // 'lucida console',
  // 'lucida sans unicode',
  // 'tahoma',
  'times new roman',
  'verdana',
];

export default class FontPicker extends Component {
  static defaultProps = {
    fonts: [],
    fieldPlaceholderText: 'Pick a font...',
    previews: true,
    styleOptionContainer: {backgroundColor: 'grey'},
    styleOptionFontText: {color: 'white'},
    styleOptionActiveContainer: {backgroundColor: 'white'},
    styleOptionActiveFontText: {color: 'grey'},
    value: '',
  };

  render() {
    const {fonts, onChange, fieldPlaceholderText, styleModalContainer, value} = this.props;

    return (
      <CustomPicker
        placeholder={fieldPlaceholderText}
        getLabel={(item) => item}
        options={fonts.length ? fonts : defaultFonts}
        defaultValue={value}
        modalAnimationType={'fade'}
        modalStyle={styleModalContainer}
        onValueChange={onChange}
        fieldTemplate={this.renderField}
        optionTemplate={this.renderOption}
      />
    );
  }

  renderField = (settings) => {
    const {defaultText, getLabel, selectedItem} = settings;
    const {
      fieldIndiText,
      styleFieldContainer,
      styleFieldIndiText,
      styleFieldFontText,
      styleFieldPlaceholderText,
    } = this.props;

    return (
      <View style={[styles.fieldContainer, styleFieldContainer]}>
        {!selectedItem && (
          <Text style={[styles.text, styleFieldPlaceholderText]}>
            {defaultText}
          </Text>
        )}
        {!!selectedItem && (
          <View style={styles.innerContainer}>
            <Text style={[styles.text, styleFieldIndiText]}>
              {fieldIndiText}
            </Text>
            <Text style={[styles.text, styleFieldFontText]}>
              {getLabel(selectedItem)}
            </Text>
          </View>
        )}
      </View>
    );
  };

  renderOption = (settings) => {
    const {item, getLabel} = settings;
    const {
      previews,
      styleOptionContainer,
      styleOptionFontText,
      styleOptionActiveContainer,
      styleOptionActiveFontText,
      value,
    } = this.props;
    const isActive = getLabel(value) === getLabel(item);
    const styleFont = previews && {fontFamily: getLabel(item)};

    return (
      <View
        style={[
          styles.optionContainer,
          isActive ? styleOptionActiveContainer : styleOptionContainer,
        ]}>
        <View style={styles.innerContainer}>
          <Text
            style={[
              styles.text,
              isActive ? styleOptionActiveFontText : styleOptionFontText,
              styleFont,
            ]}>
            {getLabel(item)}
          </Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    padding: 10,
    margin: 0.5,
  },
  fieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});
