"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[251],{5365:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",img:"img"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"📍 문제상황"),"\n",a.createElement(t.p,null,"tailwind 라이브러리를 적용시키고 나서"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"gatsby develop\n")),"\n",a.createElement(t.p,null,"을 했는데"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},' ERROR  UNKNOWN\n\nThe "path" argument must be of type string. Received undefined\n\n\n\n  TypeError: The "path" argument must be of type string. Received undefined\n\n...\n\n')),"\n",a.createElement(t.img,{src:"./images/cry.jpeg",alt:"우는상훈씨"}),"\n",a.createElement(t.p,null,"이런 무슨 엄청나게 긴 오류가 발생했습니다...\n그래서 읭???????????? 하고 진짜 tailwind 다시 깔고 별 난리를 다쳤는데 계속 오류가 났습니다."),"\n",a.createElement(t.h2,null,"📍 문제해결"),"\n",a.createElement(t.p,null,"일단 여러분들 해결방법이 더 먼저 궁금하실것 같아서 해결방법 먼저 알려드리겠습니다."),"\n",a.createElement(t.p,null,"gatsby-config.js를 확인해보세요"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"/**\n * @type {import('gatsby').GatsbyConfig}\n */\nmodule.exports = {\n    siteMetadata: {\n        title: `my-portfolio`,\n        siteUrl: `https://www.yourdomain.tld`,\n    },\n    plugins: ['gatsby-plugin-postcss', {}],\n};\n")),"\n",a.createElement(t.p,null,"보이시나요?? 저 "," 이 놈 이거 때문에 저는 에러가 났습니다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"/**\n * @type {import('gatsby').GatsbyConfig}\n */\nmodule.exports = {\n    siteMetadata: {\n        title: `my-portfolio`,\n        siteUrl: `https://www.yourdomain.tld`,\n    },\n    plugins: ['gatsby-plugin-postcss'],\n};\n")),"\n",a.createElement(t.p,null,"저거 떼어주니까 바로 잘 실행됐습니다..휴.."),"\n",a.createElement(t.h2,null,"📍 문제해결방법"),"\n",a.createElement(t.p,null,"전 일단 물어볼 수 있는 분이 있어서 냅다 달려갔습니다."),"\n",a.createElement(t.p,null,"일단 마음을 가다듬고 에러메시지를 확인해보면\ntype이 틀렸다고 하는걸 볼 수 있습니다. String 으로 줘야 하는데 엉뚱한게 지한테 온다고 알려주고 있죠?"),"\n",a.createElement(t.p,null,"그래서 처음에는 tailwind-config.js 와 gatsby-config.js 에 백틱으로 되어있는 문자열을 다 수정해봤는데요 그래도 오류가 나더랍니다.."),"\n",a.createElement(t.p,null,"근데 마지막으로 저 plugin 부분에 있는 "," 이거를 지워주니까 잘 작동했습니다!"),"\n",a.createElement(t.p,null,"근데 여기서 의문은 도대체 저 중괄호가 왜 들어갔냐..?\n인데요 제가 중간에 코드를 한번 타입스크립트로 바꿔볼까하고 수정한 적이 있었는데 그거때문에 그런거 같기도 하고.. 사실 잘 모르겠습니다만은... 어찌저찌 해결해서 다행입니다요!!!!"),"\n",a.createElement(t.p,null,"암튼 이거때문에 2시간???3시간??은 삽질한거 같은데... 저랑 같은 오류 나신분들 있을까봐 적어봅니다..끌끌..."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=n(4160),s=n(7571);const m={Link:o.rU};function i(e){let{data:t,children:n}=e;return a.createElement("div",{className:"w-full h-full flex flex-col"},a.createElement(s.Z,{category:";"}),a.createElement("div",{className:"overflow-y-auto flex flex-col justify-center items-center mt-28"},a.createElement("div",{className:"w-1/2 h-fit mt-8"},a.createElement("div",{className:"border-b-4 border-h-blue"}),a.createElement("h1",{className:"font-bold text-3xl text-h-blue ml-4 -mt-10"},t.mdx.frontmatter.title)),a.createElement("div",{className:"w-1/2 h-fit mt-8"},a.createElement(l.Zo,{components:m},n)),a.createElement("div",{className:"w-1/2 h-fit text-h-gray mt-4"},t.mdx.frontmatter.date)))}function u(e){return a.createElement(i,e,a.createElement(c,e))}},7571:function(e,t,n){var l=n(7294),a=n(4160);t.Z=function(e){return l.createElement("div",{className:"w-full pt-4 pl-12 pr-12 bg-white h-content fixed flex justify-center items-center "},l.createElement("div",{className:"w-4/6 flex"},l.createElement("div",{className:"flex-none w-fit m-2 h-16 flex justify-center items-center"},l.createElement(a.rU,{to:"/",className:" text-h-blue text-xl font-bold transition-all duration-300 hover:scale-105 hover:underline underline-offset-1 hover:font-extrabold hover:text-4xl"},"hyeonzii")),l.createElement("div",{className:"grow"}),l.createElement("div",{className:"flex-none flex"},[{page:"/postPage",text:"posts"},{page:"/aboutPage",text:"about"},{page:"/guestPage",text:"guest"}].map(((t,n)=>l.createElement(a.rU,{to:t.page,key:n,className:"cursor-pointer rounded-full m-4 w-16 h-16  flex justify-center items-center transition-all duration-300 "+(e.category===t.text?"bg-h-gray text-3xl font-extrabold":"bg-h-blue font-bold hover:bg-h-gray hover:text-3xl hover:font-extrabold hover:scale-105")},t.text))))))}},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-content-file-path-content-posts-blog-1-mdx-469982fbd3552a097e20.js.map