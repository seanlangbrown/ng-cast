angular.module('video-player')
  .service('youTube', function($http) {
  
    this.searchYoutube = function(query, callback) {
      var url = 'https://www.googleapis.com/youtube/v3/search';
    
      var params = {
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        videoEmbeddable: 'true',
        type: 'video',
        part: 'snippet'
      };
      
      $http.get(url, {
        params: params,
      }).then(function(data) {
        callback(data.data.items);
      });
    };
  });
