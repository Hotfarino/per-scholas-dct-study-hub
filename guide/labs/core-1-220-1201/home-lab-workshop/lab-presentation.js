// Presentation only. Reuse existing controls and handlers; never change lab state.
export function setupPresentation(){
 const $=id=>document.getElementById(id),world=$('worldLab');if(!world)return;
 document.body.classList.add('lab-focus-ui');
 function disclosure(id,title){const d=document.createElement('details');d.id=id;d.className='lab-disclosure';const summary=document.createElement('summary');summary.textContent=title;d.append(summary);return d;}
 const options=document.querySelector('.learning-options'),lessonOptions=disclosure('lessonOptions','Lesson options');
 const optionBody=document.createElement('div');optionBody.className='lesson-option-content';lessonOptions.append(optionBody);for(const child of [...options.children])if(child.id!=='learningTools')optionBody.append(child);options.append(lessonOptions);
 world.querySelector('.world-heading h2').textContent='Workbench';world.querySelector('.world-eyebrow').textContent='';
 const navigation=world.querySelector('.world-navigation'),reset=$('worldReset'),arrangeButton=$('worldArrange'),zoomReadout=$('worldZoomReadout');
 const camera=world.querySelector('.world-camera'),moreViews=disclosure('worldViewOptions','View controls'),viewsBody=document.createElement('div');viewsBody.className='world-view-options';moreViews.append(viewsBody);
 const alternate=document.createElement('div');alternate.className='world-alt-views';viewsBody.append(alternate);for(const name of ['top','rear'])alternate.append(camera.querySelector('[data-world-view="'+name+'"]'));
 viewsBody.append(navigation);const arrange=document.createElement('div');arrange.className='world-view-actions';arrange.append(reset,arrangeButton);viewsBody.append(arrange);camera.append(zoomReadout,moreViews);
 const controls=world.querySelector('.world-device-controls'),deviceMore=disclosure('worldDeviceOptions','More device actions'),deviceBody=document.createElement('div');deviceBody.className='world-device-options';deviceMore.append(deviceBody);deviceBody.append($('worldFocus'),$('worldExplode'),$('worldReturn'));controls.append(deviceMore);camera.after(controls);
 const wiring=disclosure('worldWiring','Connections & cables'),consolePanel=world.querySelector('.world-console');wiring.append(world.querySelector('.world-cabling'),$('worldPorts'),$('worldRouting'));consolePanel.prepend(wiring);
 const gesture=document.querySelector('.bench-gesture-help');if(gesture){gesture.open=false;world.querySelector('.world-instructions').append(gesture);}
 world.querySelector('.world-gesture').textContent='Drag a device to move it · Drag between matching sockets to connect';
 world.addEventListener('click',e=>{if(e.target.closest('[data-world-view],[data-world-nav],#worldReset,#worldArrange'))moreViews.open=false;if(e.target.closest('#worldFocus,#worldExplode,#worldReturn'))deviceMore.open=false;});
 const menus=[lessonOptions,moreViews,deviceMore];for(const menu of menus)menu.addEventListener('toggle',()=>{if(menu.open)for(const other of menus)if(other!==menu)other.open=false;});
 document.addEventListener('click',e=>{if(e.target.closest('#stepsToggle')){lessonOptions.open=true;$('learningMode').focus();return;}for(const menu of menus)if(!menu.contains(e.target))menu.open=false;});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')for(const menu of menus)menu.open=false;});
 world.addEventListener('click',e=>{const nav=e.target.closest('[data-world-nav]');if(nav)moreViews.querySelector('summary').textContent=nav.dataset.worldNav==='build'?'View controls':'View controls · '+(nav.dataset.worldNav==='pan'?'Pan':'Rotate');});
 for(const [id,title]of [['labStudio','Templates, planning & PowerShell'],['networkWorkshop','IP addresses & Wi-Fi practice']]){const section=$(id);if(!section)continue;const d=disclosure(id+'Drawer',title);section.before(d);d.append(section);}
 // Existing shortcuts still reveal their destination when its section is folded.
 function reveal(target){for(let p=target?.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;}
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const target=$(a.getAttribute('href').slice(1));if(target)reveal(target);});
 if(location.hash)reveal($(location.hash.slice(1)));
}
