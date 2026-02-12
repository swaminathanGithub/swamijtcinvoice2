sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("swamijtcinvoice.controller.App", {
    onPress: function () {
      MessageToast.show("Hello from manual Fiori App!");
    }
  });
});
