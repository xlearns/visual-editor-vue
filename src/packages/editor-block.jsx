import { defineComponent,computed, inject } from "vue";

export default defineComponent({
   props:{
    block:{
      type:Object
    }
   },
    setup(props){
     const config = inject('config')
    
      const blockStyles = computed(()=>(
       {
        top:`${props.block.top}px`,
        left:`${props.block.left}px`,
        zIndex:`${props.block.zIndex}`
       }
      ))
 
      return ()=>{
        const component = config.componentMap[props.block.key]
        const RenderCompoent = component.render()
        return <div style={blockStyles.value}>
          {RenderCompoent}
        </div>
      }
    }
})