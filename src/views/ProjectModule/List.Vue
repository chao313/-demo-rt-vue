<template>
    <div class="app-container">
        <div class="mt20">
            <el-form :inline="true" size="mini">
                <el-form-item label="criteriaid">
                    <el-input v-model="search.criteriaid" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectName">
                    <el-input v-model="search.projectName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectUpdateTime">
                    <el-input v-model="search.projectUpdateTime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectType">
                    <el-input v-model="search.projectType" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectZipStatus">
                    <el-input v-model="search.projectZipStatus" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="sourceUrl">
                    <el-input v-model="search.sourceUrl" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="language">
                    <el-input v-model="search.language" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="size2">
                    <el-input v-model="search.size2" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="sizeType">
                    <el-input v-model="search.sizeType" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerPort">
                    <el-input v-model="search.dockerPort" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerImageName">
                    <el-input v-model="search.dockerImageName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerContainerName">
                    <el-input v-model="search.dockerContainerName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerStatus">
                    <el-input v-model="search.dockerStatus" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectStatus">
                    <el-input v-model="search.projectStatus" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="searchEvent()">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="searchRest()">重置
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="routerToAdd()">添加
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="app-list">
            <div class="app-tab">
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>id</th>
                        <th>操作</th>
                        <th>portainer 内网</th>
                        <th>portainer 外网</th>
                        <th>projectZipStatus</th>
                        <th>dockerStatus</th>
                        <th>httpInnerAddress</th>
                        <th>httpOutAddress</th>
                        <th>criteriaid</th>
                        <th>projectName</th>
                        <th>projectUpdateTime</th>
                        <th>projectType</th>
                        <!--<th>projectPanAddress</th>-->
                        <!--<th>htmlBody</th>-->
                        <th>sourceUrl</th>
                        <th>language</th>
                        <th>size2</th>
                        <!--<th>sizeNum</th>-->
                        <!--<th>sizeType</th>-->
                        <!--<th>officialWebsite</th>-->
                        <!--<th>showWebsite</th>-->
                        <th>downloadSum</th>
                        <!--<th>introduction</th>-->
                        <!--<th>contentImgs</th>-->
                        <!--<th>runtime</th>-->
                        <!--<th>downloadUrls</th>-->
                        <th>dockerPort</th>
                        <th>dockerImageName</th>
                        <!--<th>dockerContainerName</th>-->
                        <!--<th>dockerShellCreate</th>-->
                        <!--<th>dockerShellRun</th>-->
                        <!--<th>dockerShellStop</th>-->
                        <!--<th>dockerShellContainerRemove</th>-->
                        <!--<th>dockerShellImageRemove</th>-->
                        <th>projectStatus</th>
                        <th>操作</th>

                    </tr>
                    </thead>
                    <tr>
                        <th>序号</th>
                        <th>序号</th>
                        <th>操作</th>
                        <th>portainer 内网</th>
                        <th>portainer 外网</th>
                        <th>流/盘</th>
                        <th>docker状态</th>
                        <th>内网地址</th>
                        <th>外网地址</th>
                        <th>A唯一id</th>
                        <th>项目名称</th>
                        <th>项目更新时间</th>
                        <th>(VIP/COMMON)</th>
                        <!--<th>项目的网盘地址</th>-->
                        <!--<th>网页Body</th>-->
                        <th>ASPURL</th>
                        <th>项目语言</th>
                        <th>size</th>
                        <!--<th>项目大小数字</th>-->
                        <!--<th>项目大小type(k,M,G)</th>-->
                        <!--<th>官网地址</th>-->
                        <!--<th>展示网址</th>-->
                        <th>下载次数</th>
                        <!--<th>项目介绍(文字)</th>-->
                        <!--<th>项目介绍(图片)</th>-->
                        <!--<th>运行环境</th>-->
                        <!--<th>项目下载URL</th>-->
                        <th>端口号</th>
                        <!--<th>docker的镜像名称</th>-->
                        <th>容器名称</th>
                        <!--<th>docker的创建命令</th>-->
                        <!--<th>docker的启动命令</th>-->
                        <!--<th>docker的停止命令</th>-->
                        <!--<th>docker容器移除命令</th>-->
                        <!--<th>docker镜像移除命令</th>-->
                        <th>project状态</th>
                        <th>操作</th>

                    </tr>

                    <tbody>
                    <tr v-for="(info,index) in dataList">
                        <td>{{index+1}}</td>
                        <!--显示的字段 - 具体数据-->
                        <td>{{info.id}}</td>
                        <td class="in-line">
                            <span @click="buildToDocker(info.criteriaid)">构建镜像</span>
                            <span @click="runDockerShell(info.dockerShellCreate)">构建容器</span>
                            <span @click="runDockerShell(info.dockerShellRun)">启动</span>
                            <span @click="runDockerShell(info.dockerShellStop)">停止</span>
                            <span @click="runDockerShell(info.dockerShellContainerRemove)">移除容器</span>
                        </td>
                        <td class="in-line">
                            <span @click="getInnerPortainerUrl(info.dockerContainerName,'exec')">exec</span>
                            <span @click="getInnerPortainerUrl(info.dockerContainerName,'logs')">logs</span>
                            <span @click="getInnerPortainerUrl(info.dockerContainerName,'inspect')">inspect</span>
                            <span @click="getInnerPortainerUrl(info.dockerContainerName,'stats')">stats</span>
                        </td>
                        <td class="in-line">
                            <span @click="getOuterPortainerUrl(info.dockerContainerName,'exec')">exec</span>
                            <span @click="getOuterPortainerUrl(info.dockerContainerName,'logs')">logs</span>
                            <span @click="getOuterPortainerUrl(info.dockerContainerName,'inspect')">inspect</span>
                            <span @click="getOuterPortainerUrl(info.dockerContainerName,'stats')">stats</span>
                        </td>
                        <td>{{info.projectZipStatus}}</td>
                        <td>{{info.dockerStatus}}</td>
                        <td><a :href="info.httpInnerAddress" target="_blank"><span>{{info.httpInnerAddress}}</span></a>
                        </td>
                        <td><a :href="info.httpOutAddress" target="_blank"><span>{{info.httpOutAddress}}</span></a></td>
                        <td>{{info.criteriaid}}</td>
                        <td class="in-line">{{info.projectName}}</td>
                        <td>{{info.projectUpdateTime}}</td>
                        <td>{{info.projectType}}</td>
                        <!--<td>{{info.projectPanAddress}}</td>-->
                        <!--<td class="in-line">{{info.htmlBody}}</td>-->
                        <td>{{info.sourceUrl}}</td>
                        <td>{{info.language}}</td>
                        <td>{{info.size2}}</td>
                        <!--<td>{{info.sizeNum}}</td>-->
                        <!--<td>{{info.sizeType}}</td>-->
                        <!--<td>{{info.officialWebsite}}</td>-->
                        <!--<td>{{info.showWebsite}}</td>-->
                        <td>{{info.downloadSum}}</td>
                        <!--<td>{{info.introduction}}</td>-->
                        <!--<td>{{info.contentImgs}}</td>-->
                        <!--<td>{{info.runtime}}</td>-->
                        <!--<td>{{info.downloadUrls}}</td>-->
                        <td>{{info.dockerPort}}</td>
                        <!--<td>{{info.dockerImageName}}</td>-->
                        <td>{{info.dockerContainerName}}</td>
                        <!--<td>{{info.dockerShellCreate}}</td>-->
                        <!--<td>{{info.dockerShellRun}}</td>-->
                        <!--<td>{{info.dockerShellStop}}</td>-->
                        <!--<td>{{info.dockerShellContainerRemove}}</td>-->
                        <!--<td>{{info.dockerShellImageRemove}}</td>-->
                        <td>{{info.projectStatus}}</td>
                        <td class="in-line">
                            <span @click="runDockerShell(info.dockerShellImageRemove)">移除镜像</span>
                            <span @click="routerToView(info.id)">查看</span>
                            <span @click="getDataFromContainer(info.dockerContainerName)">下载</span>
                            <!--<span @click="routerToEdit(info.id)">编辑</span>-->
                            <!--<span @click="deleteByPrimaryKey(info.id)">删除</span>-->
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p v-show="total == 0" class="no-data-tip">没有找到相关数据！</p>
                <div>
                    <pre>{{jsonData}}</pre>
                </div>
            </div>
            <div class="mt10">
                <!--/** */:page-size 数一页的数量！！！-->
                <el-pagination v-show="pageInfo.list.length > 0"
                               background
                               @current-change="handleCurrentChange"
                               :current-page.sync="pageInfo.pageNum"
                               :page-size="pageInfo.pageSize"
                               layout="total, prev, pager, next, jumper"
                               :total="pageInfo.total">
                </el-pagination>
            </div>

        </div>

    </div>

</template>

<script>
    import {getPreDay} from '@/utils/index.js'

    export default {
        data() {
            return {
                policyIdList: [],
                policyId: '',
                statuses: [{value: 1, title: '生效'}, {value: 2, title: '失效'}, {value: null, title: '全部'}],
                status: '',
                dataList: [],
                total: -1,
                currentPage: 1,
                pageSize: 10,
                start: '',
                end: '',
                plateNo: '',
                exitStation: '',
                exitStationList: [],
                resultDetail: {},
                viewDialogVisible: false,
                startTime: '',
                endTime: '',
                timeRange: [],
                registId: '',
                jsonData: '',
                search: {
                    id: '',
                    criteriaid: '',
                    projectName: '',
                    projectUpdateTime: '',
                    projectType: '',
                    projectZipStatus: '',
                    projectPanAddress: '',
                    htmlBody: '',
                    sourceUrl: '',
                    language: '',
                    size2: '',
                    sizeNum: '',
                    sizeType: '',
                    officialWebsite: '',
                    showWebsite: '',
                    downloadSum: '',
                    introduction: '',
                    contentImgs: '',
                    runtime: '',
                    downloadUrls: '',
                    dockerPort: '',
                    dockerImageName: '',
                    dockerContainerName: '',
                    dockerShellCreate: '',
                    dockerShellRun: '',
                    dockerShellStop: '',
                    dockerShellContainerRemove: '',
                    dockerShellImageRemove: '',
                    dockerStatus: '',
                    projectStatus: '',
                    httpInnerAddress: '',
                    httpOutAddress: '',
                    pageNum: 1,
                    pageSize: 10
                },
                pageInfo: {
                    "endRow": 10,
                    "firstPage": 1,
                    "hasNextPage": true,
                    "hasPreviousPage": false,
                    "isFirstPage": true,
                    "isLastPage": false,
                    "lastPage": 8,
                    "list": [],
                    "navigatePages": 8,
                    "navigatepageNums": [1, 2, 3, 4, 5, 6, 7, 8],
                    "nextPage": 2,
                    "orderBy": "",
                    "pageNum": 1,
                    "pageSize": 10,
                    "pages": 1810,
                    "prePage": 0,
                    "size": 10,
                    "startRow": 1,
                    "total": 0
                }
            }
        },
        mounted() {
            let self = this;
        },
        created() {
            this.queryBase();
        },
        watch: {},
        methods: {//获取具体的配置
            queryBase() {
                let self = this;
                var params = new FormData();
                if (self.search.id != null && self.search.id != '') {
                    params.append("id", self.search.id);
                }
                if (self.search.criteriaid != null && self.search.criteriaid != '') {
                    params.append("criteriaid", self.search.criteriaid);
                }
                if (self.search.projectName != null && self.search.projectName != '') {
                    params.append("projectName", self.search.projectName);
                }
                if (self.search.projectUpdateTime != null && self.search.projectUpdateTime != '') {
                    params.append("projectUpdateTime", self.search.projectUpdateTime);
                }
                if (self.search.projectType != null && self.search.projectType != '') {
                    params.append("projectType", self.search.projectType);
                }
                if (self.search.projectZipStatus != null && self.search.projectZipStatus != '') {
                    params.append("projectZipStatus", self.search.projectZipStatus);
                }
                if (self.search.projectPanAddress != null && self.search.projectPanAddress != '') {
                    params.append("projectPanAddress", self.search.projectPanAddress);
                }
                if (self.search.htmlBody != null && self.search.htmlBody != '') {
                    params.append("htmlBody", self.search.htmlBody);
                }
                if (self.search.sourceUrl != null && self.search.sourceUrl != '') {
                    params.append("sourceUrl", self.search.sourceUrl);
                }
                if (self.search.language != null && self.search.language != '') {
                    params.append("language", self.search.language);
                }
                if (self.search.size2 != null && self.search.size2 != '') {
                    params.append("size2", self.search.size2);
                }
                if (self.search.sizeNum != null && self.search.sizeNum != '') {
                    params.append("sizeNum", self.search.sizeNum);
                }
                if (self.search.sizeType != null && self.search.sizeType != '') {
                    params.append("sizeType", self.search.sizeType);
                }
                if (self.search.officialWebsite != null && self.search.officialWebsite != '') {
                    params.append("officialWebsite", self.search.officialWebsite);
                }
                if (self.search.showWebsite != null && self.search.showWebsite != '') {
                    params.append("showWebsite", self.search.showWebsite);
                }
                if (self.search.downloadSum != null && self.search.downloadSum != '') {
                    params.append("downloadSum", self.search.downloadSum);
                }
                if (self.search.introduction != null && self.search.introduction != '') {
                    params.append("introduction", self.search.introduction);
                }
                if (self.search.contentImgs != null && self.search.contentImgs != '') {
                    params.append("contentImgs", self.search.contentImgs);
                }
                if (self.search.runtime != null && self.search.runtime != '') {
                    params.append("runtime", self.search.runtime);
                }
                if (self.search.downloadUrls != null && self.search.downloadUrls != '') {
                    params.append("downloadUrls", self.search.downloadUrls);
                }
                if (self.search.dockerPort != null && self.search.dockerPort != '') {
                    params.append("dockerPort", self.search.dockerPort);
                }
                if (self.search.dockerImageName != null && self.search.dockerImageName != '') {
                    params.append("dockerImageName", self.search.dockerImageName);
                }
                if (self.search.dockerContainerName != null && self.search.dockerContainerName != '') {
                    params.append("dockerContainerName", self.search.dockerContainerName);
                }
                if (self.search.dockerShellCreate != null && self.search.dockerShellCreate != '') {
                    params.append("dockerShellCreate", self.search.dockerShellCreate);
                }
                if (self.search.dockerShellRun != null && self.search.dockerShellRun != '') {
                    params.append("dockerShellRun", self.search.dockerShellRun);
                }
                if (self.search.dockerShellStop != null && self.search.dockerShellStop != '') {
                    params.append("dockerShellStop", self.search.dockerShellStop);
                }
                if (self.search.dockerShellContainerRemove != null && self.search.dockerShellContainerRemove != '') {
                    params.append("dockerShellContainerRemove", self.search.dockerShellContainerRemove);
                }
                if (self.search.dockerShellImageRemove != null && self.search.dockerShellImageRemove != '') {
                    params.append("dockerShellImageRemove", self.search.dockerShellImageRemove);
                }
                if (self.search.dockerStatus != null && self.search.dockerStatus != '') {
                    params.append("dockerStatus", self.search.dockerStatus);
                }
                if (self.search.projectStatus != null && self.search.projectStatus != '') {
                    params.append("projectStatus", self.search.projectStatus);
                }
                if (self.search.httpInnerAddress != null && self.search.httpInnerAddress != '') {
                    params.append("httpInnerAddress", self.search.httpInnerAddress);
                }
                if (self.search.httpOutAddress != null && self.search.httpOutAddress != '') {
                    params.append("httpOutAddress", self.search.httpOutAddress);
                }
                var paramsJson = {};
                params.forEach((value, key) => paramsJson[key] = value);
                self.$http.post(self.api.queryBasePageHelperProject + "?pageNum=" + self.search.pageNum + "&pageSize=" + self.search.pageSize,
                    paramsJson, {}, function (response) {
                        self.pageInfo = response.content;
                        self.dataList = response.content.list;
                    }, function (response) {
                        //失败回调
                        self.$message({
                            type: 'warning',
                            message: '请求异常',
                            duration: 1000
                        });
                    })

            },
            deleteByPrimaryKey(id) {
                let self = this;
                this.$confirm('是否删除该条数据？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.deleteProjectByPrimaryKey
                        , {
                            params: {
                                id: id
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                if (response.content == true) {
                                    self.$message({
                                        type: 'success',
                                        message: '删除成功',
                                        duration: 2000
                                    });
                                    self.queryBase();
                                } else {
                                    self.$message({
                                        type: 'warning',
                                        message: '删除失败',
                                        duration: 2000
                                    });

                                }
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            },
            runDockerShell(cmd) {
                let self = this;
                this.$confirm('是否执行该条命令？', cmd, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.runDockerShell
                        , {
                            params: {
                                shell: cmd
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$message({
                                    type: 'success',
                                    message: '执行成功:' + response.content,
                                    duration: 2000
                                });
                                self.queryBase();
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            },
            buildToDocker(criteriaid) {
                let self = this;
                this.$confirm('是否执行构建？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.buildToDocker
                        , {
                            params: {
                                criteriaid: criteriaid
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$message({
                                    type: 'success',
                                    message: '执行成功:' + response.content,
                                    duration: 2000
                                });
                                self.queryBase();
                            } else {
                                self.$message({
                                    type: 'error',
                                    message: response.msg,
                                    duration: 2000
                                });
                            }
                        },
                        function (response) {
                            console.log(response);
                            //失败回调
                            self.$message({
                                type: 'error',
                                message: "请求异常",
                                duration: 2000
                            });
                        }
                    )

                })
            },
            getInnerPortainerUrl(dockerContainerName, type) {
                let self = this;
                self.$http.get(self.api.getInnerPortainerUrl
                    , {
                        params: {
                            containerName: dockerContainerName
                        }
                    },
                    function (response) {
                        if (response.code == 0) {
                            let url = response.content + "/" + type;
                            window.open(url, '_blank');
                        } else {
                            self.$message({
                                type: 'error',
                                message: response.msg,
                                duration: 2000
                            });
                        }
                    },
                    function (response) {
                        console.log(response);
                        //失败回调
                        self.$message({
                            type: 'error',
                            message: "请求异常",
                            duration: 2000
                        });
                    }
                )
            },
            getOuterPortainerUrl(dockerContainerName, type) {
                let self = this;
                self.$http.get(self.api.getOuterPortainerUrl
                    , {
                        params: {
                            containerName: dockerContainerName
                        }
                    },
                    function (response) {
                        if (response.code == 0) {
                            let url = response.content + "/" + type;
                            window.open(url, '_blank');
                        } else {
                            self.$message({
                                type: 'error',
                                message: response.msg,
                                duration: 2000
                            });
                        }
                    },
                    function (response) {
                        console.log(response);
                        //失败回调
                        self.$message({
                            type: 'error',
                            message: "请求异常",
                            duration: 2000
                        });
                    }
                )
            },
            getDataFromContainer(dockerContainerName) {
                let self = this;
                self.$http.get(self.api.getDataFromContainer
                    , {
                        params: {
                            containerName: dockerContainerName
                        }
                    },
                    function (response) {
                        if (response.code == 0) {
                            window.open(response.content, '_blank');
                        } else {
                            self.$message({
                                type: 'error',
                                message: response.msg,
                                duration: 2000
                            });
                        }
                    },
                    function (response) {
                        console.log(response);
                        //失败回调
                        self.$message({
                            type: 'error',
                            message: "请求异常",
                            duration: 2000
                        });
                    }
                )
            },
            routerToView(id) {
                //跳转携带参数
                let queryStr = "";
                queryStr = queryStr + "id=" + id + "";
                window.open("#/ProjectModuleView" + "?" + queryStr, '_self');
            },
            routerToEdit(id) {
                //跳转携带参数
                let queryStr = "";
                queryStr = queryStr + "id=" + id + "";
                //跳转携带参数
                window.open("#/ProjectModuleEdit" + "?" + queryStr, '_self');
            },
            routerToAdd() {
                window.open("#/ProjectModuleAdd", '_self');
            },
            searchEvent() {
                this.queryBase();
            },
            searchRest() {
                let self = this;
                self.search.id = '';
                self.search.criteriaid = '';
                self.search.projectName = '';
                self.search.projectUpdateTime = '';
                self.search.projectType = '';
                self.search.projectZipStatus = '';
                self.search.projectPanAddress = '';
                self.search.htmlBody = '';
                self.search.sourceUrl = '';
                self.search.language = '';
                self.search.size2 = '';
                self.search.sizeNum = '';
                self.search.sizeType = '';
                self.search.officialWebsite = '';
                self.search.showWebsite = '';
                self.search.downloadSum = '';
                self.search.introduction = '';
                self.search.contentImgs = '';
                self.search.runtime = '';
                self.search.downloadUrls = '';
                self.search.dockerPort = '';
                self.search.dockerImageName = '';
                self.search.dockerContainerName = '';
                self.search.dockerShellCreate = '';
                self.search.dockerShellRun = '';
                self.search.dockerShellStop = '';
                self.search.dockerShellContainerRemove = '';
                self.search.dockerShellImageRemove = '';
                self.search.dockerStatus = '';
                self.search.projectStatus = '';
                self.search.httpInnerAddress = '';
                self.search.httpOutAddress = '';
                this.queryBase();
            },
            handleCurrentChange(currentChange) {
                let self = this;
                self.search.pageNum = self.pageInfo.pageNum;
                self.search.pageSize = self.pageInfo.pageSize;
                self.searchEvent();
            }

        }

    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .video-detail {

        p {
            display: inline-block;
            width: 40%;
            vertical-align: top;
        }

        label {
            width: 120px;
            display: inline-block;
        }

        span {
            color: #888;
        }

    }

    .in-line {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>
