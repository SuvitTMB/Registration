var _0x11f24e=_0x1880;(function(_0x548e22,_0x2f9283){var _0x56564d=_0x1880,_0xcce7a2=_0x548e22();while(!![]){try{var _0x1f246f=parseInt(_0x56564d(0x1fc))/0x1+-parseInt(_0x56564d(0x22c))/0x2+-parseInt(_0x56564d(0x227))/0x3*(-parseInt(_0x56564d(0x221))/0x4)+parseInt(_0x56564d(0x1ca))/0x5*(parseInt(_0x56564d(0x1c1))/0x6)+parseInt(_0x56564d(0x1d9))/0x7*(parseInt(_0x56564d(0x194))/0x8)+parseInt(_0x56564d(0x1c6))/0x9+-parseInt(_0x56564d(0x20b))/0xa*(parseInt(_0x56564d(0x1a8))/0xb);if(_0x1f246f===_0x2f9283)break;else _0xcce7a2['push'](_0xcce7a2['shift']());}catch(_0x1f0867){_0xcce7a2['push'](_0xcce7a2['shift']());}}}(_0x458a,0x61a71));function _0x1880(_0x10fb6c,_0x4eb2f0){var _0x458a8d=_0x458a();return _0x1880=function(_0x188039,_0x1e10c2){_0x188039=_0x188039-0x18a;var _0x115439=_0x458a8d[_0x188039];return _0x115439;},_0x1880(_0x10fb6c,_0x4eb2f0);}var stxtEmpID='',stxtEmpName='',stxtEmpPhone='',stxtEmpGroup='',db='',dbBootCamp='',dbBootMember='',CheckFoundData=0x0,Eid='',EidBootCamp='',EidBootRegister='',EidBootMember='',dateString=new Date()[_0x11f24e(0x1f0)](_0x11f24e(0x230),{'timeZone':'Asia/Jakarta'}),sDateRegister='',i=0x0;const x=document['querySelectorAll'](_0x11f24e(0x1cb)+i+'\x22]');var sCheckOpen='',sCampRound='',sDateTime='',sPreDateTime='',sLINERegister='',sATK='',xRound='',simg_pre='',parts=[],parts1=[];parts=xRound['split']('-');var FinalRound=parts[0x0],FinalRoundSplit=parts[0x1];$(document)[_0x11f24e(0x1a3)](function(){var _0x8666cc=_0x11f24e;sessionStorage[_0x8666cc(0x225)](_0x8666cc(0x1b0),0x1),sessionStorage[_0x8666cc(0x225)](_0x8666cc(0x204),0x0),main();});async function main(){var _0x372ef8=_0x11f24e;await liff[_0x372ef8(0x22a)]({'liffId':_0x372ef8(0x1ff)}),document['getElementById'](_0x372ef8(0x1d6))[_0x372ef8(0x1e0)](liff['isLoggedIn']()),liff[_0x372ef8(0x1d6)]()?getUserProfile():liff[_0x372ef8(0x1a0)]();}async function getUserProfile(){var _0x5a08fd=_0x11f24e,_0x5dda74='';const _0x277fec=await liff[_0x5a08fd(0x1c9)]();sessionStorage['setItem'](_0x5a08fd(0x1d4),_0x277fec[_0x5a08fd(0x19d)]),sessionStorage[_0x5a08fd(0x225)](_0x5a08fd(0x1d0),_0x277fec[_0x5a08fd(0x1fa)]),sessionStorage[_0x5a08fd(0x225)](_0x5a08fd(0x1d2),_0x277fec[_0x5a08fd(0x200)]),_0x5dda74+=_0x5a08fd(0x1ef)+sessionStorage[_0x5a08fd(0x1c3)](_0x5a08fd(0x1d2))+_0x5a08fd(0x19a),_0x5dda74+='<div\x20class=\x22NameLine\x22>'+sessionStorage[_0x5a08fd(0x1c3)](_0x5a08fd(0x1d0))+_0x5a08fd(0x1f6),$(_0x5a08fd(0x1e6))[_0x5a08fd(0x1cd)](_0x5dda74),Connect_DB();}function openWindow(){var _0x326dfe=_0x11f24e;liff['openWindow']({'url':_0x326dfe(0x20a),'external':!![]});}function Connect_DB(){var _0x36f6f4=_0x11f24e,_0x11d459={'apiKey':_0x36f6f4(0x1fd),'authDomain':_0x36f6f4(0x21c),'projectId':_0x36f6f4(0x1fb),'databaseURL':_0x36f6f4(0x21f),'storageBucket':_0x36f6f4(0x1d5),'messagingSenderId':_0x36f6f4(0x1a9),'appId':'1:653667385625:web:a5aed08500de80839f0588','measurementId':_0x36f6f4(0x216)};firebase[_0x36f6f4(0x1ab)](_0x11d459),db=firebase['firestore']()[_0x36f6f4(0x220)]('CheckProfile'),dbBootCamp=firebase[_0x36f6f4(0x198)]()[_0x36f6f4(0x220)](_0x36f6f4(0x19b)),dbBootRegister=firebase[_0x36f6f4(0x198)]()[_0x36f6f4(0x220)]('BootRegister'),dbBootMember=firebase['firestore']()[_0x36f6f4(0x220)]('BootMember'),dbVaccineUser=firebase[_0x36f6f4(0x198)]()[_0x36f6f4(0x220)](_0x36f6f4(0x1a2)),CheckEmpID(),CheckBootCampOpen();}function CheckEmpID(){var _0x12e558=_0x11f24e;db['where'](_0x12e558(0x1e9),'==',sessionStorage['getItem'](_0x12e558(0x1d4)))[_0x12e558(0x1a1)](0x1)[_0x12e558(0x1d8)]()['then'](_0x42f159=>{var _0x5306c1=_0x12e558;_0x42f159[_0x5306c1(0x1c5)](_0x267bd2=>{var _0x1879a9=_0x5306c1;sessionStorage[_0x1879a9(0x225)](_0x1879a9(0x1f1),_0x267bd2['data']()[_0x1879a9(0x22f)]);});});}function CheckBootCampOpen(){var _0x309fd1=_0x11f24e;sessionStorage[_0x309fd1(0x1c3)]('LineID')==null&&main();var _0x2cd9be='';dbBootCamp[_0x309fd1(0x1e3)](_0x309fd1(0x1f7),'==',0x3)[_0x309fd1(0x1a1)](0x1)[_0x309fd1(0x1d8)]()[_0x309fd1(0x1e4)](_0x31e1d3=>{var _0x218229=_0x309fd1;_0x31e1d3[_0x218229(0x1c5)](_0x593265=>{var _0x481963=_0x218229;xRound=_0x593265[_0x481963(0x1a5)]()[_0x481963(0x1ea)],EidBootCamp=_0x593265['id'],sCampName=_0x593265[_0x481963(0x1a5)]()[_0x481963(0x1f8)],sEmpType=_0x593265[_0x481963(0x1a5)]()[_0x481963(0x1ea)],sCheckOpen=_0x593265[_0x481963(0x1a5)]()[_0x481963(0x1f8)],sCampRound=_0x593265[_0x481963(0x1a5)]()['CampRound'],simg_pre=_0x593265[_0x481963(0x1a5)]()['img_pre'],sessionStorage['setItem']('CampName',_0x593265[_0x481963(0x1a5)]()['CampName']),sessionStorage[_0x481963(0x225)](_0x481963(0x197),_0x593265[_0x481963(0x1a5)]()[_0x481963(0x197)]),document[_0x481963(0x223)]('BootCampLoading')[_0x481963(0x1b6)][_0x481963(0x1be)]='block';});if(xRound!=''){var _0x6cb64='';_0x6cb64+=_0x218229(0x1ed),_0x6cb64+=_0x218229(0x1a6),simg_pre!=null&&simg_pre!=''?_0x6cb64+='<div\x20style=\x22margin-top:-1px;\x22><img\x20src\x20=\x22'+simg_pre+_0x218229(0x1a7):_0x6cb64+=_0x218229(0x228),$(_0x218229(0x1ba))['html'](_0x6cb64),_0x2cd9be+='<div\x20class=\x22btn-t3\x22\x20style=\x22margin-top:20px;width:250px;font-size:11px;\x22\x20onclick=\x22CheckData()\x22>คลิกลงทะเบียนล่วงหน้า<br>'+sCheckOpen+_0x218229(0x1f6),$('#gotoLink')[_0x218229(0x1cd)](_0x2cd9be),$(_0x218229(0x222))[_0x218229(0x1cd)](sCheckOpen),CheckVaccine(),CheckRegister();}else RegisterClose();});}function RegisterClose(){var _0x2eb252=_0x11f24e;document[_0x2eb252(0x223)]('BootCampClose')[_0x2eb252(0x1b6)][_0x2eb252(0x1be)]=_0x2eb252(0x1e7);}function CheckVaccine(){var _0x51b258=_0x11f24e,_0x566045=0x0,_0x2d099f='';dbVaccineUser[_0x51b258(0x1e3)](_0x51b258(0x1f1),'==',sessionStorage[_0x51b258(0x1c3)](_0x51b258(0x1f1)))[_0x51b258(0x1d8)]()['then'](_0x58f315=>{var _0x589496=_0x51b258;_0x58f315[_0x589496(0x1c5)](_0x5f421a=>{_0x566045=_0x566045+0x1;}),_0x566045!=0x0?_0x2d099f+='<div\x20class=\x22ShowVaccine\x22>'+_0x566045+_0x589496(0x1a4):_0x2d099f+=_0x589496(0x1f9),$('#DisplayVaccine')['html'](_0x2d099f);});}var xCheckRegister=0x0;function _0x458a(){var _0x2d83ea=['initializeApp','\x27\x20class=\x22img-member-true\x22\x20style=\x22width:120px;height:120px;border-radius:50%;box-shadow:\x200px\x200px\x206px\x205px\x20rgba(178,178,178,0.17);\x22>','fromCharCode','CampRound','<div\x20style=\x22margin-top:0px;\x22><img\x20src=\x27','PreRegister','myTimer','txtEmpName','doc','</div></center>','documentId','style','<div\x20class=\x22profile-txt\x22>','EmpRH','<div\x20class=\x22profile-txt1\x22\x20style=\x22line-height:\x201.3;color:#ff0000;\x22>ได้ลงทะเบียนล่วงหน้าเพื่อเข้าร่วมงาน<br><font\x20color=\x22#0056ff\x22>','#DisplayPreReg','CheckPass','myRegister','ATK','display','OpenBootCamp','<div\x20style=\x22color:#002d63;\x22>ลงทะเบียนกิจกรรม<br>','2616fUUVID','getDate','getItem','\x22\x20style=\x22width:100%;\x22></div>','forEach','1000557zwqIis','PreDateTime','click','getProfile','5905iKicYb','div.com[min=\x22','id01','html','value','<div\x20style=\x22padding:15px;color:#ff0000;font-weight:600;\x22>***\x20กรุณาสแกนลงทะเบียนหน้างานอีกครั้ง\x20***</div>','LineName','selectionStart','LinePicture','EmpTable','LineID','retailproject-6f4fc.appspot.com','isLoggedIn','#test\x20*','get','224UmvCkq','EmpBranch','getHours','#DisplayCountRegister','other','EmpPhone','empPhone','append','indexOf','#DisplayUser','where','then','TimeStamp','#MyProfile','block','length','lineID','EmpType','attr','EmpName','<div\x20class=\x22title-head\x22>ttb\x20Registration\x20System</div>','\x27)\x22><div><img\x20src=\x22','<div><img\x20src=\x22','toLocaleString','EmpID','revert','<div\x20class=\x22txt-member1\x22\x20style=\x22padding-top:\x206px;color:#f68b1f\x22>','FieldPath','BBD','</div>','CampStatus','CampName','<div\x20class=\x22ShowVaccine\x22>0<br>เข็ม</div>','displayName','retailproject-6f4fc','639573fXXHpF','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','\x20คน</div>','1656865573-p6EZZ294','pictureUrl','replace','disabled','keyCode','EmpMember','gotoLink','slice','EmpSize','ATKimg','txtEmpID','https://line.me','4924030OacytQ','<div\x20style=\x22font-size:13px;color:#f68b1f;padding:15px;\x22>ภาพผล\x20ATK\x20ของคุณ</div>','getFullYear','<div\x20class=\x22btn-t4\x22\x20onclick=\x22WaitingPage()\x22\x20style=\x22margin-top:10px;width:250px;font-size:11px;\x22>คลิกเพื่อดูผล\x20ATK\x20ของคุณ</div>','DateTime','checkid.html','<div\x20class=\x22box-member\x22\x20style=\x22width:61px;height:80px;overflow:hidden;float:\x20left;\x22\x20onclick=\x22OpenRegister(\x27','empRH','substring','update','substr','G-9SKTRHHSW9','setSelectionRange','empName','none','#MyWating','<div>จำนวนลงทะเบียน\x20:\x20','retailproject-6f4fc.firebaseapp.com','EmpGroup','<div\x20class=\x22profile-txt\x22\x20style=\x22font-size:12px;margin-top:-10px;\x22>','https://file-upload-6f4fc.firebaseio.com','collection','391596djyrmM','#DisplayRound','getElementById','location','setItem','<div\x20style=\x22margin-top:20px;font-size:13px;font-weight:\x20600;color:#0056ff;\x22>คุณ','6FsPdUs','<div\x20style=\x22margin-top:-1px;\x22><img\x20src\x20=\x22./img/Register.png\x22\x20style=\x22width:100%;\x20max-width:240px;\x22></div>','<div\x20class=\x22btn-t1\x22\x20onclick=\x22showRegister()\x22\x20style=\x22margin-top:10px;font-size:11px;width:220px;\x22>ตรวจสอบรายชื่อ<br>ผู้ลงทะเบียนล่วงหน้า</div>','init','\x22\x20class=\x22img-register\x22></div><div\x20class=\x22clr\x20txt-member\x22\x20style=\x22font-size:10px;\x22>','1179450wTaWaH','OTHER','BootCampLoading','empID','en-US','</font><br>เรียบร้อยแล้ว</div>','<div\x20style=\x22color:#999;font-size:11px;\x22>ลงทะเบียนล่วงหน้าเมื่อ\x20','selectionEnd','<div\x20id=\x22DisplayCountRegister\x22\x20style=\x22margin-bottom:\x2015px;\x22></div>','getMinutes','คุณยังกรอกข้อมูลไม่ครบถ้วน','<div><div\x20style=\x22padding-top:15px;color:#f68b1f;font-weight:\x20600;\x22>คุณ','<div\x20class=\x22title_container\x22><div\x20class=\x22title-head\x22>ttb\x20Registration\x20System</div></div>','\x22\x20class=\x22profile-member\x22></div>','<div\x20style=\x22color:#ff0000;\x20font-weight:\x20600;font-size:\x2012px;margin-top:-15px;\x22>ยืนยันการลงทะเบียนล่วงหน้า</div>','128264htjgTy','txtATK','now','PicCamp','firestore','href','\x22\x20class=\x22add-profile\x22\x20width=\x22100px\x22><div\x20id=\x22DisplayVaccine\x22></div></div>','BootCamp','round','userId','TimeRegister','DateRegister','login','limit','Vaccine','ready','<br>เข็ม</div>','data','<div\x20style=\x22color:#ff0000;\x20font-weight:\x20600;font-size:\x2012px;\x22>\x22ระบบลงทะเบียนล่วงหน้า\x22</div>','\x22\x20style=\x22width:100%;\x20max-width:240px;\x22></div>','22BmidOi','653667385625','txtEmpGroup'];_0x458a=function(){return _0x2d83ea;};return _0x458a();}function CheckRegister(){var _0x1f9b99=_0x11f24e,_0x2f76d3='';dbBootRegister[_0x1f9b99(0x1e3)](_0x1f9b99(0x1d4),'==',sessionStorage['getItem']('LineID'))[_0x1f9b99(0x1e3)](_0x1f9b99(0x1ae),'==',xRound)['limit'](0x1)[_0x1f9b99(0x1d8)]()[_0x1f9b99(0x1e4)](_0xea04a6=>{var _0x5dfa1c=_0x1f9b99;_0xea04a6[_0x5dfa1c(0x1c5)](_0x33c4f7=>{var _0x1330a3=_0x5dfa1c;xCheckRegister=0x1,EidBootRegister=_0x33c4f7['id'],sPreDateTime=_0x33c4f7[_0x1330a3(0x1a5)]()[_0x1330a3(0x1c7)],sDateTime=_0x33c4f7[_0x1330a3(0x1a5)]()[_0x1330a3(0x20f)],sATK=_0x33c4f7[_0x1330a3(0x1a5)]()[_0x1330a3(0x1bd)],sessionStorage[_0x1330a3(0x225)](_0x1330a3(0x1f1),_0x33c4f7[_0x1330a3(0x1a5)]()[_0x1330a3(0x1f1)]),sessionStorage[_0x1330a3(0x225)](_0x1330a3(0x1ec),_0x33c4f7['data']()[_0x1330a3(0x1ec)]),sessionStorage[_0x1330a3(0x225)](_0x1330a3(0x1bb),_0x33c4f7[_0x1330a3(0x1a5)]()['DateTime']),sessionStorage[_0x1330a3(0x225)](_0x1330a3(0x208),_0x33c4f7['data']()[_0x1330a3(0x208)]),sessionStorage[_0x1330a3(0x225)](_0x1330a3(0x21d),_0x33c4f7['data']()[_0x1330a3(0x1b8)]),sessionStorage[_0x1330a3(0x225)](_0x1330a3(0x204),_0x33c4f7[_0x1330a3(0x1a5)]()[_0x1330a3(0x204)]),document[_0x1330a3(0x223)](_0x1330a3(0x1bf))[_0x1330a3(0x1b6)]['display']=_0x1330a3(0x219),document['getElementById']('myRegister')[_0x1330a3(0x1b6)][_0x1330a3(0x1be)]=_0x1330a3(0x219),document[_0x1330a3(0x223)](_0x1330a3(0x1b1))['style'][_0x1330a3(0x1be)]=_0x1330a3(0x1e7);}),EidBootRegister==''?(document[_0x5dfa1c(0x223)]('loading')['style']['display']='none',document[_0x5dfa1c(0x223)](_0x5dfa1c(0x205))[_0x5dfa1c(0x1b6)][_0x5dfa1c(0x1be)]=_0x5dfa1c(0x1e7)):(CheckMember(),WaitingPage());});}function getEid(){var _0x1c53b4=_0x11f24e;dbBootRegister[_0x1c53b4(0x1e3)]('LineID','==',sessionStorage[_0x1c53b4(0x1c3)](_0x1c53b4(0x1d4)))['where'](_0x1c53b4(0x1ae),'==',xRound)[_0x1c53b4(0x1a1)](0x1)[_0x1c53b4(0x1d8)]()['then'](_0x15eb9a=>{var _0x322ff5=_0x1c53b4;_0x15eb9a[_0x322ff5(0x1c5)](_0x4211c3=>{EidBootRegister=_0x4211c3['id'];});});}sCheckRec=0x0;function CheckData(){var _0x49d4eb=_0x11f24e;document[_0x49d4eb(0x223)](_0x49d4eb(0x22e))[_0x49d4eb(0x1b6)][_0x49d4eb(0x1be)]='none',document['getElementById'](_0x49d4eb(0x1bc))[_0x49d4eb(0x1b6)][_0x49d4eb(0x1be)]=_0x49d4eb(0x1e7),db[_0x49d4eb(0x1e3)](_0x49d4eb(0x1e9),'==',sessionStorage[_0x49d4eb(0x1c3)](_0x49d4eb(0x1d4)))[_0x49d4eb(0x1d8)]()['then'](_0x42d79e=>{var _0x143723=_0x49d4eb;_0x42d79e['forEach'](_0x59233c=>{var _0x489ca3=_0x1880;Eid=_0x59233c['id'],sDateRegister=_0x59233c[_0x489ca3(0x1a5)]()[_0x489ca3(0x19f)],sessionStorage['setItem']('EmpID',_0x59233c[_0x489ca3(0x1a5)]()['empID']),sessionStorage[_0x489ca3(0x225)](_0x489ca3(0x1ec),_0x59233c[_0x489ca3(0x1a5)]()['empName']),sessionStorage['setItem'](_0x489ca3(0x1de),_0x59233c[_0x489ca3(0x1a5)]()[_0x489ca3(0x1df)]),sessionStorage[_0x489ca3(0x225)](_0x489ca3(0x21d),_0x59233c['data']()[_0x489ca3(0x212)]),document[_0x489ca3(0x223)](_0x489ca3(0x209))['value']=_0x59233c[_0x489ca3(0x1a5)]()['empID'],document[_0x489ca3(0x223)](_0x489ca3(0x1b2))[_0x489ca3(0x1ce)]=_0x59233c['data']()[_0x489ca3(0x218)],document['getElementById']('txtEmpGroup')['value']=_0x59233c[_0x489ca3(0x1a5)]()[_0x489ca3(0x212)],sCheckRec=0x1,WaitingPage();}),$(_0x143723(0x1d7))[_0x143723(0x1eb)]('disabled',_0x143723(0x202))['off'](_0x143723(0x1c8)),OpenForm();});}function CheckUserRegister(){var _0xbf460e=_0x11f24e;db[_0xbf460e(0x1e3)](_0xbf460e(0x1e9),'==',sessionStorage[_0xbf460e(0x1c3)]('LineID'))[_0xbf460e(0x1d8)]()[_0xbf460e(0x1e4)](_0x3313fe=>{var _0x21e8c2=_0xbf460e;_0x3313fe[_0x21e8c2(0x1c5)](_0x1ea339=>{var _0x4337c1=_0x21e8c2;sessionStorage[_0x4337c1(0x225)](_0x4337c1(0x1f1),_0x1ea339['data']()[_0x4337c1(0x22f)]),sessionStorage[_0x4337c1(0x225)]('EmpName',_0x1ea339[_0x4337c1(0x1a5)]()['empName']);});});}function OpenForm(){var _0x19f184=_0x11f24e;CheckFoundData==0x1?(document[_0x19f184(0x223)](_0x19f184(0x1bf))[_0x19f184(0x1b6)][_0x19f184(0x1be)]=_0x19f184(0x219),document[_0x19f184(0x223)](_0x19f184(0x1bc))[_0x19f184(0x1b6)][_0x19f184(0x1be)]=_0x19f184(0x219),document[_0x19f184(0x223)](_0x19f184(0x1b1))[_0x19f184(0x1b6)]['display']=_0x19f184(0x1e7)):(document[_0x19f184(0x223)](_0x19f184(0x1bf))['style'][_0x19f184(0x1be)]=_0x19f184(0x219),document[_0x19f184(0x223)](_0x19f184(0x1bc))[_0x19f184(0x1b6)]['display']=_0x19f184(0x1e7),document['getElementById'](_0x19f184(0x1b1))['style'][_0x19f184(0x1be)]=_0x19f184(0x219));}function EditData(){var _0x33d30f=_0x11f24e;document['getElementById'](_0x33d30f(0x1bc))[_0x33d30f(0x1b6)][_0x33d30f(0x1be)]=_0x33d30f(0x1e7),document['getElementById'](_0x33d30f(0x1b1))[_0x33d30f(0x1b6)][_0x33d30f(0x1be)]='none';}function CheckMember(){var _0x429c37=_0x11f24e;dbBootMember[_0x429c37(0x1e3)](_0x429c37(0x1f1),'==',parseFloat(sessionStorage[_0x429c37(0x1c3)](_0x429c37(0x1f1))))[_0x429c37(0x1e3)](_0x429c37(0x1ea),'==',sEmpType)['limit'](0x1)['get']()[_0x429c37(0x1e4)](_0x128225=>{var _0x2e3859=_0x429c37;_0x128225[_0x2e3859(0x1c5)](_0x4b895b=>{var _0x258a67=_0x2e3859;EidBootMember=_0x4b895b['id'],xEmpType=_0x4b895b[_0x258a67(0x1a5)]()[_0x258a67(0x1ea)],sessionStorage[_0x258a67(0x225)]('EmpName',_0x4b895b[_0x258a67(0x1a5)]()['EmpName']),sessionStorage[_0x258a67(0x225)](_0x258a67(0x21d),_0x4b895b[_0x258a67(0x1a5)]()[_0x258a67(0x1da)]),sessionStorage[_0x258a67(0x225)](_0x258a67(0x1d3),_0x4b895b['data']()[_0x258a67(0x1d3)]),sessionStorage[_0x258a67(0x225)](_0x258a67(0x19e),_0x4b895b['data']()[_0x258a67(0x19e)]),FinalRoundSplit==undefined?(sessionStorage[_0x258a67(0x225)](_0x258a67(0x207),_0x4b895b[_0x258a67(0x1a5)]()[_0x258a67(0x207)]),sessionStorage[_0x258a67(0x225)](_0x258a67(0x204),0x1),sCheckRec==0x1&&dbBootMember[_0x258a67(0x1b3)](EidBootMember)[_0x258a67(0x214)]({'LineID':sessionStorage['getItem'](_0x258a67(0x1d4)),'LineName':sessionStorage[_0x258a67(0x1c3)](_0x258a67(0x1d0)),'LinePicture':sessionStorage[_0x258a67(0x1c3)]('LinePicture')})):(sessionStorage[_0x258a67(0x225)](_0x258a67(0x207),''),sessionStorage['setItem']('EmpMember',0x0));});});}function WaitingPage(){var _0xb9d736=_0x11f24e;xCheckRegister==0x1&&(document[_0xb9d736(0x223)](_0xb9d736(0x22e))[_0xb9d736(0x1b6)][_0xb9d736(0x1be)]=_0xb9d736(0x219));var _0x2d6476='',_0x5c53d6='';dbBootMember['where'](_0xb9d736(0x1f1),'==',parseFloat(sessionStorage[_0xb9d736(0x1c3)](_0xb9d736(0x1f1))))['where']('EmpType','==',sEmpType)[_0xb9d736(0x1a1)](0x1)['get']()[_0xb9d736(0x1e4)](_0xe2f189=>{var _0x310512=_0xb9d736;_0xe2f189['forEach'](_0x1437ea=>{var _0x37fde5=_0x1880;EidBootMember=_0x1437ea['id'],_0x5c53d6=_0x1437ea[_0x37fde5(0x1a5)]()[_0x37fde5(0x1ea)],sessionStorage['setItem']('EmpName',_0x1437ea[_0x37fde5(0x1a5)]()[_0x37fde5(0x1ec)]);}),_0x2d6476+=_0x310512(0x191),_0x2d6476+=_0x310512(0x193),_0x2d6476+=_0x310512(0x21e)+sessionStorage[_0x310512(0x1c3)](_0x310512(0x1f8))+_0x310512(0x1f6),_0x2d6476+='<div><img\x20src=\x22'+sessionStorage[_0x310512(0x1c3)](_0x310512(0x1d2))+_0x310512(0x192),_0x2d6476+=_0x310512(0x1b7)+sessionStorage[_0x310512(0x1c3)](_0x310512(0x1d0))+_0x310512(0x1f6),_0x2d6476+=_0x310512(0x190)+sessionStorage[_0x310512(0x1c3)](_0x310512(0x1ec))+_0x310512(0x1f6),_0x2d6476+=_0x310512(0x1b9)+sessionStorage[_0x310512(0x1c3)](_0x310512(0x1f8))+_0x310512(0x18a),sPreDateTime!=''&&(_0x2d6476+='<div\x20style=\x22color:#999;font-size:11px;font-weight:\x20300;\x22>ลงทะเบียนล่วงหน้า\x20:\x20'+sPreDateTime+_0x310512(0x1f6)),_0x2d6476+=_0x310512(0x20c),_0x2d6476+=_0x310512(0x1ef)+sessionStorage['getItem'](_0x310512(0x208))+_0x310512(0x1c4),_0x2d6476+=_0x310512(0x1cf),_0x2d6476+=_0x310512(0x229),_0x2d6476+=_0x310512(0x1b4),$(_0x310512(0x21a))['html'](_0x2d6476);});}function showRegister(){var _0x521532=_0x11f24e,_0x329408='',_0x19e683=0x0;_0x329408+=_0x521532(0x1ed),_0x329408+=_0x521532(0x1a6),_0x329408+='<div\x20class=\x22profile-txt\x22\x20style=\x22font-size:12px;margin-top:-10px;\x22>'+sessionStorage[_0x521532(0x1c3)](_0x521532(0x1f8))+_0x521532(0x1f6),_0x329408+=_0x521532(0x18d),dbBootRegister[_0x521532(0x1e3)](_0x521532(0x1ae),'==',xRound)[_0x521532(0x1e3)](_0x521532(0x1b0),'==',0x1)['orderBy'](_0x521532(0x1e5),'desc')['get']()[_0x521532(0x1e4)](_0x35fcc3=>{var _0x4cb3ea=_0x521532;_0x35fcc3[_0x4cb3ea(0x1c5)](_0x2a1a83=>{var _0x567c8b=_0x4cb3ea;_0x19e683=_0x19e683+0x1,_0x329408+=_0x567c8b(0x211)+_0x2a1a83['id']+_0x567c8b(0x1ee)+_0x2a1a83[_0x567c8b(0x1a5)]()['LinePicture']+_0x567c8b(0x22b)+_0x2a1a83['data']()['LineName']+'</div></div>';}),sessionStorage[_0x4cb3ea(0x1c3)](_0x4cb3ea(0x208))!=null&&(_0x329408+=_0x4cb3ea(0x20e)),$(_0x4cb3ea(0x21a))['html'](_0x329408),$(_0x4cb3ea(0x1dc))[_0x4cb3ea(0x1cd)](_0x4cb3ea(0x21b)+_0x19e683+_0x4cb3ea(0x1fe));});}function OpenRegister(_0x1b428f){var _0x50d35f=_0x11f24e,_0x50aae6='';dbBootRegister[_0x50d35f(0x1e3)](firebase[_0x50d35f(0x198)][_0x50d35f(0x1f4)][_0x50d35f(0x1b5)](),'==',_0x1b428f)['get']()[_0x50d35f(0x1e4)](_0x3f7070=>{var _0x31e35a=_0x50d35f;_0x3f7070[_0x31e35a(0x1c5)](_0x4efcab=>{var _0x5c3c1c=_0x31e35a;_0x50aae6+=_0x5c3c1c(0x1af)+_0x4efcab[_0x5c3c1c(0x1a5)]()[_0x5c3c1c(0x1d2)]+_0x5c3c1c(0x1ac),_0x50aae6+=_0x5c3c1c(0x1f3)+_0x4efcab[_0x5c3c1c(0x1a5)]()[_0x5c3c1c(0x1d0)]+'</div>',_0x50aae6+=_0x5c3c1c(0x226)+_0x4efcab[_0x5c3c1c(0x1a5)]()[_0x5c3c1c(0x1ec)]+_0x5c3c1c(0x1f6),_0x50aae6+=_0x5c3c1c(0x1c0)+sessionStorage[_0x5c3c1c(0x1c3)](_0x5c3c1c(0x1f8))+_0x5c3c1c(0x1f6),_0x50aae6+=_0x5c3c1c(0x18b)+_0x4efcab[_0x5c3c1c(0x1a5)]()['PreDateTime']+'</div>';}),$(_0x31e35a(0x1e2))['html'](_0x50aae6),document[_0x31e35a(0x223)]('id01')[_0x31e35a(0x1b6)][_0x31e35a(0x1be)]=_0x31e35a(0x1e7);});}function CloseAll(){var _0xad25af=_0x11f24e;document[_0xad25af(0x223)](_0xad25af(0x1cc))['style'][_0xad25af(0x1be)]=_0xad25af(0x219);}var sCheckBottom=0x0;function ClickSaveProfile(){var _0x28e51e=_0x11f24e;sCheckBottom=0x0,sessionStorage[_0x28e51e(0x1c3)](_0x28e51e(0x1f1))!=null?stxtEmpID=sessionStorage[_0x28e51e(0x1c3)](_0x28e51e(0x1f1)):stxtEmpID=document['getElementById'](_0x28e51e(0x209))[_0x28e51e(0x1ce)],stxtEmpName=document[_0x28e51e(0x223)](_0x28e51e(0x1b2))[_0x28e51e(0x1ce)],stxtEmpGroup=document[_0x28e51e(0x223)](_0x28e51e(0x1aa))['value'],stxtATK=document['getElementById'](_0x28e51e(0x195))['value'],stxtEmpID!==null&&stxtEmpID!==''&&(sCheckBottom=sCheckBottom+0x1),stxtEmpName!==null&&stxtEmpName!==''&&(sCheckBottom=sCheckBottom+0x1),stxtEmpGroup!==null&&stxtEmpGroup!==''&&(sCheckBottom=sCheckBottom+0x1),stxtATK!==null&&stxtATK!==''&&(sCheckBottom=sCheckBottom+0x1),sessionStorage['getItem']('ATKimg')!==null&&(sCheckBottom=sCheckBottom+0x1),sCheckBottom==0x5?(sATK=document[_0x28e51e(0x223)](_0x28e51e(0x195))[_0x28e51e(0x1ce)],sessionStorage['setItem']('EmpID',document[_0x28e51e(0x223)](_0x28e51e(0x209))['value']),SaveData()):alert(_0x28e51e(0x18f));}function SaveData(){var _0x368fc8=_0x11f24e,_0x1e4583='',_0x311469=_0x368fc8(0x1dd);NewDate();var _0x123e9e=Math[_0x368fc8(0x19c)](Date[_0x368fc8(0x196)]()/0x3e8);sDateTime=dateString,sessionStorage[_0x368fc8(0x225)](_0x368fc8(0x1bb),sDateTime),document[_0x368fc8(0x223)](_0x368fc8(0x1aa))[_0x368fc8(0x1ce)]!=_0x368fc8(0x22d)&&(_0x311469=_0x368fc8(0x1f5)),Eid==''?db['add']({'lineID':sessionStorage[_0x368fc8(0x1c3)](_0x368fc8(0x1d4)),'linename':sessionStorage['getItem'](_0x368fc8(0x1d0)),'empPicture':sessionStorage[_0x368fc8(0x1c3)]('LinePicture'),'empID':document['getElementById'](_0x368fc8(0x209))['value'],'empName':document[_0x368fc8(0x223)](_0x368fc8(0x1b2))[_0x368fc8(0x1ce)],'empRH':document['getElementById']('txtEmpGroup')[_0x368fc8(0x1ce)],'empBr':_0x311469,'statusconfirm':0x2,'statusedit':0x1,'statuspass':0x0,'memo':_0x1e4583,'empAddress':_0x1e4583,'DateRegister':dateString}):db['doc'](Eid)[_0x368fc8(0x214)]({'lineID':sessionStorage[_0x368fc8(0x1c3)](_0x368fc8(0x1d4)),'linename':sessionStorage[_0x368fc8(0x1c3)](_0x368fc8(0x1d0)),'empPicture':sessionStorage[_0x368fc8(0x1c3)](_0x368fc8(0x1d2)),'empName':document[_0x368fc8(0x223)](_0x368fc8(0x1b2))[_0x368fc8(0x1ce)],'empRH':document[_0x368fc8(0x223)](_0x368fc8(0x1aa))[_0x368fc8(0x1ce)],'empBr':_0x311469,'DateRegister':dateString}),EidBootRegister==''&&dbBootMember[_0x368fc8(0x1e3)](_0x368fc8(0x1f1),'==',parseFloat(sessionStorage[_0x368fc8(0x1c3)](_0x368fc8(0x1f1))))[_0x368fc8(0x1e3)](_0x368fc8(0x1ea),'==',sEmpType)[_0x368fc8(0x1a1)](0x1)['get']()[_0x368fc8(0x1e4)](_0x4bc3cb=>{var _0x22d4f7=_0x368fc8;_0x4bc3cb[_0x22d4f7(0x1c5)](_0x2c7df4=>{var _0x1f350c=_0x22d4f7;sessionStorage[_0x1f350c(0x225)](_0x1f350c(0x204),0x1),sessionStorage[_0x1f350c(0x225)](_0x1f350c(0x207),_0x2c7df4['data']()[_0x1f350c(0x207)]);});if(stxtEmpID[_0x22d4f7(0x1e8)]<0x5)stxtEmpID='0'+stxtEmpID;dbBootRegister['add']({'LineID':sessionStorage[_0x22d4f7(0x1c3)](_0x22d4f7(0x1d4)),'LineName':sessionStorage['getItem'](_0x22d4f7(0x1d0)),'LinePicture':sessionStorage[_0x22d4f7(0x1c3)](_0x22d4f7(0x1d2)),'EmpID':stxtEmpID,'EmpName':document[_0x22d4f7(0x223)](_0x22d4f7(0x1b2))[_0x22d4f7(0x1ce)],'EmpRH':document[_0x22d4f7(0x223)](_0x22d4f7(0x1aa))[_0x22d4f7(0x1ce)],'ATK':document[_0x22d4f7(0x223)](_0x22d4f7(0x195))[_0x22d4f7(0x1ce)],'ATKimg':sessionStorage[_0x22d4f7(0x1c3)]('ATKimg'),'CampRound':sCampRound,'EmpType':sEmpType,'EmpMember':parseInt(sessionStorage[_0x22d4f7(0x1c3)](_0x22d4f7(0x204))),'EmpSize':sessionStorage[_0x22d4f7(0x1c3)](_0x22d4f7(0x207)),'StatusRegister':0x0,'TimegetBox':_0x1e4583,'TimeStamp':_0x1e4583,'DateTime':_0x1e4583,'PreRegister':parseInt(sessionStorage[_0x22d4f7(0x1c3)]('PreRegister')),'PreDateTime':dateString}),sPreDateTime=dateString;}),WaitingPage(),document['getElementById']('myRegister')[_0x368fc8(0x1b6)][_0x368fc8(0x1be)]='none',document['getElementById'](_0x368fc8(0x1b1))[_0x368fc8(0x1b6)]['display']=_0x368fc8(0x1e7);}function gotowebsite(){var _0x5eabf6=_0x11f24e;window[_0x5eabf6(0x224)][_0x5eabf6(0x199)]=_0x5eabf6(0x210);}function NewDate(){var _0x58fa92=_0x11f24e,_0x1cf7d0=new Date(),_0x250801=_0x1cf7d0[_0x58fa92(0x1c2)]()+'',_0x108123=_0x1cf7d0['getMonth']()+0x1+'',_0x2fb083=_0x1cf7d0[_0x58fa92(0x20d)]()+'',_0x4c8828=_0x1cf7d0[_0x58fa92(0x1db)]()+'',_0x5d3267=_0x1cf7d0[_0x58fa92(0x18e)]()+'',_0x462b98=_0x1cf7d0['getSeconds']()+'',_0x7febe8=_0x4c8828>=0xc?'PM':'AM';_0x250801=checkZero(_0x250801),_0x108123=checkZero(_0x108123),_0x2fb083=checkZero(_0x2fb083),_0x4c8828=checkZero(_0x4c8828),_0x5d3267=checkZero(_0x5d3267),_0x462b98=checkZero(_0x462b98),dateString=_0x250801+'/'+_0x108123+'/'+_0x2fb083+'\x20'+_0x4c8828+':'+_0x5d3267+':'+_0x462b98+'\x20'+_0x7febe8;}function checkZero(_0x1e71f2){var _0xce57b3=_0x11f24e;return _0x1e71f2[_0xce57b3(0x1e8)]==0x1&&(_0x1e71f2='0'+_0x1e71f2),_0x1e71f2;}function phone_formatting(_0xf8cfc4,_0x4be5db){var _0x550849=_0x11f24e,_0x5c814e,_0x18e91e=_0xf8cfc4[_0x550849(0x1d1)],_0x53a0c1=_0xf8cfc4['selectionEnd'],_0x83d036=_0xf8cfc4[_0x550849(0x1ce)][_0x550849(0x201)](/\D/g,'');if(_0x83d036[_0x550849(0x1e8)]>0x2){_0x5c814e=_0x83d036[_0x550849(0x213)](0x0,0x3)+'-';if(_0x83d036[_0x550849(0x1e8)]===0x4||_0x83d036[_0x550849(0x1e8)]===0x5)_0x5c814e+=_0x83d036['substr'](0x3);else _0x83d036[_0x550849(0x1e8)]>0x5&&(_0x5c814e+=_0x83d036[_0x550849(0x213)](0x3,0x6)+'-');_0x83d036[_0x550849(0x1e8)]>0x6&&(_0x5c814e+=_0x83d036[_0x550849(0x213)](0x6));}else _0x5c814e=_0x83d036;_0xf8cfc4[_0x550849(0x1ce)]=_0x5c814e[_0x550849(0x1e8)]>0xc?_0x5c814e[_0x550849(0x213)](0xc,0x0):_0x5c814e;if(_0x5c814e[_0x550849(0x206)](-0x1)==='-'&&_0x4be5db===![]&&(_0x5c814e['length']===0x8&&_0x53a0c1===0x7)||_0x5c814e[_0x550849(0x1e8)]===0x4&&_0x53a0c1===0x3)_0x18e91e=_0x5c814e['length'],_0x53a0c1=_0x5c814e[_0x550849(0x1e8)];else _0x4be5db===_0x550849(0x1f2)&&(_0x18e91e--,_0x53a0c1--);_0xf8cfc4[_0x550849(0x217)](_0x18e91e,_0x53a0c1);}function phone_number_check(_0xe447e6,_0x10704a){var _0x3cba35=_0x11f24e,_0xc097f7=_0x10704a[_0x3cba35(0x203)],_0x512f25=String[_0x3cba35(0x1ad)](_0xc097f7),_0x1a1f4c=![],_0x4f9114=0xbd,_0x30aef9=[0x8,0x2e],_0x3a4850=[0x21,0x22,0x23,0x24,0x25,0x26,0x27,0x28],_0x322ff3=_0xe447e6[_0x3cba35(0x18c)];_0x30aef9[_0x3cba35(0x1e1)](_0xc097f7)>-0x1&&(_0x1a1f4c=!![]);if(_0x512f25['match'](/^\d+$/)||_0x1a1f4c)phone_formatting(_0xe447e6,_0x1a1f4c);else{if(_0x3a4850[_0x3cba35(0x1e1)](_0xc097f7)>-0x1){}else _0x4f9114===_0xc097f7?_0x322ff3===_0xe447e6[_0x3cba35(0x1ce)][_0x3cba35(0x1e8)]?_0xe447e6['value']=_0xe447e6[_0x3cba35(0x1ce)]['slice'](0x0,-0x1):(_0xe447e6[_0x3cba35(0x1ce)]=_0xe447e6[_0x3cba35(0x1ce)]['substring'](0x0,_0x322ff3-0x1)+_0xe447e6[_0x3cba35(0x1ce)][_0x3cba35(0x215)](_0x322ff3),_0xe447e6[_0x3cba35(0x18c)]=_0x322ff3-0x1):(_0x10704a['preventDefault'](),phone_formatting(_0xe447e6,_0x3cba35(0x1f2)));}}
