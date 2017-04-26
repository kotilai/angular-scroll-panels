var app = angular.module('demo', ['ngSanitize', 'angular-scroll-panels'])
.controller('DemoCtrl', ['$scope', function($scope) {

  function randomDate() {
    var start = new Date(2016, 8, 1);
    var end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  $scope.isOpen = false;

  $scope.open = function() {
    $scope.isOpen = true;
  }
  
  $scope.close = function() {
    $scope.isOpen = false;
  }

  $scope.notifications = [
    {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Suspendisse et finibus enim. Quisque sed leo id nisi mattis blandit. Proin pretium a ante ut euismod. Praesent cursus ornare urna quis placerat. Praesent convallis egestas eros a pharetra. Fusce eleifend maximus diam ac laoreet. Ut facilisis ac quam nec aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id libero ipsum. Quisque scelerisque, felis non dapibus laoreet, elit odio gravida odio, quis ornare arcu nisl vitae augue."
    }, {
      timestamp: randomDate(),
      text: "Fusce mattis volutpat est, vitae gravida diam scelerisque et. Phasellus nec urna quis arcu suscipit fringilla quis hendrerit lacus. Maecenas non augue turpis. Sed orci erat, aliquet non quam vel, fermentum ullamcorper ex. Duis facilisis aliquam ex in commodo. Vestibulum sit amet cursus nulla. Mauris varius id dui sit amet semper. Nam vel risus ultricies sem feugiat vestibulum. Nunc id congue enim, ut ultrices dolor."
    }, {
      timestamp: randomDate(),
      text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vitae magna lobortis, elementum mi non, dictum arcu. Maecenas nec orci in odio egestas rutrum. Phasellus ut sagittis mauris. Ut accumsan, purus nec fermentum suscipit, risus tortor consequat lorem, vitae posuere metus velit sed metus. Suspendisse sollicitudin vel urna vitae eleifend. Maecenas a malesuada nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis tellus lacus, sed congue nisi dictum sed. Donec a ipsum non risus laoreet sagittis in sit amet lacus. Proin fermentum eget est non cursus."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Suspendisse et finibus enim. Quisque sed leo id nisi mattis blandit. Proin pretium a ante ut euismod. Praesent cursus ornare urna quis placerat. Praesent convallis egestas eros a pharetra. Fusce eleifend maximus diam ac laoreet. Ut facilisis ac quam nec aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id libero ipsum. Quisque scelerisque, felis non dapibus laoreet, elit odio gravida odio, quis ornare arcu nisl vitae augue."
    }, {
      timestamp: randomDate(),
      text: "Fusce mattis volutpat est, vitae gravida diam scelerisque et. Phasellus nec urna quis arcu suscipit fringilla quis hendrerit lacus. Maecenas non augue turpis. Sed orci erat, aliquet non quam vel, fermentum ullamcorper ex. Duis facilisis aliquam ex in commodo. Vestibulum sit amet cursus nulla. Mauris varius id dui sit amet semper. Nam vel risus ultricies sem feugiat vestibulum. Nunc id congue enim, ut ultrices dolor."
    }, {
      timestamp: randomDate(),
      text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vitae magna lobortis, elementum mi non, dictum arcu. Maecenas nec orci in odio egestas rutrum. Phasellus ut sagittis mauris. Ut accumsan, purus nec fermentum suscipit, risus tortor consequat lorem, vitae posuere metus velit sed metus. Suspendisse sollicitudin vel urna vitae eleifend. Maecenas a malesuada nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis tellus lacus, sed congue nisi dictum sed. Donec a ipsum non risus laoreet sagittis in sit amet lacus. Proin fermentum eget est non cursus."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Suspendisse et finibus enim. Quisque sed leo id nisi mattis blandit. Proin pretium a ante ut euismod. Praesent cursus ornare urna quis placerat. Praesent convallis egestas eros a pharetra. Fusce eleifend maximus diam ac laoreet. Ut facilisis ac quam nec aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id libero ipsum. Quisque scelerisque, felis non dapibus laoreet, elit odio gravida odio, quis ornare arcu nisl vitae augue."
    }, {
      timestamp: randomDate(),
      text: "Fusce mattis volutpat est, vitae gravida diam scelerisque et. Phasellus nec urna quis arcu suscipit fringilla quis hendrerit lacus. Maecenas non augue turpis. Sed orci erat, aliquet non quam vel, fermentum ullamcorper ex. Duis facilisis aliquam ex in commodo. Vestibulum sit amet cursus nulla. Mauris varius id dui sit amet semper. Nam vel risus ultricies sem feugiat vestibulum. Nunc id congue enim, ut ultrices dolor."
    }, {
      timestamp: randomDate(),
      text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vitae magna lobortis, elementum mi non, dictum arcu. Maecenas nec orci in odio egestas rutrum. Phasellus ut sagittis mauris. Ut accumsan, purus nec fermentum suscipit, risus tortor consequat lorem, vitae posuere metus velit sed metus. Suspendisse sollicitudin vel urna vitae eleifend. Maecenas a malesuada nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis tellus lacus, sed congue nisi dictum sed. Donec a ipsum non risus laoreet sagittis in sit amet lacus. Proin fermentum eget est non cursus."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }, {
      timestamp: randomDate(),
      text: "Suspendisse et finibus enim. Quisque sed leo id nisi mattis blandit. Proin pretium a ante ut euismod. Praesent cursus ornare urna quis placerat. Praesent convallis egestas eros a pharetra. Fusce eleifend maximus diam ac laoreet. Ut facilisis ac quam nec aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id libero ipsum. Quisque scelerisque, felis non dapibus laoreet, elit odio gravida odio, quis ornare arcu nisl vitae augue."
    }, {
      timestamp: randomDate(),
      text: "Fusce mattis volutpat est, vitae gravida diam scelerisque et. Phasellus nec urna quis arcu suscipit fringilla quis hendrerit lacus. Maecenas non augue turpis. Sed orci erat, aliquet non quam vel, fermentum ullamcorper ex. Duis facilisis aliquam ex in commodo. Vestibulum sit amet cursus nulla. Mauris varius id dui sit amet semper. Nam vel risus ultricies sem feugiat vestibulum. Nunc id congue enim, ut ultrices dolor."
    }, {
      timestamp: randomDate(),
      text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vitae magna lobortis, elementum mi non, dictum arcu. Maecenas nec orci in odio egestas rutrum. Phasellus ut sagittis mauris. Ut accumsan, purus nec fermentum suscipit, risus tortor consequat lorem, vitae posuere metus velit sed metus. Suspendisse sollicitudin vel urna vitae eleifend. Maecenas a malesuada nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis tellus lacus, sed congue nisi dictum sed. Donec a ipsum non risus laoreet sagittis in sit amet lacus. Proin fermentum eget est non cursus."
    }, {
      timestamp: randomDate(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sapien in neque tristique imperdiet non eu justo. Quisque semper turpis sagittis mi interdum, et commodo massa viverra. Phasellus augue nunc, pulvinar sed rhoncus bibendum, tempor ac erat. Nam elementum libero ac turpis vehicula faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tempus metus, sit amet efficitur sapien. Nulla varius egestas lacus, sit amet fermentum nibh consectetur vitae. In non tincidunt odio. In hac habitasse platea dictumst."
    }, {
      timestamp: randomDate(),
      text: "Aliquam sit amet volutpat leo. In vitae efficitur nisi, malesuada bibendum diam. Duis mauris ex, varius in faucibus ut, tempus non purus. Vestibulum a ligula vulputate, auctor diam non, sollicitudin libero. Nulla pulvinar convallis quam. Nam hendrerit finibus lacus, in gravida purus bibendum in. Aliquam scelerisque mi tellus, eget sollicitudin purus accumsan ac. Curabitur et feugiat sem."
    }
  ];
}]);
