document.querySelectorAll('[data-support-form]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var title = '[' + f.topic.value + '] ' + f.store.value;
    var body = '**Store:** ' + f.store.value + '\n**Topic:** ' + f.topic.value + '\n\n' + f.message.value;
    var url = 'https://github.com/Dopey59/paddock-theme-docs/issues/new?labels=support&title=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(body);
    window.open(url, '_blank', 'noopener');
    form.querySelector('[data-support-note]').textContent = 'Your request opened in a new tab: check it and click "Create" to send it.';
  });
});
