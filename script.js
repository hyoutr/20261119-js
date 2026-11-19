/* クリックで変化 */
const btn = document.querySelector('#fade-button-js');
btn.addEventListener('click', () => {
  btn.style.backgroundColor = '#05b'; // クリック時の背景色
  setTimeout(() => {
    btn.style.backgroundColor = '#07f'; // 元の色に戻す
  }, 500); // 0.5秒後に色を戻す
});

/* ランダムに変化 */
const btnRandom = document.querySelector('#fade-button-random');
btnRandom.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  btnRandom.style.backgroundColor = randomColor;
});

/* カーソルの位置で色が変化 */
const btn = document.querySelector('#flow-button-js');
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100; // カーソル位置を計算
  btn.style.backgroundPosition = `${x}% 0`; // 背景の位置を動的に変更
});
btn.addEventListener('mouseleave', () => {
  btn.style.backgroundPosition = '0% 0'; // 元の位置に戻す
});

const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', () => {
  // .done クラスを追加（チェックマーク風に）
  btnChange.classList.add('done');
  // ボタンテキストを「完了！」に変更
  btnChange.textContent = '完了！';
});