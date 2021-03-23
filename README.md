# Ourdus Frontend
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
> [IDUS](https://www.idus.com/) 의 Clone Project입니다.  
> 본 페이지의 UI를 바탕으로 자체적인 프론트엔드 개발을 진행 하였습니다.

## 💻 User Interface

<img width="1667" alt="스크린샷 2021-03-19 오후 3 25 46" src="https://user-images.githubusercontent.com/49136186/111740106-823f7b80-88c7-11eb-9e46-8ed38912d281.png">


## 📋 기술 스택
- React  JS
- Styled Component 
- Webpack (..)


## 🗂 프로젝트 구조
```
src
 ┣ components
 ┃ ┣ css
 ┃ ┃ ┣ CartPage_W.css
 ┃ ┃ ┣ Class.css
 ┃ ┃ ┣ Footer.css
 ┃ ┃ ┣ Header.css
 ┃ ┃ ┣ Login.css
 ┃ ┃ ┣ LoginPage.css
 ┃ ┃ ┣ Pay_W.css
 ┃ ┃ ┣ Product.css
 ┃ ┃ ┣ SignForm.css
 ┃ ┃ ┣ SignUpPage.css
 ┃ ┃ ┣ SignUpStage.css
 ┃ ┃ ┣ Silder.css
 ┃ ┃ ┣ WorkDetailPage.css
 ┃ ┃ ┣ WorkPage.css
 ┃ ┃ ┗ personalInfo.css
 ┃ ┣ data
 ┃ ┃ ┣ AddressData.js
 ┃ ┃ ┣ CartData.js
 ┃ ┃ ┣ ClassData.js
 ┃ ┃ ┣ MyinfoData.js
 ┃ ┃ ┣ WorkData.js
 ┃ ┃ ┣ WorkDetailData.js
 ┃ ┃ ┣ categoryData.js
 ┃ ┃ ┗ classcategoryData.js
 ┃ ┣ views
 ┃ ┃ ┣ CartPage
 ┃ ┃ ┃ ┣ CartPage_W.js
 ┃ ┃ ┃ ┣ DirectPay_W.js
 ┃ ┃ ┃ ┗ Payment_W.js
 ┃ ┃ ┣ ClassPage
 ┃ ┃ ┃ ┣ Classcategory
 ┃ ┃ ┃ ┃ ┣ Classart.js
 ┃ ┃ ┃ ┃ ┣ Classbeauty.js
 ┃ ┃ ┃ ┃ ┣ Classcooking.js
 ┃ ┃ ┃ ┃ ┣ Classcraft.js
 ┃ ┃ ┃ ┃ ┣ Classexperienceandothers.js
 ┃ ┃ ┃ ┃ ┗ Classflower.js
 ┃ ┃ ┃ ┣ Classlocal
 ┃ ┃ ┃ ┃ ┣ Classlocalbusan.js
 ┃ ┃ ┃ ┃ ┣ Classlocalchoongnam.js
 ┃ ┃ ┃ ┃ ┣ Classlocaldaegu.js
 ┃ ┃ ┃ ┃ ┣ Classlocaldaejun.js
 ┃ ┃ ┃ ┃ ┣ Classlocalgwangju.js
 ┃ ┃ ┃ ┃ ┣ Classlocalgwangwon.js
 ┃ ┃ ┃ ┃ ┣ Classlocalgyeongbook.js
 ┃ ┃ ┃ ┃ ┣ Classlocalincheon.js
 ┃ ┃ ┃ ┃ ┣ Classlocalkyunggi.js
 ┃ ┃ ┃ ┃ ┣ Classlocalsejong.js
 ┃ ┃ ┃ ┃ ┣ Classlocalseoul.js
 ┃ ┃ ┃ ┃ ┗ Classlocalulsan.js
 ┃ ┃ ┃ ┣ ClassCategory.js
 ┃ ┃ ┃ ┣ ClassDetailPage.js
 ┃ ┃ ┃ ┣ ClassOffMain.js
 ┃ ┃ ┃ ┣ ClassOnMain.js
 ┃ ┃ ┃ ┣ ClassSlider.js
 ┃ ┃ ┃ ┣ Classlocal.js
 ┃ ┃ ┃ ┣ KakaoMap.js
 ┃ ┃ ┃ ┣ Map.js
 ┃ ┃ ┃ ┗ PopularClass.js
 ┃ ┃ ┣ IdusPage
 ┃ ┃ ┃ ┗ IdusPage.js
 ┃ ┃ ┣ ImgSlider
 ┃ ┃ ┃ ┣ Silder.js
 ┃ ┃ ┃ ┗ Slide.js
 ┃ ┃ ┣ LoginPage
 ┃ ┃ ┃ ┣  AuthenticationService.js
 ┃ ┃ ┃ ┣ AddAddress.js
 ┃ ┃ ┃ ┣ AuthenticationService.js
 ┃ ┃ ┃ ┣ DeliveryAdd.js
 ┃ ┃ ┃ ┣ ExpireID.js
 ┃ ┃ ┃ ┣ LoginInput.js
 ┃ ┃ ┃ ┣ LoginPage.js
 ┃ ┃ ┃ ┣ Personal.js
 ┃ ┃ ┃ ┣ PersonalInfo.js
 ┃ ┃ ┃ ┣ SearchID.js
 ┃ ┃ ┃ ┣ SearchPassword.js
 ┃ ┃ ┃ ┣ ShowAddress.js
 ┃ ┃ ┃ ┣ SignUpPage.js
 ┃ ┃ ┃ ┣ SignupForm.js
 ┃ ┃ ┃ ┗ TokenConfig.js
 ┃ ┃ ┣ MyPage
 ┃ ┃ ┃ ┗ MyPage.js
 ┃ ┃ ┣ Myinfo
 ┃ ┃ ┃ ┣ Detailedorderlist.js
 ┃ ┃ ┃ ┣ Detailedorderlist2.js
 ┃ ┃ ┃ ┣ Myinfo.js
 ┃ ┃ ┃ ┣ Myorderlist.js
 ┃ ┃ ┃ ┣ Orderlist.js
 ┃ ┃ ┃ ┣ Orderlistoffline.js
 ┃ ┃ ┃ ┗ Orderlistonline.js
 ┃ ┃ ┣ Notice
 ┃ ┃ ┃ ┣ Notice.js
 ┃ ┃ ┃ ┣ Notice_id1.js
 ┃ ┃ ┃ ┣ Notice_id10.js
 ┃ ┃ ┃ ┣ Notice_id11.js
 ┃ ┃ ┃ ┣ Notice_id12.js
 ┃ ┃ ┃ ┣ Notice_id13.js
 ┃ ┃ ┃ ┣ Notice_id14.js
 ┃ ┃ ┃ ┣ Notice_id15.js
 ┃ ┃ ┃ ┣ Notice_id16.js
 ┃ ┃ ┃ ┣ Notice_id17.js
 ┃ ┃ ┃ ┣ Notice_id18.js
 ┃ ┃ ┃ ┣ Notice_id19.js
 ┃ ┃ ┃ ┣ Notice_id2.js
 ┃ ┃ ┃ ┣ Notice_id20.js
 ┃ ┃ ┃ ┣ Notice_id3.js
 ┃ ┃ ┃ ┣ Notice_id4.js
 ┃ ┃ ┃ ┣ Notice_id5.js
 ┃ ┃ ┃ ┣ Notice_id6.js
 ┃ ┃ ┃ ┣ Notice_id7.js
 ┃ ┃ ┃ ┣ Notice_id8.js
 ┃ ┃ ┃ ┗ Notice_id9.js
 ┃ ┃ ┣ Section
 ┃ ┃ ┃ ┣ Class
 ┃ ┃ ┃ ┃ ┣ Class.js
 ┃ ┃ ┃ ┃ ┣ ClassEnroll.js
 ┃ ┃ ┃ ┃ ┣ ClassHot.js
 ┃ ┃ ┃ ┃ ┣ ClassOff.js
 ┃ ┃ ┃ ┃ ┗ ClassOpen.js
 ┃ ┃ ┃ ┣ Footer
 ┃ ┃ ┃ ┃ ┗ Footer.js
 ┃ ┃ ┃ ┣ Header
 ┃ ┃ ┃ ┃ ┣ Header.js
 ┃ ┃ ┃ ┃ ┣ Header_class.js
 ┃ ┃ ┃ ┃ ┣ LoginHeader_class.js
 ┃ ┃ ┃ ┃ ┗ LoginHeader_work.js
 ┃ ┃ ┃ ┣ Login
 ┃ ┃ ┃ ┃ ┗ AddressForm.js
 ┃ ┃ ┃ ┗ Product
 ┃ ┃ ┃ ┃ ┣ Category.js
 ┃ ┃ ┃ ┃ ┣ Class.js
 ┃ ┃ ┃ ┃ ┣ MyinfoProduct.js
 ┃ ┃ ┃ ┃ ┗ Product.js
 ┃ ┃ ┣ Sidebar
 ┃ ┃ ┃ ┗ SidebarCompo.js
 ┃ ┃ ┣ WorkPage
 ┃ ┃ ┃ ┣ WorkCateDetail
 ┃ ┃ ┃ ┃ ┣ HitCategoryPage.js
 ┃ ┃ ┃ ┃ ┣ PriceCategoryPage.js
 ┃ ┃ ┃ ┃ ┣ PurchCategoryPage.js
 ┃ ┃ ┃ ┃ ┗ RateCategoryPage.js
 ┃ ┃ ┃ ┣ WorkMainCategory
 ┃ ┃ ┃ ┃ ┣ Hit.js
 ┃ ┃ ┃ ┃ ┣ MainCategory.js
 ┃ ┃ ┃ ┃ ┣ MainRate.js
 ┃ ┃ ┃ ┃ ┣ Price.js
 ┃ ┃ ┃ ┃ ┗ Purchase.js
 ┃ ┃ ┃ ┣ WorkCategoryPage.js
 ┃ ┃ ┃ ┣ WorkDetailPage.js
 ┃ ┃ ┃ ┗ WorkPage.js
 ┃ ┃ ┗ .DS_Store
 ┃ ┗ .DS_Store
 ┣ stories
 ┃ ┣ assets
 ┃ ┃ ┣ code-brackets.svg
 ┃ ┃ ┣ colors.svg
 ┃ ┃ ┣ comments.svg
 ┃ ┃ ┣ direction.svg
 ┃ ┃ ┣ flow.svg
 ┃ ┃ ┣ plugin.svg
 ┃ ┃ ┣ repo.svg
 ┃ ┃ ┗ stackalt.svg
 ┃ ┣ Button.js
 ┃ ┣ Button.stories.js
 ┃ ┣ Header.js
 ┃ ┣ Header.stories.js
 ┃ ┣ Introduction.stories.mdx
 ┃ ┣ Page.js
 ┃ ┣ Page.stories.js
 ┃ ┣ button.css
 ┃ ┣ header.css
 ┃ ┗ page.css
 ┣ .DS_Store
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

## ✏️ 프로젝트 사용 방법


1. cloning
```
git clone https://github.com/Ourdus/OURDUS_FE.git
```

2. install

- 2-1 yarn 최신 업데이트
   ```
   yarn install
  ```

3. Execute 

```
 yarn start
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kimbangg.tistory.com/"><img src="https://avatars.githubusercontent.com/u/49136186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kimbangg</b></sub></a><br /><a href="https://github.com/Ourdus/OURDUS_FE/commits?author=Kimbangg" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dkeka0127"><img src="https://avatars.githubusercontent.com/u/39721950?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dkeka0127</b></sub></a><br /><a href="https://github.com/Ourdus/OURDUS_FE/commits?author=dkeka0127" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/carpediemstarshark"><img src="https://avatars.githubusercontent.com/u/57650630?v=4?s=100" width="100px;" alt=""/><br /><sub><b>carpediemstarshark</b></sub></a><br /><a href="https://github.com/Ourdus/OURDUS_FE/commits?author=carpediemstarshark" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
