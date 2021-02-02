<template>
  <div class="app-form mt20 ml40">
    <h5 class="form-tit">注册配置编辑</h5>
    <section>
      <el-form :model="postForm" :rules="rules" ref="postForm" label-width="180px" size="mini" :inline-message="true">
        <div class="mt30 ml15">
                      <el-form-item label="id：">
                <el-input v-model="postForm.id" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="criteriaid：">
                <el-input v-model="postForm.criteriaid" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectName：">
                <el-input v-model="postForm.projectName" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectUpdateTime：">
                <el-input v-model="postForm.projectUpdateTime" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectType：">
                <el-input v-model="postForm.projectType" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectPrice：">
                <el-input v-model="postForm.projectPrice" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectPackageType：">
                <el-input v-model="postForm.projectPackageType" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectPanAddress：">
                <el-input v-model="postForm.projectPanAddress" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectRealFileName：">
                <el-input v-model="postForm.projectRealFileName" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectHtmlBody：">
                <el-input v-model="postForm.projectHtmlBody" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectSourceUrl：">
                <el-input v-model="postForm.projectSourceUrl" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectLanguage：">
                <el-input v-model="postForm.projectLanguage" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectSize2：">
                <el-input v-model="postForm.projectSize2" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectSizeNum：">
                <el-input v-model="postForm.projectSizeNum" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectSizeType：">
                <el-input v-model="postForm.projectSizeType" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectImgs：">
                <el-input v-model="postForm.projectImgs" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectImgsDefault：">
                <el-input v-model="postForm.projectImgsDefault" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectRuntime：">
                <el-input v-model="postForm.projectRuntime" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectOfficialWebsite：">
                <el-input v-model="postForm.projectOfficialWebsite" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectShowWebsite：">
                <el-input v-model="postForm.projectShowWebsite" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectDownloadUrls：">
                <el-input v-model="postForm.projectDownloadUrls" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectDownloadSum：">
                <el-input v-model="postForm.projectDownloadSum" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectIntroduction：">
                <el-input v-model="postForm.projectIntroduction" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectStatus：">
                <el-input v-model="postForm.projectStatus" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectMark：">
                <el-input v-model="postForm.projectMark" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectCanRunning：">
                <el-input v-model="postForm.projectCanRunning" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerImageName：">
                <el-input v-model="postForm.dockerImageName" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerImageShellRemove：">
                <el-input v-model="postForm.dockerImageShellRemove" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerStatus：">
                <el-input v-model="postForm.dockerStatus" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerId：">
                <el-input v-model="postForm.dockerContainerId" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerName：">
                <el-input v-model="postForm.dockerContainerName" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerPort：">
                <el-input v-model="postForm.dockerContainerPort" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerShellCreate：">
                <el-input v-model="postForm.dockerContainerShellCreate" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerShellRun：">
                <el-input v-model="postForm.dockerContainerShellRun" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerShellStop：">
                <el-input v-model="postForm.dockerContainerShellStop" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerShellRemove：">
                <el-input v-model="postForm.dockerContainerShellRemove" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="addressContainerOuter：">
                <el-input v-model="postForm.addressContainerOuter" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="addressContainerInner：">
                <el-input v-model="postForm.addressContainerInner" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="addressProjectFront：">
                <el-input v-model="postForm.addressProjectFront" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="addressProjectBackground：">
                <el-input v-model="postForm.addressProjectBackground" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="addressProjectBackgroundAccountPasswd：">
                <el-input v-model="postForm.addressProjectBackgroundAccountPasswd" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="updateTime：">
                <el-input v-model="postForm.updateTime" maxlength="100"></el-input>
            </el-form-item>
        </div>
      </el-form>
    </section>
    <div class="mt40 ml40">
      <el-button type="primary" @click="submitAddForm('postForm')">确定添加</el-button>
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
      }
          ;
      },
      created() {

      },
      watch: {},
      methods: {
          submitAddForm(formName) {
              let self = this;
              let params = new FormData();

              params.append('id', self.postForm.id);
              params.append('criteriaid', self.postForm.criteriaid);
              params.append('projectName', self.postForm.projectName);
              params.append('projectUpdateTime', self.postForm.projectUpdateTime);
              params.append('projectType', self.postForm.projectType);
              params.append('projectPrice', self.postForm.projectPrice);
              params.append('projectPackageType', self.postForm.projectPackageType);
              params.append('projectPanAddress', self.postForm.projectPanAddress);
              params.append('projectRealFileName', self.postForm.projectRealFileName);
              params.append('projectHtmlBody', self.postForm.projectHtmlBody);
              params.append('projectSourceUrl', self.postForm.projectSourceUrl);
              params.append('projectLanguage', self.postForm.projectLanguage);
              params.append('projectSize2', self.postForm.projectSize2);
              params.append('projectSizeNum', self.postForm.projectSizeNum);
              params.append('projectSizeType', self.postForm.projectSizeType);
              params.append('projectImgs', self.postForm.projectImgs);
              params.append('projectImgsDefault', self.postForm.projectImgsDefault);
              params.append('projectRuntime', self.postForm.projectRuntime);
              params.append('projectOfficialWebsite', self.postForm.projectOfficialWebsite);
              params.append('projectShowWebsite', self.postForm.projectShowWebsite);
              params.append('projectDownloadUrls', self.postForm.projectDownloadUrls);
              params.append('projectDownloadSum', self.postForm.projectDownloadSum);
              params.append('projectIntroduction', self.postForm.projectIntroduction);
              params.append('projectStatus', self.postForm.projectStatus);
              params.append('projectMark', self.postForm.projectMark);
              params.append('projectCanRunning', self.postForm.projectCanRunning);
              params.append('dockerImageName', self.postForm.dockerImageName);
              params.append('dockerImageShellRemove', self.postForm.dockerImageShellRemove);
              params.append('dockerStatus', self.postForm.dockerStatus);
              params.append('dockerContainerId', self.postForm.dockerContainerId);
              params.append('dockerContainerName', self.postForm.dockerContainerName);
              params.append('dockerContainerPort', self.postForm.dockerContainerPort);
              params.append('dockerContainerShellCreate', self.postForm.dockerContainerShellCreate);
              params.append('dockerContainerShellRun', self.postForm.dockerContainerShellRun);
              params.append('dockerContainerShellStop', self.postForm.dockerContainerShellStop);
              params.append('dockerContainerShellRemove', self.postForm.dockerContainerShellRemove);
              params.append('addressContainerOuter', self.postForm.addressContainerOuter);
              params.append('addressContainerInner', self.postForm.addressContainerInner);
              params.append('addressProjectFront', self.postForm.addressProjectFront);
              params.append('addressProjectBackground', self.postForm.addressProjectBackground);
              params.append('addressProjectBackgroundAccountPasswd', self.postForm.addressProjectBackgroundAccountPasswd);
              params.append('updateTime', self.postForm.updateTime);
              /**
               * 转json
               */
              var paramsJson = {};
              params.forEach((value, key) => paramsJson[key] = value);

              self.$http.post(self.api.insertProjectPlus, paramsJson, {
                  headers: {
                      "Content-Type": "application/json"
                  },
              }, function (response) {
                  if (response.code == 0) {
                      if (response.content == true) {
                          self.$message({
                              type: 'success',
                              message: '添加成功，页面即将跳转至列表页',
                              duration: 500,
                              onClose: function () {
                                  self.$router.push({
                                      path: '/ProjectPlusModuleList'
                                  })
                              }
                          });

                      } else {
                          self.$message({
                              type: 'warning',
                              message: '添加失败',
                              duration: 2000
                          });
                      }
                  }else {
                      self.$message({
                          type: 'error',
                          message: response.msg,
                          duration: 2000
                      });
                  }
              }, function (response) {
                  //失败回调
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
