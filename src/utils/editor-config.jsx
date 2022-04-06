// 表格
import TablePreview from '../component/Table/preview.vue'
import TableRender from '../component/Table/render.vue'
// 轮播图
import CarouselPreview from '../component/Carousel/preview.vue'
import CarouselRender from '../component/Carousel/render.vue'

//柱形图
import BarEchartslPreview from '../component/BarEcharts/preview.vue'
import BarEchartselRender from '../component/BarEcharts/render.vue'

function createEditorConfig () {
    let componentList = []
    let componentMap = {}

    return {
        componentList,
        componentMap,
        register:(component) => {
            componentList.push(component)
            componentMap[component.key] = component
        }
    }
}
export let registerConfig = createEditorConfig()

registerConfig.register({
    label: '文本',
    preview: () => '预览文本',
    render: () => '渲染文本',
    key: 'text'
})

registerConfig.register({
    label: '按钮',
    preview: () => <el-button type="primary">预览按钮</el-button>,
    render: () => <el-button type="primary">渲染按钮</el-button>,
    key: 'button'
})

registerConfig.register({
    label: '输入框',
    preview: () => <el-input placeholder="预览输入框"></el-input>,
    render: () => <el-input placeholder="渲染输入框"></el-input>,
    key: 'input'
})

// table
registerConfig.register({
    label: '表格',
    preview: () =><TablePreview />,
    render: () => <TableRender />,
    key: 'table'
})


//

registerConfig.register({
    label: '轮播图',
    preview: () =><CarouselPreview />,
    render: () => <CarouselRender />,
    key: 'carousel'
})
// BarEcharts
registerConfig.register({
    label: '柱形图',
    preview: () =><BarEchartslPreview />,
    render: () => <BarEchartselRender />,
    key: 'barEcharts'
})
