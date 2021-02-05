/* 设置后台项目名称 */
const BASE_URL = '/demo_rt';
export default {

    /** Session操作 */
    "login": BASE_URL + '/SessionController/login',
    "adminLogin": BASE_URL + '/SessionController/admin/login',
    /* 登出 */
    "loginOut": BASE_URL + '/SessionController/loginOut',
    /* 获取用户的id */
    "getUserId": BASE_URL + '/SessionController/getUserId',
    /* 获取用户的Name */
    "getUserName": BASE_URL + '/SessionController/getUserName',


    /*后台的URL*/
    /** 资源管理 */

    "addResourceFile": BASE_URL + '/ResourceController/addFile',
    "existResourceFileByName": BASE_URL + '/ResourceController/existFileByName',
    "deleteResourceFileByName": BASE_URL + '/ResourceController/deleteFileByName',
    "getResourceFiles": BASE_URL + '/ResourceController/getFiles',
    "getResourceFileDetails": BASE_URL + '/ResourceController/getFileDetails',
    "getResourceFileDetailByFileName": BASE_URL + '/ResourceController/getFileDetailByFileName',
    "downloadByResourceFileName": BASE_URL + '/ResourceController/downloadByFileName',
    "preByResourceFileName": BASE_URL + '/ResourceController/preByFileName',


    /* Project */
    /* 根据主键更新Project */
    "updateProjectByPrimaryKey": BASE_URL + '/ProjectController/updateByPrimaryKey',
    /* 单条插入Project */
    "insertProject": BASE_URL + '/ProjectController/insert',
    /* 根据主键删除Project */
    "deleteProjectByPrimaryKey": BASE_URL + '/ProjectController/deleteByPrimaryKey',
    /* 分页查询Project */
    "queryBasePageHelperProject": BASE_URL + '/ProjectController/queryBasePageHelper',
    /* 根据主键查询Project */
    "queryProjectByPrimaryKey": BASE_URL + '/ProjectController/queryByPrimaryKey',
    /* 多条件查询Project */
    "queryBaseProject": BASE_URL + '/ProjectController/queryBase',
    /* 批量插入Project */
    "insertsProject": BASE_URL + '/ProjectController/inserts',
    /* 多条件更新Project */
    "updateBaseProject": BASE_URL + '/ProjectController/updateBase',


    /* 执行shell命令 */
    "runDockerShell": BASE_URL + '/DockerShellController/runDockerShell',
    /* 执行多个命令 */
    "runDockerShells": BASE_URL + '/DockerShellController/runDockerShells',
    "getDataFromContainer": BASE_URL + '/DockerShellController/getDataFromContainer',
    "getOuterPortainerUrl": BASE_URL + '/StartConfig/getOuterPortainerUrl',
    "getInnerPortainerUrl": BASE_URL + '/StartConfig/getInnerPortainerUrl',

    /*构建docker镜像*/
    "buildToDocker": BASE_URL + '/ASPToDockerController/buildToDocker',
    /*下载zip*/
    "downloadZip": BASE_URL + '/ASPToDockerController/downloadZip',
    /*下载introduce*/
    "downIntroduce": BASE_URL + '/ASPToDockerController/downIntroduce',
    /*预览指定文件的文件*/
    "preByFileNameUrl": BASE_URL + '/ASPToDockerController/preByFileName',
    /*生成DockerProZip*/
    "generateImageProZip": BASE_URL + '/ASPToDockerController/generateImageProZip',
    /*生成DockerProZip*/
    "buildToDockerPro": BASE_URL + '/ASPToDockerController/buildToDockerPro',

    /* ProjectPlus */
    /* 根据主键更新ProjectPlus */
    "updateProjectPlusByPrimaryKey": BASE_URL + '/ProjectPlusController/updateByPrimaryKey',
    /* 单条插入ProjectPlus */
    "insertProjectPlus": BASE_URL + '/ProjectPlusController/insert',
    /* 根据主键删除ProjectPlus */
    "deleteProjectPlusByPrimaryKey": BASE_URL + '/ProjectPlusController/deleteByPrimaryKey',
    /* 分页查询ProjectPlus */
    "queryBasePageHelperProjectPlus": BASE_URL + '/ProjectPlusController/queryBasePageHelper',
    /* 根据主键查询ProjectPlus */
    "queryProjectPlusByPrimaryKey": BASE_URL + '/ProjectPlusController/queryByPrimaryKey',
    /* 多条件查询ProjectPlus */
    "queryBaseProjectPlus": BASE_URL + '/ProjectPlusController/queryBase',
    /* 批量插入ProjectPlus */
    "insertsProjectPlus": BASE_URL + '/ProjectPlusController/inserts',
    /* 多条件更新ProjectPlus */
    "updateBaseProjectPlus": BASE_URL + '/ProjectPlusController/updateBase',

    /* 获取demo */
    "getGraphDemo": BASE_URL + '/GraphController/getGraphDemo',

    /* 获取追踪 */
    "getGraphTrack": BASE_URL + '/GraphController/getGraphTrack',

    /* 获取追踪 */
    "getGraphTrackByMethod": BASE_URL + '/GraphController/getGraphTrackByMethod',

    /* 获取追踪 */
    "getGraphTrackDefaultController": BASE_URL + '/GraphController/getGraphTrackDefaultController',

    /* 获取追踪 */
    "getGraphCategoryTree": BASE_URL + '/GraphController/getGraphCategoryTree',

    /* 获取追踪 */
    "getGraphFromData": BASE_URL + '/GraphController/getGraphFromData'


}
