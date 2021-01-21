import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import Spinner from "react-native-spinkit";

import ImageGallery from "./lib/ImageGallery";

const staticData = [
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610960245237-cfab0dea6be4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1611058619873-cbc8123debb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1611056162989-bcfcdefaae14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1611003229244-fa443d2a2a96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1611001395253-b721fcff3666?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610981056460-c5c72ce4c8d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610981263015-ef95481e9ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
  },

  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610987653945-fe23ff170a2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610982408056-0cf21c1edb64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  },
  {
    source: {
      uri:
        "https://images.unsplash.com/photo-1610985738484-a3d5393a8a79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
  },
];

const App = () => {
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
            data={staticData}
            onPress={(itemIndex: number) =>
              console.log("Item Index: ", itemIndex)
            }
            loadingSource={require("./assets/spinner.gif")}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
