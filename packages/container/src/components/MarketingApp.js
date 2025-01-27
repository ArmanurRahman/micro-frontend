import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

export default () => {
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
            });
            history.listen(onParentNavigate);
        }
    }, []);
    return <div ref={ref}></div>;
};
