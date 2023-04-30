export class ImageBtn{
    constructor(btnSelector,objImg,btnList){
        this._btnSelector=btnSelector
        this._btnElement=document.querySelector(btnSelector)
        this._objImg=objImg
        this._image=document.querySelector('.volume__img')
        this._btnList=btnList
    }
    _colorBtn(){
        this._btnElement.classList.add("volume__button_active");
        for (var i in this._btnList){
            var btnElement=document.querySelector(this._btnList[i])
            if (this._btnElement!==btnElement){
                btnElement.classList.remove('volume__button_active')
            }
        }
    }
    _sectionImage(){
        for (var key in this._objImg){
            if (key===this._btnSelector){
                console.log(this._objImg.key)
                this._image.src=this._objImg[key]
            }
        }
    }
    setEventListeners(){
        this._btnElement.addEventListener('click',()=>{
            this._colorBtn()
            this._sectionImage()
        })
    }
} 