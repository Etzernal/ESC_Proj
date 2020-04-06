var sample = angular.module("sample", ["sdk"]);

sample.controller("sampleController", [
  "$rootScope",
  "rainbowSDK",
  function($rootScope, sdk) {
    "use strict";

    /*********************************************************/
    /**                INITIALIZATION STUFF                 **/
    /*********************************************************/

    console.log("[DEMO] :: Rainbow IM Application");

    var appId = "fa74fa10642111ea9a6dcf004cf8c14e";
    var appSecret = "yyZvXDz80ULb3puX8bATjbyqOMngYMoTIfVefJwBGEgMjyu8zKCq3pHN0n1egfEr";

    var onReady = function onReady() {
      console.log("[DEMO] :: Rainbow SDK is ready!");
    };

    var onLoaded = function onLoaded() {
      console.log("[DEMO] :: Rainbow SDK has been loaded!");

      sdk
        .initialize(appId, appSecret)
        .then(function() {
          console.log("[DEMO] :: Rainbow SDK is initialized!");
        })
        .catch(function() {
          console.log("[DEMO] :: Something went wrong with the SDK...");
        });
    };

    document.addEventListener(sdk.RAINBOW_ONREADY, onReady);

    document.addEventListener(sdk.RAINBOW_ONLOADED, onLoaded);

    sdk.load();

    return true;
  }
]);
