import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading: React.SFC<{ loading?: boolean; size?: number }> = props => {
  const { loading = true, size } = props;

  return (
    <CircularProgress
      aria-describedby="Loading"
      aria-busy={loading}
      size={size}
    />
  );
};

export default Loading;
