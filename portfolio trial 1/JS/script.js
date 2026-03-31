var U=[
{c:"CCS101",n:"Fundamentals of Programming",ic:"ph:code-bold",t:1},
{c:"CCS102",n:"Mathematics for Computer Science",ic:"ph:calculator-bold",t:1},
{c:"CCS103",n:"Basic Electronics",ic:"ph:lightning-bold",t:1},
{c:"CCS104",n:"Communication Skills",ic:"ph:chat-circle-bold",t:0},
{c:"CCS105",n:"Work Ethics & Entrepreneurial Skills",ic:"ph:briefcase-bold",t:0},
{c:"CCS201",n:"Computer Organization & Architecture",ic:"ph:chip-bold",t:1},
{c:"CCS202",n:"Operating Systems",ic:"ph:cpu-bold",t:1},
{c:"CCS203",n:"Database Systems",ic:"ph:database-bold",t:1},
{c:"CCS204",n:"Web Design",ic:"ph:globe-bold",t:1},
{c:"CCS205",n:"Graphics Design",ic:"ph:palette-bold",t:1},
{c:"CCS206",n:"Networking & Distributed Systems",ic:"ph:network-bold",t:1},
{c:"CCS301",n:"Information Systems Development",ic:"ph:tree-structure-bold",t:1}
];
var E=[{k:"c1",l:"CAT 1"},{k:"c2",l:"CAT 2"},{k:"mk",l:"Mock Exam"}];
var D=JSON.parse(localStorage.getItem("kj_d")||"{}"),O=-1;

function toast(m){var t=document.getElementById("toast");document.getElementById("tM").textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove("show")},2200)}
function fmt(b){return b<1024?b+"B":b<1048576?(b/1024).toFixed(1)+"KB":(b/1048576).toFixed(1)+"MB"}
function rd(f){return new Promise(function(r){var d=new FileReader();d.onload=function(e){r(e.target.result)};d.readAsDataURL(f)})}
function gd(i){if(!D[i])D[i]={c1:[],c2:[],mk:[],vid:[],img:[]};return D[i]}
function sv(){try{localStorage.setItem("kj_d",JSON.stringify(D))}catch(e){toast("Storage full!")}}
function rm(i,k,j){D[i][k].splice(j,1);sv();render();toast("Removed")}
function upL(i,k,a,l){return '<label class="uz"><span class="iconify" data-icon="ph:upload-simple-bold"></span>'+l+'<input type="file" accept="'+a+'" multiple onchange="hU('+i+',\''+k+'\',this)"></label>'}
function pR(i,k,j,f){return '<div class="fr"><div class="fi"><span class="iconify" data-icon="ph:file-pdf-bold"></span><a href="'+f.u+'" download="'+f.n+'">'+f.n+'</a><span class="sz">'+fmt(f.s)+'</span></div><button onclick="event.stopPropagation();rm('+i+',\''+k+'\','+j+')"><span class="iconify" data-icon="ph:x-bold"></span></button></div>'}
function pB(i,k,l,a){var h='<div class="pn"><h4><span class="iconify" data-icon="ph:file-text-bold"></span>'+l+'</h4>'+upL(i,k,".pdf,.doc,.docx,.txt","Upload")+'<div class="fl">';if(!a||!a.length)h+='<p class="em">No papers</p>';else for(var j=0;j<a.length;j++)h+=pR(i,k,j,a[j]);return h+'</div></div>'}
function vB(i,a){var h='<div class="pn"><h4><span class="iconify" data-icon="ph:video-bold"></span>Videos</h4>'+upL(i,"vid","video/*","Upload")+'<div style="margin-top:.5rem;display:flex;flex-direction:column;gap:.5rem">';if(!a||!a.length)h+='<p class="em">No videos</p>';else for(var j=0;j<a.length;j++)h+='<div class="vi"><video src="'+a[j].u+'" controls></video><div class="vb"><p>'+a[j].n+'</p><button onclick="event.stopPropagation();rm('+i+',\'vid\','+j+')"><span class="iconify" data-icon="ph:trash-bold"></span></button></div></div>';return h+'</div></div>'}
function iB(i,a){var h='<div class="pn"><h4><span class="iconify" data-icon="ph:image-bold"></span>Image Evidence</h4>'+upL(i,"img","image/*","Upload")+'<div class="ig" style="margin-top:.5rem">';if(!a||!a.length)h+='<p class="em" style="grid-column:span 2">No images</p>';else for(var j=0;j<a.length;j++)h+='<div class="ii"><img src="'+a[j].u+'"><div class="ov"><a href="'+a[j].u+'" download="'+a[j].n+'"><span class="iconify" data-icon="ph:download-simple-bold"></span></a><button onclick="event.stopPropagation();rm('+i+',\'img\','+j+')"><span class="iconify" data-icon="ph:trash-bold"></span></button></div><p class="in">'+a[j].n+'</p></div>';return h+'</div></div>'}
function bC(i){var d=gd(i),h='<div class="body"><div class="eg">';for(var e=0;e<3;e++)h+=pB(i,E[e].k,E[e].l,d[E[e].k]);h+='</div>';if(U[i].t)h+='<div class="tg">'+vB(i,d.vid)+iB(i,d.img)+'</div>';return h+'</div>'}
function render(){var h='';for(var i=0;i<U.length;i++){var u=U[i],o=O===i;h+='<div class="cd'+(o?' op':'')+'"><button class="cb" onclick="tg('+i+')"><div class="l"><div class="ib"><span class="iconify" data-icon="'+u.ic+'"></span></div><div><div class="un">'+u.n+'</div><div class="uc">'+u.c+'</div></div></div><div class="r">';if(u.t)h+='<span class="badge">Technical</span>';h+='<span class="iconify ch" data-icon="ph:caret-down-bold"></span></div></button>';if(o)h+=bC(i);h+='</div>'}document.getElementById("uC").innerHTML=h}
function tg(i){O=O===i?-1:i;render()}
async function hU(i,k,el){var fs=el.files;if(!fs.length)return;gd(i);if(k==="vid"){for(var f=0;f<fs.length;f++){if(fs[f].size>52428800)continue;D[i].vid.push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size})}toast(fs.length+" video(s) added")}else if(k==="img"){for(var f=0;f<fs.length;f++){if(!fs[f].type.startsWith("image/"))continue;D[i].img.push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size})}toast(fs.length+" image(s) added")}else{for(var f=0;f<fs.length;f++)D[i][k].push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size});toast(fs.length+" paper(s) added")}sv();render();el.value=""}
render();