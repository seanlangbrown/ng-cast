angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },

    controller: function() { 
      console.log(this);
      this.video = [];
      console.log(this.video);
    },

    templateUrl: 'src/templates/videoPlayer.html'
  });
