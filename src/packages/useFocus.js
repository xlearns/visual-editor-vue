import {computed} from 'vue'

export default function useFocus (data,callback) {
    const clearBlockfocus = () => {
        data.value.blocks.forEach(block => block.focus = false)
    }
    const blockMousedown = (e, block) => {
        e.preventDefault()
        e.stopPropagation()
        if(e.shiftKey){
            if(focusData.value.focus.length <= 1){
                block.focus = true
            }else {
                block.focus = !block.focus
            }
        }else{
            if(!block.focus){
                clearBlockfocus()
                block.focus = true
            }else{
                block.focus = false
            }
        }
        callback && callback(e)
    }
    const focusData = computed(() => {
        let focus = []
        let unfocused = []
        data.value.blocks.forEach(block => (block.focus ? focus : unfocused).push(block))
        return {
            focus,
            unfocused
        }
    })
    const containerMousedown = () => {
        clearBlockfocus()
    }
    return {
        blockMousedown,
        containerMousedown,
        focusData
    }
}