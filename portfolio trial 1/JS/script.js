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
var savedUnits = JSON.parse(localStorage.getItem("kj_units")||"null");
if(savedUnits && Array.isArray(savedUnits) && savedUnits.length){U = savedUnits;}
var E=[{k:"c1",l:"CAT 1"},{k:"c2",l:"CAT 2"},{k:"mk",l:"Mock Exam"}];
var D=JSON.parse(localStorage.getItem("kj_d")||"{}"),O=-1;

function toast(m){var t=document.getElementById("toast");document.getElementById("tM").textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove("show")},2200)}
function fmt(b){return b<1024?b+"B":b<1048576?(b/1024).toFixed(1)+"KB":(b/1048576).toFixed(1)+"MB"}
function rd(f){return new Promise(function(r){var d=new FileReader();d.onload=function(e){r(e.target.result)};d.readAsDataURL(f)})}
function gd(i){if(!D[i])D[i]={c1:[],c2:[],mk:[],vid:[],img:[],code:[],project:[]};return D[i]}
function sv(){try{localStorage.setItem("kj_d",JSON.stringify(D));localStorage.setItem("kj_units",JSON.stringify(U));}catch(e){toast("Storage full!")}}
function setCatMark(i,k,val){gd(i);if(!D[i].marks)D[i].marks={};D[i].marks[k]=val;sv();toast("Mark saved")}
function deleteUnit(i){if(!confirm('Delete unit "'+U[i].n+'"?'))return;U.splice(i,1); delete D[i]; // drop matching data backup
  // shift D indexes to remain consistent
  var newD={};for(var k=0;k<U.length;k++){newD[k]=D[k];}
  D=newD;
  sv();render();toast('Unit deleted')}
function addCurriculumUnit(){var code=document.getElementById('newUnitCode').value.trim();var name=document.getElementById('newUnitName').value.trim();if(!code||!name){toast('Enter unit code and name');return;}U.push({c:code,n:name,ic:'ph:bookmark-simple-bold',t:1});sv();document.getElementById('newUnitCode').value='';document.getElementById('newUnitName').value='';render();toast('Unit added')} 
function openViewer(i,k,idx){var item=(D[i]&&D[i][k]&&D[i][k][idx]);if(!item)return;var body=document.getElementById('viewerBody'),title=document.getElementById('viewerTitle');body.innerHTML='';title.textContent=item.n||'Preview';if(k==='vid'){var v=document.createElement('video');v.controls=true;v.src=item.u;v.autoplay=true;body.appendChild(v);}else if(k==='img'){var img=document.createElement('img');img.src=item.u;img.alt=item.n||'Image Preview';body.appendChild(img);}document.getElementById('mediaViewer').classList.add('show')}
function closeViewer(){document.getElementById('mediaViewer').classList.remove('show');document.getElementById('viewerBody').innerHTML='';document.getElementById('viewerTitle').textContent=''}
function viewPaper(i,k,j,type){var item=D[i][k][j];if(!item)return;var body=document.getElementById('viewerBody'),title=document.getElementById('viewerTitle');body.innerHTML='';title.textContent=(type==='question'?'Question Paper: ':'Answer: ')+item.n;if(type==='question'){body.innerHTML='<div style="text-align:center;padding:2rem;color:#a8a29e;"><span class="iconify" style="font-size:3rem;color:#fb923c" data-icon="ph:question-bold"></span><p style="margin-top:1rem;font-size:1.1rem;">Question paper content would be displayed here</p><p style="font-size:.9rem;margin-top:.5rem;">This is a placeholder for the question paper viewer</p></div>';}else{body.innerHTML='<div style="text-align:center;padding:2rem;color:#a8a29e;"><span class="iconify" style="font-size:3rem;color:#4ade80" data-icon="ph:check-circle-bold"></span><p style="margin-top:1rem;font-size:1.1rem;">Answer content would be displayed here</p><p style="font-size:.9rem;margin-top:.5rem;">This is a placeholder for the answer viewer</p></div>';}document.getElementById('mediaViewer').classList.add('show')}
function rm(i,k,j){D[i][k].splice(j,1);sv();render();toast("Removed")}
function upL(i,k,a,l){return '<label class="uz"><span class="iconify" data-icon="ph:upload-simple-bold"></span>'+l+'<input type="file" accept="'+a+'" multiple onchange="hU('+i+',\''+k+'\',this)"></label>'}
function pR(i,k,j,f){return '<div class="fr"><div class="fi"><span class="iconify" data-icon="ph:file-pdf-bold"></span><a href="'+f.u+'" download="'+f.n+'">'+f.n+'</a><span class="sz">'+fmt(f.s)+'</span></div><div class="paper-actions"><button onclick="viewPaper('+i+',\''+k+'\','+j+',\'question\')" title="View Question Paper"><span class="iconify" data-icon="ph:question-bold"></span></button><button onclick="viewPaper('+i+',\''+k+'\','+j+',\'answer\')" title="View Answer"><span class="iconify" data-icon="ph:check-circle-bold"></span></button><button onclick="event.stopPropagation();rm('+i+',\''+k+'\','+j+')"><span class="iconify" data-icon="ph:x-bold"></span></button></div></div>'}
function pB(i,k,l,a,d){
  var h='<div class="pn"><h4><span class="iconify" data-icon="ph:file-text-bold"></span>'+l+'</h4>'+upL(i,k,".pdf,.doc,.docx,.txt","Upload")+'<div class="fl">';
  if(!a||!a.length)h+='<p class="em">No papers</p>';else for(var j=0;j<a.length;j++)h+=pR(i,k,j,a[j]);
  h+='</div>';
  var mark=(d.marks&&d.marks[k])?d.marks[k]:'';
  h+='<div class="cat-mark"><label>Mark: <input type="number" min="0" max="100" value="'+mark+'" onchange="setCatMark('+i+',\''+k+'\',this.value)"></label></div>';
  if(k==='c1' && d){
    h+='<div class="cat1-media"><h5>CAT 1 Media Preview</h5>';
    if(d.vid&&d.vid.length){
      for(var v=0;v<d.vid.length;v++){
        h+='<div class="cat1-video" onclick="openViewer('+i+',\'vid\','+v+')"><video controls src="'+d.vid[v].u+'"></video><p>'+d.vid[v].n+'</p></div>';
      }
    } else {
      h+='<p class="em">No CAT 1 videos yet</p>';
    }
    if(d.img&&d.img.length){
      for(var m=0;m<d.img.length;m++){
        h+='<div class="cat1-img" onclick="openViewer('+i+',\'img\','+m+')"><img src="'+d.img[m].u+'" alt="'+d.img[m].n+'"><p>'+d.img[m].n+'</p></div>';
      }
    } else {
      h+='<p class="em">No CAT 1 images yet</p>';
    }
    h+='</div>';
  }
  return h+'</div>';
}
function vB(i,a){var h='<div class="pn"><h4><span class="iconify" data-icon="ph:video-bold"></span>Videos</h4>'+upL(i,"vid","video/*","Upload")+'<div style="margin-top:.5rem;display:flex;flex-direction:column;gap:.5rem">';if(!a||!a.length)h+='<p class="em">No videos</p>';else for(var j=0;j<a.length;j++)h+='<div class="vi"><video src="'+a[j].u+'" controls></video><div class="vb"><p>'+a[j].n+'</p><button onclick="event.stopPropagation();rm('+i+',\'vid\','+j+')"><span class="iconify" data-icon="ph:trash-bold"></span></button></div></div>';return h+'</div></div>'}
function iB(i,a){var h='<div class="pn"><h4><span class="iconify" data-icon="ph:image-bold"></span>Image Evidence</h4>'+upL(i,"img","image/*","Upload")+'<div class="ig" style="margin-top:.5rem">';if(!a||!a.length)h+='<p class="em" style="grid-column:span 2">No images</p>';else for(var j=0;j<a.length;j++)h+='<div class="ii"><img src="'+a[j].u+'"><div class="ov"><a href="'+a[j].u+'" download="'+a[j].n+'"><span class="iconify" data-icon="ph:download-simple-bold"></span></a><button onclick="event.stopPropagation();rm('+i+',\'img\','+j+')"><span class="iconify" data-icon="ph:trash-bold"></span></button></div><p class="in">'+a[j].n+'</p></div>';return h+'</div></div>'}
function bC(i){var d=gd(i),h='<div class="body"><div class="eg">';for(var e=0;e<3;e++)h+=pB(i,E[e].k,E[e].l,d[E[e].k],d);h+='</div>';if(U[i].t)h+='<div class="tg"><div class="practical-section"><h4><span class="iconify" data-icon="ph:code-bold"></span>Practical Assessments</h4><div class="practical-grid"><div class="practical-item"><h5>Code Files</h5>'+upL(i,"code",".py,.js,.java,.cpp,.c,.html,.css,.php,.sql","Upload Code")+'<div class="fl">';if(!d.code||!d.code.length)h+='<p class="em">No code files</p>';else for(var j=0;j<d.code.length;j++)h+=pR(i,"code",j,d.code[j]);h+='</div></div><div class="practical-item"><h5>Project Files</h5>'+upL(i,"project",".zip,.rar,.7z,.tar.gz","Upload Project")+'<div class="fl">';if(!d.project||!d.project.length)h+='<p class="em">No project files</p>';else for(var j=0;j<d.project.length;j++)h+=pR(i,"project",j,d.project[j]);h+='</div></div></div></div>'+vB(i,d.vid)+iB(i,d.img)+'</div>';return h+'</div>'}
function render(){var h='';for(var i=0;i<U.length;i++){var u=U[i],o=O===i;h+='<div class="cd'+(o?' op':'')+'"><div class="cb" onclick="tg('+i+')"><div class="l"><div class="ib"><span class="iconify" data-icon="'+u.ic+'"></span></div><div><div class="un">'+u.n+'</div><div class="uc">'+u.c+'</div></div></div><div class="r">';if(u.t)h+='<span class="badge">Technical</span>';h+='<span class="iconify ch" data-icon="ph:caret-down-bold"></span></div></div><button class="unit-delete" onclick="event.stopPropagation();deleteUnit('+i+')" title="Delete this unit"><span class="iconify" data-icon="ph:trash-simple-bold"></span></button>';if(o)h+=bC(i);h+='</div>'}document.getElementById("uC").innerHTML=h}
function tg(i){O=O===i?-1:i;render()}
async function hU(i,k,el){var fs=el.files;if(!fs.length)return;gd(i);if(k==="vid"){for(var f=0;f<fs.length;f++){if(fs[f].size>52428800)continue;D[i].vid.push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size})}toast(fs.length+" video(s) added")}else if(k==="img"){for(var f=0;f<fs.length;f++){if(!fs[f].type.startsWith("image/"))continue;D[i].img.push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size})}toast(fs.length+" image(s) added")}else if(k==="code"){for(var f=0;f<fs.length;f++){D[i].code.push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size})}toast(fs.length+" code file(s) added")}else if(k==="project"){for(var f=0;f<fs.length;f++){D[i].project.push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size})}toast(fs.length+" project file(s) added")}else{for(var f=0;f<fs.length;f++)D[i][k].push({n:fs[f].name,u:await rd(fs[f]),s:fs[f].size});toast(fs.length+" paper(s) added")}sv();render();el.value=""}
render();