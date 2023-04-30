import { Popup } from "./components/Popup.js";
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { ImageBtn } from "./components/ImageBtn.js";
const popupZakaz=document.querySelector('.form_profile_name')
const btnOpenZakaz=document.querySelector('.header__button')
const btnOpenVolume=document.querySelector('.volume__zakaz')
const btnOpenPropan=document.querySelector('.cost__button_type_propan')
const btnOpenButan=document.querySelector('.cost__button_type_butan')
const formsConfig={
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }
const btnList=['.volume__button_type_small','.volume__button_type_middle','.volume__button_type_standard','.volume__button_type_wholesale']
const objImg={'.volume__button_type_small':'./images/volume__small.png',
'.volume__button_type_middle':'./images/volume__middle.png', 
'.volume__button_type_standard':'./images/volume__standard.png', 
'.volume__button_type_wholesale':'./images/volume__max.png'}
const validZakaz= new FormValidator(formsConfig, popupZakaz);
const formZakaz = new PopupWithForm(".popup_type_profile",{});
const btnSmallGryz=new ImageBtn('.volume__button_type_small',objImg,btnList)
const btnMiddleGryz=new ImageBtn('.volume__button_type_middle',objImg,btnList)
const btnStandardGryz=new ImageBtn('.volume__button_type_standard',objImg,btnList)
const btnSMaxGryz=new ImageBtn('.volume__button_type_wholesale',objImg,btnList)
const volumeZakaz=new PopupWithForm('.popup_type_volume-zakaz',{})
const gazForm=new PopupWithForm('.popup_type_gaz-zakaz',{})

btnOpenZakaz.addEventListener('click',()=>{
    formZakaz.open()
})

btnOpenVolume.addEventListener('click',()=>{
    volumeZakaz.open()
})
btnOpenPropan.addEventListener('click',()=>{
    gazForm.open()
})
btnOpenButan.addEventListener('click',()=>{
    gazForm.open()
})
formZakaz.setEventListeners()
validZakaz.enableValidation()
btnSmallGryz.setEventListeners()
btnMiddleGryz.setEventListeners()
btnStandardGryz.setEventListeners()
btnSMaxGryz.setEventListeners()
volumeZakaz.setEventListeners()
gazForm.setEventListeners()