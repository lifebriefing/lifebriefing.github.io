// 모바일 메뉴
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// 카카오톡 ID 복사
const copyBtn = document.getElementById('copyKakao');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('llh5053');
      copyBtn.textContent = '복사됨!';
      setTimeout(() => (copyBtn.textContent = 'ID 복사'), 2000);
    } catch (e) {
      copyBtn.textContent = 'llh5053';
    }
  });
}
