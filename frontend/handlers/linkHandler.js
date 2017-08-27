let clonePosts = [];
let cloneTimers = [];
let currentPost = null;

export default function linkHandler(postsArea, posts) {
    return function (event) {
        let targetLink = $(event.target);
        let targetPost = targetLink.parents('.post, .op-post');

        targetLink.mouseleave(function leave() {
            resetCloneTimers();
            currentPost = targetPost;
            targetLink.unbind('mouseleave', leave);
        });

        if (isActiveLink(targetPost, targetLink)) return false;
            hasActiveLinks(targetPost);
            setActiveLink(targetLink, postsArea, posts);
    };
};

function isActiveLink(targetPost, targetLink) {
    if (targetLink.hasClass('active-link')) {
        clearCloneTimers();
        for (let i = 0; i < cloneTimers.length; i++) {
            clearTimeout(cloneTimers[i]);
        }
        for (let i = clonePosts.length - 1; i > 0; i--) {
            if (clonePosts[i - 1].attr('id') === targetPost.attr('id')) {
                $('.active-link', clonePosts[i]).removeClass('active-link');
                return true;
            } else {
                clonePosts[i].remove();
                clonePosts.pop();
            }
        }
        $('.active-link', clonePosts[0]).removeClass('active-link');
        return true;
    }
    return false
}
function hasActiveLinks(targetPost) {
    if ($('.active-link', targetPost).length !== 0) {
        for (let i = 0; i < cloneTimers.length; i++) {
            clearTimeout(cloneTimers[i]);
        }
        for (let i = clonePosts.length - 1; i > -1; i--) {
            if (clonePosts[i].attr('id') === targetPost.attr('id')) {
                break;
            } else {
                clonePosts[i].remove();
                clonePosts.pop();
            }
        }
        $('.active-link', targetPost).removeClass('active-link');
    } else {
        if (!targetPost.hasClass('clone')) {
            $('.clone').remove();
            $('.active-link').removeClass('active-link');
            clonePosts = [];
        }
    }
}
function setActiveLink(targetLink, postsArea, posts) {
    clearCloneTimers();

    let id = +targetLink.text().slice(2);

    for (let i = 0; i < posts.length; i++) {
        if (id === posts[i].id) {
            let post = setClone(posts[i], targetLink, postsArea, posts);
            clonePosts.push(post);
            postsArea.append(post);

            post.mouseenter(function () {
                currentPost = post;
                resetCloneTimers();
            });

            post.mouseleave(function () {
                currentPost = null;
                resetCloneTimers();
            });
        }
    }
}

function setClone(origPost, targetLink, postsArea, posts) {
    let origPostElem = $(`#${origPost.id} .post, #${origPost.id} .op-post`);
    let post = origPostElem.clone(true, true);

    if (origPost.thread) {
        post.removeClass('op-post')
            .addClass('post');
    }
    $('.post-link', post).removeClass('active-link');
    $('.post-link', post).mouseenter(linkHandler(postsArea, posts));
    post.attr('id', `clone-${clonePosts.length + 1}-${origPost.id}`);
    post.addClass('clone');
    positClone(origPostElem, post, targetLink);

    targetLink.addClass('active-link');

    return post;
}
function positClone(origPost, post, targetLink) {
    let DOMPost = origPost.get(0);
    let box = targetLink.get(0).getBoundingClientRect();

    let linkCoords = {
        bottom: box.bottom + pageYOffset,
        top: box.top + pageYOffset,
        x: (box.left + box.right) / 2 + pageXOffset
    };
    let windowLinkCoords = {
        bottom: box.bottom,
        top: box.top,
        x: (box.left + box.right) / 2
    };

    let postSize = {
        width: DOMPost.offsetWidth,
        height: DOMPost.offsetHeight
    };
    let windowSize = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };

    if (windowLinkCoords.x < windowSize.width / 2) {
        post.css('left', linkCoords.x + 'px');
        if (windowLinkCoords.x + postSize.width > windowSize.width - 18) {
            let width = windowSize.width - 18 - windowLinkCoords.x;
            post.width(width);
        }
    } else {
        if (windowLinkCoords.x - postSize.width < 18) {
            post.css('left', (pageXOffset + 18) + 'px');
            let width = windowLinkCoords.x - 18;
            post.width(width);
        } else {
            post.css('left', (linkCoords.x - postSize.width) + 'px');
        }
    }

    if (windowLinkCoords.bottom + postSize.height < windowSize.height) {
        post.css('top', linkCoords.bottom + 'px');
    } else if (windowLinkCoords.top - postSize.height > 0) {;
        post.css('top', (linkCoords.top - postSize.height) + 'px');
    } else {
        post.css('top', linkCoords.bottom + 'px');
    }

    post.css('position', 'absolute');
}

function setCloneTimer() {
    cloneTimers.push(setTimeout(function () {
        if (currentPost) {
            for (let i = clonePosts.length - 1; i > -1; i--) {
                if (clonePosts[i].attr('id') === currentPost.attr('id')) {
                    break;
                } else {
                    clonePosts[i].remove();
                    clonePosts.pop();
                }
            }
            $('.active-link', currentPost).removeClass('active-link');
        } else {
            $('.clone').remove();
            $('.active-link').removeClass('active-link');
            clonePosts = [];
        }
    }, 1000));
}
function clearCloneTimers() {
    for (let i = 0; i < cloneTimers.length; i++) {
        clearTimeout(cloneTimers[i]);
    }
}
function resetCloneTimers() {
    clearCloneTimers();
    setCloneTimer();
}
