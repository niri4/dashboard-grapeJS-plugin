export default (editor, config = {}) => {
  const bm = editor.BlockManager;

// **************************************************Column*************************************************************
  let div_col1 =  `
  <style>
  .intial_height{
      height: 20%;
  }
  </style>
  <div class="row"><div class="col-md-12 intial_height"></div></div>
    `;
      bm.add('1_column', {
      label: '1 Column',
      content: div_col1,
      category: 'Columns',
      attributes: {
            class:'fa fa-times-rectangle'
      }
    });
    let div_col6 =  `
    <style>
    .intial_height{
        height: 20%;
    }
    </style>
    <div class="row"><div class="col-md-6 intial_height"</div><div class="col-md-6 intial_height"></div></div>
      `;
        bm.add('6_column', {
        label: '2 Column',
        content: div_col6,
        category: 'Columns',
        attributes: {
              class:'fa fa-columns'
        }
      });
      let div_col3 =  `
      <style>
      .intial_height{
          height: 20%;
      }
      </style>
      <div class="row"><div class="col-md-4 intial_height"></div><div class="col-md-4 intial_height" ></div><div class="col-md-4 intial_height"></div></div>
        `;

          bm.add('3_column', {
          label: '3 Column',
          content: div_col3,
          category: 'Columns',
          attributes: {
                class:'fa fa-columns'
          }
        });
    let div_col4 =  `
    <style>
    .intial_height{
        height: 20%;
    }
    </style>
      <div class="row"><div class="col-md-3 intial_height" ></div><div class="col-md-3 intial_height"></div><div class="col-md-3 intial_height"></div><div class="col-md-3 intial_height"></div></div>
    `;

    bm.add('4_column', {
    label: '4 Column',
    content: div_col4,
    category: 'Columns',
    attributes: {
      class:'fa fa-columns'
    }
  });

  let div_col2_4_and_8 =  `
  <style>
  .intial_height{
      height: 20%;
  }
  </style>
    <div class="row"><div class="col-md-4 intial_height"></div><div class="col-md-8 intial_height"></div></div>
  `;

  bm.add('2_column_4_and_8', {
  label: '2 Column 4,8',
  content: div_col2_4_and_8,
  category: 'Columns',
  attributes: {
    class:'fa fa-columns'
  }
});

  let div_col2_8_and_4 =  `
  <style>
  .intial_height{
      height: 20%;
  }
  </style>
    <div class="row"><div class="col-md-8 intial_height" ></div><div class="col-md-4 intial_height"></div></div>
  `;

  bm.add('2_column_8_and_4', {
  label: '2 Column 8,4',
  content: div_col2_8_and_4,
  category: 'Columns',
  attributes: {
    class:'fa fa-columns'
  }
  });

  let div_col12=  `
  <style>
  .intial_height{
      height: 20%;
  }
  </style>
    <div class="row"><div class="col-md-1 intial_height"></div><div class="col-md-1 intial_height"></div><div class="col-md-1 intial_height"></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height"></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height" ></div><div class="col-md-1 intial_height" ></div></div>
  `;

  bm.add('12_columns', {
  label: '12 columns',
  content: div_col12,
  category: 'Columns',
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
#main1{
  height: 100%;
}

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
    pa
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
  category: 'Sidebar',
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
<div id="page-content-wrapper1">
      <div class="container-fluid">
          <h1>Simple Sidebar</h1>
          <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
          <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
          <a href="#menu-toggle" class="btn btn-secondary" id="menu-toggle">Toggle Menu</a>
      </div>
  </div>
</div>
<style>
body {
    margin: 0px;
    padding: 0px;
    background-color: #ebedef;
}
.main1 {
    margin-left: 220px;
    padding: 15px;
    height: 100%;
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
category: 'Sidebar',
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
<div class="main" id="main"></div>
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
  padding-top: 50px;
  transition: all 0.5s ease-in-out;
  margin-left: 60px;
  height: 100%;
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
category: 'Sidebar',
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
category: 'Sidebar',
attributes: {
  class:'fa fa-bars'
}
});

// *********************************************************************** Html Components ****************************************************************
// *********************************************************************** Haeding Tags ********************************************************************

let h1 = `<h1>WRITE SOMETHING HERE</h1>`;
bm.add('h1', {
label: 'Heading H1 Tag',
content: h1,
category: 'Headings',
attributes: {
  class: 'gjs-fonts gjs-f-text' ,
}
});
let h2 = `<h2>WRITE SOMETHING HERE</h2>`;
bm.add('h2', {
label: 'Heading H2 Tag',
content: h2,
category: 'Headings',
attributes: {
  class: 'gjs-fonts gjs-f-text' ,
}
});
let h3 = `<h3>WRITE SOMETHING HERE</h3>`;
bm.add('h3', {
label: 'Heading H3 Tag',
content: h3,
category: 'Headings',
attributes: {
  class: 'gjs-fonts gjs-f-text' ,
}
});
let h4 = `<h4>WRITE SOMETHING HERE</h4>`;
bm.add('h4', {
label: 'Heading H4 Tag',
content: h4,
category: 'Headings',
attributes: {
  class: 'gjs-fonts gjs-f-text' ,
}
});
let h5 = `<h5>WRITE SOMETHING HERE></h5>`;
bm.add('h5', {
label: 'Heading H5 Tag',
content: h5,
category: 'Headings',
attributes: {
  class: 'gjs-fonts gjs-f-text' ,
}
});
let h6 = `<h6>WRITE SOMETHING HERE</h6>`;
bm.add('h6', {
label: 'Heading H6 Tag',
content: h6,
category: 'Headings',
attributes: {
  class: 'gjs-fonts gjs-f-text' ,
}
});

//********************************************************************Basic Component *******************************************************************
let para = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;
bm.add('para', {
label: 'Text',
content: para,
category: 'Basic',
attributes: {
  class: 'gjs-fonts gjs-f-text',
}
});

let quotes = `<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote`;
bm.add('quotes', {
label: 'Quotes',
content: quotes,
category: 'Basic',
attributes: {
  class: 'fa fa-quote-right',
}
});
let link =`<a href= "#"><span>Link Nmae</span></a>`;
bm.add('link', {
   category: 'Basic',
   label: 'Link',
   attributes: { class: 'fa fa-link' },
    content: link,
 });
 let list_with_link = '<ui><li><a href= "#"><span>Link Nmae</span></a></li></ui>';
 bm.add('link_list', {
    category: 'Basic',
    label: 'Ui tag',
    attributes: { class: 'fa fa-link' },
     content: list_with_link,
  });
let hr = '<hr>';
bm.add('hr', {
    category: 'Basic',
    label: 'hr',
    attributes: { class: '	fa fa-minus' },
    content: hr,
});
let slider = `
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" media="all">

<div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
		<div class="testimonial4_header">
		</div>
		<ol class="carousel-indicators">
			<li data-target="#testimonial4" data-slide-to="0" class="active"></li>
			<li data-target="#testimonial4" data-slide-to="1"></li>
			<li data-target="#testimonial4" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner" role="listbox">
			<div class="item active">
				<div class="testimonial4_slide">
					<p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
					<h4>Ben Hanna</h4>
				</div>
			</div>
			<div class="item">
				<div class="testimonial4_slide">
					<p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
					<h4>Ben Hanna</h4>
				</div>
			</div>
			<div class="item">
				<div class="testimonial4_slide">
					<p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
					<h4>Ben Hanna</h4>
				</div>
			</div>
		</div>
		<a class="left carousel-control" href="#testimonial4" role="button" data-slide="prev">
			<span class="fa fa-chevron-left fa1"></span>
		</a>
		<a class="right carousel-control" href="#testimonial4" role="button" data-slide="next">
			<span class="fa fa-chevron-right fa1"></span>
		</a>
	</div>
  <style>
  .fa1 {
      display: i;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: x-large;
      padding-top: 5px;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
#testimonial4{
  overflow: hidden;
  min-height: 375px;
  position: relative;
  background: lightgrey;
}
#testimonial4 .carousel-inner{
  width: 75%;
  margin: auto;
}
#testimonial4 .carousel-inner:hover{
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
#testimonial4 .carousel-inner:active{
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
#testimonial4 .carousel-inner .item{
  overflow: hidden;
}

.testimonial4_indicators .carousel-indicators{
  left: 0;
  margin: 0;
  width: 100%;
  font-size: 0;
  height: 20px;
  bottom: 15px;
  padding: 0 5px;
  cursor: e-resize;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  text-align: center;
  white-space: nowrap;
}
.testimonial4_indicators .carousel-indicators li{
  padding: 0;
  width: 10px;
  height: 10px;
  border: none;
  text-indent: 0;
  margin: 2px 3px;
  cursor: pointer;
  display: inline-block;
  background: #ffffff;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.testimonial4_indicators .carousel-indicators .active{
  padding: 0;
  width: 10px;
  height: 10px;
  border: none;
  margin: 2px 3px;
  background-color: #000;
  -webkit-border-radius: 100%;
  border-radius: 100%;
}
.testimonial4_indicators .carousel-indicators::-webkit-scrollbar{
  height: 3px;
}
.testimonial4_indicators .carousel-indicators::-webkit-scrollbar-thumb{
  background: #eeeeee;
  -webkit-border-radius: 0;
  border-radius: 0;
}

.testimonial4_control_button .carousel-control{
  top: 175px;
  opacity: 1;
  width: 40px;
  bottom: auto;
  height: 40px;
  font-size: 10px;
  cursor: pointer;
  font-weight: 700;
  overflow: hidden;
  line-height: 38px;
  text-shadow: none;
  text-align: center;
  position: absolute;
  background: transparent;
  border: 2px solid #ffffff;
  text-transform: uppercase;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.6s cubic-bezier(0.3,1,0,1);
  transition: all 0.6s cubic-bezier(0.3,1,0,1);
}
.testimonial4_control_button .carousel-control.left{
  left: 7%;
  right: auto;
}
.testimonial4_control_button .carousel-control.right{
  right: 7%;
  left: auto;
}
.testimonial4_control_button .carousel-control.left:hover,
.testimonial4_control_button .carousel-control.right:hover{
  color: #000;
  background: #fff;
  border: 2px solid #fff;
}

.testimonial4_header{
  top: 0;
  left: 0;
  bottom: 0;
  width: 550px;
  display: block;
  margin: 30px auto;
  text-align: center;
  position: relative;
}
.testimonial4_header h4{
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.testimonial4_slide{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  margin: auto;
  padding: 20px;
  position: relative;
  text-align: center;
}
.testimonial4_slide img {
  top: 0;
  left: 0;
  right: 0;
  width: 50px;
  height: 50px;
  margin: auto;
  display: block;
  color: #f2f2f2;
  font-size: 18px;
  line-height: 46px;
  text-align: center;
  position: relative;
}

.testimonial4_slide p {
  color: #ffffff;
  font-size: 16px;
  margin: 40px 0 20px 0;
}

.testimonial4_slide h4 {
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
}


@media only screen and (max-width: 480px){
  .testimonial4_control_button .carousel-control{
    display: none;
  }
  .testimonial4_header{
    width: 95%;
  }
  .testimonial4_header h4{
    font-size: 20px;
  }
  .testimonial4_slide{
    width: 98%;
    padding: 5px;
  }
}

@media (min-width: 481px) and (max-width: 767px){
  .testimonial4_control_button .carousel-control.left{
    left: 2%;
  }
  .testimonial4_control_button .carousel-control.right{
    right: 2%;
  }
  .testimonial4_header{
    width: 95%;
  }
  .testimonial4_slide{
    width: 98%;
    padding: 5px;
  }
}

@media (min-width: 768px) and (max-width: 991px){
  .testimonial4_control_button .carousel-control.left{
    left: 5%;
  }
  .testimonial4_control_button .carousel-control.right{
    right: 5%;
  }
}

@-webkit-keyframes psBoxShadowEffect_2{
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
	-webkit-box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #ffffff, 0 0 0 10px rgba(255,255,255,0.5);
  }
  100% {
    -webkit-box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 5px 5px #ffffff, 0 0 0 5px rgba(255,255,255,0.5);
    -webkit-transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes psBoxShadowEffect_2{
  0% {
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
	box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #ffffff, 0 0 0 10px rgba(255,255,255,0.5);
  }
  100% {
    box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 5px 5px #ffffff, 0 0 0 5px rgba(255,255,255,0.5);
    transform: scale(1.5);
    opacity: 0;
  }
}

  </style>`;
  bm.add('slider', {
      category: 'Basic',
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>
      </svg>
      <div class="gjs-block-label">Slider</div>
    `,
      content: slider,
  });

let button =`<a href= "#" class="btn btn-primary">Enter TEXT</a>`;
bm.add('button', {
    category: 'Basic',
    label: `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
      </svg>
      <div class="gjs-block-label">Button</div>`,
    attributes: { class: 'btn' },
    content: button,
});



// *************************************************************************************graphs***********************************************************************************************************************************

let column_graphs =`
<canvas id="myChart" width="400" height="400"></canvas>
<script>

var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "column_chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

</script>`;

bm.add('column_graph', {
    category: 'Charts',
    label: 'Column Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: column_graphs // <- this will trigger the active event
 },
});

let line_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>

var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "line_chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: 'orange',
    backgroundColor: 'transparent',
    borderDash: [5, 5],
    pointBorderColor: 'orange',
    pointBackgroundColor: 'rgba(255,150,0,0.5)',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rectRounded'
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(ctx, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
</script>`;
bm.add('line_chart', {
    category: 'Charts',
    label: 'Line Dotted Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: line_chart // <- this will trigger the active event
 },
});


let line_more_one_line_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>

var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "line_more_one_line_chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Car A - Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0.3,
    fill: false,
    borderColor: 'red',
    backgroundColor: 'transparent',
    pointBorderColor: 'red',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rect'
  };

var dataSecond = {
    label: "Car B - Speed (mph)",
    data: [20, 15, 60, 60, 65, 30, 70],
    lineTension: 0.3,
    fill: false,
    borderColor: 'purple',
    backgroundColor: 'transparent',
    pointBorderColor: 'purple',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2
  };

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(ctx, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
</script>`;
bm.add('line_more_one_line_chart', {
    category: 'Charts',
    label: 'Line Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: line_more_one_line_chart // <- this will trigger the active event
 },
});


let bar_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>

var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "bar_chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Density of Planets (kg/m3)',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]

};

var densityData1 = {
  label: 'Densiscacty of Planets (kg/m3)',
  data: [5427, 5234, 5541, 3332, 1326, 687, 1271, 1638],
  backgroundColor: 'skyblue'
};

var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    datasets: [densityData,densityData1]
  }
});


</script>`;
bm.add('bar_chart', {
    category: 'Charts',
    label: 'Bar Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: bar_chart // <- this will trigger the active event
 },
});


let area_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>
var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "area_chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
  }]
};
var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(ctx, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
</script>`;
bm.add('area_chart', {
    category: 'Charts',
    label: 'Area Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: area_chart // <- this will trigger the active event
 },
});

let pie_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>
var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "pie".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var pieChart = new Chart(ctx,{
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


</script>`;
bm.add('pie_chart', {
    category: 'Charts',
    label: 'Pie Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: pie_chart // <- this will trigger the active event
 },
});

let doughnut_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>
var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "doughnut-chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

</script>`;
bm.add('doughnut_chart', {
    category: 'Charts',
    label: 'Doughnut Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: doughnut_chart // <- this will trigger the active event
 },
});


let sactter_chart = `<canvas id="myChart" width="400" height="400"></canvas>
<script>
var gdgd = document.getElementsByTagName("canvas");
var inputList = Array.prototype.slice.call(gdgd);
var go = "scatter_chart".concat(inputList.length);
inputList[inputList.length -1].setAttribute("id", go);
var ctx = document.getElementById(go).getContext('2d');

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var popData = {
  datasets: [{
    label: ['Deer Population'],
    data: [{
      x: 100,
      y: 0,
      r: 10
    }, {
      x: 60,
      y: 30,
      r: 20
    }, {
      x: 40,
      y: 60,
      r: 25
    }, {
      x: 80,
      y: 80,
      r: 50
    }, {
      x: 20,
      y: 30,
      r: 25
    }, {
      x: 0,
      y: 100,
      r: 5
    }],
    backgroundColor: "#9966FF",
    hoverBackgroundColor: "#000000",
    hoverBorderColor: "#9966FF",
    hoverBorderWidth: 1,
    hoverRadius: 1
  }]
};

var bubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: popData
});
</script>`;
bm.add('scatter_chart', {
    category: 'Charts',
    label: 'Scatter Chart',
    attributes: { class: 'btn' },
    content: {
    type: 'canvas',
    activeOnRender: 1,
    components: sactter_chart // <- this will trigger the active event
 },
});


}
