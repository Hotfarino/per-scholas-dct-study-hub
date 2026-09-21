let index = 0;
let flipped = false;
const el = id => document.getElementById(id);
const card = el('card');
function flip() {
 flipped = !flipped;
 card.classList.toggle('flipped', flipped);
 card.setAttribute('aria-pressed', String(flipped));
 card.setAttribute('aria-label', flipped ? 'Flip card to see question' : 'Flip card to reveal answer');
 el('front').setAttribute('aria-hidden', String(flipped));
 el('back').setAttribute('aria-hidden', String(!flipped));
}
function render() {
 const c = cards[index];
 // Reset without animation so the next answer never flashes into view.
 el('card').querySelector('.card-inner').style.transition = 'none';
 flipped = false;
 card.classList.remove('flipped');
 card.setAttribute('aria-pressed', 'false');
 card.setAttribute('aria-label', 'Flip card to reveal answer');
 el('front').setAttribute('aria-hidden','false');
 el('back').setAttribute('aria-hidden','true');
 el('counter').textContent = `CARD ${String(index+1).padStart(2,'0')} / ${cards.length}`;
 el('topic').textContent = c.title;
 el('question').textContent = c.question;
 el('answer').textContent = c.answer;
 el('hook').textContent = c.hook;
 el('art').src = `assets/${c.art}.jpg`;
 el('progress').max = cards.length;
 el('progress').value = index + 1;
 el('page-ref').textContent = `Lesson: PDF page ${c.pdf_page}`;
 el('prev').disabled = index === 0;
 el('next').textContent = index === cards.length-1 ? 'Start again ↻' : 'Next card →';
 void card.offsetWidth;
 card.querySelector('.card-inner').style.transition = '';
}
function next(){index = (index + 1) % cards.length;render();}
function previous(){if(index > 0){index--;render();}}
card.addEventListener('click',flip);
el('next').addEventListener('click',next);
el('prev').addEventListener('click',previous);
document.addEventListener('keydown',event=>{
 if(event.altKey || event.ctrlKey || event.metaKey) return;
 if(event.key === 'ArrowRight'){event.preventDefault();next();}
 if(event.key === 'ArrowLeft'){event.preventDefault();previous();}
 if((event.key === ' ' || event.key === 'Enter') && event.target === document.body){event.preventDefault();flip();}
});
render();
