import * as React from "react";
declare type Unwrapper = <T>(promise: Promise<T>) => Promise<T>;
declare const createUnwrapper: (component: React.Component<{}, {}, any>) => <T>(promise: Promise<T>) => Promise<T>;
export { createUnwrapper, Unwrapper };
