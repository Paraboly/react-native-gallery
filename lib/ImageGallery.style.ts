import { Insets, ViewStyle, StyleSheet, ImageStyle } from "react-native";
import { ScreenHeight } from "@freakycoder/react-native-helpers";
import { CustomImageStyleProps } from "@freakycoder/react-native-progressive-fast-image";

interface Style {
  container: ViewStyle;
  photoListContentInset: Insets;
  listContainer: ViewStyle;
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
  listContainer: {
    bottom: 24,
    height: ScreenHeight * 0.45,
  },
  stateViewContainer: {
    backgroundColor: "transparent",
    height: ScreenHeight * 0.45,
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
    alignSelf: "center",
    height: ScreenHeight * 0.35,
  },
});
