import * as React from "react";
import { View, StyleProp, FlatList, ViewStyle } from "react-native";
import Spinner from "react-native-spinkit";
import StateView from "react-native-easy-state-view";
import ProgressiveFastImage from "@freakycoder/react-native-progressive-fast-image";

import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./ImageGallery.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IImageGalleryProps {
  style?: CustomStyleProp;
  data: Array<any>;
  listStyle?: CustomStyleProp;
  listContentContainerStyle?: CustomStyleProp;
  onPress: (index: number) => void;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({
  style,
  data,
  onPress,
  listStyle,
  listContentContainerStyle,
  ...rest
}) => {
  const renderStateView = () => (
    <View style={styles.stateViewContainer}>
      <StateView
        isCenter
        title="Nothing found"
        imageStyle={styles.stateViewImageStyle}
        subtitle="We could not find anything in there"
        imageSource={require("./state-images.png")}
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
          errorSource={require("./default-image.png")}
          {...rest}
        />
      </RNBounceable>
    );
  };

  const renderImageList = () => (
    <FlatList
      data={data}
      numColumns={3}
      renderItem={renderItem}
      contentInsetAdjustmentBehavior="automatic"
      contentInset={styles.photoListContentInset}
      keyExtractor={(index) => index}
      style={listStyle}
      contentContainerStyle={listContentContainerStyle}
    />
  );

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <Spinner size={50} isVisible type="ChasingDots" color="red" />
    </View>
  );

  const renderImageGallery = () => {
    if (data === null) return renderSpinner();
    else if (data && data.length > 0) return renderImageList();
    else return renderStateView();
  };

  return renderImageGallery();
};

export default ImageGallery;
