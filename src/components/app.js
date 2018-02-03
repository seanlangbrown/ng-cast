angular.module('video-player')

  .component('app', {

    controller: function appController() {
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      this.videos.forEach(function(video) {
        video.url = 'https://www.youtube.com/embed/' + video.id.videoId;
      });
    },

    templateUrl: 'src/templates/app.html'
  });