angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<'      
    },
    
    controller: function() {
      this.search = () => {
        console.log(this.query);
        this.result(this.query);
        this.query = '';
      };
    },
    
    
    templateUrl: 'src/templates/search.html'
  });
