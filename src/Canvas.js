// https://medium.com/web-dev-survey-from-kyoto/how-to-use-html-canvas-with-react-hooks-web-dev-survey-from-kyoto-e633812023b1

import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({draw, height, width, className = ""}) => {
    const canvas = React.useRef();

    React.useEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context);
    });

    return (
        <canvas ref={canvas} height={height} width={width} className={className} />
    );
};

Canvas.propTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default Canvas;