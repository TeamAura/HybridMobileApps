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
            window.todos.push({
                title: this.get('title'),
                content: this.get('content')
            });

            document.getElementById('tb-title').value = '';
            document.getElementById('tb-content').value = '';

        }
    });
       
}(app.viewmodels));