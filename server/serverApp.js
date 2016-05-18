"use strict";
var express = require('express');
var path = require('path');
var student_1 = require('./common/models/student');
var ServerApp = (function () {
    function ServerApp() {
        this._App = express();
        var testStudent = new student_1.Student();
        testStudent.Age = 29;
        testStudent.Name = "Ram";
        testStudent.Sex = "M";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlckFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxPQUFPLFdBQU0sU0FDekIsQ0FBQyxDQURpQztBQUNsQyxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUU3Qix3QkFBc0IseUJBRXRCLENBQUMsQ0FGOEM7QUFFL0M7SUFJSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDckIsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDekIsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxxQ0FBaUIsR0FBekIsVUFBMEIsR0FBb0IsRUFBRSxHQUFxQjtRQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxnQ0FBWSxHQUFwQixVQUFxQixHQUFvQixFQUFFLEdBQXFCO1FBQzVELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDTCxnQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksaUJBQVMsWUE4QnJCLENBQUEiLCJmaWxlIjoic2VydmVyQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuaW1wb3J0IHtTdHVkZW50fSBmcm9tICcuL2NvbW1vbi9tb2RlbHMvc3R1ZGVudCdcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJBcHAge1xyXG5cclxuICAgIHByaXZhdGUgX0FwcDogZXhwcmVzcy5FeHByZXNzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX0FwcCA9IGV4cHJlc3MoKTtcclxuICAgICAgICB2YXIgdGVzdFN0dWRlbnQgPSBuZXcgU3R1ZGVudCgpO1xyXG4gICAgICAgIHRlc3RTdHVkZW50LkFnZSA9IDI5O1xyXG4gICAgICAgIHRlc3RTdHVkZW50Lk5hbWUgPSBcIlJhbVwiO1xyXG4gICAgICAgIHRlc3RTdHVkZW50LlNleCA9IFwiTVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSb3V0ZXMoKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9BcHAudXNlKGV4cHJlc3Muc3RhdGljKCdjbGllbnQnKSk7XHJcbiAgICAgICAgdGhpcy5fQXBwLmdldCgnLycsIHRoaXMuX1JlbmRlckluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRTZXJ2ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fQXBwLmxpc3Rlbig1MDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFeGFtcGxlIGFwcCBsaXN0ZW5pbmcgb24gcG9ydCA1MDAwIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1JlbmRlckhlbGxvV29ybGQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIHJlcy5zZW5kKCdIZWxsbyBXb3JsZCEnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9SZW5kZXJJbmRleChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdjbGllbnQvaW5kZXguaHRtbCcpKTtcclxuICAgIH1cclxufSJdfQ==
