if (navigator.share) {
  const btn = document.getElementById('card--share');
  btn.classList.remove('display-none');
  const a = btn.getElementsByTagName('a')[0];
  a.addEventListener('click', function (e) {
    const url = window.location.href;
    navigator.share({ url });
  });
}
