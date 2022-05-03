/* eslint-disable react/jsx-no-useless-fragment */
import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { meAction } from "adapter/connectedUser/connectedUserAction";

const AuthInitializer: FC = ({ children }) => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMe = async () => {
            await meAction(dispatch);
            setIsLoading(false);
        };

        getMe();
    }, []);

    return <>{isLoading ? <span>Chargement</span> : children}</>;
};

export default AuthInitializer;
