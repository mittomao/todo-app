$(function () {
  $(".js-todo-body").dad({
    placeholderTarget: ".js-todo__item"
  });
});

// Add Status 

$(function () {
  const $btnAddStatus = $('.js-add-status');
  const $btnAddContent = $('.js-add-content');
  const $todoRow = $('.js-todo-row');
  const $todoBody = $('.js-todo-body');

  $btnAddStatus.on('click', function (e) {
    e.preventDefault();
    let content = `<div class="todo__col">
                      <div class="todo__status"></div>
                  </div>`;
    hanldAddContent($(this).parent(), content);
  });

  $btnAddContent.on('click', function (e) {
    e.preventDefault();
    let content = `<div>
                    <div class="todo__item js-todo__item">
                      Content 6
                    </div>
                  </div>`;
    hanldAddContent($todoBody, content, false);
  });

  function hanldAddContent($curent, content, option=true) {
    if(option)
    {
      $curent.before(content);
    }
    else {
      $curent.append(content);
    }
  }
});