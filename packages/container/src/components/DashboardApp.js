import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardApp";

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref) {
            mount(ref.current);
        }
    }, []);
    return <div ref={ref}></div>;
};
