import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import ImageGallery from "./lib/ImageGallery";

const staticData = [
  { source: "" },
  { source: "" },
  { source: "" },
  { source: "" },
  { source: "" },
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageGallery data={staticData} />
      </SafeAreaView>
    </>
  );
};

export default App;
