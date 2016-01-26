/**
 * Utilities for popping/pushing items onto the nav stack
 */

exports._pop = function _pop(route, navigator) {
  if (route.index > 0) {
    navigator.pop();
  }
}

exports._push = function _push(name, route, navigator, sceneConfig) {
  var nextIndex = route.index + 1;
  navigator.push({
    name: name,
    index: nextIndex,
    sceneConfig: sceneConfig ? sceneConfig : null
  });
}
