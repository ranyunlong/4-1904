## 安装git
下载： https://git-scm.com/

## 检测是否安装成功
```bash
git --version
git version 2.21.0.windows.1
```

## 本地仓库

1. 初始化项目
git init (只需操作一次)

2. 把项目的文件添加到git 的缓存列表中
添加文件
git add 文件地址 （只会添加单个文件）
git add 目录地址 （会添加整个目录的文件）
这个命令没有反馈

3. 把暂存的更改 的缓存列表 提交保存
git commit -m "消息"

4. 创建分支
git branch <分支名称>
git branch 查询当前有多少个分支
git branch <分支名称> -D 删除分支

默认仓库会有一个默认分支 master

5. 切换分支
git checkout <分支名称>

6. 合并分支
git merge <其他分支名称>

当添加了新的文件 只需要执行2 和3两个步骤就可以了

7. 克隆
当本地没有远程仓库的代码时 使用这个命令克隆远程代码
git clone <仓库地址>

如果是通过clone的话远程仓库地址默认是你clone的仓库的地址


8. 本地配置
git config

单个项目使用的临时配置
git config user.name "您的姓名"
git config user.email "您的邮箱"

所有项目都可以应用这个配置
git config user.name --global "您的姓名"
git config user.email --global "您的邮箱"


9. 查看仓库地址
git remote 删除添加仓库
1. git remote remove origin 删除origin仓库 
2. git remote add <仓库名称> <仓库地址> 添加仓库
3. git remote 查询仓库

10. 检查本地仓库是否保存
没有保存先保存
保存好了就可以提交到远程仓库了

## 远程仓库

1. GitHub 
https://github.com/
2. GitLab
需要自己的服务器搭建 公司搭建