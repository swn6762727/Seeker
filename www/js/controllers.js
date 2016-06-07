angular.module('app.controllers', [])


    .controller('page2Ctrl', function ($scope) {
        // function Discover_refresh() {
        //     var url = "http://138.128.198.110:3000/list/0/discory.json";
        //     console.log(url);
        //     $.ajax(
        //         {
        //             url: url,
        //             type: "GET",
        //             dataType: 'JSON',
        //             success: function (msg) {
        //                 console.log(msg.error);
        //                 var lenth=msg.length;
        //                 for (var item in msg){
        //                     var interest_list_url = "http://138.128.198.110:3000/list/"+item.listid+"/"+item.itemid;
        //                     var interest_list_jpg = interest_list_url+".jpg";
        //                     var interest_list_json_url = interest_list_url+".json";
        //
        //                     $.ajax(
        //                         {
        //                             url: interest_list_json_url,
        //                             type: "GET",
        //                             dataType: 'JSON',
        //                             success: function (msg) {
        //
        //                             }
        //                         }
        //                     );
        //                     var element = document.getElementById("discover_content");
        //                     var string = '<div class="list card" style="margin: 5px" > <div class="item item-avatar" style="padding-bottom: 0px;border-width: 0px"> <img src="interest_list_jpg" > <h2>趣客 欢乐颂</h2> <p>昨天 12：55</p> </div> <div style="padding-left: 10px; "> <h4 style="margin: 0px">interest_list_json.title</h4> </div> <div class="item item-body" style="padding-left: 0px;padding-right: 0px;padding-top: 5px;padding-bottom: 0px; border-width: 0px" style="border: 0px" style="position: relative" > <img class="full-image" src="interest_list_jpg"> </div> <div class="item tabs tabs-secondary tabs-icon-left" style="height: 32px"> <a class="tab-item" href="#"> <i class="icon ion-thumbsup"></i>16 </a> <a class="tab-item" href="#"> <i class="icon ion-chatbubble"></i>92 </a> <a class="tab-item" href="#"> <i class="icon ion-thumbsdown"></i>11 </a> </div> </div>'
        //                 }
        //             }
        //         }
        //     );
        //
        // }
    })

    .controller('page3Ctrl', function ($scope) {

    })

    .controller('page4Ctrl', function ($scope) {
        $scope.flag={showDelete:false,showReorder:false};
        $scope.items=["Chinese","English","German","Italian","Janapese","Sweden","Koeran","Russian","French","LaLa"];
        $scope.delete_item=function(item){
            var idx = $scope.items.indexOf(item);
            $scope.items.splice(idx,1);
        };
        $scope.move_item = function(item, fromIndex, toIndex) {

            console.log(fromIndex);
            console.log(toIndex);

            console.log(item);

            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
            console.log(item);
        };
        $scope.add_item = function () {
            $scope.items.push("新建兴趣单"+($scope.items.length-8).toString());
        }
    })

    .controller('page7Ctrl', function ($scope) {

    })

    .controller('page8Ctrl', function ($scope) {

    })

    .controller('page9Ctrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('signupCtrl', function ($scope) {

    })
    .controller('interest_list_ctrl',function ($scope,$ionicHistory) {
        $scope.Back_Click=function () {
            $ionicHistory.goBack();
        }
    })

;

angular.module("myApp",["ionic"])
    .controller("myCtrl",function($scope){

    });


