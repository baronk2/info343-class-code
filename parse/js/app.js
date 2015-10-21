/*
    script for the index.html file
*/

Parse.initialize("RkzXDN3ubOqiT4OYPmDSgGsUZaMRFuCNcxnWgl0c", "45lRj0nuU4hXRri0X8pqXSsWzx4HMB449Cqc1gJw");

$(
    function() {
        'use strict';

        var Task = Parse.Object.extend('Task');
        var tasksQuery = new Parse.Query(Task);
        task.Query.ascending('createAt');

        var taskList = $('#tasks-list');


        var errorMessage = ('error-message');


        var tasks = [];

        function displayErrorMessage(err) {
            errorMessage.text(err.message);
            errorMessage.fadeIn();
        }

        function clearError() {
            errorMessage.hide();
        }

        function showSpinner() {
            $('.fa-spin').show();
        }

        function hideSpinner() {
            $('.fa-spin').hide();
        }

        function fetchTasks() {
            tasksQuery.find().then(onData, displayError).always(hideSpinner);
        }

        function onData(results) {
            tasks = results;
            renderTasks();
        }

        function renderTasks() {
            tasksList.empty();
            tasks.forEach(
                function (task) {
                    $(document.createElement('li'))
                        .text(task.title)
                        .appendTo(tasksList);
                }
            );
        }

        $('#new-task-form').submit(
            function (evt) {
                evt.preventDefault();

                var titleInput = $(this).find('[name="title"]');
                var title = titleInput.val();
                var task = new Task();
                task.set('title', title);
                task.save().then(fetchTasks, displayError).then (function() {
                    titleInput.val('');
                });

                return false;
            }
        );


        fetchTasks();

        window.setInterval(fetchTasks, 3000);
    }
);