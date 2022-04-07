var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var EidVaccine = "";

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID")==null) { location.href = "registration.html"; }
  //alert(sessionStorage.getItem("EmpID"));
  Connect_DB();
  ShowVaccine();
  //VaccineUser();
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
  dbVaccine = firebase.firestore().collection("Vaccine");
  dbVaccineUser = firebase.firestore().collection("Vaccine");
}


function ShowVaccine() {
  //alert(sessionStorage.getItem("EmpID"));
  var str = "";
  //dbVaccine.where('EmpID','==',parseFloat(sessionStorage.getItem("EmpID")))
  dbVaccine.where('EmpID','==',sessionStorage.getItem("EmpID"))
  .orderBy('Vaccine_no','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidVaccine = doc.id;
      str += '<div class="box-vaccina"><div style="width:17%; height: 80px; float: left;text-align: center;">';
      str += '<img src="./img/syringe.png" class="img-syringe" style="max-width:50px;">';
      str += '<div style="font-size: 11px;margin-top:3px;">เข็มที่ '+doc.data().Vaccine_no+'</div></div>';
      str += '<div style="float: left;width:69%;line-height: 1.4;font-size: 12px;color:#888;font-weight: 400;">';
      str += 'วัคซีนเข็มที่ : '+doc.data().Vaccine_no+'<br>ชื่อวัคซีน : '+doc.data().Vaccine_name+'<br>ฉีดที่ : '+doc.data().Vaccine_place+'<br>เมื่อวันที่ : '+ConvrtDate(doc.data().Vaccine_date)+'</div>';
      str += '<div style="width:14%; height: 60px; float: right;text-align: center;">';
      str += '<img src="./img/edit.png" class="hover-edit" onclick="EditVaccine(\''+ doc.id +'\')"><br>';
      str += '<img src="./img/delete.png" class="hover-edit" onclick="DelVaccine(\''+ doc.id +'\')"></div></div>';
    });
    $("#DisplayVaccine").html(str);
  });
}



EidVaccineUser = "";
function VaccineUser() {
  dbVaccineUser.where('EmpID','==',sessionStorage.getItem("EmpID"))
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidVaccineUser = doc.id;
      sessionStorage.setItem("ViccineURLUser", doc.data().ViccineURL);
    });
    if(EidVaccineUser!="") {

      var aViewImg = "<div><center><img src='"+sessionStorage.getItem("ViccineURLUser")+"' width='100%'></center></div>";
      $("#DisplayVaccineUser").html(aViewImg);
      document.getElementById('id03').style.display='block';
    } else {
      document.getElementById('id02').style.display='block';
      //ImgVaccina();
    }
  });
}


function LoadNewVaccine() {
  //alert("Delete");
  document.getElementById('id03').style.display='none';
  document.getElementById('id02').style.display='block';
}


function AddNewVaccina() {
  EidVaccine = "";
  document.getElementById("txtNoVaccine").value = "";
  document.getElementById("txtNameVaccine").value = "";
  document.getElementById("txtPlace").value = "";
  document.getElementById("txtDate").value = "";
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
  ShowVaccine();
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


function ImgVaccina() {
  var file1 = "";
  document.getElementById('id02').style.display='block';

  $('#imageFile').change(function(evt) {
    var files = evt.target.files;
    file1 = files[0];
    if (file1) {
      var reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('preview').src = e.target.result;
          //alert(reader);
          ResizeImage();
      };
      reader.readAsDataURL(file1);
    }
  });
}


function ResizeImage() {
    var file = "";
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById('imageFile').files;
        file = filesToUploads[0];
        //alert(filesToUploads[0]);
        if (file) {
            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function(e) {
              var img = document.createElement("img");
              img.src = e.target.result;
              var canvas = document.createElement("canvas");
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0);
              var MAX_WIDTH = 400;
              var MAX_HEIGHT = 400;
              var width = img.width;
              var height = img.height;
              if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }
              canvas.width = width;
              canvas.height = height;
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, width, height);

              dataurl = canvas.toDataURL(file.type);
              //document.getElementById('output').src = dataurl;
              //var a = "<div><center><img src='"+url+"' width='100%'></center></div>";
              //$("#MyATKUPloading").html(a);   
              //document.getElementById('MyATKUPloading').src = dataurl;


console.log(file);

            NewDate();
            var sCampRound = "Test";
            var DateTimeStamp = Math.round(Date.now() / 1000);
            var ImgName = sCampRound+"-"+sessionStorage.getItem("EmpID")+"-"+DateTimeStamp;
            var uploadTask = firebase.storage().ref('test/'+ImgName).put(file);
            var storage = firebase.storage().ref('test/'+ImgName);
            var upload = storage.put(file);

            //document.getElementById('MyATKUPloading').src = dataurl;

            upload.on(
              "state_changed",
              function progress(snapshot) {
                //var percentage =
                //(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              },

              function error() {
                alert("error uploading file");
              },

              function complete() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
                  sessionStorage.setItem("ViccineURLUser", url);
                  if(EidVaccineUser=="") {
                    dbVaccineUser.add({
                      LineID : sessionStorage.getItem("LineID"),
                      LineName : sessionStorage.getItem("LineName"),
                      LinePicture : sessionStorage.getItem("LinePicture"),
                      EmpID : sessionStorage.getItem("EmpID"),
                      EmpName : sessionStorage.getItem("EmpName"),
                      ViccineURL : url,
                      Vaccine_update : dateString
                    });
                  } else {
                    dbVaccineUser.doc(EidVaccineUser).update({
                      ViccineURL : url,
                      Vaccine_update : dateString
                    });
                  }
                  VaccineUser()
                  document.getElementById('id02').style.display='none';
                  document.getElementById('id03').style.display='block';
                }
                );
              }
            );
            }
            reader.readAsDataURL(file);
        }
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}


function DeleteIMG() {
/*
  deleteChatFiles(sessionStorage.getItem("ATKimg")) {
    const spaceRef = firebase
      .storage()
      .ref()
      .child(filePath);
    spaceRef.delete();
  }
*/
  //alert(sessionStorage.getItem("ATKimg"));
  //var fileLocation = sessionStorage.getItem("ATKimg");
  //Firebase.storage().ref().child(fileLocation).delete();
  alert("Delete Done");
  //alert("Delete Img");

}


function DelVaccine(id) {
  dbVaccine.doc(id).delete();
  ShowVaccine();
  //document.getElementById("id02").style.display = "none";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
  document.getElementById('id03').style.display='none';
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
