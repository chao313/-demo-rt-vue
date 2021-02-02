<template>
    <div>
        <div v-loading="g_loading" style="margin-top:50px;width: calc(100% - 10px);height:calc(100vh - 140px);">
            <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-expand="onNodeExpand" :on-node-collapse="onNodeCollapse">
            </SeeksRelationGraph>
        </div>
        <el-button type="success" class="c-show-code-button">
            <el-link href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4ExpandGradually.vue" target="_blank" style="color: #ffffff;">查看代码
            </el-link>
        </el-button>
    </div>
</template>

<script>
    import SeeksRelationGraph from 'relation-graph'
    export default {
        name: 'SeeksRelationGraphDemo',
        components: {SeeksRelationGraph},
        data() {
            return {
                g_loading: true,
                demoname: '---',
                graphOptions: {
                    'backgrounImage': 'http://ai-mark.cn/images/ai-mark-desc.png',
                    'backgrounImageNoRepeat': true,
                    'layouts': [
                        {
                            'label': '中心',
                            'layoutName': 'tree',
                            'layoutClassName': 'seeks-layout-center',
                            'defaultJunctionPoint': 'border',
                            'defaultNodeShape': 0,
                            'defaultLineShape': 1,
                            'from': 'left',
                            'max_per_width': '300',
                            'min_per_height': '40'
                        }
                    ],
                    'defaultLineMarker': {
                        'markerWidth': 12,
                        'markerHeight': 12,
                        'refX': 6,
                        'refY': 6,
                        'data': 'M2,2 L10,6 L2,10 L6,6 L2,2'
                    },
                    "defaultExpandHolderPosition": "right",
                    'defaultNodeShape': 1,
                    'defaultNodeWidth': '100',
                    'defaultLineShape': 4,
                    'defaultJunctionPoint': 'lr',
                    'defaultNodeBorderWidth': 0,
                    'defaultLineColor': 'rgba(0, 186, 189, 1)',
                    'defaultNodeColor': 'rgba(0, 206, 209, 1)'
                }
            }
        },
        created() {
        },
        mounted() {
            this.demoname = this.$route.params.demoname
            this.setGraphData()
        },
        methods: {
            setGraphData() {
                let self = this;
                self.$http.get(self.api.getGraphTrack, {},
                    function (response) {
                        if (response.code == 0) {
                            // 使用要点：通过节点属性expandHolderPosition: 'right' 和 expanded: false 可以让节点在没有子节点的情况下展示一个"展开"按钮
                            //         通过onNodeExpand事件监听节点，在被展开的时候有选择的去从后台获取数据，如果已经从后台加载过数据，则让当前图谱根据当前的节点重新布局
                            var __graph_json_data = JSON.parse(JSON.stringify(response.content)) ;
                            self.g_loading = false
                            self.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
                                // 这些写上当图谱初始化完成后需要执行的代码
                                // 获取根节点的子节点，即可获得图谱第一层中的节点
                                var level_1_nodes = seeksRGGraph.getNodeById(__graph_json_data.rootId).lot.childs
                                level_1_nodes.forEach(thisLevel1Node => {
                                    this.applyCollapseStyle2Node(thisLevel1Node)
                                })
                                self.$refs.seeksRelationGraph.refresh()
                            })
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
            applyCollapseStyle2Node(_node) { // _node的子节点将被隐藏，同时让_node右侧显示一个加号，点击后可以展开子节点
                if (_node.lot.childs.length > 0) {
                    _node.lot.childs.forEach(thisChildNode => {
                        thisChildNode.isShow = false
                        this.applyCollapseStyle2Node(thisChildNode)
                    })
                    _node.expanded = false
                    _node.expandHolderPosition = 'right'
                }
            },
            onNodeCollapse(node, e) {
                console.log('onNodeCollapse:', node)
                // 当有一些节点被显示或隐藏起来时，会让图谱看着很难看，需要布局器重新为节点分配位置，所以这里需要调用refresh方法来重新布局
                this.$refs.seeksRelationGraph.refresh()
            },
            onNodeExpand(node, e) {
                // 当有一些节点被显示或隐藏起来时，会让图谱看着很难看，需要布局器重新为节点分配位置，所以这里需要调用refresh方法来重新布局
                console.log('onNodeExpand:', node)
                this.$refs.seeksRelationGraph.refresh()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>