import * as React from "react";
import {
  View,
  StyleProp,
  FlatList,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
import Spinner from "react-native-spinkit";
import StateView, { IStateViewProps } from "react-native-easy-state-view";
import RNBounceable from "@freakycoder/react-native-bounceable";
import ProgressiveFastImage from "@freakycoder/react-native-progressive-fast-image";
/**
 * ? Local Imports
 */
import styles from "./ImageGallery.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
export interface IImageData {
  source: ImageSourcePropType;
  uri?: string;
}

interface IImageGalleryProps extends IStateViewProps {
  defaultImageSource?: any;
  emptyStateImageSource?: any;
  style?: CustomStyleProp;
  listStyle?: CustomStyleProp;
  stateViewImageStyle?: CustomImageStyleProp;
  data?: Array<IImageData> | null;
  listContentContainerStyle?: CustomStyleProp;
  onPress: (index: number) => void;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({
  style,
  data,
  onPress,
  listStyle,
  defaultImageSource,
  stateViewImageStyle,
  emptyStateImageSource,
  listContentContainerStyle,
  ...rest
}) => {
  const renderStateView = () => (
    <View style={styles.stateViewContainer}>
      <StateView
        isCenter
        title="Nothing found"
        imageStyle={[styles.stateViewImageStyle, stateViewImageStyle]}
        description="We could not find anything in there"
        imageSource={emptyStateImageSource || require("./state-images.png")}
        {...rest}
      />
    </View>
  );

  const renderItem = (item: IImageData, index: number) => {
    return (
      <RNBounceable
        style={styles.photoShadowStyle}
        onPress={() => onPress(index)}
      >
        <ProgressiveFastImage
          key={index}
          source={item.source || { uri: item.uri }}
          style={styles.photoImageStyle}
          errorSource={defaultImageSource || require("./default-image.png")}
          {...rest}
        />
      </RNBounceable>
    );
  };

  const renderImageList = () => (
    <FlatList
      data={data}
      numColumns={3}
      style={listStyle}
      renderItem={({ item, index }) => renderItem(item, index)}
      contentInsetAdjustmentBehavior="automatic"
      contentInset={styles.photoListContentInset}
      contentContainerStyle={listContentContainerStyle}
      {...rest}
    />
  );

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <Spinner size={50} isVisible type="ChasingDots" color="red" {...rest} />
    </View>
  );

  const renderImageGallery = () => {
    if (data === null || data === undefined) return renderSpinner();
    else if (data && data.length > 0) return renderImageList();
    else return renderStateView();
  };

  return renderImageGallery();
};

export default ImageGallery;
