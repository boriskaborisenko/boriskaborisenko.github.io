/* -------------------------- */
/*   XMLHTTPRequest Enable    */
/* -------------------------- */
function ShowHide(el,tip)
{
 var mn = document.getElementById(el);
 if (mn.style.display == "none")
  {
   mn.style.display = tip;
  }
   else
  {
   mn.style.display = "none";
  }
}

function Show(el,tip)
{
 var mn = document.getElementById(el);
 if (mn.style.display == "none")
  {
   mn.style.display = tip;
  }
}

function Focus(el)
{
   var mn = document.getElementById(el);
   if (mn==null) return '';
   mn.focus();
   mn.value = mn.value;
} 

function Hide(el,tip)
{
 var mn = document.getElementById(el);
 if (mn.style.display != "none")
  {
   mn.style.display = "none";
  }
}

function ShowHide2(el,tip,el2,html_show,html_hide)
{
 var mn = document.getElementById(el);
 if (mn==null) return '';
 var mn2 = document.getElementById(el2);
 if (mn2==null) return '';
 if (mn.style.display == "none")
  {
   mn.style.display = tip;
   mn2.innerHTML=html_hide;
  }
   else
  {
   mn.style.display = "none";
   mn2.innerHTML=html_show;
  }
}

function Go(link)
{
 window.location=link;
}

/* Add to Favorite */
function getBrowserInfo() {
 var t,v = undefined;
 if (window.opera) t = 'Opera';
 else if (document.all) {
  t = 'IE';
  var nv = navigator.appVersion;
  var s = nv.indexOf('MSIE')+5;
  v = nv.substring(s,s+1);
 }
 else if (navigator.appName) t = 'Netscape';
 return {type:t,version:v};
}

function bookmark(a){
 var url = window.document.location;
 var title = window.document.title;
 var b = getBrowserInfo();
 if (b.type == 'IE' && 7 > b.version && b.version >= 4) window.external.AddFavorite(url,title);
 else if (b.type == 'Opera') {
  a.href = url;
  a.rel = "sidebar";
  a.title = url+','+title;
  return true;
 }
 else if (b.type == "Netscape") window.sidebar.addPanel(title,url,"");
 else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
 return false;
}


function PlusKol(inputid,minkol)
{
  var kol = parseInt(document.getElementById(inputid).value);
  kol = kol+1;
  document.getElementById(inputid).value = kol;
}

function MinusKol(inputid,minkol)
{
  var kol = parseInt(document.getElementById(inputid).value);
  kol = kol-1;
  if (kol<minkol) { kol=minkol; }
  document.getElementById(inputid).value = kol;
}

function MinusKol(inputid,minkol)
{
  var kol = parseInt(document.getElementById(inputid).value);
  kol = kol-1;
  if (kol<minkol) { kol=minkol; }
  document.getElementById(inputid).value = kol;
}

function createObject()
{
 var request_type;
 var browser = navigator.appName;
 if(browser == "Microsoft Internet Explorer")
 {
  request_type = new ActiveXObject("Microsoft.XMLHTTP");
 } else
 {
  request_type = new XMLHttpRequest();
 }
 return request_type;
}

var http = null;
var rout_el_id = '';
var rout_el_id2 = '';
var rout_callb = '';
var ajax_wait_div = '';
var ajax_now_blocked = false;
 

function doAjRoute(file,el_id,parstr)
{
 rout_callb = '';
 rout_el_id = el_id ;
 if (http == null) http =createObject();
 // Set te random number to add to URL request
 nocache = Math.random();
 http.open('get', 'ajaxrout.php?file='+file+parstr+'&nocache='+nocache);
 http.onreadystatechange = AjReply;
 http.send(null);
}

function doAjRouteCallBack(file,el_id,parstr,callback)
{
 rout_callb = callback;
 rout_el_id = el_id ;
 if (http == null) http =createObject();
 // Set te random number to add to URL request
 nocache = Math.random();
 http.open('get', 'ajaxrout.php?file='+file+parstr+'&nocache='+nocache);
 http.onreadystatechange = AjReply;
 http.send(null);
}

function doAjRouteCahed(file,el_id,parstr)
{
 rout_el_id = el_id ;
 if (http == null) http =createObject();
 // Set te random number to add to URL request
 http.open('get', 'ajaxrout.php?file='+file+parstr);
 http.onreadystatechange = AjReply;
 http.send(null);
}

function AjReply()
{
 if(http.readyState == 4)
 {
  var response = http.responseText;
  document.getElementById(rout_el_id).innerHTML = response;
  if (rout_callb) eval(rout_callb);
 }
}

function doAjRouteJSON(file,el_id,parstr,callback,el_id2,ajax_wd)
{
 if (ajax_now_blocked) { return false; }
 ajax_now_blocked= true; 
 rout_callb = callback;
 rout_el_id = el_id ;
 rout_el_id2 = el_id2 ;
 ajax_wait_div = ajax_wd;
 if (el_id)
 {
    document.getElementById(el_id).innerHTML = 'Загрузка...';
 }   
 if (ajax_wait_div)
 {
   var jwd = document.getElementById(ajax_wait_div);
   if (jwd!=null) {jwd.style.display = "block";}
 }   
 if (http == null) http =createObject();
 // Set te random number to add to URL request
 nocache = Math.random();
 http.open('get', 'ajaxrout.php?&JSON=1&file='+file+parstr+'&nocache='+nocache);
 http.onreadystatechange = AjReplyJSON;
 http.send(null);
}

function doAjRouteJSONPost(file,el_id,parstr,callback,el_id2,ajax_wd)
{
 if (ajax_now_blocked) { return false; }
 ajax_now_blocked= true;
 rout_callb = callback;
 rout_el_id = el_id ;
 rout_el_id2 = el_id2 ;
 ajax_wait_div = ajax_wd;
 if (ajax_wait_div)
 {
   var jwd = document.getElementById(ajax_wait_div);
   if (jwd!=null) {jwd.style.display = "block";}
 }
 if (http == null) http =createObject();
 // Set te random number to add to URL request
 nocache = Math.random();
 http.open('POST', 'ajaxrout.php');
 http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
 http.onreadystatechange = AjReplyJSON;

 http.send('&JSON=1&file='+file+parstr);
}


function AjReplyJSON()
{
 if(http.readyState == 4)
 {
  ajax_now_blocked= false; 
  if (ajax_wait_div)
  {
    var jwd = document.getElementById(ajax_wait_div);
    if (jwd!=null) {jwd.style.display = "none";}
  }   
  var response = http.responseText;
  try
  {
    var jsor = JSON.parse(response);
    if (rout_el_id) document.getElementById(rout_el_id).innerHTML = jsor.html;
    if (rout_el_id2) document.getElementById(rout_el_id2).innerHTML = jsor.html2;
    if (jsor.js) eval(jsor.js);
    if (rout_callb) eval(rout_callb);
  }
  catch(e)
  {
    if (rout_el_id) document.getElementById(rout_el_id).innerHTML = response;
    else if(response.lenght>0) alert(response); 
  }  
 }
}

function addClass( classname, element ) {
    var cn = element.className;
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function getRadioGroupValue(radioGroupObj)
{
  for (var i=0; i < radioGroupObj.length; i++)
    if (radioGroupObj[i].checked) return radioGroupObj[i].value;

  return 0;
}

function dump(obj) {
    var out = "";
    if(obj && typeof(obj) == "object"){
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }
    } else {
        out = obj;
    }
    alert(out);
}

function NewWindow(url,w,h)
{
 var e;
 var ws = '';
 if (w) ws += "width="+w;
 if (h) ws += ",height="+h;

 var new_window  = window.open(url,
 "new_w"+Math.random(0,10000)+",,top=10,left=100,scrollbars=yes,resizable=yes,menubar=1");
 new_window.opener = self;
 new_window.focus();
 
}

function FormDisable(form_id)
{
  var dc = $("#"+form_id).attr("disable_controls");
  $(''+dc).prop("disabled", true);
}  

function FormEnable(form_id)
{
  var dc = $("#"+form_id).attr("disable_controls");
  $(''+dc).prop("disabled", false);
}

function aDisable(obj_or_id)
{
  var obj = obj_or_id;
  if (typeof(obj_or_id) != "object") obj = document.getElementById(obj_or_id);
   
  obj.setAttribute('disabled','disabled');   
}

function aEnable(obj_or_id)
{
  var obj = obj_or_id;
  if (typeof(obj_or_id) != "object") obj = document.getElementById(obj_or_id);
   
  obj.setAttribute('disabled','');   
  obj.removeAttribute('disabled');   
}