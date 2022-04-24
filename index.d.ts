import type * as React from "react";

declare module "react-native-anchorlink" {
  export type ArchorParserProps = {
    /**
      * default value is empty
      * use type required
      */
     string: string;
     /**
     *  default value is 0
     *  pass the nteger number for showing number of lines
     *  use type optional
     */
     numberOfLines: Number
    /**
     *  default value is empty object
     *  pass the object for text styling
     *  use type optional
     */
     stringStyle: object;
    /**
     *  default value is empty object
     *  pass the object for link styling
     *  use type optional
     */
     linkStyle: object;
  };

  export default class ArchorParser extends React.Component<ArchorParserProps> {
    
  }
}
