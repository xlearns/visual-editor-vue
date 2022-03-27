import { defineComponent,computed,inject } from "vue";
import './editor.scss'
import EditorBlock from './editor-block'
export default defineComponent({
  props:{
    modelValue:{
      type:Object
    }
  },
  setup(props){
    const config = inject('config')
    const data = computed({
      get(){
        return props.modelValue
      }
    })
    const containerStyle = computed(()=>({
      width:data.value.container.width+'px',
      height:data.value.container.height+'px'
    }))

    return ()=><div className="editor">
        <div className="editor-left">
                {config.componentList.map(component=>(
                  <div className="editor-left-item">
                      <span>{component.label}</span>
                      <div>{component.preview()}</div>
                  </div>
                ))}
        </div>
        <div className="editor-top">top</div>
        <div className="editor-right">right</div>
        <div className="editor-container">
          <div className="editor-container-canvas">
             <div className="editor-container-canvas__content" style={containerStyle.value}>
               {
                 (data.value.blocks.map((item)=>(
                  <EditorBlock block={item}></EditorBlock>
                 )))
               }
             </div>
          </div>
        </div>

    </div>
  }
})