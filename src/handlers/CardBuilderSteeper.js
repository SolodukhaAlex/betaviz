import React from 'react';
import UploadSidesMenu from '../components/UploadBuildCard/UploadSidesMenu/UploadSidesMenu';

const cardBuilderSteeper = (step, props) => {
  switch (step) {
    default:
      return <UploadSidesMenu {...props} />;
  }
};

export default cardBuilderSteeper;
