"use strict";
var express = require('express');
var path = require('path');
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
    }
    ServerApp.prototype.setRoutes = function () {
        this._App.use(express.static('client'));
        this._App.get('/', this._RenderIndex);
    };
    ServerApp.prototype.startServer = function () {
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    };
    ServerApp.prototype._RenderHelloWorld = function (req, res) {
        res.send('Hello World!');
    };
    ServerApp.prototype._RenderIndex = function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client/index.html'));
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUNsQyxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3QjtJQUlJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sK0JBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHFDQUFpQixHQUF6QixVQUEwQixHQUFvQixFQUFFLEdBQXFCO1FBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGdDQUFZLEdBQXBCLFVBQXFCLEdBQW9CLEVBQUUsR0FBcUI7UUFDNUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxpQkFBUyxZQTBCckIsQ0FBQSIsImZpbGUiOiJzZXJ2ZXJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyQXBwIHtcclxuXHJcbiAgICBwcml2YXRlIF9BcHA6IGV4cHJlc3MuRXhwcmVzcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9BcHAgPSBleHByZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJvdXRlcygpIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX0FwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2NsaWVudCcpKTtcclxuICAgICAgICB0aGlzLl9BcHAuZ2V0KCcvJywgdGhpcy5fUmVuZGVySW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydFNlcnZlcigpIHtcclxuICAgICAgICB0aGlzLl9BcHAubGlzdGVuKDUwMDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDUwMDAhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfUmVuZGVySGVsbG9Xb3JsZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1JlbmRlckluZGV4KHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuICAgICAgICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2NsaWVudC9pbmRleC5odG1sJykpO1xyXG4gICAgfVxyXG59Il19
