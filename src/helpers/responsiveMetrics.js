import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const wp = (num) => widthPercentageToDP(num);
export const hp = (num) => heightPercentageToDP(num);