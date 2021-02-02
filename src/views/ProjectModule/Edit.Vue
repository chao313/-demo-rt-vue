<template>
  <div class="app-form mt20 ml40">
    <h5 class="form-tit">注册配置编辑</h5>
    <section>
      <el-form :model="postForm" :rules="rules" ref="postForm" label-width="180px" size="mini" :inline-message="true">
        <div class="mt30 ml15">
                        <el-form-item label="id：">
                  <el-input v-model="postForm.id" maxlength="100" :disabled=true></el-input>
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
      <el-button type="primary" @click="submitEditForm('postForm')">确定更新</el-button>
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
              },
              function (response) {
                  //失败回调
                  self.$message({
                      type: 'warning',
                      message: '请求异常',
                      duration: 1000
                  });
              }
          )
          },

          submitEditForm(formName) {
              let self = this;
              var sourceParams = new FormData();
              var targetParams = new FormData();
               /**
                * 处理外界的参数 -> 用于更新
                */
             const id = this.$route.query && this.$route.query.id

              sourceParams.append('criteriaid', self.postForm.criteriaid);
              sourceParams.append('projectName', self.postForm.projectName);
              sourceParams.append('projectUpdateTime', self.postForm.projectUpdateTime);
              sourceParams.append('projectType', self.postForm.projectType);
              sourceParams.append('projectZipStatus', self.postForm.projectZipStatus);
              sourceParams.append('projectPanAddress', self.postForm.projectPanAddress);
              sourceParams.append('htmlBody', self.postForm.htmlBody);
              sourceParams.append('sourceUrl', self.postForm.sourceUrl);
              sourceParams.append('language', self.postForm.language);
              sourceParams.append('size2', self.postForm.size2);
              sourceParams.append('sizeNum', self.postForm.sizeNum);
              sourceParams.append('sizeType', self.postForm.sizeType);
              sourceParams.append('officialWebsite', self.postForm.officialWebsite);
              sourceParams.append('showWebsite', self.postForm.showWebsite);
              sourceParams.append('downloadSum', self.postForm.downloadSum);
              sourceParams.append('introduction', self.postForm.introduction);
              sourceParams.append('contentImgs', self.postForm.contentImgs);
              sourceParams.append('runtime', self.postForm.runtime);
              sourceParams.append('downloadUrls', self.postForm.downloadUrls);
              sourceParams.append('dockerPort', self.postForm.dockerPort);
              sourceParams.append('dockerImageName', self.postForm.dockerImageName);
              sourceParams.append('dockerContainerName', self.postForm.dockerContainerName);
              sourceParams.append('dockerShellCreate', self.postForm.dockerShellCreate);
              sourceParams.append('dockerShellRun', self.postForm.dockerShellRun);
              sourceParams.append('dockerShellStop', self.postForm.dockerShellStop);
              sourceParams.append('dockerShellContainerRemove', self.postForm.dockerShellContainerRemove);
              sourceParams.append('dockerShellImageRemove', self.postForm.dockerShellImageRemove);
              sourceParams.append('dockerStatus', self.postForm.dockerStatus);
              sourceParams.append('projectStatus', self.postForm.projectStatus);
              sourceParams.append('httpInnerAddress', self.postForm.httpInnerAddress);
              sourceParams.append('httpOutAddress', self.postForm.httpOutAddress);
              targetParams.append('id', id);
              /**
               * 转json
               */
              var sourceParamsJson = {};
              sourceParams.forEach((value, key) => sourceParamsJson[key] = value);
              var targetParamsJson = {};
              targetParams.forEach((value, key) => targetParamsJson[key] = value);

              self.$http.post(self.api.updateProjectByPrimaryKey, {
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
                              message: '修改成功，页面即将跳转至列表页',
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
                              message: '修改失败',
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
