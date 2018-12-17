import * as React from "react";

type Unwrapper = <T>(promise: Promise<T>) => Promise<T>;

const createUnwrapper = (component: React.Component) => {
    return async <T>(promise: Promise<T>): Promise<T> => {
        try {
            const value = await promise;
            return value;
        } catch (err) {
            component.setState(() => {
                throw new Error(err);
            });
        }
    };
};

export { createUnwrapper, Unwrapper };
