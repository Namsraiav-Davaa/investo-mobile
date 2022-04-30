import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from './utils';

export default class ImageSliderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://s3-alpha-sig.figma.com/img/e5b0/9102/cbdd190e9806c4aceaeae18c90c6f696?Expires=1649030400&Signature=dZTtmvetyd8wCtxQ9JfwcCHJywZcDML4BKho6nBY-5uaZUyRiuIj5VMSzUORGjEUaCZw8avFucdRlSOQAC2MiRgl29fsscV0TZD~goDZTx~p8I9NoVPjRLnPyrVsmT-fi-ie6X8lZFM1VkJF5wcnLkA9ZCovaI-NKbxPsacAXZeUrWmwWlw8E44aAxw3XGyokkDdpkJbRVzynSmladSX~UqUtHim0eKFHRx5XTM2zsHMD7aMcrOpFwIbuVP~6w0ADnIJlzj8ar6M0LwRu6bMZq5b6TmQAYg7F913TCEPy8HVUWD3ZZxjsINYri83sGyO2JP9upFYCVVAB6ISN4Rbiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        'https://s3-alpha-sig.figma.com/img/e5b0/9102/cbdd190e9806c4aceaeae18c90c6f696?Expires=1649030400&Signature=dZTtmvetyd8wCtxQ9JfwcCHJywZcDML4BKho6nBY-5uaZUyRiuIj5VMSzUORGjEUaCZw8avFucdRlSOQAC2MiRgl29fsscV0TZD~goDZTx~p8I9NoVPjRLnPyrVsmT-fi-ie6X8lZFM1VkJF5wcnLkA9ZCovaI-NKbxPsacAXZeUrWmwWlw8E44aAxw3XGyokkDdpkJbRVzynSmladSX~UqUtHim0eKFHRx5XTM2zsHMD7aMcrOpFwIbuVP~6w0ADnIJlzj8ar6M0LwRu6bMZq5b6TmQAYg7F913TCEPy8HVUWD3ZZxjsINYri83sGyO2JP9upFYCVVAB6ISN4Rbiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        'https://s3-alpha-sig.figma.com/img/e5b0/9102/cbdd190e9806c4aceaeae18c90c6f696?Expires=1649030400&Signature=dZTtmvetyd8wCtxQ9JfwcCHJywZcDML4BKho6nBY-5uaZUyRiuIj5VMSzUORGjEUaCZw8avFucdRlSOQAC2MiRgl29fsscV0TZD~goDZTx~p8I9NoVPjRLnPyrVsmT-fi-ie6X8lZFM1VkJF5wcnLkA9ZCovaI-NKbxPsacAXZeUrWmwWlw8E44aAxw3XGyokkDdpkJbRVzynSmladSX~UqUtHim0eKFHRx5XTM2zsHMD7aMcrOpFwIbuVP~6w0ADnIJlzj8ar6M0LwRu6bMZq5b6TmQAYg7F913TCEPy8HVUWD3ZZxjsINYri83sGyO2JP9upFYCVVAB6ISN4Rbiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        'https://s3-alpha-sig.figma.com/img/e5b0/9102/cbdd190e9806c4aceaeae18c90c6f696?Expires=1649030400&Signature=dZTtmvetyd8wCtxQ9JfwcCHJywZcDML4BKho6nBY-5uaZUyRiuIj5VMSzUORGjEUaCZw8avFucdRlSOQAC2MiRgl29fsscV0TZD~goDZTx~p8I9NoVPjRLnPyrVsmT-fi-ie6X8lZFM1VkJF5wcnLkA9ZCovaI-NKbxPsacAXZeUrWmwWlw8E44aAxw3XGyokkDdpkJbRVzynSmladSX~UqUtHim0eKFHRx5XTM2zsHMD7aMcrOpFwIbuVP~6w0ADnIJlzj8ar6M0LwRu6bMZq5b6TmQAYg7F913TCEPy8HVUWD3ZZxjsINYri83sGyO2JP9upFYCVVAB6ISN4Rbiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      ],
    };
  }

  render() {
    return (
      <View style={{opacity: 0.5}}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={190}
          dotColor={COLORS.button_bg}
          inactiveDotColor={COLORS.hr_txt_color}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotStyle={{
            width: 26,
            height: 6,
            position: 'absolute',
            left: -120,
            bottom: 30,
            borderRadius: 0,
            borderWidth: 0.3,
            borderColor: COLORS.white,
          }}
          paginationBoxStyle={{
            width: 64,
          }}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}
