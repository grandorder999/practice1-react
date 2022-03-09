import React from "react";
import { FC, useState } from "react";

export const Test: FC = (props) => {
  const [context, setContext] = useState<string>("");
  const onClickReturn = () => {};

  return <button type="button">もどる</button>;
};
