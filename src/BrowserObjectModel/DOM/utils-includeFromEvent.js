function utilsIncludeFromEvent(event, target) {
    return event.composedPath && event.composedPath().indexOf(target) > -1;
}