var _0x528daa=_0x1346;(function(_0x529155,_0x5940d9){var _0x4c4ab1=_0x1346,_0x302367=_0x529155();while(!![]){try{var _0x9c5658=parseInt(_0x4c4ab1(0xe7))/0x1*(parseInt(_0x4c4ab1(0x140))/0x2)+-parseInt(_0x4c4ab1(0x12f))/0x3*(parseInt(_0x4c4ab1(0x130))/0x4)+parseInt(_0x4c4ab1(0x141))/0x5+-parseInt(_0x4c4ab1(0x138))/0x6*(-parseInt(_0x4c4ab1(0x126))/0x7)+parseInt(_0x4c4ab1(0xc8))/0x8+parseInt(_0x4c4ab1(0xc3))/0x9*(-parseInt(_0x4c4ab1(0x145))/0xa)+-parseInt(_0x4c4ab1(0x103))/0xb*(parseInt(_0x4c4ab1(0xbd))/0xc);if(_0x9c5658===_0x5940d9)break;else _0x302367['push'](_0x302367['shift']());}catch(_0x372435){_0x302367['push'](_0x302367['shift']());}}}(_0x7ab2,0xd641e));var stxtEmpID='',stxtEmpName='',stxtEmpPhone='',stxtEmpGroup='',db='',dbBootCamp='',dbBootMember='',CheckFoundData=0x0,Eid='',EidBootCamp='',EidBootRegister='',EidBootMember='',dateString=new Date()[_0x528daa(0x11c)](_0x528daa(0x11b),{'timeZone':_0x528daa(0x165)}),sDateRegister='',i=0x0;const x=document[_0x528daa(0xfc)](_0x528daa(0xe8)+i+'\x22]');var sCheckOpen='',sCampRound='',sDateTime='',sLINERegister='',sATK='',xRound='',parts=[],parts1=[];parts=xRound[_0x528daa(0xbf)]('-');var FinalRound=parts[0x0],FinalRoundSplit=parts[0x1];function _0x1346(_0x17643b,_0x371199){var _0x7ab2b0=_0x7ab2();return _0x1346=function(_0x1346ea,_0x249960){_0x1346ea=_0x1346ea-0xbb;var _0xdf7324=_0x7ab2b0[_0x1346ea];return _0xdf7324;},_0x1346(_0x17643b,_0x371199);}$(document)[_0x528daa(0x167)](function(){var _0x29a240=_0x528daa;sessionStorage[_0x29a240(0x12e)](_0x29a240(0xe3),0x0),sessionStorage[_0x29a240(0x12e)](_0x29a240(0x132),''),main();});async function main(){var _0x264c09=_0x528daa;await liff['init']({'liffId':_0x264c09(0x102)}),document[_0x264c09(0xff)](_0x264c09(0x139))[_0x264c09(0x14e)](liff['isLoggedIn']()),liff['isLoggedIn']()?getUserProfile():liff['login']();}function openWindow(){liff['openWindow']({'url':'https://line.me','external':!![]});}async function getUserProfile(){var _0x8ec0c6=_0x528daa,_0xde3bbb='';const _0x1fcfc5=await liff['getProfile']();sessionStorage[_0x8ec0c6(0x12e)](_0x8ec0c6(0xf9),_0x1fcfc5[_0x8ec0c6(0x10f)]),sessionStorage[_0x8ec0c6(0x12e)](_0x8ec0c6(0xcf),_0x1fcfc5[_0x8ec0c6(0x14b)]),sessionStorage[_0x8ec0c6(0x12e)](_0x8ec0c6(0x162),_0x1fcfc5[_0x8ec0c6(0x118)]),_0xde3bbb+=_0x8ec0c6(0x115)+sessionStorage[_0x8ec0c6(0xbc)](_0x8ec0c6(0x162))+'\x22\x20class=\x22add-profile\x22\x20width=\x22100px\x22><div\x20id=\x22DisplayVaccine\x22></div></div>',_0xde3bbb+=_0x8ec0c6(0x153)+sessionStorage[_0x8ec0c6(0xbc)](_0x8ec0c6(0xcf))+_0x8ec0c6(0x11e),$(_0x8ec0c6(0xcd))[_0x8ec0c6(0xed)](_0xde3bbb),Connect_DB();}function Connect_DB(){var _0x4d69b2=_0x528daa,_0x8186a6={'apiKey':_0x4d69b2(0x10c),'authDomain':_0x4d69b2(0xce),'projectId':'retailproject-6f4fc','databaseURL':'https://file-upload-6f4fc.firebaseio.com','storageBucket':_0x4d69b2(0x109),'messagingSenderId':'653667385625','appId':_0x4d69b2(0x13b),'measurementId':_0x4d69b2(0xe9)};firebase['initializeApp'](_0x8186a6),db=firebase[_0x4d69b2(0x11f)]()[_0x4d69b2(0x15c)]('CheckProfile'),dbBootCamp=firebase[_0x4d69b2(0x11f)]()[_0x4d69b2(0x15c)](_0x4d69b2(0x142)),dbBootRegister=firebase[_0x4d69b2(0x11f)]()['collection'](_0x4d69b2(0x146)),dbBootMember=firebase['firestore']()[_0x4d69b2(0x15c)]('BootMember'),dbVaccineUser=firebase[_0x4d69b2(0x11f)]()[_0x4d69b2(0x15c)](_0x4d69b2(0xc0)),CheckEmpID(),CheckBootCampOpen();}function CheckEmpID(){var _0x1f25c4=_0x528daa;db[_0x1f25c4(0x12a)](_0x1f25c4(0xf3),'==',sessionStorage['getItem'](_0x1f25c4(0xf9)))[_0x1f25c4(0xee)](0x1)[_0x1f25c4(0x13c)]()['then'](_0x32dd93=>{var _0x280932=_0x1f25c4;_0x32dd93[_0x280932(0xcb)](_0x1925c6=>{var _0x55b9e7=_0x280932;sessionStorage['setItem'](_0x55b9e7(0x12b),_0x1925c6['data']()[_0x55b9e7(0x120)]);});});}function CheckBootCampOpen(){var _0x44bacd=_0x528daa,_0x5ae05b='';dbBootCamp[_0x44bacd(0x12a)](_0x44bacd(0x111),'==',0x2)[_0x44bacd(0xee)](0x1)[_0x44bacd(0x13c)]()[_0x44bacd(0xc5)](_0x18badd=>{var _0x413d6d=_0x44bacd;_0x18badd[_0x413d6d(0xcb)](_0x4f6c4c=>{var _0x367079=_0x413d6d;EidBootCamp=_0x4f6c4c['id'],xRound=_0x4f6c4c['data']()[_0x367079(0x144)],sEmpType=_0x4f6c4c['data']()[_0x367079(0x144)],sCheckOpen=_0x4f6c4c['data']()['CampName'],sCampRound=_0x4f6c4c['data']()[_0x367079(0x159)],simg_reg=_0x4f6c4c['data']()[_0x367079(0x158)],sessionStorage[_0x367079(0x12e)](_0x367079(0x112),_0x4f6c4c[_0x367079(0x152)]()[_0x367079(0x112)]);});if(xRound!=''){var _0x4b4823='';_0x4b4823+=_0x413d6d(0x14d),_0x4b4823+='<div\x20style=\x22color:#0056ff;\x20font-weight:\x20600;font-size:\x2012px;\x22>\x22ระบบลงทะเบียนกิจกรรม\x22</div>',simg_reg!=null&&simg_reg!=''?_0x4b4823+=_0x413d6d(0x13e)+simg_reg+_0x413d6d(0x136):_0x4b4823+=_0x413d6d(0x104),$(_0x413d6d(0x127))[_0x413d6d(0xed)](_0x4b4823),_0x5ae05b+=_0x413d6d(0x13f)+sCheckOpen+_0x413d6d(0x11e),$(_0x413d6d(0x123))['html'](_0x5ae05b),$(_0x413d6d(0x125))[_0x413d6d(0xed)](sCheckOpen),CheckData(),CheckRegister();}else RegisterClose();});}var xCheckRegister=0x0;function CheckRegister(){var _0xa3c830=_0x528daa,_0x33364e='';dbBootRegister[_0xa3c830(0x12a)]('LineID','==',sessionStorage[_0xa3c830(0xbc)](_0xa3c830(0xf9)))[_0xa3c830(0x12a)](_0xa3c830(0x159),'==',xRound)[_0xa3c830(0xee)](0x1)[_0xa3c830(0x13c)]()[_0xa3c830(0xc5)](_0x78d97f=>{var _0x42a12c=_0xa3c830;_0x78d97f[_0x42a12c(0xcb)](_0x2cd195=>{var _0x54e6af=_0x42a12c;xCheckRegister=0x1,EidBootRegister=_0x2cd195['id'],sDateTime=_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x147)],sATK=_0x2cd195[_0x54e6af(0x152)]()['ATK'],sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x12b),_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x12b)]),sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x169),_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x169)]),sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x156),_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x147)]),sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x160),_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x160)]),sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x108),_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x135)]),sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x119),_0x2cd195['data']()['EmpMember']),sessionStorage[_0x54e6af(0x12e)]('PreRegister',_0x2cd195[_0x54e6af(0x152)]()['PreRegister']),sessionStorage[_0x54e6af(0x12e)](_0x54e6af(0x147),_0x2cd195[_0x54e6af(0x152)]()[_0x54e6af(0x147)]),document[_0x54e6af(0xff)](_0x54e6af(0xd3))['style'][_0x54e6af(0xc6)]='none',document['getElementById']('myRegister')['style'][_0x54e6af(0xc6)]=_0x54e6af(0x14c),document[_0x54e6af(0xff)](_0x54e6af(0xc4))[_0x54e6af(0x121)][_0x54e6af(0xc6)]=_0x54e6af(0x11a);}),EidBootRegister==''?(CheckMember(),document['getElementById'](_0x42a12c(0xf4))['style']['display']=_0x42a12c(0x14c),document[_0x42a12c(0xff)]('gotoLink')[_0x42a12c(0x121)][_0x42a12c(0xc6)]=_0x42a12c(0x11a)):(sessionStorage[_0x42a12c(0xbc)](_0x42a12c(0xf9))!=null&&sessionStorage[_0x42a12c(0xbc)]('LineID')!=null&&(sessionStorage['getItem'](_0x42a12c(0x147))==''&&SaveUpdate()),CheckMember(),WaitingPage());});}function CheckMember(){var _0x3ad4d3=_0x528daa;NewDate(),dbBootMember['where'](_0x3ad4d3(0x12b),'==',parseFloat(sessionStorage[_0x3ad4d3(0xbc)]('EmpID')))['where'](_0x3ad4d3(0x144),'==',sCampRound)[_0x3ad4d3(0xee)](0x1)[_0x3ad4d3(0x13c)]()['then'](_0xddab7a=>{var _0x2ec34a=_0x3ad4d3;_0xddab7a[_0x2ec34a(0xcb)](_0x78b461=>{var _0x177eb7=_0x2ec34a;EidBootMember=_0x78b461['id'],xEmpType=_0x78b461[_0x177eb7(0x152)]()[_0x177eb7(0x144)],sessionStorage[_0x177eb7(0x12e)](_0x177eb7(0x169),_0x78b461[_0x177eb7(0x152)]()['EmpName']),sessionStorage[_0x177eb7(0x12e)]('EmpTable',_0x78b461[_0x177eb7(0x152)]()['EmpTable']),sessionStorage[_0x177eb7(0x12e)](_0x177eb7(0xc9),_0x78b461['data']()[_0x177eb7(0xc9)]),sessionStorage[_0x177eb7(0x12e)](_0x177eb7(0x119),0x1),sessionStorage[_0x177eb7(0x12e)](_0x177eb7(0x132),_0x78b461[_0x177eb7(0x152)]()[_0x177eb7(0x132)]),_0x78b461[_0x177eb7(0x152)]()['StatusRegister']==0x0&&dbBootMember['doc'](EidBootMember)[_0x177eb7(0x10a)]({'LineID':sessionStorage[_0x177eb7(0xbc)](_0x177eb7(0xf9)),'LineName':sessionStorage[_0x177eb7(0xbc)]('LineName'),'LinePicture':sessionStorage['getItem'](_0x177eb7(0x162)),'StatusRegister':0x1,'TimeIN':dateString});});});}function SaveUpdate(){var _0x2f0648=_0x528daa,_0xf514d6='',_0x19d061=_0x2f0648(0xdd),_0x1d9f26=Math[_0x2f0648(0xfd)](Date['now']()/0x3e8);NewDate(),sDateTime=dateString,sessionStorage['setItem'](_0x2f0648(0x156),sDateTime),dbBootRegister[_0x2f0648(0x151)](EidBootRegister)[_0x2f0648(0x10a)]({'LineID':sessionStorage['getItem'](_0x2f0648(0xf9)),'LineName':sessionStorage[_0x2f0648(0xbc)](_0x2f0648(0xcf)),'LinePicture':sessionStorage['getItem'](_0x2f0648(0x162)),'StatusRegister':0x1,'TimeStamp':_0x1d9f26,'TimegetBox':_0xf514d6,'DateTime':dateString}),EidBootMember!=''&&dbBootMember[_0x2f0648(0x151)](EidBootMember)['update']({'StatusRegister':0x1,'TimeIN':dateString,'TimeStampRec':_0x1d9f26});}function CheckVaccine(){var _0xb6da0e=_0x528daa,_0x41c768=0x0,_0xe9dbce='';dbVaccineUser[_0xb6da0e(0x12a)]('EmpID','==',sessionStorage[_0xb6da0e(0xbc)](_0xb6da0e(0x12b)))[_0xb6da0e(0x13c)]()[_0xb6da0e(0xc5)](_0x4d0a4a=>{var _0x3f4d28=_0xb6da0e;_0x4d0a4a[_0x3f4d28(0xcb)](_0x4c645e=>{_0x41c768=_0x41c768+0x1;}),_0x41c768!=0x0?_0xe9dbce+=_0x3f4d28(0x15b)+_0x41c768+'<br>เข็ม</div>':_0xe9dbce+=_0x3f4d28(0x149),$(_0x3f4d28(0x114))[_0x3f4d28(0xed)](_0xe9dbce);});}function WaitingPage(){var _0x3c97c9=_0x528daa;document[_0x3c97c9(0xff)]('myDisplayLine')['style']['display']=_0x3c97c9(0x14c),document['getElementById'](_0x3c97c9(0x13d))['style']['display']=_0x3c97c9(0x14c),document['getElementById'](_0x3c97c9(0xc4))[_0x3c97c9(0x121)][_0x3c97c9(0xc6)]='block';xCheckRegister==0x1&&(document[_0x3c97c9(0xff)](_0x3c97c9(0xca))[_0x3c97c9(0x121)][_0x3c97c9(0xc6)]='none');var _0x1bc068='',_0x5af720='';dbBootMember[_0x3c97c9(0x12a)](_0x3c97c9(0x12b),'==',parseFloat(sessionStorage[_0x3c97c9(0xbc)]('EmpID')))[_0x3c97c9(0x12a)](_0x3c97c9(0x144),'==',sCampRound)[_0x3c97c9(0xee)](0x1)[_0x3c97c9(0x13c)]()[_0x3c97c9(0xc5)](_0x23465a=>{var _0x51a211=_0x3c97c9;_0x23465a[_0x51a211(0xcb)](_0x30092b=>{var _0x370a96=_0x51a211;EidBootMember=_0x30092b['id'],_0x5af720=_0x30092b[_0x370a96(0x152)]()[_0x370a96(0x144)],sessionStorage[_0x370a96(0x12e)](_0x370a96(0x169),_0x30092b['data']()[_0x370a96(0x169)]),sessionStorage['setItem'](_0x370a96(0x119),0x1);}),_0x1bc068+='<div\x20class=\x22title_container\x22><div\x20class=\x22title-head\x22>ttb\x20Registration\x20System</div></div>',_0x1bc068+='<div\x20class=\x22profile-txt\x22\x20style=\x22margin-top:-25px;font-size:12px;\x22>'+sessionStorage['getItem'](_0x51a211(0x112))+_0x51a211(0x11e),_0x1bc068+=_0x51a211(0x115)+sessionStorage[_0x51a211(0xbc)]('LinePicture')+_0x51a211(0xd1),_0x1bc068+=_0x51a211(0x15d)+sessionStorage[_0x51a211(0xbc)](_0x51a211(0xcf))+'</div>',_0x1bc068+=_0x51a211(0x137)+sessionStorage[_0x51a211(0xbc)](_0x51a211(0x169))+'\x20['+sessionStorage[_0x51a211(0xbc)](_0x51a211(0x12b))+']</div>',_0x5af720!=''?_0x1bc068+='<div\x20class=\x22profile-txt1\x22\x20style=\x22line-height:\x201.3;color:#ff0000;\x22>ได้ลงทะเบียนเพื่อเข้าร่วมกิจกรรม<br><font\x20color=\x22#0056ff\x22>'+sessionStorage[_0x51a211(0xbc)](_0x51a211(0x112))+_0x51a211(0xf0):_0x1bc068+=_0x51a211(0x10e)+sessionStorage[_0x51a211(0xbc)](_0x51a211(0x112))+_0x51a211(0xf0),sDateTime!=''&&(_0x1bc068+=_0x51a211(0x128)+sDateTime+'</div>'),sessionStorage[_0x51a211(0xbc)](_0x51a211(0x160))!=null?_0x1bc068+=_0x51a211(0x134):_0x1bc068+=_0x51a211(0xd5),sessionStorage[_0x51a211(0xbc)](_0x51a211(0x119))==0x1&&FinalRoundSplit==undefined?_0x1bc068+=_0x51a211(0xde):_0x1bc068+=_0x51a211(0xd2),_0x1bc068+='<div\x20class=\x22btn-t1\x22\x20onclick=\x22showRegister()\x22\x20style=\x22margin-top:10px;width:230px;font-size:11px;\x22>ดูข้อมูลผู้ลงทะเบียน</div>',_0x1bc068+='</div></center>',$(_0x51a211(0xfa))['html'](_0x1bc068);});}function CheckData(){var _0x21ea4f=_0x528daa;document['getElementById'](_0x21ea4f(0xca))[_0x21ea4f(0x121)]['display']='none',db['where'](_0x21ea4f(0xf3),'==',sessionStorage[_0x21ea4f(0xbc)](_0x21ea4f(0xf9)))['get']()[_0x21ea4f(0xc5)](_0x266cd1=>{var _0x4d5c9a=_0x21ea4f;_0x266cd1[_0x4d5c9a(0xcb)](_0x5e3614=>{var _0x56330b=_0x4d5c9a;Eid=_0x5e3614['id'],sDateRegister=_0x5e3614['data']()['DateRegister'],sessionStorage[_0x56330b(0x12e)](_0x56330b(0x12b),_0x5e3614[_0x56330b(0x152)]()['empID']),sessionStorage[_0x56330b(0x12e)](_0x56330b(0x169),_0x5e3614[_0x56330b(0x152)]()['empName']),sessionStorage['setItem'](_0x56330b(0xd0),_0x5e3614[_0x56330b(0x152)]()[_0x56330b(0xf1)]),document[_0x56330b(0xff)]('txtEmpID')['value']=_0x5e3614[_0x56330b(0x152)]()[_0x56330b(0x120)],document[_0x56330b(0xff)]('txtEmpName')['value']=_0x5e3614[_0x56330b(0x152)]()[_0x56330b(0x168)],document['getElementById'](_0x56330b(0x131))[_0x56330b(0x14f)]=_0x5e3614[_0x56330b(0x152)]()[_0x56330b(0x155)],WaitingPage();}),document['getElementById'](_0x4d5c9a(0x13d))['style'][_0x4d5c9a(0xc6)]='block',$(_0x4d5c9a(0x105))['attr'](_0x4d5c9a(0xd9),_0x4d5c9a(0xd9))[_0x4d5c9a(0x129)]('click'),OpenForm();});}function OpenForm(){var _0x2489c4=_0x528daa;CheckVaccine(),CheckFoundData==0x1?(document[_0x2489c4(0xff)](_0x2489c4(0xd3))[_0x2489c4(0x121)]['display']=_0x2489c4(0x14c),document[_0x2489c4(0xff)]('myRegister')[_0x2489c4(0x121)]['display']=_0x2489c4(0x14c),document[_0x2489c4(0xff)](_0x2489c4(0xc4))[_0x2489c4(0x121)][_0x2489c4(0xc6)]=_0x2489c4(0x11a),document[_0x2489c4(0xff)]('myDisplayLine')[_0x2489c4(0x121)]['display']=_0x2489c4(0x14c)):(document[_0x2489c4(0xff)](_0x2489c4(0xd3))[_0x2489c4(0x121)][_0x2489c4(0xc6)]=_0x2489c4(0x14c),document[_0x2489c4(0xff)](_0x2489c4(0x13d))['style']['display']=_0x2489c4(0x11a),document['getElementById'](_0x2489c4(0xc4))['style'][_0x2489c4(0xc6)]=_0x2489c4(0x14c),document['getElementById'](_0x2489c4(0x150))[_0x2489c4(0x121)][_0x2489c4(0xc6)]='none');}var sCheckBottom=0x0;function ClickSaveProfile(){var _0x4efb7a=_0x528daa;sCheckBottom=0x0,stxtEmpID=document[_0x4efb7a(0xff)](_0x4efb7a(0x10b))[_0x4efb7a(0x14f)],stxtEmpName=document['getElementById']('txtEmpName')[_0x4efb7a(0x14f)],stxtEmpGroup=document['getElementById']('txtEmpGroup')[_0x4efb7a(0x14f)],stxtATK=document['getElementById']('txtATK')[_0x4efb7a(0x14f)],stxtEmpID!==null&&stxtEmpID!==''&&(sCheckBottom=sCheckBottom+0x1),stxtEmpName!==null&&stxtEmpName!==''&&(sCheckBottom=sCheckBottom+0x1),stxtEmpGroup!==null&&stxtEmpGroup!==''&&(sCheckBottom=sCheckBottom+0x1),stxtATK!==null&&stxtATK!==''&&(sCheckBottom=sCheckBottom+0x1),sessionStorage[_0x4efb7a(0xbc)](_0x4efb7a(0x160))!==null&&(sCheckBottom=sCheckBottom+0x1),sCheckBottom==0x5?(sATK=document[_0x4efb7a(0xff)](_0x4efb7a(0xeb))['value'],sessionStorage[_0x4efb7a(0x12e)](_0x4efb7a(0x12b),document[_0x4efb7a(0xff)](_0x4efb7a(0x10b))[_0x4efb7a(0x14f)]),sessionStorage['setItem'](_0x4efb7a(0x108),document['getElementById'](_0x4efb7a(0x131))[_0x4efb7a(0x14f)]),CheckMember(),SaveData()):alert(_0x4efb7a(0xdf));}function SaveData(){var _0x15eb96=_0x528daa,_0x3653fd='',_0x5c92ff=_0x15eb96(0xdd);NewDate();var _0x554fee=Math[_0x15eb96(0xfd)](Date['now']()/0x3e8);sDateTime=dateString,sessionStorage['setItem']('CheckPass',sDateTime),document[_0x15eb96(0xff)](_0x15eb96(0x131))[_0x15eb96(0x14f)]!=_0x15eb96(0x117)&&(_0x5c92ff='BBD'),Eid==''?(db['add']({'lineID':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0xf9)),'linename':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0xcf)),'empPicture':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0x162)),'empID':document['getElementById'](_0x15eb96(0x10b))[_0x15eb96(0x14f)],'empName':document[_0x15eb96(0xff)]('txtEmpName')[_0x15eb96(0x14f)],'empRH':document[_0x15eb96(0xff)]('txtEmpGroup')['value'],'empBr':_0x5c92ff,'statusconfirm':0x2,'statusedit':0x1,'statuspass':0x0,'memo':_0x3653fd,'empAddress':_0x3653fd,'DateRegister':dateString}),sessionStorage[_0x15eb96(0x12e)](_0x15eb96(0x169),document[_0x15eb96(0xff)](_0x15eb96(0xd7))[_0x15eb96(0x14f)])):db[_0x15eb96(0x151)](Eid)[_0x15eb96(0x10a)]({'lineID':sessionStorage[_0x15eb96(0xbc)]('LineID'),'linename':sessionStorage[_0x15eb96(0xbc)]('LineName'),'empPicture':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0x162)),'empID':document[_0x15eb96(0xff)](_0x15eb96(0x10b))[_0x15eb96(0x14f)],'empName':document[_0x15eb96(0xff)]('txtEmpName')['value'],'empRH':document['getElementById'](_0x15eb96(0x131))[_0x15eb96(0x14f)],'empBr':_0x5c92ff,'DateRegister':dateString}),EidBootRegister==''&&(sessionStorage['getItem'](_0x15eb96(0x119))==null&&sessionStorage[_0x15eb96(0x12e)](_0x15eb96(0x119),0x0),dbBootRegister[_0x15eb96(0x148)]({'LineID':sessionStorage[_0x15eb96(0xbc)]('LineID'),'LineName':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0xcf)),'LinePicture':sessionStorage['getItem'](_0x15eb96(0x162)),'EmpID':document[_0x15eb96(0xff)](_0x15eb96(0x10b))[_0x15eb96(0x14f)],'EmpName':document[_0x15eb96(0xff)](_0x15eb96(0xd7))[_0x15eb96(0x14f)],'EmpRH':document[_0x15eb96(0xff)](_0x15eb96(0x131))[_0x15eb96(0x14f)],'ATK':document[_0x15eb96(0xff)](_0x15eb96(0xeb))[_0x15eb96(0x14f)],'ATKimg':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0x160)),'EmpMember':parseInt(sessionStorage['getItem']('EmpMember')),'PreRegister':0x0,'EmpTable':parseInt(sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0xe3))),'EmpSize':sessionStorage[_0x15eb96(0xbc)](_0x15eb96(0x132)),'PreDateTime':_0x3653fd,'StatusRegister':0x1,'TimegetBox':_0x3653fd,'CampRound':sCampRound,'EmpType':sEmpType,'TimeStamp':_0x554fee,'DateTime':dateString})),EidBootMember!=''&&dbBootMember[_0x15eb96(0x151)](EidBootMember)[_0x15eb96(0x10a)]({'StatusRegister':0x1,'TimeIN':dateString,'TimeStampRec':_0x554fee}),WaitingPage();}function showATK(){var _0x1894ea=_0x528daa,_0x1b11ce='';_0x1b11ce+=_0x1894ea(0xdb),_0x1b11ce+='<div\x20style=\x22font-size:13px;color:#f68b1f;\x22>แสดงผล\x20ATK\x20สำหรับเข้าร่วมงาน</div></div></div>',_0x1b11ce+=_0x1894ea(0x15e)+sessionStorage[_0x1894ea(0xbc)](_0x1894ea(0x112))+_0x1894ea(0x11e),_0x1b11ce+=_0x1894ea(0x115)+sessionStorage[_0x1894ea(0xbc)]('ATKimg')+_0x1894ea(0xf5),_0x1b11ce+=_0x1894ea(0x14a)+sATK+_0x1894ea(0x161),_0x1b11ce+='<div><img\x20src=\x22'+sessionStorage['getItem']('LinePicture')+_0x1894ea(0x157),_0x1b11ce+=_0x1894ea(0xe0)+sessionStorage['getItem'](_0x1894ea(0x169))+'\x20['+sessionStorage['getItem']('EmpID')+_0x1894ea(0xfe),_0x1b11ce+='<div\x20style=\x22color:#0056ff;\x22>สังกัด\x20:\x20'+sessionStorage[_0x1894ea(0xbc)](_0x1894ea(0x108))+'</div>',_0x1b11ce+='<div\x20style=\x22color:#999;font-size:11px;font-weight:\x20300;\x22>ลงทะเบียนเมื่อ\x20:\x20'+sDateTime+'</div>',_0x1b11ce+=_0x1894ea(0xc7),sessionStorage[_0x1894ea(0xbc)]('EmpMember')==0x1&&FinalRoundSplit==undefined?_0x1b11ce+=_0x1894ea(0xde):_0x1b11ce+='<div\x20class=\x22btn-t0\x22\x20style=\x22margin-top:10px;width:230px;\x22>คลิกเพื่อรับ\x20Welcome\x20Pack</div>',_0x1b11ce+='<div\x20class=\x22btn-t1\x22\x20onclick=\x22showRegister()\x22\x20style=\x22margin-top:10px;width:230px;font-size:11px;\x22>ดูข้อมูลผู้ลงทะเบียน</div>',$('#MyWating')[_0x1894ea(0xed)](_0x1b11ce);}function _0x7ab2(){var _0x58d448=['</div>','firestore','empID','style','<div\x20style=\x22font-size:13px;color:#f68b1f;\x22>แสดงหน้านี้เพื่อรับกล่อง\x20Welcome\x20Pack</div></div></div>','#gotoLink','<div\x20style=\x22color:#0056ff;\x22>สังกัด\x20:\x20','#DisplayRound','167629DTkeVm','#DisplayReg','<div\x20style=\x22color:#999;font-size:11px;font-weight:\x20300;\x22>ลงทะเบียนเมื่อ\x20:\x20','off','where','EmpID','<div\x20style=\x22margin-top:-10px;\x22><img\x20src=\x22./img/brown-bear.gif\x22\x20style=\x22width:370px;\x22></div>','\x20คน</div>','setItem','3gPbZjF','482644mPSTPe','txtEmpGroup','EmpSize','<div\x20class=\x22clr\x22></div>','<div\x20class=\x22btn-t3\x22\x20onclick=\x22showATK()\x22\x20style=\x22margin-top:10px;width:230px;font-size:11px;\x22>แสดงผล\x20ATK\x20ก่อนเข้างาน</div>','EmpRH','\x22\x20style=\x22width:100%;\x20max-width:240px;\x22></div>','<div><div\x20style=\x22padding-top:15px;color:#f68b1f;font-weight:\x20600;\x22>คุณ','372WuNlBu','isLoggedIn','<div\x20class=\x22btn-t00\x22\x20style=\x22margin-top:10px;width:230px;\x22>คลิกเพื่อรับ\x20Welcome\x20Pack</div>','1:653667385625:web:a5aed08500de80839f0588','get','myRegister','<div\x20style=\x22margin-top:-1px;\x22><img\x20src\x20=\x22','<div\x20class=\x22btn-t1\x22\x20style=\x22margin-top:20px;width:270px;cursor:pointer;\x22\x20onclick=\x22CheckData()\x22>คลิกลงทะเบียน<br>','221734PMLndP','3680655Yhrpyb','BootCamp','getFullYear','EmpType','30MwOViC','BootRegister','DateTime','add','<div\x20class=\x22ShowVaccine\x22>0<br>เข็ม</div>','<div\x20style=\x22padding:10px;color:#002d63;font-weight:\x20600;\x22>แจ้งผล\x20ATK\x20เป็น\x20:\x20<font\x20color=\x22#f68b1f\x22>','displayName','none','<div\x20class=\x22title-head\x22>ttb\x20Registration\x20System</div>','append','value','myDisplayLine','doc','data','<div\x20class=\x22NameLine\x22>','getHours','empRH','CheckPass','\x22\x20class=\x22profile-member\x22\x20style=\x22width:60px;\x22></div>','img_reg','CampRound','loadingPack','<div\x20class=\x22ShowVaccine\x22>','collection','<div\x20class=\x22profile-txt\x22>','<div\x20class=\x22profile-txt\x22\x20style=\x22margin-top:-25px;font-size:12px;\x22>สำหรับ\x20:\x20','<div\x20style=\x22margin-top:0px;\x22><img\x20src=\x27','ATKimg','</font></div>','LinePicture','<div\x20class=\x22profile-txt\x22\x20style=\x22font-size:12px;margin-top:-10px;\x22>','getMinutes','Asia/Jakarta','<div\x20style=\x22color:#ff0000;padding:8px;\x22>ห้ามกดปุ่มรับ\x20Welcome\x20Pack\x20เองนะครับ</div>','ready','empName','EmpName','id01','getItem','228KHySHj','\x27)\x22>','split','Vaccine','</div></div>','<div\x20style=\x22margin-top:5px;color:#fff;font-weight:\x20600;padding:12px;background-color:\x20#002d63;border-radius:5px;\x22>ท่านได้ทำการรับ\x20Welcome\x20Pack\x20ไปแล้ว<br>เมื่อวันที่\x20','4341303hvwuEL','myTimer','then','display','<div\x20class=\x22btn-t00\x22\x20style=\x22margin-top:10px;width:230px;font-size:11px;\x22>แสดงผล\x20ATK\x20ก่อนเข้างาน</div>','8166368jabbKc','TimeRegister','BootCampLoading','forEach','#DisplayUser','#MyProfile','retailproject-6f4fc.firebaseapp.com','LineName','EmpPhone','\x22\x20class=\x22profile-member\x22></div>','<div\x20class=\x22btn-t0\x22\x20style=\x22margin-top:10px;width:230px;\x22>คลิกเพื่อรับ\x20Welcome\x20Pack</div>','OpenBootCamp','documentId','<div\x20class=\x22btn-t3\x22\x20style=\x22margin-top:10px;width:230px;background:#ddd;cursor:default;color:#999;font-size:11px;\x22>แสดงผล\x20ATK\x20ก่อนเข้างาน</div>','<div\x20id=\x22ClickWelcomePack\x22>','txtEmpName','getSeconds','disabled','<div\x20style=\x22margin:10px;\x22><img\x20src=\x22./img/Size.jpg\x22\x20style=\x22width:260px;\x22></div>','<div\x20class=\x22title_container\x22><div\x20class=\x22title-head\x22>ttb\x20Registration\x20System','<div\x20class=\x22btn-t3\x22\x20onclick=\x22showATK()\x22\x20style=\x22margin-top:10px;width:230px;\x22>แสดงผล\x20ATK\x20ก่อนเข้างาน</div>','other','<div\x20class=\x22btn-t4\x22\x20onclick=\x22WelcomePack()\x22\x20style=\x22margin-top:10px;width:230px;\x22>คลิกเพื่อรับ\x20Welcome\x20Pack</div>','คุณยังกรอกข้อมูลไม่ครบถ้วน','<div\x20style=\x22color:#0056ff;font-weight:\x20600;margin-top:15px;\x22>คุณ','ClickWelcomePack','length','EmpTable','desc','<div\x20onclick=\x22getWelcomePack()\x22\x20class=\x22btn-t4\x22\x20style=\x22margin-top:0px;width:270px;\x22>สำหรับเจ้าหน้าที่กดเท่านั้น<br>ยืนยันการรับ\x20Welcome\x20Pack</div>','<div\x20id=\x22DisplayCountRegister\x22\x20style=\x22margin-bottom:\x2015px;\x22></div>','14XNeGnP','div.com[min=\x22','G-9SKTRHHSW9','TimeStamp','txtATK','getMonth','html','limit','getDate','</font><br><font\x20color=\x22#ff0000\x22>เรียบร้อยแล้ว</font></div>','empPhone','orderBy','lineID','loading','\x22\x20style=\x22width:370px;\x22></div>','<div\x20style=\x22margin-top:20px;font-size:13px;font-weight:\x20600;color:#0056ff;\x22>คุณ','StatusRegister','<div\x20style=\x22margin:10px;\x22><img\x20src=\x22./img/Size-','LineID','#MyWating','FieldPath','querySelectorAll','round',']</div>','getElementById','<div\x20class=\x22title_container\x22><div\x20class=\x22title-head\x22>BBD\x20CAMPUS\x20Specialist\x20Program\x202022','\x22\x20class=\x22img-register\x22></div>','1656865573-827vvn60','1359611alAncd','<div\x20style=\x22margin-top:-1px;\x22><img\x20src\x20=\x22./img/Register.png\x22\x20style=\x22width:100%;\x20max-width:240px;\x22></div>','#test\x20*','<div\x20style=\x22color:#002d63;\x22>ลงทะเบียนกิจกรรม<br>','<div\x20class=\x22btn-t00\x22\x20style=\x22margin-top:10px;width:230px;font-size:11px;\x22>ดูข้อมูลผู้ลงทะเบียน</div>','EmpGroup','retailproject-6f4fc.appspot.com','update','txtEmpID','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','#DisplayCountRegister','<div\x20class=\x22profile-txt1\x22\x20style=\x22line-height:\x201.3;color:#ff0000;\x22>ได้ลงทะเบียนเพื่อเข้าร่วมกิจกรรม<br><font\x20color=\x22#0056ff\x22>','userId','BootCampClose','CampStatus','CampName','<div\x20class=\x22txt-member1\x22\x20style=\x22padding-top:\x206px;color:#f68b1f\x22>','#DisplayVaccine','<div><img\x20src=\x22','<div\x20class=\x22btn-t1\x22\x20onclick=\x22showRegister()\x22\x20style=\x22margin-top:10px;width:230px;font-size:11px;\x22>ดูข้อมูลผู้ลงทะเบียน</div>','OTHER','pictureUrl','EmpMember','block','en-US','toLocaleString','<div\x20class=\x22box-member\x22\x20style=\x22width:61px;height:80px;overflow:hidden;float:\x20left;\x22\x20onclick=\x22OpenRegister(\x27'];_0x7ab2=function(){return _0x58d448;};return _0x7ab2();}function showRegister(){var _0x1afcd8=_0x528daa;document[_0x1afcd8(0xff)](_0x1afcd8(0x150))['style'][_0x1afcd8(0xc6)]=_0x1afcd8(0x14c),document['getElementById'](_0x1afcd8(0x13d))[_0x1afcd8(0x121)][_0x1afcd8(0xc6)]=_0x1afcd8(0x14c),document[_0x1afcd8(0xff)]('myTimer')[_0x1afcd8(0x121)][_0x1afcd8(0xc6)]='block';var _0x1eecdf='',_0x32bd3d=0x0;_0x1eecdf+=_0x1afcd8(0x14d),_0x1eecdf+=_0x1afcd8(0x163)+sessionStorage[_0x1afcd8(0xbc)](_0x1afcd8(0x112))+_0x1afcd8(0x11e),_0x1eecdf+=_0x1afcd8(0xe6),dbBootRegister[_0x1afcd8(0x12a)](_0x1afcd8(0x159),'==',xRound)[_0x1afcd8(0x12a)](_0x1afcd8(0xf7),'==',0x1)[_0x1afcd8(0xf2)](_0x1afcd8(0xea),_0x1afcd8(0xe4))[_0x1afcd8(0x13c)]()[_0x1afcd8(0xc5)](_0x397811=>{var _0x121213=_0x1afcd8;_0x397811[_0x121213(0xcb)](_0x2019c6=>{var _0x51b9ad=_0x121213;_0x32bd3d=_0x32bd3d+0x1,_0x1eecdf+=_0x51b9ad(0x11d)+_0x2019c6['id']+_0x51b9ad(0xbe),_0x1eecdf+=_0x51b9ad(0x115)+_0x2019c6['data']()[_0x51b9ad(0x162)]+_0x51b9ad(0x101),_0x1eecdf+='<div\x20class=\x22clr\x20txt-member\x22\x20style=\x22font-size:10px;line-height:1.2;\x22>'+_0x2019c6[_0x51b9ad(0x152)]()['LineName']+_0x51b9ad(0xc1);}),_0x1eecdf+=_0x121213(0x133),sessionStorage['getItem']('ATKimg')!=null&&(_0x1eecdf+=_0x121213(0x134)),sessionStorage[_0x121213(0xbc)]('EmpMember')==0x1&&FinalRoundSplit==undefined?_0x1eecdf+=_0x121213(0xde):_0x1eecdf+=_0x121213(0xd2),_0x1eecdf+=_0x121213(0x107),$(_0x121213(0xfa))['html'](_0x1eecdf),$(_0x121213(0x10d))[_0x121213(0xed)]('<div>จำนวนลงทะเบียน\x20:\x20'+_0x32bd3d+_0x121213(0x12d));});}function RegisterClose(){var _0x4d5d10=_0x528daa;document[_0x4d5d10(0xff)]('BootCampLoading')[_0x4d5d10(0x121)][_0x4d5d10(0xc6)]=_0x4d5d10(0x14c),document['getElementById'](_0x4d5d10(0x110))[_0x4d5d10(0x121)]['display']='block';}function getEid(){var _0x598204=_0x528daa;dbBootRegister['where'](_0x598204(0xf9),'==',sessionStorage[_0x598204(0xbc)]('LineID'))[_0x598204(0x12a)](_0x598204(0x159),'==',xRound)[_0x598204(0xee)](0x1)['get']()['then'](_0x110dd9=>{var _0x14d388=_0x598204;_0x110dd9[_0x14d388(0xcb)](_0x53ffb8=>{EidBootRegister=_0x53ffb8['id'];});});}function WelcomePack(){var _0x119454=_0x528daa;getEid();var _0x4c8499='';_0x4c8499+=_0x119454(0x100),_0x4c8499+=_0x119454(0x122),_0x4c8499+='<div\x20class=\x22profile-txt\x22\x20style=\x22margin-top:-25px;font-size:12px;\x22>สำหรับผู้เข้าอบรม\x20:\x20'+sessionStorage[_0x119454(0xbc)](_0x119454(0x112))+_0x119454(0x11e),sessionStorage[_0x119454(0xbc)]('EmpTable')==0x0?(sessionStorage[_0x119454(0xbc)]('EmpSize')!=''?_0x4c8499+=_0x119454(0xf8)+sessionStorage[_0x119454(0xbc)]('EmpSize')+'.jpg\x22\x20style=\x22width:260px;\x22></div>':_0x4c8499+=_0x119454(0xda),_0x4c8499+=_0x119454(0xd6),_0x4c8499+=_0x119454(0xe5),_0x4c8499+=_0x119454(0x166),_0x4c8499+=_0x119454(0x11e),_0x4c8499+='<div\x20style=\x22padding:30px;display:\x20none;\x22\x20id=\x22loadingPack\x22><img\x20src=\x22./img/loading.gif\x22><div\x20style=\x22padding-top:15px;color:#f68b1f;\x22>L\x20o\x20a\x20d\x20i\x20n\x20g</div></div>'):(_0x4c8499+=_0x119454(0x12c),_0x4c8499+=_0x119454(0xc2)+sessionStorage[_0x119454(0xbc)]('TimeRegister')+_0x119454(0x11e)),_0x4c8499+=_0x119454(0x115)+sessionStorage[_0x119454(0xbc)](_0x119454(0x162))+_0x119454(0x157),_0x4c8499+=_0x119454(0xe0)+sessionStorage[_0x119454(0xbc)](_0x119454(0x169))+'\x20['+sessionStorage[_0x119454(0xbc)](_0x119454(0x12b))+_0x119454(0xfe),_0x4c8499+=_0x119454(0x124)+sessionStorage[_0x119454(0xbc)](_0x119454(0x108))+'</div>',_0x4c8499+=_0x119454(0x128)+sDateTime+_0x119454(0x11e),sessionStorage[_0x119454(0xbc)](_0x119454(0x160))!=null&&(_0x4c8499+=_0x119454(0xdc)),sessionStorage[_0x119454(0xbc)](_0x119454(0x119))==0x1&&FinalRoundSplit==undefined?_0x4c8499+=_0x119454(0x13a):_0x4c8499+=_0x119454(0xd2),_0x4c8499+=_0x119454(0x116),$('#MyWating')[_0x119454(0xed)](_0x4c8499);}function getWelcomePack(){var _0x207cee=_0x528daa;NewDate(),document[_0x207cee(0xff)](_0x207cee(0xe1))[_0x207cee(0x121)][_0x207cee(0xc6)]=_0x207cee(0x14c),document['getElementById'](_0x207cee(0x15a))['style']['display']=_0x207cee(0x11a),FinalRoundSplit==undefined&&(sessionStorage['getItem'](_0x207cee(0xe3))==0x0&&(dbBootMember[_0x207cee(0x151)](EidBootMember)['update']({'EmpTable':0x1,'TimeRegister':dateString}),dbBootRegister[_0x207cee(0x151)](EidBootRegister)['update']({'EmpMember':0x1,'TimegetBox':dateString}),sessionStorage[_0x207cee(0x12e)](_0x207cee(0xe3),0x1),sessionStorage[_0x207cee(0x12e)](_0x207cee(0xc9),dateString))),WelcomePack();}function OpenRegister(_0x1873f1){var _0x12880d=_0x528daa,_0x4f5437='';dbBootRegister[_0x12880d(0x12a)](firebase[_0x12880d(0x11f)][_0x12880d(0xfb)][_0x12880d(0xd4)](),'==',_0x1873f1)['get']()[_0x12880d(0xc5)](_0x1ec81f=>{var _0x173980=_0x12880d;_0x1ec81f['forEach'](_0x2a45a1=>{var _0xe6239c=_0x1346;_0x4f5437+=_0xe6239c(0x15f)+_0x2a45a1[_0xe6239c(0x152)]()[_0xe6239c(0x162)]+'\x27\x20class=\x22img-member-true\x22\x20style=\x22width:120px;height:120px;border-radius:50%;box-shadow:\x200px\x200px\x206px\x205px\x20rgba(178,178,178,0.17);\x22>',_0x4f5437+=_0xe6239c(0x113)+_0x2a45a1['data']()[_0xe6239c(0xcf)]+_0xe6239c(0x11e),_0x4f5437+=_0xe6239c(0xf6)+_0x2a45a1[_0xe6239c(0x152)]()['EmpName']+'</div>',_0x4f5437+=_0xe6239c(0x106)+sessionStorage[_0xe6239c(0xbc)](_0xe6239c(0x112))+_0xe6239c(0x11e),_0x4f5437+='<div\x20style=\x22color:#999;font-size:11px;\x22>ลงทะเบียนเมื่อ\x20'+_0x2a45a1[_0xe6239c(0x152)]()[_0xe6239c(0x147)]+'</div>';}),$(_0x173980(0xcc))[_0x173980(0xed)](_0x4f5437),document[_0x173980(0xff)](_0x173980(0xbb))[_0x173980(0x121)]['display']=_0x173980(0x11a);});}function CloseAll(){var _0x5db1a0=_0x528daa;document['getElementById'](_0x5db1a0(0xbb))[_0x5db1a0(0x121)]['display']=_0x5db1a0(0x14c);}function NewDate(){var _0x50f3f7=_0x528daa,_0x4eef19=new Date(),_0x50a41d=_0x4eef19[_0x50f3f7(0xef)]()+'',_0x5b7a23=_0x4eef19[_0x50f3f7(0xec)]()+0x1+'',_0x7c0ffc=_0x4eef19[_0x50f3f7(0x143)]()+'',_0x420a8e=_0x4eef19[_0x50f3f7(0x154)]()+'',_0x5445e7=_0x4eef19[_0x50f3f7(0x164)]()+'',_0x4108b6=_0x4eef19[_0x50f3f7(0xd8)]()+'',_0x4bba09=_0x420a8e>=0xc?'PM':'AM';_0x50a41d=checkZero(_0x50a41d),_0x5b7a23=checkZero(_0x5b7a23),_0x7c0ffc=checkZero(_0x7c0ffc),_0x420a8e=checkZero(_0x420a8e),_0x5445e7=checkZero(_0x5445e7),_0x4108b6=checkZero(_0x4108b6),dateString=_0x50a41d+'/'+_0x5b7a23+'/'+_0x7c0ffc+'\x20'+_0x420a8e+':'+_0x5445e7+':'+_0x4108b6+'\x20'+_0x4bba09;}function checkZero(_0x313b50){var _0x592386=_0x528daa;return _0x313b50[_0x592386(0xe2)]==0x1&&(_0x313b50='0'+_0x313b50),_0x313b50;}
