<template>
    <div class="app-container">
        <div class="mt20">
            <el-form :inline="true" size="mini">
                <el-form-item label="id">
                    <el-input v-model="search.id" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="criteriaid">
                    <el-input v-model="search.criteriaid" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectName">
                    <el-input v-model="search.projectName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectPrice">
                    <el-input v-model="search.projectPrice" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="projectSize2">
                    <el-input v-model="search.projectSize2" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="dockerStatus">
                    <el-select v-model="search.projectStatus" placeholder="请输入">
                        <el-option v-for="item in status" :key="item"
                                   :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="el-button-search" @click="searchEvent()">查询</el-button>
                </el-form-item>
                <!--<el-form-item>-->
                <!--<el-button type="primary" class="el-button-search" @click="searchRest()">重置-->
                <!--</el-button>-->
                <!--</el-form-item>-->
                <!--<el-form-item>-->
                <!--<el-button type="primary" class="el-button-search" @click="routerToAdd()">添加-->
                <!--</el-button>-->
                <!--</el-form-item>-->
            </el-form>
        </div>
        <div class="app-list">
            <div class="app-tab">
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <!--显示的字段 - 英文-->
                        <th>projectName</th>
                        <th>操作</th>
                        <th>镜像操作</th>
                        <th>容器操作</th>
                        <th>DevToPro</th>
                        <th>容器内网/外网</th>
                        <th>portainer内网</th>
                        <th>portainer外网</th>
                        <!--<th>projectUpdateTime</th>-->
                        <!--<th>projectType</th>-->
                        <th>projectPrice</th>
                        <!--<th>projectPackageType</th>-->
                        <!--<th>projectRealFileName</th>-->
                        <!--<th>projectLanguage</th>-->
                        <th>projectSize2</th>
                        <!--<th>projectSizeNum</th>-->
                        <!--<th>projectSizeType</th>-->
                        <!--<th>projectRuntime</th>-->
                        <!--<th>projectDownloadSum</th>-->
                        <th>projectStatus</th>
                        <th>projectMark</th>
                        <!--<th>projectCanRunning</th>-->
                        <!--<th>dockerImageName</th>-->
                        <!--<th>dockerStatus</th>-->
                        <!--<th>dockerContainerName</th>-->
                        <!--<th>dockerContainerPort</th>-->
                        <th>addressProjectBackgroundAccountPasswd</th>
                        <th>updateTime</th>
                    </tr>
                    </thead>
                    <tr>
                        <th>序号</th>
                        <!--显示的字段 - 中文-->
                        <th>项目-名称</th>
                        <th>操作</th>
                        <th>镜像操作</th>
                        <th>容器操作</th>
                        <th>DevToPro</th>
                        <th>容器内网/外网</th>
                        <th>portainer内网</th>
                        <th>portainer外网</th>
                        <!--<th>项目-更新时间</th>-->
                        <!--<th>项目-类型(VIP/COMMON)</th>-->
                        <th>项目-价格</th>
                        <!--<th>项目-下载包类型(流/text)</th>-->
                        <!--<th>项目-真实文件名称</th>-->
                        <!--<th>项目-开发语言</th>-->
                        <th>项目-大小</th>
                        <!--<th>项目-大小数字</th>-->
                        <!--<th>项目-大小type(k,M,G)</th>-->
                        <!--<th>项目-运行环境</th>-->
                        <!--<th>项目-下载次数</th>-->
                        <th>项目-状态,可用/废弃/暂定</th>
                        <th>项目-备注</th>
                        <!--<th>项目-是否正常运行</th>-->
                        <!--<th>docker-镜像-名称</th>-->
                        <!--<th>docker-状态,创建.运行中,停止,容器移除,镜像移除</th>-->
                        <!--<th>docker-容器-名称</th>-->
                        <!--<th>docker-端口号</th>-->
                        <th>地址-项目后台-账号密码</th>
                        <th>更新时间</th>
                    </tr>

                    <tbody>
                    <tr v-for="(info,index) in dataList">
                        <td>{{index+1}}</td>
                        <!--显示的字段 - 具体数据-->
                        <td>{{info.projectName}}</td>
                        <td>
                            <span class="el-icon-view" @click="pen(info.criteriaid)">id
                            </span>
                            <!--<span :class="info.projectPanAddress? 'default' : 'red' "-->
                            <!--@click="pen(info.projectPanAddress)">网盘-->
                            <!--</span>-->
                            <span :class="info.projectIntroduction? 'default el-icon-s-comment' : 'red el-icon-s-comment' "
                                  @click="pen(info.projectIntroduction)">
                                <!--介绍-->
                            </span>
                            <span :class="info.projectImgs? 'default el-icon-picture' : 'red el-icon-picture' "
                                  @click="showImgs(info.projectImgs)">
                                <!--图片-->
                            </span>
                            <a :href="info.projectSourceUrl" target="_blank">
                                <span :class="info.projectSourceUrl? 'default el-icon-view' : 'red el-icon-view' ">源URL</span>
                            </a>

                            <span class="el-icon-edit-outline"
                                  @click="edit(info.id,info.projectName, info.projectPrice, info.projectMark, info.projectPort, info.projectStatus, info.addressProjectFront, info.addressProjectBackground, info.addressProjectBackgroundAccountPasswd)">
                                <!--图片-->
                            </span>
                            <br>
                            <a :href="info.addressProjectFront" target="_blank">
                                <span :class="info.addressProjectFront? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">Front</span>
                            </a>
                            <a :href="info.addressProjectBackground" target="_blank">
                                <span :class="info.addressProjectBackground? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">Bg</span>
                            </a>
                            <span class="el-icon-download"
                                  @click="downloadZip(info.criteriaid)">zip
                            </span>
                            <span class="el-icon-download"
                                  @click="downIntroduce(info.criteriaid)">介绍
                            </span>
                            <span :class="info.projectShowWebsite? 'default el-icon-download' : 'red el-icon-download' "
                                  @click="downIntroduce(info.criteriaid)">sql
                            </span>
                        </td>
                        <td style="text-align:center !important">
                            <span v-if="info.devDockerStatusImagesIsExist=='false'"
                                  class="el-icon-circle-plus-outline"
                                  @click="buildToDocker(info.criteriaid)">dev
                                <!--只要镜像不存在才能构建镜像构建-->
                            </span>
                            <span v-else class="el-icon-circle-close"
                                  @click="runDockerShell(info.devDockerImageShellRemove)">dev
                                <!--镜像移除-->
                            </span>
                            <br>
                            <span v-if="info.proDockerStatusImagesIsExist=='false'"
                                  class="el-icon-circle-plus-outline"
                                  @click="buildToDockerPro(info.criteriaid)">pro
                                <!--只要镜像不存在才能构建镜像构建-->
                            </span>
                            <span v-else class="el-icon-circle-close"
                                  @click="runDockerShell(info.proDockerImageShellRemove)">pro
                                <!--镜像移除-->
                            </span>
                        </td>
                        <td>
                            <template v-if="info.devDockerStatusImagesIsExist=='true'">
                                <span v-if="info.devDockerStatusContainerIsExist=='false'"
                                      class="el-icon-circle-plus-outline"
                                      @click="runDockerShell(info.devDockerContainerShellCreate)">dev
                                </span>
                                <span v-else
                                      class="el-icon-circle-close"
                                      @click="runDockerShell(info.devDockerContainerShellRemove)">dev
                                </span>
                                <template v-if="info.devDockerStatusContainerIsExist=='true'">
                                   <span v-if="info.devDockerStatusContainerIsRunning=='false'"
                                         class="el-icon-video-play"
                                         @click="runDockerShell(info.devDockerContainerShellRun)">dev
                                    </span>
                                    <span v-else
                                          class="el-icon-video-pause"
                                          @click="runDockerShell(info.devDockerContainerShellStop)">dev
                                    </span>
                                </template>
                            </template>
                            <br>
                            <template v-if="info.proDockerStatusImagesIsExist=='true'">
                                <span v-if="info.proDockerStatusContainerIsExist=='false'"
                                      class="el-icon-circle-plus-outline"
                                      @click="runDockerShell(info.proDockerContainerShellCreate)">pro
                                </span>
                                <span v-else
                                      class="el-icon-circle-close"
                                      @click="runDockerShell(info.proDockerContainerShellRemove)">pro
                                </span>
                                <template v-if="info.proDockerStatusContainerIsExist=='true'">
                                     <span v-if="info.proDockerStatusContainerIsRunning=='false'"
                                           class="el-icon-video-play"
                                           @click="runDockerShell(info.proDockerContainerShellRun)">pro
                                    </span>
                                    <span v-else
                                          class="el-icon-video-pause"
                                          @click="runDockerShell(info.proDockerContainerShellStop)">pro
                                   </span>
                                </template>
                            </template>

                        </td>
                        <td>
                            <span class="el-icon-bottom"
                                  @click="buildCreateAndRun(info.criteriaid,info.devDockerContainerShellCreate,info.devDockerContainerShellRun,'dev')">三合一(dev)
                            </span>
                            <span class="el-icon-bottom"
                                  @click="runDockerShells(info.devDockerContainerShellStop,info.devDockerContainerShellRemove,info.devDockerImageShellRemove)">三合一移除(dev)
                            </span>
                            <br>
                            <template v-if="info.devDockerStatusContainerIsRunning=='true'">
                                <span v-if=""
                                      class="el-icon-bottom"
                                      @click="generateImageProZip(info.criteriaid)">devToPro
                                    <!--devToPro-->
                                </span>
                                <br>
                            </template>
                            <span class="el-icon-bottom"
                                  @click="buildCreateAndRun(info.criteriaid,info.proDockerContainerShellCreate,info.proDockerContainerShellRun,'pro')">三合一(pro)
                            </span>
                            <span class="el-icon-bottom"
                                  @click="runDockerShells(info.proDockerContainerShellStop,info.proDockerContainerShellRemove,info.proDockerImageShellRemove)">三合一移除(pro)
                            </span>


                        </td>

                        <td>
                            <template v-if="info.devDockerContainerId">
                                <a :href="info.addressContainerInner" target="_blank">
                                    <span :class="info.devDockerStatusContainerIsRunning=='true' ? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">dev容器内网</span>
                                </a>
                                <a :href="info.addressContainerOuter" target="_blank">
                                    <span :class="info.devDockerStatusContainerIsRunning=='true' ? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">dev容器外网</span>
                                </a>
                            </template>
                            <template v-if="info.proDockerContainerId">
                                <br>
                                <a :href="info.addressContainerInner" target="_blank">
                                    <span :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">pro容器内网</span>
                                </a>
                                <a :href="info.addressContainerOuter" target="_blank">
                                    <span :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-video-camera-solid' : 'red el-icon-video-camera-solid' ">pro容器外网</span>
                                </a>
                            </template>
                        </td>
                        <td>
                            <template v-if="info.devDockerContainerId">
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'logs')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-document' : 'red el-icon-document' ">dev</span>
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'inspect')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-info' : 'red el-icon-info' ">dev</span>
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'stats')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-s-data' : 'red el-icon-s-data' ">dev</span>
                                <span @click="openInnerPortainerUrl(info.devDockerContainerId,'exec')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-arrow-right' : 'red el-icon-arrow-right' ">dev</span>
                            </template>
                            <br>
                            <template v-if="info.proDockerContainerId">
                                <span @click="openInnerPortainerUrl(info.proDockerContainerId,'logs')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-document' : 'red el-icon-document' ">pro</span>
                                <span @click="openInnerPortainerUrl(info.proDockerContainerId,'inspect')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-info' : 'red el-icon-info' ">pro</span>
                                <span @click="openInnerPortainerUrl(info.proDockerContainerId,'stats')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-s-data' : 'red el-icon-s-data' ">pro</span>
                                <span @click="openInnerPortainerUrl(info.proDockerContainerId,'exec')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-arrow-right' : 'red el-icon-arrow-right' ">pro</span>
                            </template>
                        </td>
                        <td>
                            <template v-if="info.devDockerContainerId">
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'logs')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-document' : 'red el-icon-document' ">dev</span>
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'inspect')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-info' : 'red el-icon-info' ">dev</span>
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'stats')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-s-data' : 'red el-icon-s-data' ">dev</span>
                                <span @click="openOuterPortainerUrl(info.devDockerContainerId,'exec')"
                                      :class="info.devDockerStatusContainerIsRunning=='true'? 'default el-icon-arrow-right' : 'red el-icon-arrow-right' ">dev</span>
                            </template>
                            <br>
                            <template v-if="info.proDockerContainerId">
                                <span @click="openOuterPortainerUrl(info.proDockerContainerId,'logs')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-document' : 'red el-icon-document' ">pro</span>
                                <span @click="openOuterPortainerUrl(info.proDockerContainerId,'inspect')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-info' : 'red el-icon-info' ">pro</span>
                                <span @click="openOuterPortainerUrl(info.proDockerContainerId,'stats')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-s-data' : 'red el-icon-s-data' ">pro</span>
                                <span @click="openOuterPortainerUrl(info.proDockerContainerId,'exec')"
                                      :class="info.proDockerStatusContainerIsRunning=='true'? 'default el-icon-arrow-right' : 'red el-icon-arrow-right' ">pro</span>
                            </template>
                        </td>
                        <!--<td>{{info.projectUpdateTime}}</td>-->
                        <!--<td>{{info.projectType}}</td>-->
                        <td>{{info.projectPrice}}</td>
                        <!--<td>{{info.projectPackageType}}</td>-->
                        <!--<td>{{info.projectRealFileName}}</td>-->
                        <!--<td>{{info.projectLanguage}}</td>-->
                        <td>{{info.projectSize2}}</td>
                        <!--<td>{{info.projectSizeNum}}</td>-->
                        <!--<td>{{info.projectSizeType}}</td>-->
                        <!--<td>{{info.projectRuntime}}</td>-->
                        <!--<td>{{info.projectDownloadSum}}</td>-->
                        <td>{{info.projectStatus}}</td>
                        <td>{{info.projectMark}}</td>
                        <!--<td>{{info.projectCanRunning}}</td>-->
                        <!--<td>{{info.dockerImageName}}</td>-->
                        <!--<td>{{info.dockerStatus}}</td>-->
                        <!--<td>{{info.dockerContainerName}}</td>-->
                        <!--<td>{{info.dockerContainerPort}}</td>-->
                        <td>{{info.addressProjectBackgroundAccountPasswd}}</td>
                        <td>{{info.updateTime}}</td>
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
            <!--下载地址-->
            <el-dialog
                    title=""
                    :visible.sync="imgs.dialog.dialogVisible"
                    fullscreen="true"
                    show-close="false"
                    style="text-align: center">
                <template v-for="url in imgs.dialog.urls">
                    <img :src="imgs.api+'?fileName='+url" width="30%" style="float: left; margin: 5px"/>
                </template>
                <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button type="primary" @click="imgs.dialog.dialogVisible = false">确 定</el-button>-->
                <!--</span>-->
            </el-dialog>
            <el-dialog
                    title="更新"
                    :visible.sync="dialog_edit.dialogVisible"
                    show-close=false
                    style="text-align: center">
                <el-form label-width="300px">
                    <el-form-item label="id">
                        <el-input v-model="dialog_edit.id" placeholder="请输入" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="projectName(名称)">
                        <el-input v-model="dialog_edit.projectName" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="projectPrice(价格)">
                        <el-input v-model="dialog_edit.projectPrice" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="projectMark(备注)">
                        <el-input v-model="dialog_edit.projectMark"
                                  type="textarea" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="projectPort(端口号)">
                        <el-input v-model="dialog_edit.projectPort" placeholder="请输入" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="projectStatus(状态)">
                        <el-select v-model="dialog_edit.projectStatus" placeholder="请输入">
                            <el-option v-for="item in status" :key="item"
                                       :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="addressProjectFront(前端地址)">
                        <el-input v-model="dialog_edit.addressProjectFront" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="addressProjectBackground(后台地址)">
                        <el-input v-model="dialog_edit.addressProjectBackground" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="AccountPasswd(账号密码)">
                        <el-input v-model="dialog_edit.addressProjectBackgroundAccountPasswd"
                                  type="textarea" placeholder="请输入"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialog_edit.dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">确 定</el-button></span>
            </el-dialog>
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
                    projectPrice: '',
                    projectPackageType: '',
                    projectPanAddress: '',
                    projectHtmlBody: '',
                    projectSourceUrl: '',
                    projectLanguage: '',
                    projectSize2: '',
                    projectSizeNum: '',
                    projectSizeType: '',
                    projectImgs: '',
                    projectImgsDefault: '',
                    projectRuntime: '',
                    projectOfficialWebsite: '',
                    projectShowWebsite: '',
                    projectDownloadUrls: '',
                    projectDownloadSum: '',
                    projectIntroduction: '',
                    projectStatus: '',
                    projectMark: '',
                    projectCanRunning: '',
                    projectSql: '',
                    projectPort: '',
                    addressContainerOuter: '',
                    addressContainerInner: '',
                    addressProjectFront: '',
                    addressProjectBackground: '',
                    addressProjectBackgroundAccountPasswd: '',
                    devProjectRealFileName: '',
                    devDockerImageName: '',
                    devDockerImageShellRemove: '',
                    devDockerContainerId: '',
                    devDockerContainerName: '',
                    devDockerContainerShellCreate: '',
                    devDockerContainerShellRun: '',
                    devDockerContainerShellStop: '',
                    devDockerContainerShellRemove: '',
                    devDockerStatusImagesIsExist: '',
                    devDockerStatusContainerIsExist: '',
                    devDockerStatusContainerIsRunning: '',
                    proProjectRealFileName: '',
                    proDockerImageName: '',
                    proDockerImageShellRemove: '',
                    proDockerContainerId: '',
                    proDockerContainerName: '',
                    proDockerContainerShellCreate: '',
                    proDockerContainerShellRun: '',
                    proDockerContainerShellStop: '',
                    proDockerContainerShellRemove: '',
                    proDockerStatusImagesIsExist: '',
                    proDockerStatusContainerIsExist: '',
                    proDockerStatusContainerIsRunning: '',
                    updateTime: '',
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
                },
                dialog: {
                    dialogVisible: false,
                    value: ''
                },
                dialog_edit: {
                    dialogVisible: false,
                    id: '',
                    projectName: '',
                    projectPrice: '',
                    projectMark: '',
                    projectPort: '',
                    projectStatus: '',
                    addressProjectFront: '',
                    addressProjectBackground: '',
                    addressProjectBackgroundAccountPasswd: ''
                },
                imgs: {
                    dialog: {
                        dialogVisible: false,
                        urls: []
                    },
                    api: ''
                },
                host: {
                    portainer: {
                        inner: "",
                        outer: ""
                    }
                },
                status: ["created", "未开始", "可用", "废弃", "暂定"]

            }

        },
        mounted() {
            let self = this;
        },
        created() {
            this.queryBase();
            this.getInnerPortainerUrl();
            this.getOuterPortainerUrl();
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
                if (self.search.projectSize2 != null && self.search.projectSize2 != '') {
                    params.append("projectSize2", self.search.projectSize2);
                }
                if (self.search.projectSize2 != null && self.search.projectSize2 != '') {
                    params.append("projectSize2", self.search.projectSize2);
                }
                if (self.search.projectStatus != null && self.search.projectStatus != '') {
                    params.append("projectStatus", self.search.projectStatus);
                }
                var paramsJson = {};
                params.forEach((value, key) => paramsJson[key] = value);
                self.$http.post(self.api.queryBasePageHelperProjectPlus + "?pageNum=" + self.search.pageNum + "&pageSize=" + self.search.pageSize,
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
                    self.$http.get(self.api.deleteProjectPlusByPrimaryKey
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
            routerToView(id) {
                //跳转携带参数
                let queryStr = "";
                queryStr = queryStr + "id=" + id + "";
                window.open("#/ProjectPlusModuleView" + "?" + queryStr, '_self');
            },
            routerToEdit(id) {
                //跳转携带参数
                let queryStr = "";
                queryStr = queryStr + "id=" + id + "";
                //跳转携带参数
                window.open("#/ProjectPlusModuleEdit" + "?" + queryStr, '_self');
            },
            routerToAdd() {
                window.open("#/ProjectPlusModuleAdd", '_self');
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
                self.search.projectPrice = '';
                self.search.projectPackageType = '';
                self.search.projectPanAddress = '';
                self.search.projectRealFileName = '';
                self.search.projectHtmlBody = '';
                self.search.projectSourceUrl = '';
                self.search.projectLanguage = '';
                self.search.projectSize2 = '';
                self.search.projectSizeNum = '';
                self.search.projectSizeType = '';
                self.search.projectImgs = '';
                self.search.projectImgsDefault = '';
                self.search.projectRuntime = '';
                self.search.projectOfficialWebsite = '';
                self.search.projectShowWebsite = '';
                self.search.projectDownloadUrls = '';
                self.search.projectDownloadSum = '';
                self.search.projectIntroduction = '';
                self.search.projectStatus = '';
                self.search.projectMark = '';
                self.search.projectCanRunning = '';
                self.search.dockerImageName = '';
                self.search.dockerImageShellRemove = '';
                self.search.dockerStatus = '';
                self.search.dockerContainerId = '';
                self.search.dockerContainerName = '';
                self.search.dockerContainerPort = '';
                self.search.dockerContainerShellCreate = '';
                self.search.dockerContainerShellRun = '';
                self.search.dockerContainerShellStop = '';
                self.search.dockerContainerShellRemove = '';
                self.search.addressContainerOuter = '';
                self.search.addressContainerInner = '';
                self.search.addressProjectFront = '';
                self.search.addressProjectBackground = '';
                self.search.addressProjectBackgroundAccountPasswd = '';
                self.search.updateTime = '';
                this.queryBase();
            },
            handleCurrentChange(currentChange) {
                let self = this;
                self.search.pageNum = self.pageInfo.pageNum;
                self.search.pageSize = self.pageInfo.pageSize;
                self.searchEvent();
            },
            pen(value) {
                this.$alert('<pre>' + value + '</pre>', '预览', {
                    dangerouslyUseHTMLString: true
                });
            },
            // pen(value) {
            //     this.$alert(value, '预览', {
            //         dangerouslyUseHTMLString: true
            //     });
            // },
            show(value) {
                let self = this;
                //清空
                self.dialog.value = '';
                //注入内容
                self.dialog.dialogVisible = true;
                self.dialog.value = value;
            },
            showImgs(imgs) {
                let self = this;
                self.imgs.api = this.api.preByFileNameUrl;
                //清空
                self.imgs.dialog.urls = [];
                //注入内容
                self.imgs.dialog.dialogVisible = true;
                self.imgs.dialog.urls = imgs.split(",");
            },

            getInnerPortainerUrl() {
                let self = this;
                self.$http.get(self.api.getInnerPortainerUrl, {},
                    function (response) {
                        if (response.code == 0) {
                            self.host.portainer.inner = response.content;
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
            getOuterPortainerUrl() {
                let self = this;
                self.$http.get(self.api.getOuterPortainerUrl, {}, function (response) {
                        if (response.code == 0) {
                            self.host.portainer.outer = response.content;
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
            openInnerPortainerUrl(dockerContainerId, type) {
                let self = this;
                let url = self.host.portainer.inner + "/" + dockerContainerId + "/" + type;
                console.info("url:" + url);
                window.open(url, '_blank');
            },
            openOuterPortainerUrl(dockerContainerId, type) {
                let self = this;
                let url = self.host.portainer.outer + "/" + dockerContainerId + "/" + type;
                window.open(url, '_blank');
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
            generateImageProZip(criteriaid) {
                let self = this;
                this.$confirm('是否执行构建？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.generateImageProZip
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
            buildToDockerPro(criteriaid) {
                let self = this;
                this.$confirm('是否创建容器？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.buildToDockerPro
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
            }
            ,
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
            }
            ,
            runDockerShells(shell1, shell2, shell3) {
                let self = this;
                this.$confirm('是否执行该条命令？', shell1 + shell2 + shell3, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    self.$http.get(self.api.runDockerShells + "?shell=" + shell1 + "&shell=" + shell2 + "&shell=" + shell3
                        , {},
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
            }
            ,
            buildCreateAndRun(criteriaid, shell1, shell2, type) {
                let self = this;
                this.$confirm('是否执行三合一条命令？', type + criteriaid + shell1 + shell2, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    let url = '';
                    if ('dev' == type) {
                        url = self.api.buildToDocker;
                    }
                    if ('pro' == type) {
                        url = self.api.buildToDockerPro;
                    }
                    self.$http.get(url
                        , {
                            params: {
                                criteriaid: criteriaid
                            }
                        },
                        function (response) {
                            if (response.code == 0) {
                                self.$http.get(self.api.runDockerShells + "?shell=" + shell1 + "&shell=" + shell2
                                    , {},
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
            }
            ,
            downloadZip(criteriaid) {
                this.$confirm('是否下载zip？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    let self = this;
                    let url = self.api.downloadZip + "?criteriaid=" + criteriaid;
                    window.open(url, '_blank');
                })
            }
            ,
            downIntroduce(criteriaid) {
                this.$confirm('是否下载introduce？', criteriaid, {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                }).then(() => {
                    let self = this;
                    let url = self.api.downIntroduce + "?criteriaid=" + criteriaid;
                    window.open(url, '_blank');
                })
            }
            ,
            edit(id, projectName, projectPrice, projectMark, projectPort, projectStatus, addressProjectFront, addressProjectBackground, addressProjectBackgroundAccountPasswd) {
                let self = this;
                //清空
                self.dialog_edit.id = '';
                self.dialog_edit.projectName = '';
                self.dialog_edit.projectPrice = '';
                self.dialog_edit.projectMark = '';
                self.dialog_edit.projectPort = '';
                self.dialog_edit.projectStatus = '';
                self.dialog_edit.addressProjectFront = '';
                self.dialog_edit.addressProjectBackground = '';
                self.dialog_edit.addressProjectBackgroundAccountPasswd = '';

                //
                self.dialog_edit.dialogVisible = true;
                self.dialog_edit.id = id;
                self.dialog_edit.projectName = projectName;
                self.dialog_edit.projectPrice = projectPrice;
                self.dialog_edit.projectMark = projectMark;
                self.dialog_edit.projectPort = projectPort;
                self.dialog_edit.projectStatus = projectStatus;
                self.dialog_edit.addressProjectFront = addressProjectFront;
                self.dialog_edit.addressProjectBackground = addressProjectBackground;
                self.dialog_edit.addressProjectBackgroundAccountPasswd = addressProjectBackgroundAccountPasswd;

            },
            handleClose() {
                let self = this;
                //更新
                this.$confirm('确认更新?')
                    .then(_ => {
                        // self.Index_DocumentController_Update(self.dialog.index, self.dialog.type, self.dialog.id, self.dialog.value);
                        self.updateByKey(self.dialog_edit.id, self.dialog_edit.projectName, self.dialog_edit.projectPrice, self.dialog_edit.projectMark, self.dialog_edit.projectPort, self.dialog_edit.projectStatus, self.dialog_edit.addressProjectFront, self.dialog_edit.addressProjectBackground, self.dialog_edit.addressProjectBackgroundAccountPasswd);
                        self.dialog_edit.dialogVisible = false
                    })
                    .catch(_ => {
                        self.dialog_edit.dialogVisible = false
                    });
            },
            updateByKey(id, projectName, projectPrice, projectMark, projectPort, projectStatus, addressProjectFront, addressProjectBackground, addressProjectBackgroundAccountPasswd) {

                // debugger
                let self = this;
                var sourceParams = new FormData();
                var sourceParamsResult = new FormData();
                var targetParams = new FormData();

                sourceParams.append('id', id);
                sourceParams.append('projectPrice', projectPrice);
                sourceParams.append('projectMark', projectMark);
                sourceParams.append('projectPort', projectPort);
                sourceParams.append('projectStatus', projectStatus);
                sourceParams.append('addressProjectFront', addressProjectFront);
                sourceParams.append('addressProjectBackground', addressProjectBackground);
                sourceParams.append('addressProjectBackgroundAccountPasswd', addressProjectBackgroundAccountPasswd);

                targetParams.append('id', id);

                for (var key of sourceParams.keys()) {
                    if (sourceParams.get(key) != "undefined") {
                        sourceParamsResult.append(key, sourceParams.get(key))
                    }
                }
                /**
                 * 转json
                 */
                var sourceParamsJson = {};
                sourceParamsResult.forEach((value, key) => sourceParamsJson[key] = value);
                var targetParamsJson = {};
                targetParams.forEach((value, key) => targetParamsJson[key] = value);

                self.$http.post(self.api.updateProjectPlusByPrimaryKey, {
                    "source": sourceParamsJson,
                    "target": targetParamsJson
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                }, function (response) {
                    if (response.code == 0) {
                        if (response.content == true) {
                            self.$message({
                                type: 'success',
                                message: '执行成功:' + response.content,
                                duration: 2000
                            });
                            self.queryBase();

                        } else {
                            self.$message({
                                type: 'warning',
                                message: '修改失败',
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
                }, function (response) {
                    //失败回调
                })
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

    .red {
        color: red !important;
    }

    .default {

    }

    tr td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left !important;
        padding-left: 10px;
    }

    .fa-file-alt:before {
        content: "\F15C";
    }

    tr th {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left !important;
        padding-left: 10px;
    }

    .t_area {
        width: 300px;
        overflow-y: visible
    }

    .el-message-box {
        width: 600px;
    }
</style>
