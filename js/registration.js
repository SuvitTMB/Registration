var stxtEmpID = "";
var stxtEmpName = "";
var stxtEmpPhone = "";
var stxtEmpGroup = "";

var db = "";
var dbBootCamp = "";
var dbBootMember = "";
var CheckFoundData = 0;
var Eid = "";
var EidBootCamp = "";
var EidBootRegister = ""; 
var EidBootMember = "";
var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var sDateRegister = "";
var i = 0;
const x = document.querySelectorAll(`div.com[min="${i}"]`);
var sCheckOpen = "";
//var sEmpType = "";
var sCampRound = "";
var sDateTime = ""; 
var sPreDateTime = "";
var sLINERegister = "";
var sATK = "";
//var xRound = "T01Day1";
//var xRound = "WB-Q2";
var xRound = "";
var simg_pre = "";
var parts = [];
var parts1 = [];
parts = xRound.split("-"); //สร้างString arry ชื่อparts
var FinalRound = parts[0]; // 004  //String part1 เก็บค่าparts[0]
var FinalRoundSplit = parts[1]; // 004  //String part1 เก็บค่าparts[0]
//var part2 = parts[1]; // 034556  //String part2 เก็บค่าparts[1]

$(document).ready(function () {
  //PreRegister เปิดลงทะเบียนล่วงหน้า
  //sessionStorage.clear();
  sessionStorage.setItem("PreRegister", 1);
  sessionStorage.setItem("EmpMember", 0);
  
/*
  var str = "";
  var sLineID = "Ua6b6bf745bd9bfd01a180de1a05c23b3";
  var sLineName = "Website";
  var sLinePicture = "https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8";
  sessionStorage.setItem("LineID", sLineID);
  sessionStorage.setItem("LineName", sLineName);
  sessionStorage.setItem("LinePicture", sLinePicture);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"><div id="DisplayVaccine"></div></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  //str += '';
  $("#MyProfile").html(str);  
  Connect_DB();
  //CheckUserRegister();
  //CheckBootCampOpen();
*/  

  main()
});



async function main() {
  await liff.init({ liffId: "1656865573-pzdDD5zQ" });
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
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"><div id="DisplayVaccine"></div></div>';
  //str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile" width="100px"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
  //CheckUserRegister();
  //CheckBootCampOpen();
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
  dbBootRegister = firebase.firestore().collection("BootRegister");
  dbBootMember = firebase.firestore().collection("BootMember");
  dbVaccineUser = firebase.firestore().collection("Vaccine");
  CheckEmpID();
  CheckBootCampOpen();
}


function CheckEmpID() {
  db.where('lineID','==',sessionStorage.getItem("LineID"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sessionStorage.setItem("EmpID", doc.data().empID);
      //alert(doc.data().empID);
    });
  });
}



function CheckBootCampOpen() {
  if(sessionStorage.getItem("LineID")==null) { main(); }
  var str = "";
  dbBootCamp.where('CampStatus','==',1)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //alert(doc.data().CampName);
      //if(doc.data().LINERegister==1) {
        xRound = doc.data().EmpType;
        EidBootCamp = doc.id;
        sCampName = doc.data().CampName;
        sEmpType = doc.data().EmpType;
        sCheckOpen = doc.data().CampName;
        sCampRound = doc.data().CampRound;
        //sLINERegister = doc.data().LINERegister;
        simg_pre = doc.data().img_pre;
        sessionStorage.setItem("CampName", doc.data().CampName);
        sessionStorage.setItem("PicCamp", doc.data().PicCamp);
        document.getElementById('BootCampLoading').style.display='block';
      //}
    });
    if(xRound!="") {
      var str1 = "";
      str1 += '<div class="title-head">ttb Registration System</div>';
      str1 += '<div style="color:#ff0000; font-weight: 600;font-size: 12px;">"ระบบลงทะเบียนล่วงหน้า"</div>';
      if(simg_pre!=null && simg_pre!="") {
        str1 += '<div style="margin-top:-1px;"><img src ="'+simg_pre+'" style="width:100%; max-width:240px;"></div>';
      } else {
        str1 += '<div style="margin-top:-1px;"><img src ="./img/Register.png" style="width:100%; max-width:240px;"></div>';
      }
      $("#DisplayPreReg").html(str1);

      str += '<div class="btn-t3" style="margin-top:20px;width:250px;font-size:11px;" onclick="CheckData()">คลิกลงทะเบียนล่วงหน้า<br>'+sCheckOpen+'</div>';
      $("#gotoLink").html(str);
      $("#DisplayRound").html(sCheckOpen);
      CheckVaccine();
      CheckRegister();
    } else {
      RegisterClose();
    }

  });
}


function RegisterClose() {
  //alert("Close");
  //alert(sessionStorage.getItem("EmpID"));
  document.getElementById('BootCampClose').style.display='block';
  //alert("ระบบยังไม่เปิดให้ลงททะเบียน");
}



function CheckVaccine() {
  var i = 0;
  var str = "";
  dbVaccineUser.where('EmpID','==',sessionStorage.getItem("EmpID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = i+1;
    });
    if(i!=0) {
      str += '<div class="ShowVaccine">'+i+'<br>เข็ม</div>';
    } else {
      str += '<div class="ShowVaccine">0<br>เข็ม</div>';
    }
    $("#DisplayVaccine").html(str);
  });
}


var xCheckRegister = 0;
function CheckRegister() {
  var str = "";
  //alert("a-2===="+sEmpType);
  dbBootRegister.where('LineID','==',sessionStorage.getItem("LineID"))
  .where('CampRound','==',xRound)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      xCheckRegister = 1;
      EidBootRegister = doc.id;
      sPreDateTime = doc.data().PreDateTime; 
      sDateTime = doc.data().DateTime;
      sATK = doc.data().ATK;
      sessionStorage.setItem("EmpID", doc.data().EmpID);
      sessionStorage.setItem("EmpName", doc.data().EmpName);
      sessionStorage.setItem("CheckPass", doc.data().DateTime);
      sessionStorage.setItem("ATKimg", doc.data().ATKimg);
      sessionStorage.setItem("EmpGroup", doc.data().EmpRH);
      sessionStorage.setItem("EmpMember", doc.data().EmpMember);
      //alert(doc.data().empID);

      document.getElementById('OpenBootCamp').style.display='none';
      document.getElementById('myRegister').style.display='none';
      document.getElementById('myTimer').style.display='block';
    });

    if(EidBootRegister=="") {
      //document.getElementById('OpenBootCamp').style.display='block';
      document.getElementById('loading').style.display='none';
      document.getElementById('gotoLink').style.display='block';
    } else {
      //alert("check member");
      CheckMember();
      WaitingPage();
    }
  });
}



function getEid() {
  dbBootRegister.where('LineID','==',sessionStorage.getItem("LineID"))
  .where('CampRound','==',xRound)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidBootRegister = doc.id;
    });
    //alert("===="+EidBootRegister);
  });
}


sCheckRec = 0;
function CheckData() {
  document.getElementById('BootCampLoading').style.display='none';
  document.getElementById('myRegister').style.display='block';
  db.where('lineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      Eid = doc.id;
      sDateRegister = doc.data().DateRegister;
      sessionStorage.setItem("EmpID", doc.data().empID);
      //alert(doc.data().empID);
      sessionStorage.setItem("EmpName", doc.data().empName);
      sessionStorage.setItem("EmpPhone", doc.data().empPhone);
      sessionStorage.setItem("EmpGroup", doc.data().empRH);
      document.getElementById("txtEmpID").value = doc.data().empID;
      document.getElementById("txtEmpName").value = doc.data().empName;
      document.getElementById("txtEmpGroup").value = doc.data().empRH;
      sCheckRec = 1;
      WaitingPage();
      //alert(sCheckRec);
    });
    $("#test *").attr("disabled", "disabled").off('click');
    OpenForm();
  });
}


function CheckUserRegister() {
  //alert("Check");
  db.where('lineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //alert(doc.data().empID);
      sessionStorage.setItem("EmpID", doc.data().empID);
      //alert(doc.data().empID);
      sessionStorage.setItem("EmpName", doc.data().empName);
      //alert(doc.data().empID);
    });
  });
}



function OpenForm() {
  if(CheckFoundData==1) {
    document.getElementById('OpenBootCamp').style.display='none';
    document.getElementById('myRegister').style.display='none';
    document.getElementById('myTimer').style.display='block';
  } else {
    document.getElementById('OpenBootCamp').style.display='none';
    document.getElementById('myRegister').style.display='block';
    document.getElementById('myTimer').style.display='none';
  }
}



function EditData() {
    document.getElementById('myRegister').style.display='block';
    document.getElementById('myTimer').style.display='none';
}


function CheckMember() {
  dbBootMember.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
  .where('EmpType','==',sEmpType)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidBootMember = doc.id;
      xEmpType = doc.data().EmpType;
            //alert(doc.data().EmpID);

      //sessionStorage.setItem("EmpID", doc.data().EmpID);
      //alert(doc.data().empID);
      sessionStorage.setItem("EmpName", doc.data().EmpName);
      sessionStorage.setItem("EmpGroup", doc.data().EmpBranch);
      sessionStorage.setItem("EmpTable", doc.data().EmpTable);
      sessionStorage.setItem("TimeRegister", doc.data().TimeRegister);
      //sessionStorage.setItem("EmpMember", 1);
      //alert(doc.data().EmpSize);
      //alert(sessionStorage.getItem("EmpSize")+"==="+sessionStorage.getItem("EmpMember"));
      //alert(doc.data().EmpBranch);
      //alert("FinalRoundSplit="+FinalRoundSplit);
      if(FinalRoundSplit==undefined) {
        //alert(doc.data().EmpSize);
        sessionStorage.setItem("EmpSize", doc.data().EmpSize);
        sessionStorage.setItem("EmpMember", 1);
        //alert("Line296-sCheckRec="+sCheckRec);
        if(sCheckRec==1) {
          dbBootMember.doc(EidBootMember).update({
            LineID : sessionStorage.getItem("LineID"),
            LineName : sessionStorage.getItem("LineName"),
            LinePicture : sessionStorage.getItem("LinePicture"),
            //StatusRegister : 1
          });        
        }
      } else {
        sessionStorage.setItem("EmpSize", '');
        sessionStorage.setItem("EmpMember", 0);
      }       
    });
    //alert("Check Member - Size = "+sessionStorage.getItem("EmpSize"));
    //SaveData();
    //alert("(1)EidBootMember="+EidBootMember);
  });
}


function WaitingPage() {
  //alert("EidBootRegister==="+EidBootRegister);
  if(xCheckRegister==1) {
    document.getElementById('BootCampLoading').style.display='none';
  }
  var str = "";
  var xEmpType = "";
  dbBootMember.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
  .where('EmpType','==',sEmpType)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidBootMember = doc.id;
      xEmpType = doc.data().EmpType;
      //sessionStorage.setItem("EmpID", doc.data().EmpID);
      //alert(sessionStorage.getItem("EmpID"));
      sessionStorage.setItem("EmpName", doc.data().EmpName);
    });
    //alert(xEmpType);
    str +='<div class="title_container"><div class="title-head">ttb Registration System</div></div>';
    str +='<div style="color:#ff0000; font-weight: 600;font-size: 12px;margin-top:-15px;">ยืนยันการลงทะเบียนล่วงหน้า</div>';
    str +='<div class="profile-txt" style="font-size:12px;margin-top:-10px;">'+ sessionStorage.getItem("CampName") +'</div>';
    str +='<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="profile-member"></div>';
    str +='<div class="profile-txt">'+ sessionStorage.getItem("LineName") +'</div>';
    str +='<div><div style="padding-top:15px;color:#f68b1f;font-weight: 600;">คุณ'+sessionStorage.getItem("EmpName")+'</div>';
    //if(xEmpType!="") {
    //  str +='<div class="profile-txt1" style="line-height: 1.3;color:#0056ff;">ยินดีต้อนรับผู้เข้าอบรมสู่ BBD Bootcamp<br>หลักสูตร BBD Specialist Bootcamp<br><font color="#0056ff">รุ่น '+xEmpType+'</font></div>';
    //} else {
      str +='<div class="profile-txt1" style="line-height: 1.3;color:#ff0000;">ได้ลงทะเบียนล่วงหน้าเพื่อเข้าร่วมงาน<br><font color="#0056ff">'+ sessionStorage.getItem("CampName") +'</font><br>เรียบร้อยแล้ว</div>';
    //}
    //alert("sPreDateTime="+sPreDateTime);
    if(sPreDateTime!="") {
      str +='<div style="color:#999;font-size:11px;font-weight: 300;">ลงทะเบียนล่วงหน้า : '+ sPreDateTime +'</div>';
    }

    str +='<div style="font-size:13px;color:#f68b1f;padding:15px;">ภาพผล ATK ของคุณ</div>';
    //str +='<div class="profile-txt" style="margin-top:-25px;font-size:12px;">สำหรับ : '+ sessionStorage.getItem("CampName") +'</div>';
    str +='<div><img src="'+ sessionStorage.getItem("ATKimg") +'" style="width:100%;"></div>';
/*
    if(FinalRoundSplit==undefined) {
      //if(sessionStorage.getItem("EmpSize")!="" && sessionStorage.getItem("EmpSize")!=null) {
      if(sessionStorage.getItem("EmpMember")==1) {
        //alert("Size = "+sessionStorage.getItem("EmpSize"));
        str +='<div style="font-size:13px;color:#f68b1f;margin-top:25px;">ไซต์เสื้อที่คุณแจ้งไว้</div>';
        if(sessionStorage.getItem("EmpSize")!="") {
          str +='<div style="margin:10px;"><img src="./img/Size-'+ sessionStorage.getItem("EmpSize") +'.jpg" style="width:260px;"></div>';
        } else {
          str +='<div style="margin:10px;"><img src="./img/Size.jpg" style="width:260px;"></div>';
        }
        str +='<div style="padding-top:15px;">*** กรุณาสแกนลงทะเบียนหน้างานอีกครั้ง ***</div>';
        str +='<div style="margin-top:-4px;">*** อย่าลืมมารับ Welcome Pack หน้างาน ***</div>';
      } else {
        str +='<div style="padding:15px;">*** กรุณาสแกนลงทะเบียนหน้างานอีกครั้ง ***</div>';
      }
    } else {
        str +='<div style="padding:15px;">*** กรุณาสแกนลงทะเบียนหน้างานอีกครั้ง ***</div>';
    }
*/
    str +='<div style="padding:15px;color:#ff0000;font-weight:600;">*** กรุณาสแกนลงทะเบียนหน้างานอีกครั้ง ***</div>';
    str +='<div class="btn-t1" onclick="showRegister()" style="margin-top:10px;font-size:11px;width:220px;">ตรวจสอบรายชื่อ<br>ผู้ลงทะเบียนล่วงหน้า</div>';

    str +='</div></center>';
    $("#MyWating").html(str);    

  });
}



function showRegister() {
  var str = "";
  var sCountID = 0;
  str +='<div class="title-head">ttb Registration System</div>';
  str += '<div style="color:#ff0000; font-weight: 600;font-size: 12px;">"ระบบลงทะเบียนล่วงหน้า"</div>';
  str +='<div class="profile-txt" style="font-size:12px;margin-top:-10px;">'+ sessionStorage.getItem("CampName") +'</div>';

  str +='<div id="DisplayCountRegister" style="margin-bottom: 15px;"></div>';
  //alert(sEmpType);
  dbBootRegister.where('CampRound','==',xRound)
  .where('PreRegister','==',1)
  .orderBy('TimeStamp','desc')
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      sCountID = sCountID+1;
      str += '<div class="box-member" style="width:61px;height:80px;overflow:hidden;float: left;" onclick="OpenRegister(\''+ doc.id +'\')"><div><img src="'+ doc.data().LinePicture +'" class="img-register"></div><div class="clr txt-member" style="font-size:10px;">'+ doc.data().LineName +'</div></div>';
    });
    if(sessionStorage.getItem("ATKimg")!=null) {
      str +='<div class="btn-t4" onclick="WaitingPage()" style="margin-top:10px;width:250px;font-size:11px;">คลิกเพื่อดูผล ATK ของคุณ</div>';
    }
    $("#MyWating").html(str);    
    $("#DisplayCountRegister").html("<div>จำนวนลงทะเบียน : "+sCountID+" คน</div>");  
  });
}


function OpenRegister(x) {
  //alert(x);
  var str = "";
  dbBootRegister.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      //str +='<div class="profile-txt" style="font-size:12px;margin-top:-10px;">'+ sessionStorage.getItem("CampName") +'</div>';
      //str += '<div style="font-weight: 600;letter-spacing:4px;padding-bottom: 10px; color:#002d63;">'+doc.data().EmpType+'</div>';
      str += '<div style="margin-top:0px;"><img src=\''+ doc.data().LinePicture +'\' class="img-member-true" style="width:120px;height:120px;border-radius:50%;box-shadow: 0px 0px 6px 5px rgba(178,178,178,0.17);">';
      str += '<div class="txt-member1" style="padding-top: 6px;color:#f68b1f">'+doc.data().LineName+'</div>';
      str += '<div style="margin-top:20px;font-size:13px;font-weight: 600;color:#0056ff;">คุณ'+doc.data().EmpName+'</div>';
      str += '<div style="color:#002d63;">ลงทะเบียนกิจกรรม<br>'+sessionStorage.getItem("CampName")+'</div>';
      str += '<div style="color:#999;font-size:11px;">ลงทะเบียนล่วงหน้าเมื่อ '+doc.data().PreDateTime+'</div>';

/*
      str +='<div class="profile-txt" style="font-size:12px;margin-top:-10px;">'+ sessionStorage.getItem("CampName") +'</div>';
      //str += '<div style="font-weight: 600;letter-spacing:4px;padding-bottom: 10px; color:#002d63;">'+doc.data().EmpType+'</div>';
      str += '<div><img src=\''+ doc.data().LinePicture +'\' class="img-member-true" style="width:120px;height:120px;cursor: pointer;">';
      str += '<div class="txt-member1" style="padding-top: 15px;color:#f68b1f">'+doc.data().LineName+'</div>';
      str += '<div style="margin-top:20px;font-size:13px;font-weight: 600;">คุณ'+doc.data().EmpName+'</div>';
      str += '<div>ลงทะเบียนกิจกรรม<br>'+sessionStorage.getItem("CampName")+'</div>';
      str += '<div>ล่วงหน้าเมื่อวันที่<br>'+doc.data().PreDateTime+'</div>';
*/
    });
    $("#DisplayUser").html(str);  
    document.getElementById("id01").style.display = "block";
  });
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}

var sCheckBottom = 0;
function ClickSaveProfile() {
    //CheckMember();

  sCheckBottom = 0;
  if(sessionStorage.getItem("EmpID")!=null) {
    stxtEmpID = sessionStorage.getItem("EmpID");
    //alert(stxtEmpID);
  } else {
    stxtEmpID = document.getElementById("txtEmpID").value;
  }
  stxtEmpName = document.getElementById("txtEmpName").value;
  //stxtEmpPhone = document.getElementById("txtEmpPhone").value;
  stxtEmpGroup = document.getElementById("txtEmpGroup").value;
  stxtATK = document.getElementById("txtATK").value;
  if(stxtEmpID !== null && stxtEmpID !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpName !== null && stxtEmpName !== '') { sCheckBottom = sCheckBottom+1; }
  //if(stxtEmpPhone !== null && stxtEmpPhone !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpGroup !== null && stxtEmpGroup !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtATK !== null && stxtATK !== '') { sCheckBottom = sCheckBottom+1; }
  if(sessionStorage.getItem("ATKimg") !== null) { sCheckBottom = sCheckBottom+1; }
  if(sCheckBottom==5) {
    sATK = document.getElementById("txtATK").value;
    sessionStorage.setItem("EmpID", document.getElementById("txtEmpID").value);
    //alert(sessionStorage.getItem("EmpID"));
    SaveData();
  } else {
    //alert(sessionStorage.getItem("ATKimg"));
    alert("คุณยังกรอกข้อมูลไม่ครบถ้วน");
  }
}



function SaveData() {
  //CheckMember();
  //alert("ไซต์เสื้อ : "+sessionStorage.getItem("EmpSize"))
  var eSpace = "";
  var eEmpGroup = "other";
  NewDate();
  var TimeStampDate = Math.round(Date.now() / 1000);
  sDateTime = dateString;
  sessionStorage.setItem("CheckPass", sDateTime);
  if(document.getElementById("txtEmpGroup").value!="OTHER") {
    eEmpGroup = "BBD";
  } 
  //alert("Eid="+Eid);
  if(Eid=="") {
    db.add({
      lineID : sessionStorage.getItem("LineID"),
      linename : sessionStorage.getItem("LineName"),
      empPicture : sessionStorage.getItem("LinePicture"),
      empID : document.getElementById("txtEmpID").value,
      empName : document.getElementById("txtEmpName").value,
      //empPhone : document.getElementById("txtEmpPhone").value,
      empRH : document.getElementById("txtEmpGroup").value,
      empBr : eEmpGroup,
      statusconfirm : 2,
      statusedit : 1,
      statuspass : 0,
      memo : eSpace,
      empAddress : eSpace,
      DateRegister : dateString
    });
  } else {
    db.doc(Eid).update({
      lineID : sessionStorage.getItem("LineID"),
      linename : sessionStorage.getItem("LineName"),
      empPicture : sessionStorage.getItem("LinePicture"),
      //empID : document.getElementById("txtEmpID").value,
      empName : document.getElementById("txtEmpName").value,
      //empPhone : document.getElementById("txtEmpPhone").value,
      empRH : document.getElementById("txtEmpGroup").value,
      empBr : eEmpGroup,
      DateRegister : dateString
    });
  }

  if(EidBootRegister=="") {
    dbBootMember.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
    .where('EmpType','==',sEmpType)
    .limit(1)
    .get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        sessionStorage.setItem("EmpMember", 1);
        sessionStorage.setItem("EmpSize", doc.data().EmpSize);
      });
      if (stxtEmpID.length < 5) stxtEmpID = '0' + stxtEmpID;
      dbBootRegister.add({
        LineID : sessionStorage.getItem("LineID"),
        LineName : sessionStorage.getItem("LineName"),
        LinePicture : sessionStorage.getItem("LinePicture"),
        //EmpID : document.getElementById("txtEmpID").value,
        EmpID : stxtEmpID,
        EmpName : document.getElementById("txtEmpName").value,
        //EmpPhone : document.getElementById("txtEmpPhone").value,
        EmpRH : document.getElementById("txtEmpGroup").value,
        ATK : document.getElementById("txtATK").value,
        ATKimg : sessionStorage.getItem("ATKimg"),
        CampRound : sCampRound,
        EmpType : sEmpType,
        EmpMember : parseInt(sessionStorage.getItem("EmpMember")),
        EmpSize : sessionStorage.getItem("EmpSize"),
        //EmpMember : gMamber,
        //EmpSize : gSize,
        StatusRegister : 0,
        TimegetBox : eSpace,
        TimeStamp : eSpace,
        DateTime : eSpace,
        PreRegister : parseInt(sessionStorage.getItem("PreRegister")),
        PreDateTime : dateString
      });
      sPreDateTime = dateString;
      //alert("Size222:"+gSize);
    });
  }
  WaitingPage();
  document.getElementById('myRegister').style.display='none';
  document.getElementById('myTimer').style.display='block';
}


function gotowebsite() {
  window.location.href = 'checkid.html';
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


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}




function phone_formatting(ele,restore) {
  var new_number,
      selection_start = ele.selectionStart,
      selection_end = ele.selectionEnd,
      number = ele.value.replace(/\D/g,'');
  
  // automatically add dashes
  if (number.length > 2) {
    // matches: 123 || 123-4 || 123-45
    new_number = number.substring(0,3) + '-';
    if (number.length === 4 || number.length === 5) {
      // matches: 123-4 || 123-45
      new_number += number.substr(3);
    }
    else if (number.length > 5) {
      // matches: 123-456 || 123-456-7 || 123-456-789
      new_number += number.substring(3,6) + '-';
    }
    if (number.length > 6) {
      // matches: 123-456-7 || 123-456-789 || 123-456-7890
      new_number += number.substring(6);
    }
  }
  else {
    new_number = number;
  }
  ele.value =  (new_number.length > 12) ? new_number.substring(12,0) : new_number; 
  if (new_number.slice(-1) === '-' && restore === false
      && (new_number.length === 8 && selection_end === 7)
          || (new_number.length === 4 && selection_end === 3)) {
      selection_start = new_number.length;
      selection_end = new_number.length;
  }
  else if (restore === 'revert') {
    selection_start--;
    selection_end--;
  }
  ele.setSelectionRange(selection_start, selection_end);
}
  
function phone_number_check(field,e) {
  var key_code = e.keyCode,
      key_string = String.fromCharCode(key_code),
      press_delete = false,
      dash_key = 189,
      delete_key = [8,46],
      direction_key = [33,34,35,36,37,38,39,40],
      selection_end = field.selectionEnd;
  
  // delete key was pressed
  if (delete_key.indexOf(key_code) > -1) {
    press_delete = true;
  }
  
  // only force formatting is a number or delete key was pressed
  if (key_string.match(/^\d+$/) || press_delete) {
    phone_formatting(field,press_delete);
  }
  // do nothing for direction keys, keep their default actions
  else if(direction_key.indexOf(key_code) > -1) {
    // do nothing
  }
  else if(dash_key === key_code) {
    if (selection_end === field.value.length) {
      field.value = field.value.slice(0,-1)
    }
    else {
      field.value = field.value.substring(0,(selection_end - 1)) + field.value.substr(selection_end)
      field.selectionEnd = selection_end - 1;
    }
  }
  // all other non numerical key presses, remove their value
  else {
    e.preventDefault();
//    field.value = field.value.replace(/[^0-9\-]/g,'')
    phone_formatting(field,'revert');
  }

}

//document.getElementById('txtEmpPhone').onkeyup = function(e) {
//  phone_number_check(this,e);
//}


