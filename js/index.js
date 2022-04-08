var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });


$(document).ready(function () {
  var str = "";
  var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
  var sLineName = "Website";
  var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";
  sessionStorage.setItem("LineID", sLineID);
  sessionStorage.setItem("LineName", sLineName);
  sessionStorage.setItem("LinePicture", sLinePicture);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"><div id="DisplayVaccine"></div></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  Connect_DB();
  CheckData();

  //main()

});

async function main() {
  await liff.init({ liffId: "1656865573-d86OODkJ" });
  document.getElementById("isLoggedIn").append(liff.isLoggedIn());
  if(liff.isLoggedIn()) {
    getUserProfile();
  } else {
    liff.login();
  }
}


async function getUserProfile() {
  var str = "";
  const profile = await liff.getProfile();
  sessionStorage.setItem("LineID", profile.userId);
  sessionStorage.setItem("LineName", profile.displayName);
  sessionStorage.setItem("LinePicture", profile.pictureUrl);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
  CheckData();
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore().collection("CheckProfile");
  dbBootCamp = firebase.firestore().collection("BootCamp");
}


sCheckRec = 0;
function CheckData() {
  //document.getElementById('BootCampLoading').style.display='none';
  //document.getElementById('myRegister').style.display='block';
  db.where('lineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //Eid = doc.id;
      //sDateRegister = doc.data().DateRegister;
      sessionStorage.setItem("EmpID", doc.data().empID);
      sessionStorage.setItem("EmpName", doc.data().empName);
      sessionStorage.setItem("EmpPhone", doc.data().empPhone);
      sessionStorage.setItem("EmpGroup", doc.data().empRH);
      //document.getElementById("txtEmpID").value = doc.data().empID;
      //document.getElementById("txtEmpName").value = doc.data().empName;
      //document.getElementById("txtEmpGroup").value = doc.data().empRH;
      sCheckRec = 1;
      //alert(sCheckRec);
    });
    //$("#test *").attr("disabled", "disabled").off('click');
    if(sCheckRec==1) {
      CheckOpenRegister();
    } else {
      alert("noooooo");
    }
  });
}



function CheckOpenRegister() {
  var str = "";
  dbBootCamp.where('CampStatus','==',1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div>'+ doc.data().CampName +'</div>';

/*
      sCampName = doc.data().CampName;
      sEmpType = doc.data().EmpType;
      sCheckOpen = doc.data().CampName;
      sCampRound = doc.data().CampRound;
      sLINERegister = doc.data().LINERegister;
      sessionStorage.setItem("CampName", doc.data().CampName);
*/
    });
    $("#DisplayRegister").html(str);
  });
}






/*
function ShowVaccina() {
  //alert(sessionStorage.getItem("EmpID"));
  var str = "";
  //dbVaccine.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
  dbVaccine.where('EmpID','==',sessionStorage.getItem("EmpID"))
  .orderBy('Vaccine_no','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidVaccine = doc.id;
      str += '<div class="box-vaccina"><div style="width:80px; height: 80px; float: left;text-align: center;">';
      str += '<img src="./img/syringe.png" class="img-syringe">';
      str += '<div style="font-size: 11px;margin-top:3px;">เข็มที่ '+doc.data().Vaccine_no+'</div></div>';
      str += '<div style="float: left;width:auto;line-height: 1.4;font-size: 12px;color:#888;font-weight: 400;">';
      str += 'วัคซีนเข็มที่ : '+doc.data().Vaccine_no+'<br>ชื่อวัคซีน : '+doc.data().Vaccine_name+'<br>สถานที่ฉีด : '+doc.data().Vaccine_place+'<br>เมื่อวันที่ : '+ConvrtDate(doc.data().Vaccine_date)+'</div>';
      str += '<div style="width:60px; height: 60px; float: right;text-align: center;">';
      str += '<img src="./img/edit.png" class="hover-edit" onclick="EditVaccine(\''+ doc.id +'\')"><br>';
      str += '<img src="./img/delete.png" class="hover-edit" onclick="DelVaccine(\''+ doc.id +'\')"></div></div>';
    });
    $("#DisplayVaccine").html(str);
  });


}


function AddNewVaccina() {
  var str = "";

  str += '<div>เพิ่มประวัติการฉีดวัคซีน</div>';
  str += '<div class="btn-t2" onclick="CloseAll()" style="margin:15px auto 10px 10px;font-size:11px;">ปิดหน้าต่างนี้</div>';
  $("#NewVaccina").html(str);
  document.getElementById("id01").style.display = "block";
}


var sCheckBottom = 0;
function ClickSaveVaccine() {
  sCheckBottom = 0;
  stxtNoVaccine = document.getElementById("txtNoVaccine").value;
  stxtNameVaccine = document.getElementById("txtNameVaccine").value;
  stxtPlace = document.getElementById("txtPlace").value;
  stxtDate = document.getElementById("txtDate").value;
  if(stxtNoVaccine !== null && stxtNoVaccine !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtNameVaccine !== null && stxtNameVaccine !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtPlace !== null && stxtPlace !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtDate !== null && stxtDate !== '') { sCheckBottom = sCheckBottom+1; }
  if(sCheckBottom==4) {
    SaveData();
  } else {
    alert("คุณยังกรอกข้อมูลไม่ครบถ้วน = "+sCheckBottom);
  }
}


function SaveData() {
  NewDate();
  if(EidVaccine!="") {
    dbVaccine.doc(EidVaccine).update({
      Vaccine_no : document.getElementById("txtNoVaccine").value,
      Vaccine_name : document.getElementById("txtNameVaccine").value,
      Vaccine_place : document.getElementById("txtPlace").value,
      Vaccine_date : document.getElementById("txtDate").value,
      Vaccine_update : dateString
    });        
  } else {
    dbVaccine.add({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      EmpID : sessionStorage.getItem("EmpID"),
      EmpName : sessionStorage.getItem("EmpName"),
      //EmpPhone : document.getElementById("txtEmpPhone").value,
      Vaccine_no : document.getElementById("txtNoVaccine").value,
      Vaccine_name : document.getElementById("txtNameVaccine").value,
      Vaccine_place : document.getElementById("txtPlace").value,
      Vaccine_date : document.getElementById("txtDate").value,
      Vaccine_update : dateString
    });
  }
  ShowVaccina();
  document.getElementById('id01').style.display='none';
}


function EditVaccine(id) {
  dbVaccine.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidVaccine = doc.id;
      document.getElementById("txtNoVaccine").value = doc.data().Vaccine_no;
      document.getElementById("txtNameVaccine").value = doc.data().Vaccine_name;
      document.getElementById("txtPlace").value = doc.data().Vaccine_place;
      document.getElementById("txtDate").value = doc.data().Vaccine_date;
    });
  });
  document.getElementById("id01").style.display = "block";
}


function DelVaccine(id) {
  dbVaccine.doc(id).delete();
  ShowVaccina();
  //document.getElementById("id02").style.display = "none";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}


function ConvrtDate(str) {
  var date = new Date(str),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()+543].join("/");
}



function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

/*

var ArrBootCamp = new Array();
var json = "";
function GetAllCampaigns() {
  var i = 0;
  dbBootCamp.get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      ArrBootCamp.push([doc.data().CampRound, doc.data().CampName, doc.data().Hotel, doc.data().TrainingDays, doc.data().CampStatus]);
      i = i+1;
    });
    json = ArrBootCamp.map(function (value, key) {
      return {
          "CampRound": value[0],
          "CampName": value[1],
          "Hotel": value[2],
          "TrainingDays": value[3],
          "CampStatus": value[4]
      }
    });
    //console.log(json);
    //var SearchJob = "CYC/CYB#4";
    //console.log(JSON.stringify(json)); // need string
    //var filterJob = json.filter(item => item.EmpType.indexOf(SearchJob) > -1);
    //console.log("Job Name === "+filterJob[0].CampName);
  });
}



function GetUserRegister() {
  var SumRegister = 0;
  var str = '';
  var filterJob = '';
  //str += '<table class="table table-bordered table-striped table-responsive-stack" style="margin:10px auto;width:95%;">';
  //str += '<thead class="thead-dark"><tr style="background:#0056ff; color:#fff;"><th style="text-align: center">ข้อมูลการลงทะเบียนกิจกรรม</th></tr></thead><tbody>';
  dbBootRegister.where('EmpID','==',sessionStorage.getItem("EmpID"))
  //dbBootRegister.where('EmpID','==','48719')
  .orderBy('TimeStamp','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      SumRegister = SumRegister+1;
      filterJob = json.filter(item => item.CampRound.indexOf(doc.data().CampRound) > -1);
      //alert(filterJob[0].CampStatus+"==="+doc.data().CampRound);
      if(filterJob[0].CampStatus==0) {
        //str += '<tr><td style="line-height: 1.3;">';
        str += '<div onclick="OpenATK(\''+ doc.id +'\')">';
        if(doc.data().DateTime!="") { 
          str += '<div class="box-numberON"><img src="./img/Register.png" style="width:40px;margin-top:10px;"><div style="margin-top:2px;font-size:10px;">ลงทะเบียน</div></div>';
          str += '<div class="box-regON"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'<br>ลงทะเบียน <font color="#f68b1f">'+ doc.data().DateTime +'</font></div>';
          str += '<div>';
        } else {
          str += '<div class="box-numberON"><img src="./img/Register.png" style="width:40px;margin-top:10px;"><div style="margin-top:2px;font-size:10px;">ลงทะเบียน</div></div>';
          str += '<div class="box-regON"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'';
          str += '<br><font color="#ff0000">ลงทะเบียนล่วงหน้า</font> <font color="#f68b1f">'+ doc.data().PreDateTime +'</font></div>';
          //str += '<br>ลงทะเบียน <font color="#f68b1f">'+ doc.data().DateTime +'</font></div>';
          str += '<div>';
        }
      } else {
        //str += '<tr><td style="line-height: 1.3;">';
        //str += '<div class="box-number">'+ SumRegister +'</div>';
        if(doc.data().DateTime!="") {
          str += '<div>';
          str += '<div class="box-number"><img src="./img/true.png" width="40px"><div style="margin-top:5px;font-size:10px;">สำเร็จ</div></div>';
          str += '<div class="box-reg"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'';
          str += '<br><font color="#3ec303">ลงทะเบียน</font> <font color="#f68b1f">'+ doc.data().DateTime +'</font></div>';
        } else {
          str += '<div onclick="DeleteRegister(\''+ doc.id +'\')">';
          str += '<div class="box-number"><img src="./img/false.png" width="40px"><div style="margin-top:5px;font-size:10px;">ไม่สำเร็จ</div></div>';
          str += '<div class="box-regNOT"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'';
          str += '<br><font color="#ff0000">ลงทะเบียนล่วงหน้า</font> <font color="#f68b1f">'+ doc.data().PreDateTime +'</font></div>';
        }
        str += '<div>';
      }
    });
    //str += '</tbody></table>';
    $("#DisplaySumRegister").html("<div class='btn-t3'>ลงทะเบียนแล้วรวม "+SumRegister+" รายการ</div>");
    $("#DisplayRegister").html(str);
  });
}



function OpenATK(id) {
  //alert(id);
  var str = "";
  dbBootRegister.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidStockList = doc.id;
      str += '<div style="margin-top:20px;">';
      //str += '<div class="redeem-header">'+ doc.data().EmpType +'</div>';
      //str += '<div class="box-member"><div><img src=\''+ doc.data().LinePicture +'\' style="width:120px;"></div></div>';

      str += '<div style="margin:auto;text-align: left;">';
      str += '<div class="redeem-txt5">'+ doc.data().EmpName +'</div>';
      //str += '<div class="redeem-txt4" style="width:100px;">โทรศัพท์</div>';
      //str += '<div class="redeem-txt5" style="width:480px;">'+ doc.data().EmpPhone +'</div>';
      //str += '<div class="redeem-txt4" style="width:100px;">สังกัด</div>';
      str += '<div class="redeem-txt5">'+ doc.data().EmpRH +'</div>';
      //str += '<div class="redeem-txt4" style="width:100px;">ลงทะเบียน</div>';
      //str += '<div class="redeem-txt5" style="width:480px;">'+ doc.data().DateTime +'</div><div class="clr"></div>';
      //str += '<div class="redeem-txt4" style="width:100px;">ผล ATK</div>';
      str += '<div class="redeem-txt5">'+ doc.data().ATK +'</div><div class="clr"></div>';
      //str += '<div class="redeem-txt4" style="width:100px;">รูป ATK</div>';
      str += '<div style="margin:15px;"><img src="'+ doc.data().ATKimg +'" width="100%;"></div>';
      str += '</div>';
      //str += '<div class="btn-t4" onclick="DeleteRec(\''+ doc.id +'\')" style="margin:30px auto 20px auto;">ลบรายการนี้</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin:15px auto 10px 10px;font-size:11px;">ปิดหน้าต่างนี้</div>';
    });
    $("#DisplayByItem").html(str);
  });
  document.getElementById("id01").style.display = "block";
}


function DeleteRegister(id) {
  //alert(id);
  var str = "";
  dbBootRegister.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidStockList = doc.id;
      str += '<div style="margin-top:20px;">';
      str += '<div style="margin:auto;text-align: left;">';
      str += '<div class="redeem-txt5">'+ doc.data().EmpName +'</div>';
      str += '<div class="redeem-txt5">'+ doc.data().EmpRH +'</div>';
      str += '<div class="redeem-txt5">'+ doc.data().ATK +'</div><div class="clr"></div>';
      str += '<div style="margin:15px;"><img src="'+ doc.data().ATKimg +'" width="100%;"></div>';
      str += '</div>';
      str += '<div class="btn-t4" onclick="DeleteRec(\''+ doc.id +'\')" style="font-size:11px; margin:10px auto 20px auto;">ลบรายการนี้</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin:15px auto 10px 10px;font-size:11px;">ปิดหน้าต่างนี้</div>';
    });
    $("#DisplayDeleteItem").html(str);
  });
  document.getElementById("id02").style.display = "block";
}

function DeleteRec(x) {
  dbBootRegister.doc(x).delete();
  GetUserRegister();
  //alert("ลบข้อมูลเรียบร้อยแล้ว");
  document.getElementById("id02").style.display = "none";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
}

*/