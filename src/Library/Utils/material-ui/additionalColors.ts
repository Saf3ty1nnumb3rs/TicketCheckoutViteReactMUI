export const additionalColors = {
  borderGray: '#E4E4E4',
  ticketGrabGray3: '#BFBFC0',
  ticketGrabTeal: '#009189',
  ticketGrabBlue: '#0662BB', // This color is also used for Links.
  ticketGrabLightBlue: '#B6CEFF',
  ticketGrabRed: '#FF5352',
  ticketGrabEvergreen: '#19413A',
  redMoney: '#FF5352',
  greenMoney: '#00AD00',
  graphPurple: '#8B3092',
  graphBlue: '#4C32D1',
  graphOrange: '#E0841F',
  graphMagenta: '#CB1C5C',
  graphGreen: '#9FA833',
  carrierSettingsGreen: '#037C79',
  forms: {
    focus: '#121212',
    disabled: '#BFB8AF',
    borderBottomLine: '#DFDBD7',
    asterisk: '#db3131',
    label: '#5F5753',
    error: '#DF2901',
  },
  dashboardTileDividerGrey: '#F6F6F7',
} as const;

export const BORDER_BASE = `1px solid ${additionalColors.borderGray}` as const;

export const ticketGrabGrayPalette = {
  subtitleLightGray: '#63647A',
  lightWarmGray: '#F2F1EF',
  lightCoolGray: '#E6E9EF',
  darkGrey: '#57585C',
  textBlack: '#121212', // * This is the same as theme.palette.text.primary
  workspaceBorders: '#D1D2D3',
} as const;
