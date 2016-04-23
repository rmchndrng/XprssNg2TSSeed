"use strict";
var express = require('express');
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
    }
    ServerApp.prototype.setRoutes = function () {
        this._App.get('/', this._RenderHelloWorld);
    };
    ServerApp.prototype.startServer = function () {
        this._App.listen(5000, function () {
            console.log('Example app listening on port 5000!');
        });
    };
    ServerApp.prototype._RenderHelloWorld = function (req, res) {
        res.send('Hello World!');
    };
    return ServerApp;
}());
exports.ServerApp = ServerApp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FFekIsQ0FBQyxDQUZpQztBQUVsQztJQUlJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNkJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLCtCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQ0FBaUIsR0FBekIsVUFBMEIsR0FBb0IsRUFBRSxHQUFxQjtRQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCxnQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksaUJBQVMsWUFxQnJCLENBQUEiLCJmaWxlIjoic2VydmVyQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlckFwcCB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX0FwcDogZXhwcmVzcy5FeHByZXNzO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9BcHAgPSBleHByZXNzKCk7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldFJvdXRlcygpIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX0FwcC5nZXQoJy8nLCB0aGlzLl9SZW5kZXJIZWxsb1dvcmxkKTsgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2VydmVyKCkge1xyXG4gICAgICAgIHRoaXMuX0FwcC5saXN0ZW4oNTAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgNTAwMCEnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9SZW5kZXJIZWxsb1dvcmxkKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuICAgICAgICByZXMuc2VuZCgnSGVsbG8gV29ybGQhJyk7XHJcbiAgICB9XHJcbn0iXX0=
