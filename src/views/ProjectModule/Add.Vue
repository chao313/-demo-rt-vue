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
            <el-form-item label="projectZipStatus：">
                <el-input v-model="postForm.projectZipStatus" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectPanAddress：">
                <el-input v-model="postForm.projectPanAddress" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="htmlBody：">
                <el-input v-model="postForm.htmlBody" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="sourceUrl：">
                <el-input v-model="postForm.sourceUrl" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="language：">
                <el-input v-model="postForm.language" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="size2：">
                <el-input v-model="postForm.size2" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="sizeNum：">
                <el-input v-model="postForm.sizeNum" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="sizeType：">
                <el-input v-model="postForm.sizeType" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="officialWebsite：">
                <el-input v-model="postForm.officialWebsite" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="showWebsite：">
                <el-input v-model="postForm.showWebsite" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="downloadSum：">
                <el-input v-model="postForm.downloadSum" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="introduction：">
                <el-input v-model="postForm.introduction" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="contentImgs：">
                <el-input v-model="postForm.contentImgs" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="runtime：">
                <el-input v-model="postForm.runtime" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="downloadUrls：">
                <el-input v-model="postForm.downloadUrls" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerPort：">
                <el-input v-model="postForm.dockerPort" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerImageName：">
                <el-input v-model="postForm.dockerImageName" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerContainerName：">
                <el-input v-model="postForm.dockerContainerName" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerShellCreate：">
                <el-input v-model="postForm.dockerShellCreate" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerShellRun：">
                <el-input v-model="postForm.dockerShellRun" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerShellStop：">
                <el-input v-model="postForm.dockerShellStop" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerShellContainerRemove：">
                <el-input v-model="postForm.dockerShellContainerRemove" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerShellImageRemove：">
                <el-input v-model="postForm.dockerShellImageRemove" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="dockerStatus：">
                <el-input v-model="postForm.dockerStatus" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="projectStatus：">
                <el-input v-model="postForm.projectStatus" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="httpInnerAddress：">
                <el-input v-model="postForm.httpInnerAddress" maxlength="100"></el-input>
            </el-form-item>
            <el-form-item label="httpOutAddress：">
                <el-input v-model="postForm.httpOutAddress" maxlength="100"></el-input>
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
              httpOutAddress: ''
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
              params.append('projectZipStatus', self.postForm.projectZipStatus);
              params.append('projectPanAddress', self.postForm.projectPanAddress);
              params.append('htmlBody', self.postForm.htmlBody);
              params.append('sourceUrl', self.postForm.sourceUrl);
              params.append('language', self.postForm.language);
              params.append('size2', self.postForm.size2);
              params.append('sizeNum', self.postForm.sizeNum);
              params.append('sizeType', self.postForm.sizeType);
              params.append('officialWebsite', self.postForm.officialWebsite);
              params.append('showWebsite', self.postForm.showWebsite);
              params.append('downloadSum', self.postForm.downloadSum);
              params.append('introduction', self.postForm.introduction);
              params.append('contentImgs', self.postForm.contentImgs);
              params.append('runtime', self.postForm.runtime);
              params.append('downloadUrls', self.postForm.downloadUrls);
              params.append('dockerPort', self.postForm.dockerPort);
              params.append('dockerImageName', self.postForm.dockerImageName);
              params.append('dockerContainerName', self.postForm.dockerContainerName);
              params.append('dockerShellCreate', self.postForm.dockerShellCreate);
              params.append('dockerShellRun', self.postForm.dockerShellRun);
              params.append('dockerShellStop', self.postForm.dockerShellStop);
              params.append('dockerShellContainerRemove', self.postForm.dockerShellContainerRemove);
              params.append('dockerShellImageRemove', self.postForm.dockerShellImageRemove);
              params.append('dockerStatus', self.postForm.dockerStatus);
              params.append('projectStatus', self.postForm.projectStatus);
              params.append('httpInnerAddress', self.postForm.httpInnerAddress);
              params.append('httpOutAddress', self.postForm.httpOutAddress);
              /**
               * 转json
               */
              var paramsJson = {};
              params.forEach((value, key) => paramsJson[key] = value);

              self.$http.post(self.api.insertProject, paramsJson, {
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
                                      path: '/ProjectModuleList'
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
              window.open("#/ProjectModuleList", '_self');
          }
      }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
