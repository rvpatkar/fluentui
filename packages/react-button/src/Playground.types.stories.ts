import * as React from 'react';

/** Type to get only the string keys of T. */
type StringKeyOf<T> = { [K in keyof T]: K extends string ? K : never }[keyof T];

/** Definition for a prop that is to be controlled by the Playground.  */
export type PropDefinition<T> = {
  /** Name of the prop. */
  propName: keyof T | 'content';

  /** Type of the prop, it can be boolean, string or an array of defined string values. */
  propType: 'boolean' | 'string' | string[];

  /** Default value for the prop. */
  defaultValue?: boolean | string;

  /** Callback to set the default value of the prop if it is boolean and controlled behavior is wanted. */
  setDefaultValue?: (value: boolean) => void;

  /**
   * An array of prop names that this prop requires to be truthy or falsy (prop name preceded by '~') in order to enable
   * this prop.
   */
  dependsOnProps?: (keyof T | `~${StringKeyOf<T>}` | 'content' | '~content')[];
};

/** Props received by the Playground component. */
export type PlaygroundProps<T> = {
  /** Single children to clone with the playground props. */
  children: React.ReactElement;

  /** Sections of props for the playground, where each section has a name and an array of prop definitions. */
  sections: Array<{
    sectionName: string;
    propList: PropDefinition<T>[];
  }>;
};
