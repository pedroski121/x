[33mcommit b6975a4d2554e5eb65884da91eeef6f7a2f3b47d[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jul 10 22:01:52 2023 +0100

    refactored some parts of the code and removed the error occuring at build time

[33mcommit e4c7e5e8061546dbe431babf0c952d02a516eff5[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jul 10 00:40:31 2023 +0100

    added a usercount in the home admin page, added pagination for the admin users page, also began work on the add to products form with cloudinary intergration for image upload

[33mcommit a7875b19044d365b03c1121cad0b3b94c84109f6[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Jul 4 22:57:51 2023 +0100

    finished the admin users page with pagination and a table to display all the users

[33mcommit 03549710d201cb909ee00f63bd79daa4381f3f2f[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Jun 27 22:25:25 2023 +0100

    finished up with the UI for the admin summary page

[33mcommit e848afaba6e8ad2619ae21a133653056779ccbab[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Jun 27 21:07:07 2023 +0100

    added an offcanvas(sidebar) for the admin page and added some pages for the admin - summary, products, stock, etc. All of which can be naviagated through the offcanvas

[33mcommit ff762973d19b8b2d8ba8e97bbacec03a19928ac4[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Thu Jun 22 01:04:32 2023 +0100

    added some more state management to the bag page. Also did some little code refactoring

[33mcommit 410d24acd77c21d0eb6f5b325d6145ef663950dd[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jun 21 23:38:35 2023 +0100

    added a page for the BAG to indicate when the bag is empty

[33mcommit daf7f7ec9d6b2aaca9b211f1b8147f0355c63adc[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jun 21 03:05:16 2023 +0100

    refactored code on the subCategoryCard and the productDetails leftside add to bag button using a custom hook useCardState

[33mcommit c92411cd0629bded69a51100ada8d3ed275056d6[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Jun 20 23:40:03 2023 +0100

    changed the design of some pages and added the add to bag functionality to the product details page

[33mcommit ae60b7f17ae43939d2b3dcc1ad44e8b5ab833933[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jun 14 18:38:55 2023 +0100

    made some corrections on the codebase to ensure build runs smoothly

[33mcommit dbbbbde6cb97a4662a0aad30cf986c07bacedd09[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jun 14 18:32:21 2023 +0100

    modified the homepage category section to show available subcategories for each category

[33mcommit b2a32ee5fc0edd4c88bcdbf2f485c4dce79b6d25[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jun 12 15:48:36 2023 +0100

    changed the alignment of the rows on the homepage a bit

[33mcommit f9968facdefd42cabc9fcbeb11ded09ff3a64801[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jun 12 15:00:56 2023 +0100

    continued the redesign of the homepage. Added a dynamic row for different product categories

[33mcommit bb52bc044371e3d7c66076743f45ea81ebac2ac8[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Fri Jun 9 00:02:43 2023 +0100

    scraped the old homepage design again. Added a carousal at the top of the homepage.

[33mcommit 2fe77ce83f13e0647c6d5da4832ff5cfaab032b8[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Jun 6 23:36:14 2023 +0100

    added more styling to the home page and redesigned the sub-category card a llittle bit

[33mcommit d9cdce61ee38624336b96314b7024b2e983fc01a[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jun 5 23:13:30 2023 +0100

    began the redesigning of the homepage

[33mcommit afe8a74394e3501e73b37f5e4b8ef4d443344b85[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jun 5 14:49:42 2023 +0100

    re-factored code due to some errors occuring in prod

[33mcommit 62e2d06143e11af609bc43c090dd732641c96027[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Jun 5 14:08:29 2023 +0100

    worked on the BAG feature. Enabling the user to add or remove items from the Bag. Also, utilized localStorage so as the items stored in the bag could persist even after the page reloads

[33mcommit 19edb40af4aab34c1da0f3a76fc8bdcd6c5931e0[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue May 30 13:51:04 2023 +0100

    made some slight changes to the Bag UI

[33mcommit 6bc3464d74ebf4f69278cc1a2af6b8695d9d904d[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue May 30 13:33:54 2023 +0100

    finished the UI for the Bag page

[33mcommit 630207ccd9425012e710b4aaccf2624afd048456[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat May 27 23:34:43 2023 +0100

    refactored the product page to reduce the excessive prop drilling

[33mcommit 90474697bf73ee9d93284b45542adf7f9022f8b7[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed May 24 21:20:10 2023 +0100

    worked on the page that displays the product details so that the product details could be fetched from the server

[33mcommit b998733b8747ec3d1e2dd978cea8b602328b4c6c[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue May 23 15:02:14 2023 +0100

    added a ...subscript for the product card if the text exceeds 28 characters

[33mcommit b39eb9124d54dec6bde7541c3df4ff06aea029a2[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue May 23 14:23:39 2023 +0100

    fixed an appliction error that occurs on the client side of mobile view

[33mcommit 9f9011d134db33d29604b41e6743cc694a5f5d66[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue May 23 14:03:48 2023 +0100

    added a key for an iterator

[33mcommit fcdb33f97e81646b414ff6830e2a434b28c7477a[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue May 23 13:45:25 2023 +0100

    added a spinner for page load between page transistions and a feature to fetch data directly from the database

[33mcommit 60a763d6206db465ebce30f7a80dc9dcffa44fa7[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat May 20 14:47:52 2023 +0100

    removed the server side rendering with static props and static paths for the category page and changed it to client side rendering using useSWR. This was done because the data on those pages will be updated continuosly and static props and paths only update at build times

[33mcommit dd33042d64b35baee3bee4c6d01c4f9281e91c28[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Thu Mar 30 22:01:18 2023 +0100

    changed some column configs to enable better responsiveness on small devices

[33mcommit 7bb43914464aeba25e13a60a7432724143320a0d[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Thu Mar 30 21:53:46 2023 +0100

    finished up the design of a modal to add items to cart

[33mcommit 0508a2691398fab0a253a85afdbd571ee2f873a2[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Mar 25 23:36:04 2023 +0000

    fixing a build error on andriod - 3

[33mcommit 546c7d1150d8f73363f545ec54baba3a35b80997[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Mar 25 23:26:26 2023 +0000

    fixing a build error on andriod - 2

[33mcommit dc064c2829a29e6640506d64ab15e33e46bde0d0[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Mar 25 23:18:05 2023 +0000

    fixing a build error on andriod - 1

[33mcommit 887a0f4dcbd26967cce51efaaec72506d71b7387[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Mar 25 22:58:47 2023 +0000

    added a welcome message on the home page and finished up on the product details page

[33mcommit a298bdd73a2548778edb6e58bc6d7ca5ad713362[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Fri Mar 24 23:02:49 2023 +0000

    added the no-unescaped-entities to fix some build issues

[33mcommit f9cb071a14c74837d03e2fde91312301263cb9b4[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Fri Mar 24 22:57:14 2023 +0000

    finished up the design for the product details page - added a carousal, add to bag and wishlist button, added also an accordion for specs and reviews

[33mcommit dc97d5e54656966109fcdf8e63adb3ee54292aee[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Mar 22 21:59:22 2023 +0000

    fixed some issues with getStaticPaths and getStaticProps. Also enabled the images for categories to be dynamically populated

[33mcommit 869dabe77793fbfb461f0e13eb7169226147087d[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Mar 21 02:05:42 2023 +0000

    added a footer to the card to improve it design and also created a blank new page for the  product details

[33mcommit 22b836536eba43be8e73949c45fdb488a1138885[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Mar 20 16:16:41 2023 +0000

    created a card for the products page and added a add to cart  and add to favorite toggle icon

[33mcommit e7431735ce1e69ebbdaa84c26859d63b399b5583[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Mar 18 23:14:52 2023 +0000

    removed the file in the common directory by transferring the files from there to the src directory and  added SSR to get all the dynamic paths for the [category] page

[33mcommit 649351db67388339881de2dd0f9f3c34826e322d[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Mar 14 22:21:27 2023 +0000

    finished the breadcrumb implementation for easy navigation between categories

[33mcommit 010270f202a0debd69396ed5e737b61b702bc7fa[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Mar 14 02:27:02 2023 +0000

    finished up the initial design of the categories page. Also added query params to link to the product page for specific subcategories

[33mcommit 04eb0a35ed380a619869c00259be8e0ec1cfa512[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Mon Mar 13 18:12:13 2023 +0000

    created a custom hook to get the current page for a dynamic route and redirect if the dynamic page wasn't specified.

[33mcommit c7abe8f9c688c7568320906023940bb9e7b75c70[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sun Mar 12 16:35:10 2023 +0000

    added a category page to chose the section/category of clothes you want to shop

[33mcommit d42db5504b5f719392e857f4cd50a1d9e721c98a[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sun Mar 12 02:43:54 2023 +0000

    debugged some build errors, added bootstrap icons, added some styling to the home page

[33mcommit cb93d1f128ac398a4c991552cfba3e3dc953075c[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Mar 11 21:27:24 2023 +0000

    began work on the homepage, removed bootstrap from rendering on the serverside due to some issues encounted using events with bootstrap, started work on the footer also

[33mcommit 30863031d9fcc4edcd16826f219bfabaef714b9a[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Mar 8 12:13:49 2023 +0000

    made some updates to the sign-in and sign-up forms

[33mcommit 02a23c5fbda6ee880eab6f127c17631d3b1c58ac[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Fri Feb 24 23:32:56 2023 +0000

    more config"

[33mcommit 9e2df3735e8b188c19ecf513a0d16931ef79f4d3[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Fri Feb 24 23:22:52 2023 +0000

    made some edits

[33mcommit 4f928ebd885a9846f1609cb872f3188bc338d937[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sun Jan 29 13:33:03 2023 +0000

    admin page route created

[33mcommit 49af96c629b0ca057ff991ca3f0c7ad08242a0ee[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jan 25 10:40:59 2023 +0000

    finished validation for the sign-in page and converted from a useState hook to useReducer hook  due to enable better integration for future features.

[33mcommit e79774472a0efb263073cac678a61425a6ed04c7[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sat Jan 21 02:43:15 2023 +0000

    fixed an error with react no-escaped entities so that build can work optimally and also added validation for the sign up page with is linked to a local server

[33mcommit 437dd79056784f04539eaa45f22bbc6b6ecdaead[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Fri Jan 20 14:13:19 2023 +0000

    connected the client with the server using axios and added a sign in page

[33mcommit e426596bae350ef11cfeec4701a00638d1256f8e[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jan 11 17:10:16 2023 +0000

    made changes to optimize build

[33mcommit 509e5429bcfaee246a70f6da1dbb4175a738148e[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jan 11 16:35:46 2023 +0000

    added the right side image

[33mcommit 876dd06f8b6b322cd9f31dc76ea59430d2f500af[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Wed Jan 11 16:03:14 2023 +0000

    sign up form HTML markup developed, configured and wrote tests using jest for to ensure the efficient rendering for the sign up page and the home page(specifically the NavBar)

[33mcommit e7d065a2a5690caa4f5c8c7a89dec1d00923b6b6[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Tue Jan 10 00:15:59 2023 +0000

    navbar added, sign-up and sign-in routes added and bootstrap integrated

[33mcommit 8544d0344024df8a7558624f9eb2bb7bcbc1e27f[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sun Jan 8 22:44:48 2023 +0000

    start

[33mcommit fb060742ea03c0853dbbb814081daa5050865f3a[m
Author: Pedro Obi <obipedro121@gmail.com>
Date:   Sun Jan 8 03:25:18 2023 +0000

    Initial commit from Create Next App
