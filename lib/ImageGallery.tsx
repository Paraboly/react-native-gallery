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
  onPress: (index: number) => void;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({
  style,
  data,
  onPress,
}) => {
  const renderStateView = () => (
    <View style={styles.stateViewContainer}>
      <StateView
        isCenter
        shadowColor="#757575"
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
          borderRadius={16}
          source={item.source}
          // resizeMode="contain"
          style={styles.photoImageStyle}
          errorSource={require("./default-image.png")}
          loadingSource={{
            uri:
              "https://thumbs.gfycat.com/GrimyPlainKakarikis-size_restricted.gif",
          }}
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
    />
  );

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <Spinner size={50} isVisible type="ChasingDots" color="red" />
    </View>
  );

  const renderImageGallery = () => {
    if (data === null) return renderSpinner();
    else if (data && data.length > 0)
      return <View style={styles.listContainer}>{renderImageList()}</View>;
    else return renderStateView();
  };

  return renderImageGallery();
};

export default ImageGallery;
