angular.module('video-player')

  .component('app', {

    controller: function appController(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.videos.forEach(function(video) {
        video.url = 'https://www.youtube.com/embed/' + video.id.videoId;
      });

      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.results = (videos) => {
        this.videos = videos;
        this.videos.forEach(function(video) {
          video.url = 'https://www.youtube.com/embed/' + video.id.videoId;
        });
        this.currentVideo = videos[0];
      };

      this.searchResults = (query) => {
        console.log(query);
        youTube.searchYoutube(query, this.results);
      };
    },

    templateUrl: 'src/templates/app.html'
  });