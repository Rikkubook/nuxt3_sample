const showModal = ref(false)
const showConfirmModal = ref(false)

const modalText = ref('請填入文字')
let callbackFn = null

export const useOpenModal = (title) =>{
  modalText.value = title
  showModal.value = true
}

export const useCancelModal = () =>{ 
  showModal.value = false
}

export const useOpenConfirmModal = (title, callback) =>{
  modalText.value = title
  showConfirmModal.value = true
  callbackFn = callback
}

export const useConfirmModal = () =>{
  showConfirmModal.value = false
  if (typeof callbackFn === 'function') {
    callbackFn();
  }
}

export const useCancelConfirmModal = () =>{ 
  showConfirmModal.value = false
}

export const  useModelData = () =>{
  return {
    showModal, showConfirmModal, modalText
  }
}