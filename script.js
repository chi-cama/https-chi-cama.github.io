// JavaScriptで動きをつけたい場合
console.log("ポートフォリオサイトへようこそ");

const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    // activeクラスの切り替え
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 全カードを再取得してフィルタリング
    const cards = document.querySelectorAll('.work-card');
    cards.forEach(card => {
 const categories = card.dataset.category.split(","); 

      if (selected === 'all' || categories.includes(selected)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.add('active');
      sec.classList.remove('hidden');
    } else {
      sec.classList.remove('active');
      sec.classList.add('hidden');
    }
  });
}

// 初期表示は home
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});
