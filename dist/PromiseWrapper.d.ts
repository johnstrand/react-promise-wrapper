import * as React from "react";
declare type Unwrapper = <T>(promise: Promise<{
    value: T;
    err: string | undefined;
}>) => Promise<T>;
declare const createUnwrapper: (component: React.Component<{}, {}, any>) => <T>(promise: Promise<{
    value: T;
    err: string;
}>) => Promise<T>;
export { createUnwrapper, Unwrapper };
