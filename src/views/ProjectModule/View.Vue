<template>
    <div class="app-form mt20 ml40">
        <h5 class="form-tit">查看</h5>
        <section>
            <el-form :model="postForm" :rules="rules" ref="postForm" label-width="180px" size="mini"
                     :inline-message="true">
                <div class="mt30 ml15">
                    <el-form-item label="id：">
                        <el-input v-model="postForm.id" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="criteriaid：">
                        <el-input v-model="postForm.criteriaid" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="projectName：">
                        <el-input v-model="postForm.projectName" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="projectUpdateTime：">
                        <el-input v-model="postForm.projectUpdateTime" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="projectType：">
                        <el-input v-model="postForm.projectType" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="projectZipStatus：">
                        <el-input v-model="postForm.projectZipStatus" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="projectPanAddress：">
                        <el-input v-model="postForm.projectPanAddress" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="htmlBody：">
                        <el-input v-model="postForm.htmlBody" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="sourceUrl：">
                        <el-input v-model="postForm.sourceUrl" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="language：">
                        <el-input v-model="postForm.language" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="size2：">
                        <el-input v-model="postForm.size2" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="sizeNum：">
                        <el-input v-model="postForm.sizeNum" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="sizeType：">
                        <el-input v-model="postForm.sizeType" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="officialWebsite：">
                        <el-input v-model="postForm.officialWebsite" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="showWebsite：">
                        <el-input v-model="postForm.showWebsite" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="downloadSum：">
                        <el-input v-model="postForm.downloadSum" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="introduction：">
                        <el-input v-model="postForm.introduction" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="contentImgs：">
                        <el-input v-model="postForm.contentImgs" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="runtime：">
                        <el-input v-model="postForm.runtime" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="downloadUrls：">
                        <el-input v-model="postForm.downloadUrls" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerPort：">
                        <el-input v-model="postForm.dockerPort" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerImageName：">
                        <el-input v-model="postForm.dockerImageName" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerContainerName：">
                        <el-input v-model="postForm.dockerContainerName" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerShellCreate：">
                        <el-input v-model="postForm.dockerShellCreate" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerShellRun：">
                        <el-input v-model="postForm.dockerShellRun" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerShellStop：">
                        <el-input v-model="postForm.dockerShellStop" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerShellContainerRemove：">
                        <el-input v-model="postForm.dockerShellContainerRemove" maxlength="100"
                                  :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerShellImageRemove：">
                        <el-input v-model="postForm.dockerShellImageRemove" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="dockerStatus：">
                        <el-input v-model="postForm.dockerStatus" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="projectStatus：">
                        <el-input v-model="postForm.projectStatus" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="httpInnerAddress：">
                        <el-input v-model="postForm.httpInnerAddress" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                    <el-form-item label="httpOutAddress：">
                        <el-input v-model="postForm.httpOutAddress" maxlength="100" :disabled=true></el-input>
                    </el-form-item>
                </div>
            </el-form>
        </section>
        <div class="mt40 ml40">
            <el-button type="primary" class="el-button-search" @click="routerToList()">返回列表</el-button>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'moduleDetail',
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                postForm: {
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
                    docker_shell_create: '',
                    dockerShellStop: '',
                    dockerShellContainerRemove: '',
                    dockerShellImageRemove: '',
                    dockerStatus: '',
                    projectStatus: '',
                    httpInnerAddress: '',
                    httpOutAddress: ''
                }
            };
        },
        created() {
            let self = this;
            /**
             * 1.接收外界参数
             */
            const id = this.$route.query && this.$route.query.id
            self.queryByPrimaryKey(id)
        },
        watch: {},
        methods: {
            //获取具体的配置
            queryByPrimaryKey(id) {
                let self = this;
                self.$http.get(self.api.queryProjectByPrimaryKey, {
                    params: {
                        id: id
                    }
                }, function (response) {
                    if (response.code == 0) {
                        self.postForm = response.content;
                        self.$message({
                            type: 'success',
                            message: '查询成功',
                            duration: 2000
                        });
                    } else {
                        self.$message({
                            type: 'error',
                            message: response.msg,
                            duration: 2000
                        });
                    }
                }, function (response) {
                    //失败回调
                    self.$message({
                        type: 'warning',
                        message: '请求异常',
                        duration: 1000
                    });
                })

            },
            routerToList() {
                //跳转回List
                window.open("#/ProjectModuleList", '_self');
            }

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
