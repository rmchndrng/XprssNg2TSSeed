"use strict";
var Student = (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (v) {
            this._Name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Age", {
        get: function () {
            return this._Age;
        },
        set: function (v) {
            this._Age = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Sex", {
        get: function () {
            return this._Sex;
        },
        set: function (v) {
            this._Sex = v;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9tb2RlbHMvc3R1ZGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQTRCQSxDQUFDO0lBekJHLHNCQUFXLHlCQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsQ0FBVTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDOzs7T0FIQTtJQU9ELHNCQUFXLHdCQUFHO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBQ0QsVUFBZSxDQUFVO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUhBO0lBT0Qsc0JBQVcsd0JBQUc7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFlLENBQVU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQzs7O09BSEE7SUFLTCxjQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSxlQUFPLFVBNEJuQixDQUFBIiwiZmlsZSI6ImNvbW1vbi9tb2RlbHMvc3R1ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdHVkZW50e1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF9OYW1lIDogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBOYW1lKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9OYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBOYW1lKHYgOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9OYW1lID0gdjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBwcml2YXRlIF9BZ2UgOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IEFnZSgpIDogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQWdlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBBZ2UodiA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0FnZSA9IHY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfU2V4IDogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBTZXgoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1NleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgU2V4KHYgOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9TZXggPSB2O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=
