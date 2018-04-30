export default (editor, config = {}) => {
  const bm = editor.BlockManager;

// **************************************************Column*************************************************************
  let div_col1 =  `
  <div class="row"><div class="col-md-12" style="height: 20%"></div></div>
    `;
      bm.add('1_column', {
      label: '1 Column',
      content: div_col1,
      category: 'columns',
      attributes: {
            class:'fa fa-times-rectangle'
      }
    });
    let div_col6 =  `
    <div class="row"><div class="col-md-6" style="height: 20%"></div><div class="col-md-6" style="height: 20%"></div></div>
      `;
        bm.add('6_column', {
        label: '2 Column',
        content: div_col6,
        category: 'columns',
        attributes: {
              class:'fa fa-columns'
        }
      });
      let div_col3 =  `
      <div class="row"><div class="col-md-4" style="height: 20%"></div><div class="col-md-4" style="height: 20%"></div><div class="col-md-4" style="height: 20%"></div></div>
        `;

          bm.add('3_column', {
          label: '3 Column',
          content: div_col3,
          category: 'columns',
          attributes: {
                class:'fa fa-columns'
          }
        });
    let div_col4 =  `
      <div class="row"><div class="col-md-3" style="height: 20%"></div><div class="col-md-3" style="height: 20%"></div><div class="col-md-3" style="height: 20%"></div><div class="col-md-3" style="height: 20%"></div></div>
    `;

    bm.add('4_column', {
    label: '4 Column',
    content: div_col4,
    category: 'columns',
    attributes: {
      class:'fa fa-columns'
    }
  });

  let div_col2_4_and_8 =  `
    <div class="row"><div class="col-md-4" style="height: 20%"></div><div class="col-md-8" style="height: 20%"></div></div>
  `;

  bm.add('2_column_4_and_8', {
  label: '2 Column 4,8',
  content: div_col2_4_and_8,
  category: 'columns',
  attributes: {
    class:'fa fa-columns'
  }
});

  let div_col2_8_and_4 =  `
    <div class="row"><div class="col-md-8" style="height: 20%"></div><div class="col-md-4" style="height: 20%"></div></div>
  `;

  bm.add('2_column_8_and_4', {
  label: '2 Column 8,4',
  content: div_col2_8_and_4,
  category: 'columns',
  attributes: {
    class:'fa fa-columns'
  }
  });

  let div_col12=  `
    <div class="row"><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div><div class="col-md-1" style="height: 20%"></div></div>
  `;

  bm.add('12_columns', {
  label: '12 columns',
  content: div_col12,
  category: 'columns',
  attributes: {
    class:'fa fa-columns'
  }
  });

// *******************************************************SideBar********************************************************
let sidebar1 = `<div id="mySidenav1" class="sidenav1">

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

<div class="nav-side-menu">
    <div class="brand">Brand Logo  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a></div>


        <div class="menu-list">

            <ul id="menu-content" class="menu-content collapse in">
                <li>
                  <a href="#"><i class="fa fa-dashboard fa-lg fa-fw sidebar-icon"></i> Dashboard</a>
                </li>

                <li>
                  <a href="#"><i class="fa fa-calendar fa-lg fa-fw sidebar-icon"></i> Scheduler</a>
                </li>

                <li>
                  <a href="#"><i class="fa fa-bar-chart fa-lg fa-fw sidebar-icon"></i> Statistics</a>
                </li>

                <li  data-toggle="collapse" data-target="#manage" class="collapsed">
                    <a href="#"><i class="fa fa-puzzle-piece fa-lg fa-fw sidebar-icon"></i> Manage <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="manage">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Devices</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Groups</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SIM Cards</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Users</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#settings" class="collapsed">
                    <a href="#"><i class="fa fa-sliders fa-lg fa-fw sidebar-icon"></i> Settings <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="settings">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> General</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Security</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Notifications</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#maintenance" class="collapsed">
                    <a href="#"><i class="fa fa-cogs fa-lg fa-fw sidebar-icon"></i> Maintenance <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="maintenance">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Operation Logs</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Events and Alarms</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Backup and Restore</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#tools" class="collapsed">
                    <a href="#"><i class="fa fa-wrench fa-lg fa-fw sidebar-icon"></i> Tools <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="tools">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Manual SMS</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Import</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Export</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#help" class="collapsed">
                    <a href="#"><i class="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Help <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="help">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Documentation</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Customer Support <small><i class="fa fa-external-link"></i></small></a></li>
                </ul>
            </ul>
     </div>
</div>
</div>

<div id="main1">
<span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
</div>

<script>
function openNav() {
    document.getElementById("mySidenav1").style.width = "250px";
    document.getElementById("main1").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav1").style.width = "0";
    document.getElementById("main1").style.marginLeft= "0";
}
</script>
<style>

nav-side-menu {
  overflow: auto;
  background-color: #2e353d;
  position: fixed;
  top: 0px;
  width: 220px;
  height: 100%;
  color: #e1ffff;
}
.nav-side-menu .brand {
  background-color: #23282e;
  color: #fff;
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
}
.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 4rem;
  cursor: pointer;
  visibility: visible !important;
}
/*
    .collapsed{
       .arrow:before{
                 font-family: FontAwesome;
                 content: "\f053";
                 display: inline-block;
                 padding-left:10px;
                 padding-right: 10px;
                 vertical-align: middle;
                 float:right;
            }
     }
*/
.nav-side-menu ul :not(collapsed) .arrow:before,
.nav-side-menu li :not(collapsed) .arrow:before {
  font-family: FontAwesome;
  content: "\f078";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  float: right;
}
.nav-side-menu li i.sidebar-icon {
    margin-right: 0.6rem;
    font-size: 1.5em;
}
.nav-side-menu ul .active,
.nav-side-menu li .active {
  border-left: 3px solid #e1ffff;
  background-color: #4f5b69;
}
.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu li a {
  display: block;
  text-decoration: none;
  color: #e1ffff;
}
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-left: 3px solid #e1ffff;
  background-color: #4f5b69;
  -webkit-transition: all .6s ease;
  -moz-transition: all .6s ease;
  -o-transition: all .6s ease;
  -ms-transition: all .6s ease;
  transition: all .6s ease;
}
.nav-side-menu ul .sub-menu li.active,
.nav-side-menu li .sub-menu li.active {
  background-color: #000;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 3.4rem;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}
.nav-side-menu li .sub-menu li a,
.nav-side-menu ul .sub-menu li a{
    display: block;
    padding-left: 20px;
}
.nav-side-menu ul .sub-menu li a i,
.nav-side-menu li .sub-menu li a i{
    padding-right: 10px !important;
}
@media (max-width: 767px) {
    .main {
        margin-left: 0 !important;
        padding: 0 15px 15px 15px;
    }
  .nav-side-menu {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 7px;
    z-index: 10 !important;
    padding: 3px;
    width: 40px;
    text-align: center;
    background-color: #2e353d;
    border-radius: 4px;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}
@media (min-width: 767px) {
  .nav-side-menu .menu-list .menu-content {
    display: block;
  }
}
body {
    font-family: "Lato", sans-serif;
}

.sidenav1 {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}




.sidenav1 .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

#main1 {
    transition: margin-left .5s;
    padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav1 {padding-top: 15px;}
  .sidenav1 a {font-size: 18px;}
}
</style>
`;

  bm.add('sidebar', {
  label: 'Siderbar1',
  content: sidebar1,
  category: 'sidebar',
  attributes: {
    class:'fa fa-bars'
  }
  });

let fixed_sidebar =`

<div class="nav-side-menu">
    <div class="brand">Brand Logo</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

        <div class="menu-list">

            <ul id="menu-content" class="menu-content collapse out">
                <li>
                  <a href="#"><i class="fa fa-dashboard fa-lg fa-fw sidebar-icon"></i> Dashboard</a>
                </li>

                <li>
                  <a href="#"><i class="fa fa-calendar fa-lg fa-fw sidebar-icon"></i> Scheduler</a>
                </li>

                <li>
                  <a href="#"><i class="fa fa-bar-chart fa-lg fa-fw sidebar-icon"></i> Statistics</a>
                </li>

                <li  data-toggle="collapse" data-target="#manage" class="collapsed">
                    <a href="#"><i class="fa fa-puzzle-piece fa-lg fa-fw sidebar-icon"></i> Manage <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="manage">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Devices</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Groups</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SIM Cards</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Users</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#settings" class="collapsed">
                    <a href="#"><i class="fa fa-sliders fa-lg fa-fw sidebar-icon"></i> Settings <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="settings">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> General</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Security</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Notifications</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#maintenance" class="collapsed">
                    <a href="#"><i class="fa fa-cogs fa-lg fa-fw sidebar-icon"></i> Maintenance <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="maintenance">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Operation Logs</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Events and Alarms</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Backup and Restore</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#tools" class="collapsed">
                    <a href="#"><i class="fa fa-wrench fa-lg fa-fw sidebar-icon"></i> Tools <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="tools">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Manual SMS</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Import</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Export</a></li>
                </ul>

                <li  data-toggle="collapse" data-target="#help" class="collapsed">
                    <a href="#"><i class="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Help <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="help">
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Documentation</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i> Customer Support <small><i class="fa fa-external-link"></i></small></a></li>
                </ul>
            </ul>
     </div>
</div>

<div class="main1">
</div>
<style>
body {
    margin: 0px;
    padding: 0px;
    background-color: #ebedef;
}
.main {
    margin-left: 220px;
    padding: 15px;
}
.nav-side-menu {
  overflow: auto;
  background-color: #2e353d;
  position: fixed;
  top: 0px;
  width: 220px;
  height: 100%;
  color: #e1ffff;
}
.nav-side-menu .brand {
  background-color: #23282e;
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
}
.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 4rem;
  cursor: pointer;
  visibility: visible !important;
}
/*
    .collapsed{
       .arrow:before{
                 font-family: FontAwesome;
                 content: "\f053";
                 display: inline-block;
                 padding-left:10px;
                 padding-right: 10px;
                 vertical-align: middle;
                 float:right;
            }
     }
*/
.nav-side-menu ul :not(collapsed) .arrow:before,
.nav-side-menu li :not(collapsed) .arrow:before {
  font-family: FontAwesome;
  content: "\f078";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  float: right;
}
.nav-side-menu li i.sidebar-icon {
    margin-right: 0.6rem;
    font-size: 1.5em;
}
.nav-side-menu ul .active,
.nav-side-menu li .active {
  border-left: 3px solid #e1ffff;
  background-color: #4f5b69;
}
.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu li a {
  display: block;
  text-decoration: none;
  color: #e1ffff;
}
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-left: 3px solid #e1ffff;
  background-color: #4f5b69;
  -webkit-transition: all .6s ease;
  -moz-transition: all .6s ease;
  -o-transition: all .6s ease;
  -ms-transition: all .6s ease;
  transition: all .6s ease;
}
.nav-side-menu ul .sub-menu li.active,
.nav-side-menu li .sub-menu li.active {
  background-color: #000;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 3.4rem;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}
.nav-side-menu li .sub-menu li a,
.nav-side-menu ul .sub-menu li a{
    display: block;
    padding-left: 20px;
}
.nav-side-menu ul .sub-menu li a i,
.nav-side-menu li .sub-menu li a i{
    padding-right: 10px !important;
}
@media (max-width: 767px) {
    .main {
        margin-left: 0 !important;
        padding: 0 15px 15px 15px;
    }
  .nav-side-menu {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 7px;
    z-index: 10 !important;
    padding: 3px;
    width: 40px;
    text-align: center;
    background-color: #2e353d;
    border-radius: 4px;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}
@media (min-width: 767px) {
  .nav-side-menu .menu-list .menu-content {
    display: block;
  }
}
</style>`;
bm.add('sidebar_fixed', {
label: 'fixed sidebar',
content: fixed_sidebar,
category: 'sidebar',
attributes: {
  class:'fa fa-bars'
}
});


let sidebar_with_nav = `<!-- Use any element to open the sidenav -->
<div class="navigatioon">
  <nav class="navbar">
    <ul class="nav navbar-nav pull-left">
      <li class="sidebar-toggle pull-left boom" onclick="openNav()"><a href="javascript: void(0)"><i class="fa fa-align-justify"></i></a> </li>
      <li class="sidebar-toggle pull-left boomy hidden" onclick="closeNav()"><a href="javascript: void(0)"><i class="fa fa-close"></i></a> </li>
    </ul>
    <ul class="nav navbar-nav pull-right">
      <li class="nav-item  active ">
        <a class="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="Notifications">
          <i class="fa fa-bell notif"></i>
          <span class="number-notif">10</span>
          <span class="tipText-bot">Notification</span>
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="javascript:void(0);">
          <i class="fa fa-envelope mail"></i>
          <span class="number-mail">45</span>
          <span class="tipText-bot">Mail</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0);">
          <i class="fa fa-sign-out"></i>
          <span class="tipText-bot">Logout</span>
        </a>
      </li>
    </ul>
  </nav>
</div>



<div class="sidebar">
  <div class="col-sm-12 text-center profile hidden">

    <div class="text-center">
      <i class="fa fa-user text-center fa-4x"></i>
    </div>

    <span class="text-center">John A. Doe</span>
  </div>
  <ul class="main-navigation">
    <li>
      <a href="#toroUrl('/dashboard')" class="current"><i class="fa fa-dashboard"></i><span>Dashboard</span></a>
      <span class="tipText-right">Dashboard</span>
    </li>
    <li>
      <a data-toggle="collapse" href="#uiFeatures"><i class="fa fa-laptop"></i><span>UI Features</span></a>
      <span class="tipText-right">UI Features</span>
      <div id="uiFeatures" class="panel-collapse collapse">
        <ul class="list-group">
          <li class="list-group-item indent">
            <a href="#toroUrl('/panels')"><i class="fa fa-columns"></i><span>Panels</span></a>
            <span class="tipText-right">Panels</span>
          </li>
          <li class="list-group-item indent">
            <a href="#toroUrl('/modals')"><i class="fa fa-newspaper-o"></i><span>Modals</span></a>
            <span class="tipText-right">Modals</span>
          </li>
          <li class="list-group-item indent">
            <a href="#toroUrl('/buttons')"><i class="fa fa-delicious"></i><span>Buttons</span></a>
            <span class="tipText-right">Buttons</span>
          </li>
          <li class="list-group-item indent">
            <a href="#toroUrl('/tabs')"><i class="fa fa-th-large"></i><span>Tabs</span></a>
            <span class="tipText-right">Tabs</span>
          </li>
          <li class="list-group-item indent">
            <a href="#toroUrl('/accordions')"><i class="fa fa-th-list"></i><span>Accordion</span></a>
            <span class="tipText-right">Accordion</span>
          </li>
          <li class="list-group-item indent">
            <a href="#toroUrl('/progress')"><i class="fa fa-align-left"></i><span>Progress Bar</span></a>
            <span class="tipText-right">Progress Bar</span>
          </li>
        </ul>
      </div>

    </li>

    <li>
      <a href="#toroUrl('/forms')"><i class="fa fa-edit"></i><span>Forms</span></a>
      <span class="tipText-right">Forms</span>
    </li>

    <li>
      <a href="#toroUrl('/tables')"><i class="fa fa-table"></i><span>Tables</span></a>
      <span class="tipText-right">Tables</span>
    </li>
    <li>
      <a href="#toroUrl('/signupDash')" target="_blank"><i class="fa fa-file"></i><span>Pages</span></a>
      <span class="tipText-right">Pages</span>
    </li>
  </ul>
</div>
<style>
.boom, .boomy {
  margin-left: -10px;
}
@media (max-width: 512px) {
  .boom, .boomy {
    margin-left: 0;
  }
}
.boom:hover, .boomy:hover {
  color: #6b94b3;
}
.navigatioon nav {
  position: fixed;
  padding-left: 20px;
  padding-right: 40px;
  width: 100%;
  z-index: 9999;
  background: #131e25;
  border-radius: 0;
  box-shadow: -1px 5px 5px #000;
}
.navigatioon nav .tipText-bot {
  opacity: 0;
  background-color: #131e25;
  box-shadow: 0px 3px 5px #000;
  color: #fff;
  padding: 5px;
  position: absolute;
  z-index: 6;
  font-size: 10px;
  top: 80%;
  left: 60%;
  margin-left: -30px;
  transition: all 0.2s ease-in-out;
}
.navigatioon nav li {
  display: inline-block;
  transition: all 0.2s ease-in-out;
}
.navigatioon nav li a {
  color: #fff;
  transition: all 0.2s ease-in-out;
}
.navigatioon nav li a:hover, .navigatioon nav li a:active, .navigatioon nav li a:focus {
  background: transparent;
  color: #6b94b3;
}
.navigatioon nav li a:hover .tipText-bot, .navigatioon nav li a:active .tipText-bot, .navigatioon nav li a:focus .tipText-bot {
  opacity: 1;
}
.navigatioon nav li a:hover .number-notif, .navigatioon nav li a:active .number-notif, .navigatioon nav li a:focus .number-notif, .navigatioon nav li a:hover .number-mail, .navigatioon nav li a:active .number-mail, .navigatioon nav li a:focus .number-mail {
  color: #fff;
}
.navigatioon nav li a:hover .notif, .navigatioon nav li a:active .notif, .navigatioon nav li a:focus .notif {
  color: #e36159;
}
.navigatioon nav li a:hover .mail, .navigatioon nav li a:active .mail, .navigatioon nav li a:focus .mail {
  color: #23b7e5;
}
.navigatioon nav li a .number-notif {
  opacity: 0;
  position: absolute;
  top: 2px;
  left: 25px;
  background: #e36159;
  padding: 0 5px;
  font-size: 8px;
  border-radius: 15px;
  animation: 0.5s pop forwards;
  animation-delay: 1.5s;
}
.navigatioon nav li a .number-mail {
  opacity: 0;
  position: absolute;
  top: 2px;
  left: 25px;
  background: #23b7e5;
  padding: 0 5px;
  font-size: 8px;
  border-radius: 15px;
  animation: 0.5s pop forwards;
  animation-delay: 1.7s;
}
#main {
  padding-top: 80px;
  transition: all 0.5s ease-in-out;
  margin-left: 60px;
}
@media (max-width: 512px) {
  #main {
    margin-left: 0;
  }
}
@keyframes pop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.sidebar {
  position: fixed;
  z-index: 9998;
  left: 0;
  top: 0;
  height: 100%;
  width: 60px;
  background: #131e25;
  color: #fff;
  text-align: center;
  transition: all 0.5s ease-in-out;
}
.sidebar .fa {
  text-shadow: 0px 2px 5px #000;
}
@media (max-width: 768px) {
  .sidebar {
    width: 0;
  }
}
.sidebar .hidden {
  transition: all 0.5s ease-in-out;
}
.sidebar .profile {
  font-family: "Dancing Script", cursive;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  top: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.sidebar .profile span {
  font-size: 30px;
}
.sidebar .profile .fa-user {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  padding: 25px;
  background: #3f6079;
}
.sidebar .profile div {
  padding: 20px;
}
.sidebar.active {
  width: 250px;
  transition: all 0.5s ease-in-out;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.sidebar ul li {
  display: block;
}
.sidebar ul li:first-child {
  margin-top: 55px;
}
.sidebar ul li a {
  display: block;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 1px solid rgba(33, 26, 29, 0.3);
  border-left: 5px solid transparent;
  color: #fff;
  text-align: left;
  transition: all 0.3s ease-in-out;
}
.sidebar ul li a i {
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  animation-duration: 0.7s;
  animation-fill-mode: both;
}
.sidebar ul li a span {
  display: inline-block;
  height: 60px;
  line-height: 60px;
}
.sidebar ul li a:hover {
  background-color: #1c2b36;
  border-left: 5px solid #2d4658;
}
.sidebar ul li a:hover ~ .tipText-right {
  opacity: 1;
}
.sidebar ul li a:hover i {
  animation: swing 0.45s forwards;
}
.sidebar ul .indent {
  background: #0a1014;
  border-left: 5px solid transparent;
  transition: all 0.3s ease-in-out;
}
.sidebar ul .indent a {
  margin-left: -5px;
  border-left: 5px solid transparent;
  transition: all 0.3s ease-in-out;
}
.sidebar ul .indent a:hover {
  background-color: #131e25;
  border-left: 5px solid transparent;
}
.sidebar ul .indent a:hover ~ .tipText-right {
  opacity: 1;
}
.sidebar ul .indent a:hover i {
  animation: swing 0.45s forwards;
}
.sidebar ul .indent:first-child {
  border-radius: 0;
}
.sidebar ul .indent:hover {
  background: #131e25;
  border-left: 5px solid #1c2b36;
}
.sidebar .tipText-right {
  opacity: 0;
  background-color: #131e25;
  box-shadow: 0px 3px 5px #000;
  color: #fff;
  padding: 10px;
  position: absolute;
  z-index: 6;
  font-size: 10px;
  left: 63px;
  margin-top: -40px;
  transition: all 0.2s ease-in-out;
}
.rotate {
  transition: all 0.3s forwards;
}
#uiFeatures {
  margin-top: -60px;
}
.list-group-item {
  background: #1c2b36;
  border: none;
  padding: 0;
}
.list-group-item:first-child {
  border-radius: 0;
}
.list-group-item:hover {
  background: #131e25;
}
@keyframes rotate {
  100% {
    transform: rotate 90deg;
  }
}
@keyframes swing {
  20% {
    transform: translate(0, 2px);
  }
  40% {
    transform: translate(0, 4px);
  }
  60% {
    transform: translate(0, 2px);
  }
  80% {
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, 2px);
  }
}

</style>
<script>

var move = "250px";

// Sidebar function
function openNav(){
  $('.sidebar').addClass('active').css({"box-shadow": "inset -5px -3px 10px #000"});
  $(this).addClass('active');
  $('.boomy').removeClass('hidden');
  $('.boom').addClass('hidden');
  $('.tipText-right').addClass('hidden');
  $(".sidebar").children().css({"opacity": 1, "transition": "all .3s ease-in-out"});
  $(".indent").find("a").css({"margin-left": "20px"});
  // setTimeout(function() {
    // $('.profile').delay(300)removeClass('hidden');
    $('.profile').fadeIn(400, function(){
      $(this).removeClass('hidden');
    });
  //   }, 300);


  if ($(window).width() < 512) {
    $("#main").animate({"margin-left": "60px"}, 10);
  // $(".boom").animate({"margin-left": move},500);
  }
  else{
    $("#main").animate({"margin-left": move}, 10);
  }

}

function closeNav() {
  $('.sidebar').removeClass('active').css({"box-shadow":  "none"});
  $(this).removeClass('active');
  $('.boom').removeClass('hidden');
  $('.boomy').addClass('hidden');
  $(this).attr( "onClick", "openNav();" );
  $('.tipText-right').removeClass('hidden');
  $(".sidebar").children().closest('span').css({"opacity": 0, "transition": "all .3s ease-in-out"});
  $(".indent").find("a").css({"margin-left": "-5px"});
  $('.profile').fadeOut(300, function(){
    $(this).addClass('hidden');
  });
  //prevent increase of margin when clicked multiple times
  if ($(window).width() < 512) {
    if($("main").css("margin-left") === "60px")
      $("#main").animate({"margin-left": "-=" + move}, 10);
    else
      $("#main").animate({"margin-left": 0}, 10);
  }
  else{
    if($("main").css("margin-left") === 0)
      $("#main").animate({"margin-left": "-=" + move}, 10);
    else
      $("#main").animate({"margin-left": "60px"}, 10);
  }

// $(".boom").animate({"margin-left": "-=" + move}, 500);
}


// $('#droppy').on('click', function(){
//   $('.fa-chevron-down').addClass('rotate');
//   $('.dropydown').attr('id','uppy');
// });

// $('#uppy').on('click', function(){
//   $('.fa-chevron-down').addClass('rotate');
//   $('.dropydown').attr('id','droppy');
// })

</script>`;

bm.add('sidebar_with_nav', {
label: 'Sidebar with navbar',
content: sidebar_with_nav,
category: 'sidebar',
attributes: {
  class:'fa fa-bars'
}
});

let navbar= `
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" rel="stylesheet">

<div id="top-nav" class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Dashboard</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" role="button" data-toggle="dropdown" href="#"><i class="fa fa-user-circle"></i> Admin <span class="caret"></span></a>
                    <ul id="g-account-menu" class="dropdown-menu" role="menu">
                        <li><a href="#"><i class="fa fa-user-secret"></i> My Profile</a></li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa fa-sign-out"></i> Logout</a></li>
            </ul>
        </div>
    </div>
    <!-- /container -->
</div>
<style>
.navbar-inverse
{
    background:#00796B;
    border-bottom-color: #004D40;
}
.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-brand,.navbar-inverse .navbar-nav>.dropdown>a .caret
{
    color: #fff;
}
.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:hover, .navbar-inverse .navbar-nav>.open>a:focus,
.navbar-nav>li>.dropdown-menu
{
    background:#4DB6AC;
}
.nav-pills>li>a,
{
    color: #303F9F;
}

.nav>li>a:hover, .nav>li>a:focus
{
    background-color: #EEEEEE;
}
</style>`;

bm.add('navbar', {
label: 'navbar',
content: navbar,
category: 'sidebar',
attributes: {
  class:'fa fa-bars'
}
});

  // ...
}
