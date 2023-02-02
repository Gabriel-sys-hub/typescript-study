import "styled-components";
// tenho que importar o styled components, para não substituir todo modulo do styled-components
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
    };
  }
}
