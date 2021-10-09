/**
 * 是否暗黑模式
 * @returns {boolean}
 */
function utilsIsDarkMode(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}