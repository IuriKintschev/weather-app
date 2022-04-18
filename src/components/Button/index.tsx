import React from "react";
import { VariantProps, createRestyleComponent, createBox, createVariant } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Theme } from "~/styles/theme";

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type Props = VariantProps<Theme, "buttonVariants"> & React.ComponentProps<typeof BaseButton>;

const ButtonComponent = createRestyleComponent<Props, Theme>(
  [createVariant({ themeKey: "buttonVariants" })],
  BaseButton
);

const Button: React.FC<Props> = ({ children, ...rest }) => <ButtonComponent {...rest}>{children}</ButtonComponent>;

export default Button;
