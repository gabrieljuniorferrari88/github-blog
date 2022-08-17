import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      title: '#E7EDF4',
      text: '#AFC2D4',
      primaryShape: '#0B1B2B',
      secondaryShape: '#112131',
      background: '#071422',
      brand: '#3294F8',
      span: '#7B96B2',
    },
    fonts: {
      default: 'Nunito',
    },
  },
});

// theme: {
//   colors: {
//     b: '#3294F8',
//     title: '#E7EDF4',
//     subtitle: '#C4D4E3',
//     text: '#AFC2D4',
//     span: '#7B96B2',
//     label: '#3A536B',
//     border: '#1C2F41',
//     post: '#112131',
//     profile: '#0B1B2B',
//     background: '#071422',
//     input: '#040F1A',
//   },
// },
