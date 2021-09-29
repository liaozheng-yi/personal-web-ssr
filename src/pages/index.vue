<template>
  <div>home</div>
  <div>{{ store.state.message }}</div>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>
<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, h, resolveComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const createColumns = ({ sendMail }) => {
      return [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          // render(row) {
          //   const tags = row.tags.map(tagKey => {
          //     return h(
          //       resolveComponent('NTag'),
          //       {
          //         style: {
          //           marginRight: '6px',
          //         },
          //         type: 'info',
          //       },
          //       {
          //         default: () => tagKey,
          //       }
          //     )
          //   })
          //   return tags
          // },
        },
        {
          title: 'Action',
          key: 'actions',
          render(row) {
            return h(
              'button',
              {
                onClick: () => sendMail(row),
              },
              { default: () => 'Send Email' }
            )
          },
        },
      ]
    }

    const createData = () => [
      {
        key: 0,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: 1,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['wow'],
      },
      {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ]

    const message = useMessage()
    const store = useStore()
    return {
      store,
      data: createData(),
      columns: createColumns({
        sendMail(rowData) {
          message.info('send mail to ' + rowData.name)
        },
      }),
      pagination: {
        pageSize: 10,
      },
    }
  },
})
</script>

<style></style>
