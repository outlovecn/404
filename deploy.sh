#!/bin/bash
# author: Chaos
# use: For 404 page deploy
# ssh配置为秘钥自动登录
ip=outlove.cn

#从本地服务器复制到远程服务器
function scp_put () {
  scp -r ./dist/* root@$ip:/home/www/404/
}

function ssh_rm() {
    /usr/bin/expect <<EOF
    set time 10
    spawn ssh root@$ip
    expect "*#"
    send "rm -rf /home/www/404/*\r"
    expect "*zsh"
    send "y"
    expect "*#"
    send "exit\r"
    expect eof
    exit
EOF
}
echo 开始登录服务器并删除旧文件
ssh_rm
echo 已删除旧文件

echo 开始发送新文件
scp_put
echo 新文件已发送