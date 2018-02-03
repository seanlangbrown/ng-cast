angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      selectVideo: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
