var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID")==null) { location.href = "registration.html"; }
  //alert(sessionStorage.getItem("EmpID"));
  Connect_DB();
  GetAllCampaigns();
  GetUserRegister();
});


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
  dbBootCamp = firebase.firestore().collection("BootCamp");
  dbBootRegister = firebase.firestore().collection("BootRegister");
}


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
      if(filterJob[0].CampStatus==1) {
        //str += '<tr><td style="line-height: 1.3;">';
        str += '<div onclick="OpenATK(\''+ doc.id +'\')" style="margin-top:8px;">';
        if(doc.data().DateTime!="") { 
          str += '<div class="box-numberON"><img src="./img/Register.png" style="width:40px;margin-top:12px;"><div style="margin-top:2px;font-size:10px;">ลงทะเบียน</div></div>';
          str += '<div class="box-regON"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'<br>ลงทะเบียน <font color="#f68b1f">'+ doc.data().DateTime +'</font> ('+ doc.data().ATK +')</div>';
          str += '</div>';
        } else {
          str += '<div class="box-numberON"><img src="./img/Register.png" style="width:40px;margin-top:12px;"><div style="margin-top:2px;font-size:10px;">ลงทะเบียน</div></div>';
          str += '<div class="box-regON"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'';
          str += '<br><font color="#ff0000">ลงทะเบียนล่วงหน้า</font> <font color="#f68b1f">'+ doc.data().PreDateTime +'</font> ('+ doc.data().ATK +')</div>';
          //str += '<br>ลงทะเบียน <font color="#f68b1f">'+ doc.data().DateTime +'</font></div>';
          str += '</div>';
        }
      } else {
        if(doc.data().DateTime!="") {
          str += '<div style="margin-top:8px;">';
          str += '<div class="box-number"><img src="./img/true.png" width="40px"><div style="margin-top:6px;font-size:10px;">สำเร็จ</div></div>';
          str += '<div class="box-reg"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'';
          str += '<br><font color="#3ec303">ลงทะเบียน</font> <font color="#f68b1f">'+ doc.data().DateTime +'</font> ('+ doc.data().ATK +')</div>';
        } else {
          str += '<div onclick="DeleteRegister(\''+ doc.id +'\')" style="margin-top:8px;">';
          str += '<div class="box-number"><img src="./img/false.png" width="40px"><div style="margin-top:6px;font-size:10px;">ไม่สำเร็จ</div></div>';
          str += '<div class="box-regNOT"><font color="#0056ff">'+ filterJob[0].CampName +'</font> ('+ filterJob[0].CampRound +')<br>'+ filterJob[0].TrainingDays +'<br>'+ filterJob[0].Hotel +'';
          str += '<br><font color="#ff0000">ลงทะเบียนล่วงหน้า</font> <font color="#f68b1f">'+ doc.data().PreDateTime +'</font> ('+ doc.data().ATK +')</div>';
        }
        str += '</div>';
      }
    });
    //str += '</tbody></table>';
    $("#DisplaySumRegister").html("<div class='btn-t3' style='font-size:12px;'>ลงทะเบียนแล้วรวม "+SumRegister+" รายการ</div>");
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
