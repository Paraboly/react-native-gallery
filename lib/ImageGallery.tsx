import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Spinner from "react-native-spinkit";
import StateView from "react-native-easy-state-view";
import RNBounceable from "@freakycoder/react-native-bounceable"
/**
 * ? Local Imports
 */
import styles from "./ImageGallery.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IImageGalleryProps {
  style?: CustomStyleProp;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({ style }) => {
  const [images, setImages] = React.useState<Array<ITaskImage>>(null);

  // ? Lifecycle: componentDidMount
  React.useEffect(() => {
    // fetchImages(taskId).then((imageList: Array<ITaskImage>) =>
    //   setImages(imageList),
    // );
  }, []);

  const renderStateView = () => (
    <View style={styles.stateViewContainer}>
      <StateView
        isCenter
        shadowColor={colors.gray.medium}
        title={localStrings.nothingFound}
        imageStyle={styles.stateViewImageStyle}
        subtitle={localStrings.nothingFoundDesc}
        imageSource={require("assets/states/files_and_folder.png")}
      />
    </View>
  );

  const renderItem = (data: any) => {
    const { item, index } = data;
    return (
      <Androw style={styles.photoShadowStyle}>
        <TouchableOpacity onPress={() => navigateToSelectedImageGallery(index)}>
          <Image
            key={index}
            borderRadius={16}
            source={{ uri: item.thumb }}
            style={styles.photoImageStyle}
          />
        </TouchableOpacity>
      </Androw>
    );
  };

  const renderImageList = () => (
    <FlatList
      data={images}
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
    if (images === null) return renderSpinner();
    else if (images && images.length > 0)
      return <View style={styles.listContainer}>{renderImageList()}</View>;
    else return renderStateView();
  };

  return renderImageGallery();
};

export default ImageGallery;
