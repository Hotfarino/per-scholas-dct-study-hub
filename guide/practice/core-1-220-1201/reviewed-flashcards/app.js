'use strict';
const {cards,sources}=window.STUDY_DATA;
const el=id=>document.getElementById(id);
let deck=cards.slice(),position=0,flipped=false;
const topic=el('topic');
for(const name of [...new Set(cards.map(c=>c.category))]){const o=document.createElement('option');o.value=name;o.textContent=name;topic.append(o)}
function render(){
 const c=deck[position];el('count').textContent=`${position+1} of ${deck.length}`;
 el('question').textContent=c.question;el('question').hidden=flipped;
 el('side').textContent=`${c.id} · ${flipped?'Answer':'Question'}`;
 el('back').hidden=!flipped;el('answer').textContent=c.answer;el('why').textContent=c.why;
 el('card').setAttribute('aria-pressed',String(flipped));el('card').setAttribute('aria-label',flipped?`${c.answer} ${c.why} Click to show question.`:`${c.question} Click to show answer.`);el('flipHint').textContent=flipped?'Click to see the question':'Click to flip';
 el('prev').disabled=position===0;el('next').disabled=position===deck.length-1;
 const ref=el('references');ref.replaceChildren();ref.hidden=!flipped;
 const note=document.createElement('p');note.textContent=`Core 1 objective ${c.objective} · Source questions: ${c.originals.join(', ')}`;ref.append(note);
 for(const key of c.sources){const s=sources[key],a=document.createElement('a');a.textContent=s.title;a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';const p=document.createElement('p');p.append(a);ref.append(p)}
}
function flip(){flipped=!flipped;render()}
function move(delta){const next=position+delta;if(next<0||next>=deck.length)return;position=next;flipped=false;render()}
el('card').addEventListener('click',flip);el('prev').addEventListener('click',()=>move(-1));el('next').addEventListener('click',()=>move(1));el('restart').addEventListener('click',()=>{position=0;flipped=false;render()});
topic.addEventListener('change',()=>{deck=topic.value==='All topics'?cards.slice():cards.filter(c=>c.category===topic.value);position=0;flipped=false;render()});
document.addEventListener('keydown',e=>{if(['SELECT','INPUT','TEXTAREA','A'].includes(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();move(1)}else if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}else if(e.code==='Space'&&e.target.tagName!=='BUTTON'){e.preventDefault();flip()}});
const requested=new URLSearchParams(window.location.search).get('card');
const initial=cards.findIndex(c=>c.id===requested);
if(initial>=0)position=initial;
render();
