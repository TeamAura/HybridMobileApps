/* global kendo, window */

var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.addTodo = kendo.observable({
        title: '',
        content: '',
        saveTodo: function () {
            //backend serves
            console.log("test add todo");
            window.todos.push({
                title: this.get('title'),
                content: this.get('content')
            });

        }
    });
}(app.viewmodels));