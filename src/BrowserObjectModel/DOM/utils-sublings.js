function sublings(target){
    return Array.from(target.parentElement.children).filter((item) => item !== target);
}