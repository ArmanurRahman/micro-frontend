import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        if (ref) {
            const { onParentNavigate } = mount(ref.current, {
                initialPath: history.location.pathname,
                onNavigate: ({ pathname: nextPathname }) => {
                    const { pathname } = history.location;
                    if (pathname !== nextPathname) {
                        history.push(nextPathname);
                    }
                },
                onSignIn,
            });
            history.listen(onParentNavigate);
        }
    }, []);
    return <div ref={ref}></div>;
};
