import * as T from './lab-three.js?v=screen37';
// The authored Blender screen is the anchor. No guessed page coordinates.
export function displayAnchor(model){
 let display=model.group.getObjectByName('Active_display');
 if(!display)model.group.traverse(o=>{if(o.userData.labDisplay)display=o;});
 if(!display)return null;
 display.geometry.computeBoundingBox();const b=display.geometry.boundingBox;
 return {display,width:b.max.x-b.min.x,height:b.max.y-b.min.y,z:b.max.z+.006,bounds:b};
}
export function displayCorners(anchor){
 const {display,bounds:b,z}=anchor;display.updateWorldMatrix(true,false);
 return [[b.min.x,b.max.y,z],[b.max.x,b.max.y,z],[b.max.x,b.min.y,z],[b.min.x,b.min.y,z]].map(p=>display.localToWorld(new T.Vector3(...p)));
}
export function installDisplay(model,device,ready){
 const anchor=displayAnchor(model);if(!anchor)return null;
 const canvas=document.createElement('canvas');canvas.width=1440;canvas.height=800;const c=canvas.getContext('2d'),linux=device.os==='Linux';
 const g=c.createLinearGradient(0,0,1440,800);g.addColorStop(0,linux?'#24132e':'#144098');g.addColorStop(.55,linux?'#793456':'#3d8fef');g.addColorStop(1,linux?'#d05037':'#b7e8ff');c.fillStyle=ready?g:'#070c15';c.fillRect(0,0,1440,800);
 if(ready){c.fillStyle='#ffffff20';for(let i=0;i<3;i++){c.beginPath();c.ellipse(950+i*60,470+i*30,310,400,-.55,0,Math.PI*2);c.fill();}
  c.fillStyle=linux?'#231f2b':'#e6f1ff';c.fillRect(0,linux?0:744,1440,56);c.fillStyle=linux?'#fff':'#144783';c.font='22px system-ui';c.fillText(linux?'Activities                        Ubuntu':'▦     ▣     >_     ⚙',linux?24:540,linux?37:780);
  c.fillStyle='#fff';c.font='600 36px system-ui';c.fillText(device.name,74,180);c.font='26px system-ui';c.fillText(linux?'Ubuntu 24.04 LTS':'Windows 11',74,225);c.fillText('Click this screen to begin',74,645);
 }
 const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
 const plane=new T.Mesh(new T.PlaneGeometry(anchor.width,anchor.height),new T.MeshBasicMaterial({map:texture,toneMapped:false}));plane.position.set(0,0,anchor.z);plane.userData.kind='screen';anchor.display.add(plane);return {...anchor,plane};
}
