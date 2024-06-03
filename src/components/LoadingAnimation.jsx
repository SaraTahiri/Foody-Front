import React from 'react'
import { ScatterBoxLoader } from "react-awesome-loaders"

export const LoadingAnimation = () => {
    return (
      <>
        <ScatterBoxLoader
          primaryColor={"#6366F1"}
          background={theme.colors["background"]}
        />
      </>
    );
  };