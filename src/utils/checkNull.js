function isEmpty(value) {
    // null, undefined, "", 0, NaN, false에 대해서 true를 리턴
    if (typeof value !== 'undefined' && value) {
        return false;
    };
    return true;
}