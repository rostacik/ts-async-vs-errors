var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var someModule;
(function (someModule) {
    class someClass {
        callSomeAsync() {
            return __awaiter(this, void 0, Promise, function* () {
                let res = yield this.getConfirmAsync("yes/no");
                console.log(res);
            });
        }
        getConfirmAsync(message) {
            return __awaiter(this, void 0, Promise, function* () {
                var promise = new RSVP.Promise(function (resolve, reject) {
                    let res = confirm(message);
                    resolve(res);
                });
                return promise;
            });
        }
    }
    someModule.someClass = someClass;
})(someModule || (someModule = {}));
//# sourceMappingURL=file1.js.map