angular.module('video-player')
  .component('chatFeed', {
    bindings: {
      messages: '<'
    },

    templateUrl: 'src/templates/chatFeed.html'
  });
