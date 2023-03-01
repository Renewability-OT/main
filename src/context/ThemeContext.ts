import { createContext, Dispatch, SetStateAction } from "react";

type themeType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};
export const ThemeContext = createContext<themeType>({
  darkMode: false,
  setDarkMode: () => false,
});
