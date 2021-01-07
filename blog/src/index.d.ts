// Declares the global modules classes and functions for the project.

// tslint:disable:no-any

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module 'jsonlint-mod' {
  const content: string;
  export default content;
}

// Declare the modules as any which doesn't support typescript
declare module 'uppy' {
  const content: any;
  export default content;
}
declare module 'uppy/*' {
  const content: any;
  export default content;
}
declare module 'react-intl-formatted-duration' {
  const content: any;
  export default content;
}

declare module 'check-password-strength' {
  const content: any;
  export default content;
}

// Public and util types
declare interface ObjectMap<T = any> {
  [key: string]: T;
}

