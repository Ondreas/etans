// -------------------------------------------------------------
// Print button
// -------------------------------------------------------------
// @author: Max Boeck
// @source: https://github.com/maxboeck/resume/blob/44f317700e6f56216ea20924dc2c1e25dee3702a/src/assets/scripts/main.js#L19

const printButton = document.querySelector('.js-btn-print');
printButton.addEventListener('click', () => {
    window.print();
});
