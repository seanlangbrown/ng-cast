angular.module('video-player')

  .component('chat', {
    

    controller: function($http) {
      this.url = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/';

      this.$onInit = function() {
        this.room = 'fhfIpUgxgm8';
        this.getMessages.call(this, this.getHandle);
      },
      
      this.postHandle = (result) => {
        console.log('POST success');
        this.getMessages.call(this, this.getHandle);
      },

      this.makeMessage = function(text) {
        return {text: text, username: 'ng-Cast_user', roomname: this.room};
      },
      
      this.sendMessage = function(message, callback) {
        console.log(message);

        var params = {
          data: JSON.stringify(message),
          datatype: 'json',
          contentType: 'application/json',          
        };
      
        $http({
          url: this.url + 'messages',
          method: 'POST',
          data: message,
          headers: {
            'X-Parse-Application-Id': '2745f6eedad1770c6ebaf03f8a97cf0cc2f66706',
            'X-Parse-REST-API-Key': '4f44a6835e581124936858b658e8ea99e278d371'
          }
        }).then(function(result) {
          callback(result);
        });

      },

       
      this.keyUpHandler = function(e) {
        //console.log('keypress');
        if (e.key === 'Enter') {
          this.sendHandler();
          //console.log('enter');
        }
      };

      this.sendHandler = function() {
        //console.log('sendhandler');
        if (this.messageBar !== '') {
          console.log('sending message:');
          var message = this.makeMessage(this.messageBar);
          console.log(message);
          this.sendMessage(message, this.postHandle);
          this.messageBar = '';
        }
      },



      this.getHandle = (messages) => {
        this.messages = messages;
      };

      this.getMessages = function(callback, room) {
        console.log(this.room);
        // this.room = '';
        var room = this.room !== '' ? '?where={"roomname":"' + this.room + '"}' : '';
        var params = {
          order: '-createdAt'
        };
      
        $http({
          url: this.url + 'messages' + room,
          method: 'GET',
          params: params,
          headers: {
            'X-Parse-Application-Id': '2745f6eedad1770c6ebaf03f8a97cf0cc2f66706',
            'X-Parse-REST-API-Key': '4f44a6835e581124936858b658e8ea99e278d371'
          }
        }).then(function(data) {
          callback(data.data.results);
        });
      };
      setInterval(function() { this.getMessages(this.getHandle); }.bind(this), 5000);
    },

    bindings: {
      room: '<'
    },    


    templateUrl: '/src/templates/chat.html'

  });