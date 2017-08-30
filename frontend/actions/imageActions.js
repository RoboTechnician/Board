export const displayImage = (link, width, height, left, top) => {
    return {
        type: 'DISPLAY_IMAGE',
        link,
        width,
        height,
        left,
        top
    }
};

export const hideImage = () => {
    return {
        type: 'HIDE_IMAGE'
    }
};

export const moveImage = (left, top) => {
    return {
        type: 'MOVE_IMAGE',
        left,
        top
    }
};

export const resizeImage = (width, height) => {
    return {
        type: 'RESIZE_IMAGE',
        width,
        height
    }
};

export const renderImage = (width, height, left, top) => {
    return {
        type: 'RENDER_IMAGE',
        width,
        height,
        left,
        top
    }
};