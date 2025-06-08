// --- カウンター機能の実装 ---

// HTML要素を取得
const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// カウントの初期値を設定
let count = 0;

// 表示を更新する関数
const updateDisplay = () => {
    countDisplay.textContent = count;
};

// 「増やす」ボタンのクリックイベント
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// 「減らす」ボタンのクリックイベント
decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// 「リセット」ボタンのクリックイベント
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});