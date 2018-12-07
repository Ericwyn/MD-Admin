// 一些 ui 工具，例如导入导航栏等

// 导航栏
function loadNavation(domName, isOpen) {
    let flag = "";
    if (!isOpen){
        flag = "mdui-drawer-close";
    }
    document.getElementsByTagName("body")[0].innerHTML+=
    `<div class="mdui-container ">
        <div class="mdui-drawer ${flag}" id="drawer" >
            <ul class="mdui-list">
    
                <li class="mdui-subheader">系统</li>
                <li class="mdui-list-item mdui-ripple" onclick='goto_console()'>
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-indigo">settings</i>
                    <div class="mdui-list-item-content">系统总览</div>
                </li>
                <li class="mdui-list-item mdui-ripple" onclick='goto_setting()'>
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-indigo">settings</i>
                    <div class="mdui-list-item-content">系统设置</div>
                </li>
    
                <li class="mdui-subheader">用户</li>
                <li class="mdui-list-item mdui-ripple" onclick='goto_userList()'>
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-pink">&#xe853;</i>
                    <div class="mdui-list-item-content">用户列表</div>
                </li>
                <li class="mdui-list-item mdui-ripple" onclick='goto_userTask()'>
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-indigo">&#xe3dd;</i>
                    <div class="mdui-list-item-content">任务列表</div>
                </li>
            </ul>
        </div>
    </div>`;
}