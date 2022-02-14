/**
 * Helper class for fonts
 */
import _ from "lodash";
import { Platform } from "react-native";

// use post script names for font families
const Lexend: any = {
  "100": { fontFamily: "Lexend-Thin" },
  // '100italic': { fontFamily: 'Lexend-ThinItalic' },
  "200": { fontFamily: "Lexend-Light" },
  // '200italic': { fontFamily: 'Lexend-LightItalic' },
  "300": { fontFamily: "Lexend-Regular" },
  // '300italic': { fontFamily: 'Lexend-Italic' },
  "400": { fontFamily: "Lexend-Medium" },
  // '400italic': { fontFamily: 'Lexend-MediumItalic' },
  "500": { fontFamily: "Lexend-Bold" },
  // '500italic': { fontFamily: 'Lexend-BoldItalic' },
  "600": { fontFamily: "Lexend-Black" },
  // '600italic': { fontFamily: 'Lexend-BlackItalic' },
  "700": { fontFamily: "Lexend-ExtraBold" },
  // '700italic': { fontFamily: 'Lexend-BlackItalic' }
};

// const HelveticaNeue: any = {
//   '100': {
//     fontFamily: 'HelveticaNeue'
//   },
//   '200': {
//     fontFamily: Platform.OS === 'ios' ? 'Lexend-Light' : 'Lexend-Light'
//   },
//   '300': {
//     fontFamily:
//       Platform.OS === 'ios' ? 'Lexend-Regulart' : 'Lexend-Regular'
//   },
//   '400': {
//     fontFamily: 'Lexend-Medium'
//   },
//   // '500': {
//   //   fontFamily:
//   //     Platform.OS === 'ios' ? 'HelveticaNeueBold' : 'Helvetica Neu Bold'
//   // },
//   '600': {
//     fontFamily:
//       Platform.OS === 'ios' ? 'HelveticaNeueHeavy' : 'Helvetica Neu Bold'
//   }, // HelveticaNeueHv
//   '700': {
//     fontFamily: Platform.OS === 'ios' ? 'HelveticaNeueBold' : 'HelveticaNeue'
//   }
// };

const FONTS: any = {
  Lexend,
  // HelveticaNeue
};

/**
 * Helper class for cross-platform font styles
 */
class FontHelper {
  static font(fontParams: {
    fontFamily?: any;
    fontStyle?: any;
    fontWeight?: string;
  }) {
    const fontFamily = fontParams.fontFamily || "HelveticaNeue";
    const fontWeight = fontParams.fontWeight || "300";
    const fontStyle = fontParams.fontStyle || "";

    return {
      ..._.omit(fontParams, [fontFamily, fontFamily, fontStyle]),
      ...FONTS[fontFamily][fontWeight + fontStyle],
    };
  }
}

export default FontHelper;
