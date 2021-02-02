<template>
  <div class="app-form mt20 ml40">
    <h5 class="form-tit">查看</h5>
    <section>
      <el-form :model="postForm" :rules="rules" ref="postForm" label-width="180px" size="mini" :inline-message="true">
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
          <el-form-item label="projectPrice：">
              <el-input v-model="postForm.projectPrice" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectPackageType：">
              <el-input v-model="postForm.projectPackageType" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectPanAddress：">
              <el-input v-model="postForm.projectPanAddress" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectRealFileName：">
              <el-input v-model="postForm.projectRealFileName" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectHtmlBody：">
              <el-input v-model="postForm.projectHtmlBody" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectSourceUrl：">
              <el-input v-model="postForm.projectSourceUrl" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectLanguage：">
              <el-input v-model="postForm.projectLanguage" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectSize2：">
              <el-input v-model="postForm.projectSize2" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectSizeNum：">
              <el-input v-model="postForm.projectSizeNum" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectSizeType：">
              <el-input v-model="postForm.projectSizeType" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectImgs：">
              <el-input v-model="postForm.projectImgs" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectImgsDefault：">
              <el-input v-model="postForm.projectImgsDefault" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectRuntime：">
              <el-input v-model="postForm.projectRuntime" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectOfficialWebsite：">
              <el-input v-model="postForm.projectOfficialWebsite" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectShowWebsite：">
              <el-input v-model="postForm.projectShowWebsite" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectDownloadUrls：">
              <el-input v-model="postForm.projectDownloadUrls" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectDownloadSum：">
              <el-input v-model="postForm.projectDownloadSum" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectIntroduction：">
              <el-input v-model="postForm.projectIntroduction" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectStatus：">
              <el-input v-model="postForm.projectStatus" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectMark：">
              <el-input v-model="postForm.projectMark" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="projectCanRunning：">
              <el-input v-model="postForm.projectCanRunning" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerImageName：">
              <el-input v-model="postForm.dockerImageName" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerImageShellRemove：">
              <el-input v-model="postForm.dockerImageShellRemove" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerStatus：">
              <el-input v-model="postForm.dockerStatus" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerId：">
              <el-input v-model="postForm.dockerContainerId" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerName：">
              <el-input v-model="postForm.dockerContainerName" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerPort：">
              <el-input v-model="postForm.dockerContainerPort" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerShellCreate：">
              <el-input v-model="postForm.dockerContainerShellCreate" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerShellRun：">
              <el-input v-model="postForm.dockerContainerShellRun" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerShellStop：">
              <el-input v-model="postForm.dockerContainerShellStop" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="dockerContainerShellRemove：">
              <el-input v-model="postForm.dockerContainerShellRemove" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="addressContainerOuter：">
              <el-input v-model="postForm.addressContainerOuter" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="addressContainerInner：">
              <el-input v-model="postForm.addressContainerInner" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="addressProjectFront：">
              <el-input v-model="postForm.addressProjectFront" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="addressProjectBackground：">
              <el-input v-model="postForm.addressProjectBackground" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="addressProjectBackgroundAccountPasswd：">
              <el-input v-model="postForm.addressProjectBackgroundAccountPasswd" maxlength="100" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="updateTime：">
              <el-input v-model="postForm.updateTime" maxlength="100" :disabled=true></el-input>
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
          projectPrice: '',
          projectPackageType: '',
          projectPanAddress: '',
          projectRealFileName: '',
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
          dockerImageName: '',
          dockerImageShellRemove: '',
          dockerStatus: '',
          dockerContainerId: '',
          dockerContainerName: '',
          dockerContainerPort: '',
          dockerContainerShellCreate: '',
          dockerContainerShellRun: '',
          dockerContainerShellStop: '',
          dockerContainerShellRemove: '',
          addressContainerOuter: '',
          addressContainerInner: '',
          addressProjectFront: '',
          addressProjectBackground: '',
          addressProjectBackgroundAccountPasswd: '',
          updateTime: ''
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
        self.$http.get(self.api.queryProjectPlusByPrimaryKey, {
          params: {
              id:id
          }
        },function (response) {
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
            window.open("#/ProjectPlusModuleList", '_self');
        }

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
