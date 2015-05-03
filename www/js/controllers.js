angular.module('cue.controllers', [])

.controller('CueAppCtrl', function($scope, $state, $ionicModal, $timeout, MenuService, MenuData) {

  //Loading left menu data  
  $scope.leftMenu = MenuData.menu;

  var i, l = MenuData.menu.length;
  $scope.menuIndex = [];

  if(MenuData.menu.length > 0)
  {
    for(i=0; i<l; i++)
    {
      $scope.menuIndex[MenuData.menu[i].id] = MenuData.menu[i];
    }  
  }

})
.controller('PageCtrl', function($scope, $stateParams, $timeout, $ionicLoading, $ionicModal, $ionicSlideBoxDelegate, PageService) {
    var pageId = $stateParams.pageId, 
        urlAPI = '';

    $scope.$on('$stateChangeSuccess', function() {
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner><br/>Loading ...'
        });
    });

    function loadPage(url)
    {
      PageService.getPage(url).then(function(data){
        $scope.page = data.page;
        $ionicLoading.hide();
      });
    }   

    urlAPI = pageId ? $scope.menuIndex[pageId].url : $scope.leftMenu[0].url;  
    loadPage(urlAPI);

    // Image Modal : http://codepen.io/rdelafuente/pen/tJrik
    // Image Modal Slide Box : http://codepen.io/rdelafuente/pen/lteGc 
    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $ionicSlideBoxDelegate.slide(0);
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.showImage = function(imageSrc) {
      $scope.imageSrc = imageSrc;
      $scope.openModal();
    }

    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
  
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
  
    $scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    }
  
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
});
