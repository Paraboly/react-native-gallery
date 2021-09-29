import React from "react";
import { StatusBar, Text, SafeAreaView, View } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import ImageGallery, { IImageData } from "./build/dist/ImageGallery";
console.disableYellowBox = true;

const staticData: Array<IImageData> = [
  {
    uri: "https://images.unsplash.com/photo-1610960245237-cfab0dea6be4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1611058619873-cbc8123debb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1611056162989-bcfcdefaae14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    uri: "https://images.unsplash.com/photo-1611003229244-fa443d2a2a96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1611001395253-b721fcff3666?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1610981056460-c5c72ce4c8d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1610981263015-ef95481e9ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
  },

  {
    source: {
      uri: "https://images.unsplash.com/photo-1610987653945-fe23ff170a2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1610982408056-0cf21c1edb64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  },
  {
    source: {
      uri: "https://images.unsplash.com/photo-1610985738484-a3d5393a8a79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
  },
];

const App = () => {
  const [galleryData, setGalleryData] = React.useState<
    Array<IImageData> | undefined
  >(undefined);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ height: 500 }}>
          <ImageGallery
            data={galleryData}
            loadingSource={require("./assets/spinner.gif")}
            onPress={(itemIndex: number) =>
              console.log("Item Index: ", itemIndex)
            }
          />
        </View>

        <View
          style={{
            marginTop: 16,
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Data</Text>
          <Text style={{ marginTop: 16 }}>{`${
            galleryData && galleryData.length > 0
              ? galleryData
              : JSON.stringify(galleryData)
          }`}</Text>
        </View>
        <RNBounceable
          bounceEffect={0.95}
          style={{
            height: 50,
            width: "70%",
            marginTop: 24,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ab0011",
            shadowRadius: 8,
            shadowOpacity: 0.2,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
          onPress={() => {
            if (galleryData === undefined) {
              setGalleryData(staticData);
            } else if (galleryData === staticData) {
              setGalleryData([]);
            } else {
              setGalleryData(undefined);
            }
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Data State Change
          </Text>
        </RNBounceable>
      </SafeAreaView>
    </>
  );
};

export default App;
