import * as React from "react";
import {
  View,
  StyleProp,
  FlatList,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import Spinner from "react-native-spinkit";
import StateView from "react-native-easy-state-view";
import RNBounceable from "@freakycoder/react-native-bounceable";
import ProgressiveFastImage from "@freakycoder/react-native-progressive-fast-image";
/**
 * ? Local Imports
 */
import styles from "./ImageGallery.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
export interface IImageData {
  source: ImageSourcePropType;
}

interface IImageGalleryProps {
  defaultImageSource?: any;
  emptyStateImageSource?: any;
  style?: CustomStyleProp;
  listStyle?: CustomStyleProp;
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
  emptyStateImageSource,
  listContentContainerStyle,
  ...rest
}) => {
  const renderStateView = () => (
    <View style={styles.stateViewContainer}>
      <StateView
        isCenter
        title="Nothing found"
        imageStyle={styles.stateViewImageStyle}
        description="We could not find anything in there"
        imageSource={emptyStateImageSource || require("./state-images.png")}
      />
    </View>
  );

  const renderItem = (data: any) => {
    const { item, index } = data;
    return (
      <RNBounceable
        style={styles.photoShadowStyle}
        onPress={() => onPress(index)}
      >
        <ProgressiveFastImage
          key={index}
          source={item.source}
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
      renderItem={renderItem}
      contentInsetAdjustmentBehavior="automatic"
      contentInset={styles.photoListContentInset}
      contentContainerStyle={listContentContainerStyle}
    />
  );

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <Spinner size={50} isVisible type="ChasingDots" color="red" />
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
