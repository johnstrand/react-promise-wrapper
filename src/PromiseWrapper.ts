import * as React from "react";

type Unwrapper = <T>(promise: Promise<{ value: T, err: string | undefined }>) => Promise<T>;

const createUnwrapper = (component: React.Component) => {
    return async <T>(promise: Promise<{ value: T, err: string | undefined }>): Promise<T> => {
        const { value, err } = await promise;
        if(err) {
           component.setState(() => { throw new Error(err); });
        }
        return value;
    }
}

export { createUnwrapper, Unwrapper }