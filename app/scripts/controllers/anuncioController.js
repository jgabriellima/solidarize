'use strict';

/**
 * @ngdoc function
 * @name Solidarize.controller:loginController
 * @description
 * # loginController
 */
angular.module('Solidarize')
    .controller('anuncioController', function($scope, $ionicSlideBoxDelegate, $ionicModal, $cordovaSocialSharing) {

        $scope.template = '<div class="modal image-modal transparent"ng-click="closeModal()"><ion-slide-box on-slide-changed="slideChanged(index)"show-pager="false"><ion-slide ng-repeat="oImage in aImages"><img ng-src="{{oImage.src}}" class="fullscreen-image" /><p class="info">{{oImage.msg}}</p></ion-slide></ion-slide-box></div>';
        $scope.share_msg = "Encontrei esse item no Solidarize e pode ser do seu interesse";
        $scope.share_subject = "Solidarize - Mudando a vida das pessoas";
        $scope.share_link = "http://solidarizeapp.com";
        $scope.share = function() {
            $cordovaSocialSharing
                .share($scope.share_msg, $scope.share_subject, "", $scope.share_link)
                .then(function(result) {
                    console.log(result);
                    alert("Compartilhado com sucesso!")
                }, function(err) {
                    console.log(err);
                    alert("ocorreu um erro ao compartilhar!")
                });
        };
        /*
        slider's
        */
        $scope.aImages = [{
            'src': 'images/sample/1.jpg',
            'msg': ''
        }, {
            'src': 'images/sample/2.jpg',
            'msg': ''
        }, {
            'src': 'images/sample/3.png',
            'msg': ''
        }];

        $scope.modal = $ionicModal.fromTemplate($scope.template, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        $scope.openModal = function() {
            $ionicSlideBoxDelegate.slide(0);
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        // Cleanup the modal when we're done with it!
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
