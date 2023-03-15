# react-native-font-picker

[![npm version](http://img.shields.io/npm/v/react-native-font-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-font-picker "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-font-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-font-picker "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-font-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-font-picker "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-font-picker "View this project on npm")

Font picker component to be used in `ctx.fillText()` on [@flyskywhy/react-native-gcanvas](https://github.com/flyskywhy/react-native-gcanvas) or just in `<Text/>` of react-native.

## Example
Here is the result of [Font Picker to fillText](https://github.com/flyskywhy/GCanvasRNExamples/blob/master/app/components/FontPicker2FillText.js) on [@flyskywhy/react-native-gcanvas](https://github.com/flyskywhy/react-native-gcanvas).

<img src="https://raw.githubusercontent.com/flyskywhy/GCanvasRNExamples/master/assets/FontPicker2FillText.gif" width="480">

## Installation
```
npm install react-native-font-picker --save
```

## Example As Usage
```
import {getFontNames} from '@flyskywhy/react-native-gcanvas';

...

  constructor(props) {
    super(props);
    this.fontNames = getFontNames(); // or just `[]` or `undefined` to display defaultFonts in react-native-font-picker
    this.state = {
      fontName: 'arial',
    };
  }

  render() {
    const {fontName} = this.state;

    ...

      <View
        style={{
          width: 200,
          height: 70,
        }}>
        <FontPicker
          fieldPlaceholderText={'FONT'} // default is 'Pick a font...'
          fieldIndiText={'FONT: '}
          styleFieldContainer={{
            padding: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          styleFieldPlaceholderText={{color: '#4489FF'}}
          styleFieldIndiText={{color: '#4489FF'}}
          styleFieldFontText={[
            {color: 'red'},
            fontName && {fontFamily: fontName},
          ]}
          fonts={this.fontNames}
          previews={true} // style fontFamily on option font text automatically
          styleModalContainer={{width: 200, height: 300}}
          styleOptionContainer={{backgroundColor: 'grey'}}
          styleOptionFontText={{color: 'white'}}
          styleOptionActiveContainer={{backgroundColor: 'white'}}
          styleOptionActiveFontText={{color: 'grey'}}
          value={fontName}
          onChange={value => this.setState({fontName: value})}
        />
      </View>
```

### custom fonts
If want install custom fonts into APP, please ref to "custom fonts" in `README.md` of [@flyskywhy/react-native-gcanvas](https://github.com/flyskywhy/react-native-gcanvas).

## Donate
To support my work, please consider donate.

- ETH: 0xd02fa2738dcbba988904b5a9ef123f7a957dbb3e

- <img src="https://raw.githubusercontent.com/flyskywhy/flyskywhy/main/assets/alipay_weixin.png" width="500">
