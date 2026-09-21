'use strict';
const {cards,sources}=window.STUDY_DATA;
const el=id=>document.getElementById(id);
const cardMap=new Map(cards.map(c=>[c.id,c]));
let deck=cards.slice(),position=0,flipped=false,selected=[],submitted=false,peeked=false,history=[],ready=false,saving=false,pendingAttempt=null;
const topic=el('topic'),mode=el('mode');
const optionOrders=new Map(cards.map(c=>[c.id,c.options.slice()]));
function shuffleAnswers(){
 for(const c of cards){
  const before=optionOrders.get(c.id),order=before.slice();
  for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}
  if(order.length>1&&order.every((o,i)=>o.label===before[i].label))order.push(order.shift());
  optionOrders.set(c.id,order);
 }
}
const displayLabel=(c,key)=>String.fromCharCode(65+optionOrders.get(c.id).findIndex(o=>o.label===key));
const displayAnswers=(c,keys)=>optionOrders.get(c.id).filter(o=>keys.includes(o.label)).map(o=>`${displayLabel(c,o.label)}. ${o.text}`).join('; ');

const latest=()=>{const m=new Map();for(const a of history)m.set(a.cardId,a);return m};
const isRight=(c,answer)=>answer.length===c.correct.length&&c.correct.every(x=>answer.includes(x));
const choiceText=(c,letters)=>letters.map(k=>{const o=c.options.find(o=>o.label===k);return o?o.text:k}).join('; ');
function status(message){el('storageStatus').textContent=message}
for(const name of [...new Set(cards.map(c=>c.category))]){const o=document.createElement('option');o.value=name;o.textContent=name;topic.append(o)}
function resetCard(){flipped=false;selected=[];submitted=false;peeked=false;pendingAttempt=null}
function applyFilter(){const m=latest();deck=cards.filter(c=>(topic.value==='All topics'||c.category===topic.value)&&(mode.value==='all'||(mode.value==='missed'?m.get(c.id)?.correct===false:!m.has(c.id))));position=0;resetCard();render()}
function node(tag,content){const n=document.createElement(tag);if(content!==undefined)n.textContent=content;return n}
function render(){
 topic.disabled=saving;mode.disabled=saving;el('restart').disabled=saving;el('confirmReset').disabled=saving;
 const c=deck[position];el('empty').hidden=!!c;el('card').hidden=!c;el('answerControls').hidden=!c;
 el('count').textContent=c?`${position+1} of ${deck.length}`:'0 questions';
 el('prev').disabled=!c||position===0||saving;el('next').disabled=!c||position===deck.length-1||saving;
 if(!c){el('references').hidden=true;renderProgress();return}
 el('question').textContent=c.question;el('question').hidden=flipped;
 el('side').textContent=`${c.id} · ${c.category} · ${flipped?'Answer':'Question'}`;
 el('objective').textContent=`Related Core 1 objectives: ${c.objective}`;
 const choices=el('choices');choices.replaceChildren();choices.hidden=flipped;
 el('selection').hidden=flipped;el('selection').textContent=`Select ${c.correct.length===1?'ONE':c.correct.length===2?'TWO':c.correct.length===3?'THREE':c.correct.length} answer${c.correct.length===1?'':'s'}.`;
 for(const option of optionOrders.get(c.id)){
  const label=node('label');label.className='choice';const input=node('input');input.type=c.correct.length===1?'radio':'checkbox';input.name='answer';input.value=option.label;input.checked=selected.includes(option.label);input.disabled=submitted||peeked||saving;input.setAttribute('aria-label',`${displayLabel(c,option.label)}. ${option.text}`);
  input.addEventListener('change',()=>{if(input.type==='radio')selected=[option.label];else selected=input.checked?[...selected.filter(x=>x!==option.label),option.label]:selected.filter(x=>x!==option.label);render();[...choices.querySelectorAll('input')].find(x=>x.value===option.label)?.focus()});
  label.append(input,node('span',`${displayLabel(c,option.label)}. ${option.text}`));choices.append(label);
 }
 el('back').hidden=!flipped;el('answer').textContent=displayAnswers(c,c.correct);el('why').textContent=c.why;
 el('flip').textContent=flipped?'Show question':submitted?'Show answer':'Reveal without scoring';
 el('flip').disabled=saving;el('submit').hidden=flipped||submitted||peeked;el('submit').disabled=!ready||saving||selected.length!==c.correct.length;
 el('submit').textContent=saving?'Saving…':'Check answer';el('retry').hidden=!submitted&&!peeked;el('retry').disabled=saving;
 el('result').textContent=submitted?(isRight(c,selected)?'Correct.':'Not quite — review the explanation.')+` Your answer: ${displayAnswers(c,selected)}`:peeked?'Answer revealed without scoring. Choose Try again for a scored attempt.':'';
 const last=latest().get(c.id);el('previousResult').textContent=last?`Last scored attempt: ${last.correct?'correct':'incorrect'} · ${new Date(last.at).toLocaleString()}`:'Not yet scored';
 const ref=el('references');ref.replaceChildren();ref.hidden=!flipped;
 ref.append(node('p',`Related Core 1 objectives: ${c.objective} · Source questions: ${c.originals.join(', ')}`));
 for(const key of c.sources){const s=sources[key],a=node('a',s.title);a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';const p=node('p');p.append(a);ref.append(p)}
 renderProgress();
}
function renderProgress(){
 const m=latest(),done=[...m.values()],wrong=done.filter(a=>!a.correct),right=done.length-wrong.length;
 el('summary').textContent=`${done.length} / ${cards.length} answered · ${right} correct · ${wrong.length} need review · ${done.length?Math.round(right/done.length*100)+'%':'—'} latest accuracy`;
 el('attemptCount').textContent=`${history.length} scored attempts. Counts above use your latest scored answer for each question. Revealing or skipping a card does not count as an answer.`;
 const rows=el('sectionRows');rows.replaceChildren();
 for(const category of [...new Set(cards.map(c=>c.category))]){
  const group=cards.filter(c=>c.category===category),attempted=group.filter(c=>m.has(c.id)),missed=attempted.filter(c=>!m.get(c.id).correct);const tr=node('tr');
  [category,`${attempted.length} / ${group.length}`,String(missed.length),attempted.length?Math.round((attempted.length-missed.length)/attempted.length*100)+'%':'—'].forEach(t=>tr.append(node('td',t)));rows.append(tr);
 }
 el('reviewMissed').disabled=!ready||!wrong.length||saving;
 const list=el('missedList');list.replaceChildren();
 const missedCards=cards.filter(c=>m.get(c.id)?.correct===false&&(topic.value==='All topics'||c.category===topic.value));
 el('missedCount').textContent=missedCards.length?`${missedCards.length} questions to review in the selected topic.`:'No missed questions in the selected topic.';
 for(const c of missedCards){const a=m.get(c.id),li=node('li'),button=node('button',`${c.id} · ${c.category} — ${c.question}`);button.type='button';button.disabled=saving;button.addEventListener('click',()=>{topic.value='All topics';mode.value='all';deck=cards.slice();position=cards.findIndex(x=>x.id===c.id);resetCard();render();el('card').scrollIntoView({behavior:'smooth',block:'start'});el('flip').focus()});li.append(button,node('p',`Your answer: ${choiceText(c,a.selected)}`),node('p',`Correct: ${choiceText(c,c.correct)}`),node('p',`Objectives ${c.objective} · ${new Date(a.at).toLocaleString()}`));list.append(li)}
 el('export').disabled=!ready||!history.length;el('clear').disabled=!ready||!history.length||saving;
}
function flip(){if(saving||!deck.length)return;if(!flipped&&!submitted)peeked=true;flipped=!flipped;render()}
function move(delta){const next=position+delta;if(saving||next<0||next>=deck.length)return;position=next;resetCard();render()}
async function checkAnswer(){
 const c=deck[position];if(!ready||saving||!c||submitted||peeked||selected.length!==c.correct.length)return;
 const signature=[...selected].sort().join('');
 if(!pendingAttempt||pendingAttempt.cardId!==c.id||pendingAttempt.selected.join('')!==signature)pendingAttempt={id:crypto.randomUUID(),cardId:c.id,selected:[...selected].sort(),correct:isRight(c,selected),at:new Date().toISOString()};
 const attempt=pendingAttempt;saving=true;render();
 try{history=await window.ProgressStore.add(attempt);submitted=true;flipped=true;status(window.ProgressStore.description)}catch(e){status('Could not save your answer. Your selection is still here; try Check answer again.')}finally{saving=false;render()}
}
el('submit').addEventListener('click',checkAnswer);el('flip').addEventListener('click',flip);
el('card').addEventListener('click',e=>{if(!e.target.closest('label,input,button,a'))flip()});
el('retry').addEventListener('click',()=>{resetCard();render()});
el('prev').addEventListener('click',()=>move(-1));el('next').addEventListener('click',()=>move(1));
el('restart').addEventListener('click',()=>{if(saving)return;shuffleAnswers();applyFilter();status('Answer choices shuffled. Saved results kept. '+window.ProgressStore.description)});
topic.addEventListener('change',applyFilter);mode.addEventListener('change',applyFilter);
el('reviewMissed').addEventListener('click',()=>{mode.value='missed';applyFilter();el('card').scrollIntoView({behavior:'smooth',block:'start'})});
el('clear').addEventListener('click',()=>{el('resetConfirm').hidden=false});el('cancelReset').addEventListener('click',()=>{el('resetConfirm').hidden=true});
el('confirmReset').addEventListener('click',async()=>{if(saving)return;saving=true;render();try{await window.ProgressStore.clear();history=[];el('resetConfirm').hidden=true;mode.value='all';applyFilter();status(window.ProgressStore.description)}catch{status('Could not reset progress. Your results have been kept.')}finally{saving=false;render()}});
el('export').addEventListener('click',()=>{
 const rows=[['question_id','section','objectives','question','your_answer','correct_answer','result','attempt_time']];
 for(const a of history){const c=cardMap.get(a.cardId);if(c)rows.push([c.id,c.category,c.objective,c.question,choiceText(c,a.selected),choiceText(c,c.correct),a.correct?'correct':'incorrect',a.at])}
 const csv=rows.map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n');
 const url=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'})),a=node('a');a.href=url;a.download='core-1-practice-results.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
document.addEventListener('keydown',e=>{if(['SELECT','INPUT','TEXTAREA','A','BUTTON'].includes(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();move(1)}else if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}else if(e.code==='Space'){e.preventDefault();flip()}});
async function init(){
 try{history=await window.ProgressStore.load();ready=true;status(window.ProgressStore.description)}catch{status('Saved progress could not be loaded. Reload to retry; you can still read and flip cards. Scoring is disabled to protect existing results.')}
 const requested=new URLSearchParams(window.location.search).get('card'),initial=cards.findIndex(c=>c.id===requested);if(initial>=0)position=initial;render();
}
render();window.progressReady=init();
