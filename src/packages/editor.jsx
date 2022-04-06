import { computed, defineComponent, inject, ref } from "vue";
import './editor.scss'
import EditorBlock from './editor-block.jsx'
import EditorRight from './editor-right.vue'
import deepcopy from "deepcopy";
import useDrag from './useMenuDragger.js'
import useFocus from "./useFocus";
import useBlockDragger from "./useBlockDragger";

export default defineComponent({
    props:{
        modelValue:{ type: Object }
    },
    components:{
        EditorBlock
    },
    emits:['update:modelValue'],
    setup(props,ctx){
        const data = computed({
            get(){
                return props.modelValue
            },
            set(newVal){
                ctx.emit('update:modelValue', deepcopy(newVal))
            }
        })
        const rightData = ref('test')
        const containerStyles = computed(() => ({
            width:data.value.container.width + 'px',
            height:data.value.container.height + 'px'
        }))
        const config = inject('config')
        const containerRef = ref(null)
        let {dragstart,dragend} = useDrag(containerRef,data)
        // let dragendFn = function(e, component){
        //     console.log(1)
        //     rightData.value = component
        //     dragend(e)
        // }
        let {containerMousedown,blockMousedown,focusData} = useFocus(data, (e) => {
            mousedown(e)
        })
        let {mousedown} = useBlockDragger(focusData)

        const blockMouseDoubledown = function(e,block){
            rightData.value = block
        }
        
        return () => <div class="editor">
            <div className="editor-left">
                {
                    config.componentList.map(component => (
                        <div className="editor-left-item" 
                        draggable 
                        onDragstart={e => dragstart(e, component)}
                        onDragnd={e => dragend(e,component)}>
                            <span class="label">{component.label}</span>
                            <span>{component.preview()}</span>
                        </div>
                    ))
                }
            </div>
            <div className="editor-top">顶部功能栏</div>
            <div className="editor-right"> <EditorRight data={rightData.value}></EditorRight></div>
            <div className="editor-container">
                <div className="editor-container-canvas">
                    <div className="editor-container-canvas_content" onMousedown={containerMousedown} style={containerStyles.value} ref={containerRef}>
                        {
                            data.value.blocks.map(block => (
                                <editor-block
                                class={block.focus ? 'editor-block-focus' : ''}
                                block={block}
                                ondblclick={e=>blockMouseDoubledown(e,block)}
                                onMousedown={e => blockMousedown(e,block)}></editor-block>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    }
})