var form_has_error = false;

function DateFormatMy(date)
{
  return ''+('0' + date.getDate()).slice(-2)+'.' + ('0' + (date.getMonth() + 1)).slice(-2) +'.'+date.getFullYear();
}
 
function StrToFloatMy(s)
{
  s = s.replace(/ /g, "");
  s = s.replace(',', ".");
  return  parseFloat(s);
}  


Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
 

function Check_HideNote(inputid,noteid)
{
  form_has_error = false;
  removeClass( 'error', document.getElementById(inputid) ) ;
  removeClass( 'ttiin', document.getElementById(noteid) ) ;
}  

function Check_ShowNote(inputid,noteid)
{
  form_has_error = false;
  addClass( 'ttiin', document.getElementById(noteid));
} 
 

function Check_ShowNoteError(inputid,noteid)
{
  form_has_error = true;
  removeClass( 'ttiin', document.getElementById(noteid));
  addClass( 'error', document.getElementById(inputid) ) ;
}  

//Только украинские буквы
function CheckName(obj,noteid)
{
  var pattern = /^[\-а-еж-щью-яА-ЕЖ-ЩЬЮ-Я\`ґєҐЄ´ІіЇї\']+$/;
  if (!pattern.test(obj.value))
  {
     Check_ShowNoteError(obj.id,noteid);
     return false;
  }   
  Check_HideNote(obj.id,noteid);
  return true;
}

//Допускает пробелы и цифры  точки и запятую
function CheckName2(obj,noteid)
{
  var pattern = /^[\-0-9а-еж-щью-яА-ЕЖ-ЩЬЮ-Я\`ґєҐЄ´ІіЇї\.\,\'\s]+$/;  
  if (!pattern.test(obj.value))
  {  
    Check_ShowNoteError(obj.id,noteid);
     return false;
  }  
  Check_HideNote(obj.id,noteid);
  return true;
}

//Допускает пробелы и цифры и пустое
function CheckName3(obj,noteid)
{
  var pattern = /^[\-0-9а-еж-щью-яА-ЕЖ-ЩЬЮ-Я\`ґєҐЄ´ІіЇї\'\s]+$/;  
  var val = obj.value;
  if (val.length<=0) 
  {
    Check_HideNote(obj.id,noteid);
    return true;
  }    
  if (!pattern.test(obj.value))
  {  
    Check_ShowNoteError(obj.id,noteid);
     return false;
  }  
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckTel1(obj,noteid)
{
  var pattern = /[0-9]{7}/;
  var val = obj.value;
  val = val.replace(/-/g, "");
  val = val.replace(')', "");
  val = val.replace('(', "");
  val = val.replace(/ /g, "");
  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  else if(val.length!=7) { Check_ShowNoteError(obj.id,noteid);  return false; }
  Check_HideNote(obj.id,noteid);
  if (val != obj.value) obj.value = val;
  return true;
}

function CheckTel3(obj,noteid)
{
  var pattern = /[0-9]{12}/;
  var val = obj.value;
  val = val.replace(/-/g, "");
  val = val.replace(')', "");
  val = val.replace('(', "");
  val = val.replace('+', "");
  val = val.replace(/_/g, "");
  val = val.replace(/ /g, "");
  if (val.length<=0) 
  {
    Check_HideNote(obj.id,noteid);
    return true;
  }    

  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  else if(val.length!=12) { Check_ShowNoteError(obj.id,noteid);  return false; }
  Check_HideNote(obj.id,noteid);
  //if (val != obj.value) obj.value = val;
  return true;
}

function CheckInt0(obj,noteid)
{
  var pattern = /^[0-9]+$/;
  var val = obj.value;
  val = val.replace(/ /g, "");
  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  Check_HideNote(obj.id,noteid);
  if (val != obj.value) obj.value = val;
  return true;
}

function CheckInt0nn(obj,noteid)
{
  var pattern = /^[0-9]+$/;
  var val = obj.value;
  if(val.length==0) { Check_HideNote(obj.id,noteid); return true; }
  val = val.replace(/ /g, "");
  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  Check_HideNote(obj.id,noteid);
  if (val != obj.value) obj.value = val;
  return true;
}

function CheckInt0nn1(obj,noteid)
{
  var pattern = /^[0-9]+$/;
  var val = obj.value;
  if(val.length==0) { Check_HideNote(obj.id,noteid); return true; }
  val = val.replace(/ /g, "");
  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  if (val.length>1) { Check_ShowNoteError(obj.id,noteid);  return false; }
  Check_HideNote(obj.id,noteid);
  if (val != obj.value) obj.value = val;
  return true;
}

function CheckFloat(obj,noteid)
{
  
  var pattern = /^\d{0,10}(\.\d{0,4}){0,1}$/;
  //var pattern = /[0-9.,]/;
  var val = obj.value;
  val = val.replace(/ /g, "");
  val = val.replace(/ /g, "");
  val = val.replace(',', ".");
  var fval = parseFloat(val);
  
  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  else if(fval<=0) { Check_ShowNoteError(obj.id,noteid);  return false; } 
  Check_HideNote(obj.id,noteid);
  if (val != obj.value) obj.value = val;
  return true;
}

function CheckFloat0(obj,noteid)
{
  
  var pattern = /^\d{0,10}(\.\d{0,4}){0,1}$/;
  //var pattern = /[0-9.,]/;
  var val = obj.value;
  val = val.replace(/ /g, "");
  val = val.replace(/ /g, "");
  val = val.replace(',', ".");
  var fval = parseFloat(val);
  
  if (!pattern.test(val)) { Check_ShowNoteError(obj.id,noteid);  return false; }
  else if(fval<0) { Check_ShowNoteError(obj.id,noteid);  return false; } 
  Check_HideNote(obj.id,noteid);
  if (val != obj.value) obj.value = val;
  return true;
}
  
  
function ChecksbHolderCombo(obj,noteid)
{
  if (typeof obj.getAttribute === 'function')
  {
  } else    
  {  
    return true;
  }  
  var sb_id = obj.getAttribute("sb");
 // var sb_obj = document.getElementById('sbHolder_'+sb_id);
  var val = obj.value;
  if (val.length==0){  Check_ShowNoteError('sbHolder_'+sb_id,noteid); return false; }
  Check_HideNote('sbHolder_'+sb_id,noteid);
  return true;
}

function CheckPostInd(obj,noteid)
{
  var pattern = /^[0-9]+$/;
  if (!pattern.test(obj.value)) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length!=5) {   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckAdres(obj,noteid)
{
  var pattern = /^[\-0-9а-еж-щью-яА-ЕЖ-ЩЬЮ-Я\`ґєҐЄ´ІіЇї\'\s]+$/;
  if (!pattern.test(obj.value)) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length<3) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length>50) {   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckDom(obj,noteid)
{
  var pattern = /^[\-0-9а-еж-щью-яА-ЕЖ-ЩЬЮ-ЯґєҐЄІіЇї\/]+$/;
  if (!pattern.test(obj.value)) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length<1) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length>10){   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckKorpus(obj,noteid)
{
  if (obj.value.length==0) return true;
  var pattern = /^[\-0-9а-еж-щью-яА-ЕЖ-ЩЬЮ-Я\`ґєҐЄ´ІіЇї\'\s/]+$/;
  if (!pattern.test(obj.value)) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length<1) {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length>10){   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckKvartira(obj,noteid)
{
  if (obj.value.length==0) return true;
  var pattern = /^[\-0-9а-еж-щью-яА-ЕЖ-ЩЬЮ-Я\`ґєҐЄ´ІіЇї\'\s]+$/;
  if (!pattern.test(obj.value))  {   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length>5)  {   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}


function CheckDatarod(obj,noteid)
{
  var arr = obj.value.split('.',3);

  var d = arr[0];
  var m = arr[1];
  var y = arr[2];
  var dr = new Date();
  dr.setMonth(m-1,d); 
  dr.setFullYear(y); 
  
  var dm = new Date();   dm.setFullYear(dm.getFullYear()-18); 
  var dmm = new Date();   dmm.setFullYear(dmm.getFullYear()-65); 
 
  if (dr>dm){   Check_ShowNoteError(obj.id,noteid); return false; }
  else if(dr<dmm){  Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}  

function CheckDataPasport(obj,noteid)
{
  var arr = obj.value.split('.',3);

  var d = arr[0];
  var m = arr[1];
  var y = arr[2];
  var dr = new Date();
  dr.setMonth(m-1,d); 
  dr.setFullYear(y); 
  
  var dm = new Date();  // dm.setFullYear(dm.getFullYear()-2); 
//  var dmm = new Date();   dmm.setFullYear(dmm.getFullYear()-65); 
  
  if (dr>dm){   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
} 

function CheckDataFuture(obj,noteid)
{
  if (obj.value.length<10)
  { 
    Check_ShowNoteError(obj.id,noteid); 
    return false; 
  }
  var arr = obj.value.split('.',3);

  var d = arr[0];
  var m = arr[1];
  var y = arr[2];
  var dr = new Date();
  dr.setMonth(m-1,d); 
  dr.setFullYear(y); 
  
  var dm = new Date(); 
  
  if (dr<dm){   Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}  


function is_valid_inn(i)
{
    if ( i.match(/\D/) ) return false;
    
    var inn = i.match(/(\d)/g);
    
    if ( inn.length == 10 )
    {
        return inn[9] == String(((
            (-1)*inn[0] + 5*inn[1] + 7*inn[2] + 
            9*inn[3] + 4*inn[4] +  6*inn[5] + 
            10*inn[6] + 5*inn[7] +  7*inn[8]
        ) % 11) % 10);
    }
    return false;
}

function CheckINN(obj,noteid)
{
  //CheckName
  var pattern = /^[0-9]+$/;
  if (!pattern.test(obj.value)){    Check_ShowNoteError(obj.id,noteid); return false; }
  else if(obj.value.length!=10){    Check_ShowNoteError(obj.id,noteid); return false; }
  else if(!is_valid_inn(obj.value)){    Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckPasportSer(obj,noteid)
{
  //CheckName
  var ser =  obj.value;
  var pattern2 = /^[а-еж-щью-яА-ЕЖ-ЩЬЮ-ЯґєҐЄІіЇї]+$/;
  if (!pattern2.test(ser)){ Check_ShowNoteError(obj.id,noteid); return false; }
  else if(ser.length!=2){ Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function CheckPasportNum(obj,noteid)
{
  //CheckName
  var pattern = /^[0-9]+$/;
  var num = obj.value;
  if (!pattern.test(num)){  Check_ShowNoteError(obj.id,noteid); return false; }
  else if(num.length!=6){  Check_ShowNoteError(obj.id,noteid); return false; }
  Check_HideNote(obj.id,noteid);
  return true;
}

function Step1_Next_Enabled()
{
  if (
    document.getElementById('step_1_ck1').checked
   && document.getElementById('step_1_ck2').checked
   && document.getElementById('step_1_ck3').checked
  )   
  {
    $('.step_section_btn .save_btn').prop('disabled',false);
    $('.step_section_btn .active_btn').prop('disabled',false);
  }  
  else
  {  
    $('.step_section_btn .save_btn').prop('disabled',true);
    $('.step_section_btn .active_btn').prop('disabled',true);
  }
  
}

function Check_form_Step1(form_obj)
{
  var has_error = false;
  if (!CheckName(form_obj.FAMILIA,'FAMILIA_note')) has_error = true;
  if (!CheckName(form_obj.IMIA,'IMIA_note')) has_error = true;
  if (!CheckName(form_obj.OTCHEST,'OTCHEST_note')) has_error = true;
  if (!CheckDatarod(form_obj.RODILS,'RODILS_note')) 
  {  
    has_error = true;
    document.getElementById('do_krof_step1_res').innerHTML =  '<span class="mess-red">Вибачте, кредити видаються лише особам віком 18-65 років</span>';
    return false;
  }  
  if (!ChecksbHolderCombo(form_obj.POL,'POL_note')) has_error = true;
  if (!CheckTel1(form_obj.TEL,'TEL_note')) has_error = true;
  if (!CheckPasportSer(form_obj.PASPSER,'PASPSER_note')) has_error = true;
  if (!CheckPasportNum(form_obj.PASPNUM,'PASPNUM_note')) has_error = true;
  if (!CheckName2(form_obj.PASPKEMVID,'PASPKEMVID_note')) has_error = true;
  if (!CheckINN(form_obj.IDNOMER,'IDNOMER_note')) has_error = true;
  if (!CheckDataPasport(form_obj.PASPDATVID,'PASPDATVID_note')) has_error = true;
  if (!has_error) return true;
   document.getElementById('do_krof_step1_res').innerHTML =  '<span class="mess-red">Заповніть корректно всі поля</span>';
  return false;
}  


function Check_form_Step2(form_obj)
{
  var has_error = false;
  if (!ChecksbHolderCombo(form_obj.SEMSTAT,'SEMSTAT_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.OBRAZ,'OBRAZ_note')) has_error = true;
  if (!CheckInt0(form_obj.CHILD_NO,'CHILD_NO_note')) has_error = true;
  if (!CheckName(form_obj.KONT_FAMILIA,'KONT_FAMILIA_note')) has_error = true;
  if (!CheckName(form_obj.KONT_IMIA,'KONT_IMIA_note')) has_error = true;
  if (!CheckName(form_obj.KONT_OTCHEST,'KONT_OTCHEST_note')) has_error = true;
  if (!CheckTel1(form_obj.KONT_TEL,'KONT_TEL_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.KONT_STEPEN,'KONT_STEPEN_note')) has_error = true;
  
  
  if (!CheckName3(form_obj.ZAN_UCH_DATA,'ZAN_UCH_DATA_note')) has_error = true;
  if (!CheckName3(form_obj.ZAN_UCHNAME,'ZAN_UCHNAME_note')) has_error = true;
  if (!CheckInt0nn1(form_obj.ZAN_UCHKURS,'ZAN_UCHKURS_note')) has_error = true;
  if (!CheckTel3(form_obj.ZAN_UCH_TEL,'ZAN_UCH_TEL_note')) has_error = true;

  if (!ChecksbHolderCombo(form_obj.DOH_LASTKR,'DOH_LASTKR_note')) has_error = true;
  if (!CheckFloat0(form_obj.DOH_SUMPLAT,'DOH_SUMPLAT_note')) has_error = true;
  if (!CheckFloat(form_obj.DOH_SUM,'DOH_SUM_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.DOH_CHAST,'DOH_CHAST_note')) has_error = true;
  if (!CheckDataFuture(form_obj.DOH_NEXTDATE,'DOH_NEXTDATE_note')) has_error = true;
  if (!has_error) return true;
   document.getElementById('do_krof_step2_res').innerHTML =  '<span class="mess-red">Заповніть корректно всі поля</span>';
  return false;
}  

function Check_form_Step3(form_obj)
{
  var has_error = false;
  if (!CheckPostInd(form_obj.ADRF_POSTIND,'ADRF_POSTIND_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRF_OBLAST,'ADRF_OBLAST_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRF_RAYON,'ADRF_RAYON_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRF_GOROD_TIP,'ADRF_GOROD_TIP_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRF_GOROD,'ADRF_GOROD_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRF_ULICA_TIP,'ADRF_ULICA_TIP_note')) has_error = true;
  if (!CheckAdres(form_obj.ADRF_ULICA,'ADRF_ULICA_note')) has_error = true;
  if (!CheckDom(form_obj.ADRF_DOM,'ADRF_DOM_note')) has_error = true;
  if (!CheckKorpus(form_obj.ADRF_KOROPUS,'ADRF_KOROPUS_note')) has_error = true;
  if (!CheckKvartira(form_obj.ADRF_KVARTIRA,'ADRF_KVARTIRA_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRF_FORMSOB,'ADRF_FORMSOB_note')) has_error = true;
  if (!CheckFloat0(form_obj.ADRF_YLIVE,'ADRF_YLIVE_note')) has_error = true;
  if (!form_obj.ADRR_ISFACT.checked)
  {
    if (!CheckPostInd(form_obj.ADRR_POSTIND,'ADRR_POSTIND_note')) has_error = true;
    if (!ChecksbHolderCombo(form_obj.ADRR_OBLAST,'ADRR_OBLAST_note')) has_error = true;
    if (!ChecksbHolderCombo(form_obj.ADRR_RAYON,'ADRR_RAYON_note')) has_error = true;
    if (!ChecksbHolderCombo(form_obj.ADRR_GOROD_TIP,'ADRR_GOROD_TIP_note')) has_error = true;
    if (!ChecksbHolderCombo(form_obj.ADRR_GOROD,'ADRR_GOROD_note')) has_error = true;
    if (!ChecksbHolderCombo(form_obj.ADRR_ULICA_TIP,'ADRR_ULICA_TIP_note')) has_error = true;
    if (!CheckAdres(form_obj.ADRR_ULICA,'ADRR_ULICA_note')) has_error = true;
    if (!CheckDom(form_obj.ADRR_DOM,'ADRR_DOM_note')) has_error = true;
    if (!CheckKorpus(form_obj.ADRR_KOROPUS,'ADRR_KOROPUS_note')) has_error = true;
    if (!CheckKvartira(form_obj.ADRR_KVARTIRA,'ADRR_KVARTIRA_note')) has_error = true;
  }    

  if (!has_error) return true;
   document.getElementById('do_krof_step3_res').innerHTML =  '<span class="mess-red">Заповніть корректно всі поля</span>';
  return false;
}  

function Check_form_Step4(form_obj)
{
  var has_error = false;
  var zan_tip = form_obj.ZAN_TIP.value;
  if(zan_tip!=2) return true;
  if (!CheckName2(form_obj.RAB_FIRMA,'RAB_FIRMA_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_FORMSOB,'RAB_FORMSOB_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_GALUZ,'RAB_GALUZ_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_KOLRAB,'RAB_KOLRAB_note')) has_error = true;
  if (!CheckTel3(form_obj.RAB_TEL,'RAB_TEL_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_DOLJKAT,'RAB_DOLJKAT_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_SPECIAL,'RAB_SPECIAL_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_STAJ,'RAB_STAJ_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_STAJ_ALL,'RAB_STAJ_ALL_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.RAB_TIPZAN,'RAB_TIPZAN_note')) has_error = true;
  
  if (!CheckPostInd(form_obj.ADRAB_POSTIND,'ADRAB_POSTIND_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRAB_OBLAST,'ADRAB_OBLAST_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRAB_RAYON,'ADRAB_RAYON_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRAB_GOROD_TIP,'ADRAB_GOROD_TIP_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRAB_GOROD,'ADRAB_GOROD_note')) has_error = true;
  if (!ChecksbHolderCombo(form_obj.ADRAB_ULICA_TIP,'ADRAB_ULICA_TIP_note')) has_error = true;
  if (!CheckAdres(form_obj.ADRAB_ULICA,'ADRAB_ULICA_note')) has_error = true;
  if (!CheckDom(form_obj.ADRAB_DOM,'ADRAB_DOM_note')) has_error = true;
  if (!CheckKorpus(form_obj.ADRAB_KOROPUS,'ADRAB_KOROPUS_note')) has_error = true;
  if (!CheckKvartira(form_obj.ADRAB_KVARTIRA,'ADRAB_KVARTIRA_note')) has_error = true;

  if (!has_error) return true;
   document.getElementById('do_krof_step4_res').innerHTML =  '<span class="mess-red">Заповніть корректно всі поля</span>';
  return false;
}  

function Check_form_Step5(form_obj)
{
  if (glob_main_photo_need && !glob_main_photo_has)
  {  
    document.getElementById('do_krof_step5_res').innerHTML =  '<span class="mess-red">Прикрiпiть файл з фото</span>';
    addClass( 'dz-error', document.getElementById('file-upload-main'));
    return false;
  }  
  return true;
}  

function Check_form_Step6(form_obj)
{
//    document.getElementById('do_krof_step6_res').innerHTML =  '<span class="mess-red">Загрузiть зображення</span>';
  return true;
}  

/*
function check_registration1()
{
 var ss='';
 var val = document.getElementById('registration1_name1').value;
 if (val=="")
 {
  document.getElementById('mailto').value="заполнять обязательно";
  return '';
 } else ss+='&RNAME1='.encodeURIComponent(val);
 return ss;
}
*/

function Check_NapishitNam(form_obj)
{
   var has_error = '';
   if (!form_obj.NAME.value) has_error += ' Ваше імя';
   if (!form_obj.EMAIL.value) has_error += ' Ваша пошта';
   if (!form_obj.TEXT.value) has_error += ' Текст повідомлення';
   
   if (has_error.length<1) return true;
   
   document.getElementById('do_napishit_nam_res').innerHTML ='<span class="mess-red">Заповнiть '+has_error+'</span>';
   return false;
 
}

function start_page_calculator()
{
    var sum1 = parseInt(document.getElementById('main_calc_from_input').value);
    //document.getElementById('want-amount-display-value').innerHTML = sum1.formatMoney(0, '.', ' ')+' грн';
    var days1 = parseInt(document.getElementById('main_calc_to_input').value);
    var proc = glob_cred_CPROC/100; //2 процента в день
    var proc0 = glob_cred_CPROC0/100; //2 процента - разовая комиссия
    var proc_sum = sum1 + sum1*(1+proc0)*proc*days1 + sum1*proc0;
    document.getElementById('calc_result_sum').innerHTML = proc_sum.formatMoney(0, '.', '');
    
    var nowd = new Date();
    nowd.setDate(nowd.getDate()+days1); 
    var dates  = DateFormatMy(nowd);

    document.getElementById('calc_result_date').innerHTML =dates;
}

function CartDeactivate(id,oid,s)
{
 var vop = confirm("Видалити карту " + s + " ?");
 if (!vop) return false;
 doAjRouteJSON('do/do_card_deactivate.php','add_c_res','&CID='+id+'&OID='+oid,'','','');
 return false;
}

function Login1PostDijest()
{
  var l = document.getElementById('login_email').value;
  var p = document.getElementById('login_pass').value;
  var t = document.getElementById('login_token').value;
  
  var shaObj = new jsSHA('SHA-512', "TEXT");
  shaObj.update(p);
  var sh1 = shaObj.getHash("HEX");

  var shaObj2 = new jsSHA('SHA-512', "TEXT");
  shaObj2.update(sh1+t);
  var sh2 = shaObj2.getHash("HEX");
  
  login1_form.R_EMAIL.value = l;
  login1_form.R_SHA.value = sh2;
  
  var parstr = $('#login1_form').serialize(); 
  doAjRouteJSONPost('do/do_login1.php','login1_res','&'+parstr,'','login_cap_wrap','');
}
