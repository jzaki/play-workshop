const workshopping = require('workshopping')

var colors = {
  themeColor1: "#2c323c",
  lavenderGrey: "#e3e8ee",
  androidGreen: "#9BC53D"
}

var font_url = (location.origin.includes('//localhost')
  || location.origin.includes('//127.0.0.1')
  || location.origin.includes('//0.0.0.0')
  || location.origin.includes('//10.0.0')
  || location.origin.includes('//192.168')) ?
    '../src/OverpassMono-Regular.ttf'
    : 'https://github.com/ethereum-play/play-workshop/blob/master/src/OverpassMono-Regular.ttf?raw=true'

module.exports = workshopping.customize({
  theme: {
    '--font': font_url,
    menu_minHeight: '0px',
    menu_height: 'auto',
    menu_border: '0',
    menu_padding: '25px 0px',
    menu_and_minimap_and_wide_backgroundColor: colors.themeColor1,
    container_backgroundColor: colors.themeColor1,
    container_border: '0',
    arrow_hover_textcolor: colors.lavenderGrey,
    lesson_borderleft: `2px solid ${colors.themeColor1}`,
    lesson_borderright: `2px solid ${colors.themeColor1}`,
    head_textsize: '15px',
    head_textweight: '900',
    button_hover_backgroundColor: 'transparent',
    button_hover_color: colors.lavenderGrey,
    series_paddingRight: '0',
    series_paddingLeft: '2%',
    series_textcolor: colors.androidGreen,
    series_textsize: 'calc(10px + 0.5vw)',
    minimapbutton_border: `1.5px solid ${colors.androidGreen}`,
    minimap_backgroundColor: colors.themeColor1,
    editor_border: '0',
    lesson_title_textcolor: 'inherit',
    lesson_title_textsize: 'inherit',
    video_border: '0',
    video_borderTop: `2px solid ${colors.themeColor1}`,
    bottom_marginTop: '2%',
    switchbutton_fontsize: `calc(10px + 0.3vw)`,
    switchbutton_backgroundColor: colors.androidGreen,
    switchbutton_color: colors.themeColor1,
    tab_color: colors.themeColor1,
    tab_fontsize: '12px',
    infobutton_borderright: `1px solid ${colors.themeColor1}`,
    chatbutton_borderleft: `1px solid ${colors.themeColor1}`,
    tab_border: `1px solid ${colors.androidGreen}`,
    tab_backgroundColor: colors.androidGreen,
    tab_textTransform: 'none',
    tab_hover_backgroundColor: 'transparent',
    tab_hover_textcolor: colors.lavenderGrey,
    infobox_backgroundColor: colors.lavenderGrey,
    infobox_borderTop: `2px solid ${colors.themeColor1}`,
    infobox_marginTop: `0`,
    chatbox_borderTop: `2px solid ${colors.themeColor1}`,
    welcome_font_size: 'calc(10px + 0.3vw)',
    welcome_padding_topBottom: '5%',
    welcome_text_color: colors.themeColor1,
  }
})
