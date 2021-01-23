$(function () { 
  const $todos = $('.js-todo');
  const $statusAll = $('.js-status-content');

  let currentContent = true;

  $statusAll.each((i, todo) => {
    $(todo).on('dragstart', hanldDragStart);
    $(todo).on('dragend', hanldDragEnd);
  });

  $todos.each((i, item)=> {
    
    $(item).on('dragenter', hanldDragEnter);
    $(item).on('dragleave', hanldDragLeave);
    $(item).on('dragover', hanldDragover);
    $(item).on('drop', hanldDrop);

  });

  function hanldDragStart() {
    currentContent = this;
    $(this).addClass('do-drag');
  }

  function hanldDragover(e) {
    e.preventDefault();
    
    $(this).css({
      'padding-bottom' : '50px'
    });
  }

  
  function hanldDragEnter() {
    $(this).css({
      'border' : '1px solid #fafafa'
    });
  }

  function hanldDragLeave() {
    $(this).css({
      'border' : 'none'
    });
  }

  function hanldDrop() {
    $(this).append(currentContent);

  }

  function hanldDragEnd() {
    currentContent = null;
    $(this).removeClass('do-drag');

    $(this).css({
      'padding-bottom' : '0px'
    });
  }

});