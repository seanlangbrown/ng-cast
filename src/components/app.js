angular.module('video-player')

  .component('app', {

    controller: function appController() {
      console.log(window);
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      debugger;
      console.log(this.videos[0]);
      console.log(this.video);
    },

    templateUrl: 'src/templates/app.html'
  });
