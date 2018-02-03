angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<'      
    },
    
    controller: function() {
      this.search = (event) => {
        this.result(this.query);
        if (!event || event.key === 'Enter') {
          this.query = '';
        }
      };
    },
    
    
    templateUrl: 'src/templates/search.html'
  });
