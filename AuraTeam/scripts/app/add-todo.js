/* global kendo, window */

var app = app || {};
app.viewmodels = app.viewmodels || {};

(function (scope) {
    'use strict';
    scope.addTodo = kendo.observable({
        title: '',
<<<<<<< HEAD
        isUrgent: false,
        saveTodo: function () {
            //backend serves
            window.todos.push({
                title: this.get('title'),
                isUrgent: this.get('isUrgent')
            });

            app.mobileApp.navigate('views/todo.html');
=======
        content: '',
        saveTodo: function () {
            //backend serves
            console.log("test add todo");
            window.todos.push({
                title: this.get('title'),
                content: this.get('content')
            });

>>>>>>> 1c8068d9c073d764329b04e5f29ee80744fabb26
        }
    });
}(app.viewmodels));