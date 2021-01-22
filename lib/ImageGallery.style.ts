import {
  Insets,
  ViewStyle,
  StyleSheet,
  ImageStyle,
  Dimensions,
} from "react-native";
import { CustomImageStyleProps } from "@freakycoder/react-native-progressive-fast-image";
const { height: ScreenHeight } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  photoListContentInset: Insets;
  stateViewContainer: ViewStyle;
  stateViewImageStyle: ImageStyle;
  photoShadowStyle: ViewStyle;
  photoImageStyle: CustomImageStyleProps;
  spinnerContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  buttonsContainerGlue: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginTop: -12,
    justifyContent: "flex-end",
  },
  buttonsContainerGlue: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  photoListContentInset: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 130,
  },
  stateViewContainer: {
    backgroundColor: "transparent",
    height: ScreenHeight * 0.45,
    alignItems: "center",
    justifyContent: "center",
  },
  stateViewImageStyle: {
    width: ScreenHeight * 0.3,
    height: ScreenHeight * 0.17,
  },
  photoShadowStyle: {
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowColor: "#757575",
    shadowOffset: {
      width: 3,
      height: 4,
    },
  },
  photoImageStyle: {
    margin: 8,
    width: 100,
    height: 150,
    borderRadius: 16,
  },
  spinnerContainer: {
    marginTop: "22%",
    alignItems: "center",
    justifyContent: "center",
    height: ScreenHeight * 0.35,
  },
});
