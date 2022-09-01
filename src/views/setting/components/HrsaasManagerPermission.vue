<template>
  <el-dialog
    title="分配权限"
    :visible="givePreVisible"
    :before-close="handleClose"
  >
    <!--el-tree及复选框树的使用
    :data="permData" tree节点的默认数据permData：[{label:'name',children:[..]}]
    :default-expand-all="true"默认展开
    :props= {label:'name',children:'xxx'}根据后端属性名更改默认字段

    show-checkbox 展示复选框
    :check-strictly="true"  复选框父子不联动
    node-key="id"           根据id来确定是否勾选框
    //默认勾选的框由selectCheck数组来决定，更改完后通过this.$refs.permTree.getCheckedKeys()获得更改后的数组
    :default-checked-keys="selectCheck"

     如果需要通过 key 来获取或设置，则必须设置node-key。 -->
    <el-tree
      ref="permTree"
      v-loading="loading"
      :data="permData"
      :props="defaultProps"
      :default-expand-all="true"
      show-checkbox
      :check-strictly="true"
      :default-checked-keys="selectCheck"
      node-key="id"
    />
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="assignPerm">确定</el-button>
        <el-button size="small" @click="handleClose">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getRoleDetail, assignPerm, getPermissionList } from '@/api'
import { tranListToTreeData } from '@/utils'
export default {
  name: 'HrsaasManagerPermission',

  props: {
    givePreVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectCheck: [],
      permData: [
        // {
        //   code: 'employees',
        //   description: '用户管理菜单',
        //   enVisible: '1',
        //   id: '604f7df5f900be1850edb152',
        //   name: '员工管理',
        //   pid: '0',
        //   type: 1,
        //   children: [
        //     {
        //       code: '214234',
        //       description: '412214',
        //       enVisible: '0',
        //       id: '62f0d56637ecc10a881557f5',
        //       name: '智商250',
        //       pid: '604f7df5f900be1850edb152',
        //       type: 2
        //     }
        //   ]
        // }
      ],
      defaultProps: {
        label: 'name'
      },
      loading: false
    }
  },
  methods: {
    handleClose() {
      this.selectCheck = []
      this.$emit('update:givePreVisible', false)
    },
    // 获取所有权限
    async getPermissionList() {
      try {
        this.loading = true
        const res = await getPermissionList()
        this.permData = tranListToTreeData(res, '0')
        const { permIds } = await getRoleDetail(this.$attrs['user-id'])
        this.selectCheck = permIds
      } catch (e) { console.dir(e) } finally {
        this.loading = false
      }
    },
    // 分配权限
    async assignPerm() {
      try {
        this.loading = true
        await assignPerm({ permIds: this.$refs.permTree.getCheckedKeys(), id: this.$attrs['user-id'] })
        this.$message.success('权限分配成功')
        this.handleClose()
      } catch (e) { console.dir(e) } finally {
        this.loading = false
      }
    }
  }
}
</script>
