import React, {useRef} from "react";
import useInViewport from "../hooks/useInViewport";


const noop = () => {};

const ViewPortScroller = (TargetComponent, options, config = { disconnectOnLeave: false }) => {
    const ForwardedRefComponent = React.forwardRef((props, ref) => {
        return <TargetComponent {...props} forwardedRef={ref} />;
    });

    const InViewport = ({ onEnterViewport = noop, onLeaveViewport = noop, ...restProps }) => {
        const node = useRef(null);
        const { inViewport, enterCount, leaveCount } = useInViewport(
            node,
            options,
            config,
            {
                onEnterViewport,
                onLeaveViewport
            }
        );

        return (
            <ForwardedRefComponent
                {...restProps}
                inViewport={inViewport}
                enterCount={enterCount}
                leaveCount={leaveCount}
                ref={node}
            />
        );
    };

    return InViewport;

}

export default ViewPortScroller;
