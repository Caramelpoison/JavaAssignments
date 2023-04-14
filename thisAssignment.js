let photoSlideShow = {
    photoList : ["pic1", "pic2", "pic3", "pic4", "pic5"],
    currentPhotoIndex:  4,

    nextPhoto: function(){
        if (this.currentPhotoIndex < (this.photoList.length - 1))
             {
                console.log(this.photoList[this.currentPhotoIndex + 1])
            }
        else 
        {
            console.log("End of slideshow")
        }
    },

    prevPhoto: function(){
        if(this.currentPhotoIndex > this.photoList.length - this.photoList.length)
        {
            console.log(this.photoList[this.currentPhotoIndex - 1])
        }
        else
        {       
            ("Beginning of slideshow")
        }
    },

    getCurrentPhoto: function(){
        console.log(this.photoList[this.currentPhotoIndex])
    }
}


//Shows how many pictures are in the array
console.log(photoSlideShow.photoList.length)

photoSlideShow.nextPhoto()
photoSlideShow.prevPhoto()
photoSlideShow.getCurrentPhoto()
