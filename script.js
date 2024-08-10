
// blogs-category-button
function checkOption() {
      const items = document.getElementById("Items")
      const Up = document.getElementById("up")
      const Down = document.getElementById("down")


             items.classList.add("items-style-js")
             items.classList.remove("demo")
             Up.style.display = "flex"
             Down.style.display = "none"
    
}
function checkUp() {

      const items = document.getElementById("Items")
      const Up = document.getElementById("up")
      const Down = document.getElementById("down")


             items.classList.remove("items-style-js")
             items.classList.add("demo")
             Up.style.display = "none"
             Down.style.display = "flex"
    
}

function checkOptionTwo() {
      const items = document.getElementById("ItemsTwo")
      const Up = document.getElementById("today-up")
      const Down = document.getElementById("today-down")


             items.classList.add("items-style-js")
             items.classList.remove("today-demo")
             Up.style.display = "flex"
             Down.style.display = "none"
    
}
function checkUpTwo() {

      const items = document.getElementById("ItemsTwo")
      const Up = document.getElementById("today-up")
      const Down = document.getElementById("today-down")


             items.classList.remove("items-style-js")
             items.classList.add("today-demo")
             Up.style.display = "none"
             Down.style.display = "flex"
    
}
function checkOptionThree() {
      const items = document.getElementById("ItemsThree")
      const Up = document.getElementById("popular-up")
      const Down = document.getElementById("popular-down")


             items.classList.add("items-style-js")
             items.classList.remove("popular-demo")
             Up.style.display = "flex"
             Down.style.display = "none"
    
}
function checkUpThree() {

      const items = document.getElementById("ItemsThree")
      const Up = document.getElementById("popular-up")
      const Down = document.getElementById("popular-down")


             items.classList.remove("items-style-js")
             items.classList.add("popular-demo")
             Up.style.display = "none"
             Down.style.display = "flex"
    
}


// project cart--------



function checkAll() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn")
        const CurrentBtnValue = CurrentBtn.innerText
       


        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href




}

function checkAll2() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv2")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText2")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser2")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn2")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href
  
             

}

function checkAll3() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv3")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText3")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser3")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn3")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}
function checkAll4() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv4")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText4")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser4")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn4")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}

function checkAll5() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv5")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText5")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser5")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn5")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}
function checkAll6() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv6")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText6")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser6")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn6")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}
function checkAll7() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv7")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText7")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser7")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn7")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}
function checkAll8() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv8")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText8")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser8")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn8")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}
function checkAll9() {
      window.location.href='#header'
      const PopCart = document.getElementById("PopCart")
      const CurrentDiv = document.getElementById("currentDiv9")
      const popTitle = document.getElementById("popTitle")
      const Title = document.getElementById("forText9")
      const Titletext = Title.children[3].innerText
      const Ratetext = Title.children[1]
       const RateNumber = Ratetext.children[1].innerHTML
      const Rate = document.getElementById("popRate")
        const PopRate = Rate.innerHTML
        const Popuser = document.getElementById("popUser")
            const PopUserValue = Popuser.innerHTML
        const CurrentUser = document.getElementById("CurrentUser9")
        const CurrentUserValue = CurrentUser.innerHTML 
        const PopTitleHead  = document.getElementById("popTitleHead") 
        const PopTitleHeadValue = PopTitleHead.innerText
        const PopButton = document.getElementById("popButton")
        const PopLeftBtn = PopButton.children[0]
        const CurrentBtn = document.getElementById("CurrentBtn9")
        const CurrentBtnValue = CurrentBtn.innerText



        const style = window.getComputedStyle(PopCart)    
        const style2 = window.getComputedStyle(CurrentDiv)
             
              PopCart.style.backgroundImage = style2.backgroundImage
              popTitle.innerText = Titletext
              Rate.innerHTML = RateNumber
              Popuser.innerHTML = CurrentUserValue
              PopTitleHead.innerText = Titletext
              PopLeftBtn.innerText = CurrentBtnValue
              PopLeftBtn.href = CurrentBtn.href

  
             

}

// blog------------


function checkBlog() {
      const PopBlog = document.getElementById("PopBlog")
            const PopImg = window.getComputedStyle(PopBlog)
            const PopImgValue = PopImg.backgroundImage

      const BlogCart = document.getElementById("BlogCart")
            const BlogCartChild = BlogCart.children[0].src
            const BlogCartImg = "url('" + BlogCartChild + "')"


      const PopTitle = document.getElementById("PopTitle")
           const PopTitleValue = PopTitle.innerText


          const CurrentTitle = BlogCart.children[1].innerText


            PopBlog.style.backgroundImage = BlogCartImg
            PopTitle.innerText = CurrentTitle
                
    
    
      
}
function checkBlog2() {
      const PopBlog = document.getElementById("PopBlog")
            const PopImg = window.getComputedStyle(PopBlog)
            const PopImgValue = PopImg.backgroundImage

      const BlogCart = document.getElementById("BlogCart2")
            const BlogCartChild = BlogCart.children[0].src
            const BlogCartImg = "url('" + BlogCartChild + "')"


      const PopTitle = document.getElementById("PopTitle")
           const PopTitleValue = PopTitle.innerText


          const CurrentTitle = BlogCart.children[1].innerText


            PopBlog.style.backgroundImage = BlogCartImg
            PopTitle.innerText = CurrentTitle
                   
}
function checkBlog3() {
      const PopBlog = document.getElementById("PopBlog")
            const PopImg = window.getComputedStyle(PopBlog)
            const PopImgValue = PopImg.backgroundImage

      const BlogCart = document.getElementById("BlogCart3")
            const BlogCartChild = BlogCart.children[0].src
            const BlogCartImg = "url('" + BlogCartChild + "')"


      const PopTitle = document.getElementById("PopTitle")
           const PopTitleValue = PopTitle.innerText


          const CurrentTitle = BlogCart.children[1].innerText


            PopBlog.style.backgroundImage = BlogCartImg
            PopTitle.innerText = CurrentTitle
                   
}
function checkBlog4() {
      const PopBlog = document.getElementById("PopBlog")
            const PopImg = window.getComputedStyle(PopBlog)
            const PopImgValue = PopImg.backgroundImage

      const BlogCart = document.getElementById("BlogCart4")
            const BlogCartChild = BlogCart.children[0].src
            const BlogCartImg = "url('" + BlogCartChild + "')"


      const PopTitle = document.getElementById("PopTitle")
           const PopTitleValue = PopTitle.innerText


          const CurrentTitle = BlogCart.children[1].innerText


            PopBlog.style.backgroundImage = BlogCartImg
            PopTitle.innerText = CurrentTitle
                   
}



// Script for Mobile Devices--------



function checkMobileMenu() {
      
            const MenuItem = document.getElementById("mobile-list-cart")
            const MenuItemIcon = document.getElementById("menu-bar")
                 MenuItem.style.display = "flex"
                 MenuItem.classList.add("js-class")
                 MenuItem.classList.remove("close-class")
                 MenuItemIcon.classList.add("menu-icon-tr")
                 MenuItemIcon.classList.remove("menu-icon-in")


   
}

function closeMobileMenu() {
        const MenuItem = document.getElementById("mobile-list-cart")
        const MenuItemIcon = document.getElementById("menu-bar")

               
           
                 MenuItem.classList.remove("js-class")
                 MenuItem.classList.add("close-class")
                 MenuItemIcon.classList.add("menu-icon-in")
                 MenuItemIcon.classList.remove("menu-icon-t")
                 

      
}

