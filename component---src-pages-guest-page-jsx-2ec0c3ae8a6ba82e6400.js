"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[538],{8040:function(A,e,t){var n=t(7294);e.Z=function(A){let{children:e}=A;return n.createElement("div",{className:"w-full md:w-1/2 h-fit mt-4"},e)}},1711:function(A,e,t){t.d(e,{Z:function(){return o}});var n=t(7294),r=t(4160);var l=function(A){return n.createElement("div",{className:"w-full pt-4 bg-white h-content fixed flex justify-center items-center z-10"},n.createElement("div",{className:"w-full md:w-4/6 flex"},n.createElement("div",{className:"flex-none w-fit m-2 h-16 flex justify-center items-center"},n.createElement(r.rU,{to:"/",className:" text-h-blue text-xl font-bold transition-all duration-300 hover:scale-105 hover:underline underline-offset-1 hover:font-extrabold hover:text-4xl"},"hyeonzii")),n.createElement("div",{className:"grow"}),n.createElement("div",{className:"flex-none flex"},[{page:"/postPage",text:"posts"},{page:"/aboutPage",text:"about"},{page:"/guestPage",text:"guest"}].map(((e,t)=>n.createElement(r.rU,{to:e.page,key:t,className:"cursor-pointer rounded-full m-4 w-16 h-16  flex justify-center items-center transition-all duration-300 "+(A.category===e.text?"bg-h-gray text-3xl font-extrabold ":"bg-h-blue font-bold  hover:bg-h-gray hover:text-3xl hover:font-extrabold hover:scale-105")},e.text))))))},a="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAADchAAA3IQAAAAAAAAAAAAAAAAAAjomHAI6JhxyQi4ndko2L/5KNi/+Tjoz/lI+N/5WRj/+XkpD/mJOR/5qVk/+alZPXmJORF5iTkQAAAAAAAAAAAJaRjwCWkY8lmpWT5ZyXlf+dmJb/n5qY/6Cbmf+inZv/pJ+d/6Wgnv+noqD/pJ+d5oeEgyaJhoUAAAAAAAAAAACcl5UAnJeVLaCbmeyjnpz/paCe/6ahn/+yrav/tbCu/6ynpf+uqaf/sKup/6ynpu2Pi4ovkY6MAAAAAAAAAAAApJ+dAKSfnTWppKLxrKel/66pp/+vqqj/vLe1/8C7uf+1sK7/t7Kw/7m0sv+5tLLts66sL7OurAAAAAAAAAAAAKynpgCsp6Y+sq2r9bWwrv+3srD/ubSy/7u2s/+9uLb/vrm3/8C7uf/BvLr/wby68ry3tTe8t7UAAAAAAAAAAAC0r60As66sR7y3tfm/u7n/wr27/8XAvv/FwL7/xsG//8nEwv/JxML/ycTC/8fCwPXAu7o/wLy6AAAAAAAAAAAAYGBiAGFhYjdYWVruc3d+/7C4w/+Um6P/xM3b/8TM2v+Um6P/tLvH/3h8hP9kZGbehIOEJIGBgQAAAAAAAAAAAAoOEQAIDA8GEBMWpi82P/+QnrL/a3qN/6u91/+rvdj/a3qN/4uar/81O0T/NikglnA7EgEWFxgAAAAAAAAAAAAJCQgACQsMAA0NDmUZHCD+UFhl/2Rvfv+CjqD/eoKR/2lteP9jYGP/Uzkm/oJKG2RcNRIA3nYcAAAAAAAAAAAAAAAAAD4mFAA7JBI8IxwX8x0eHv8mJyj/OzQw/6BlP/+5cUL/v3I8/6tjLfJ6RBY7e0YYAAAAAAAAAAAAej8LAIFEDglvNgIH03YuE04yHMUfHx//Jyco/0M4MP/WhFD/6Y1R/9d/RP99SiLFAAMJEwECAgcHBwcJBgYGAL9yPAC+bzVchU8nggABAi4bEw2eHx8f/yoqK/9CNzD/1YRR/+uPVP/GdTz/fkUVnns/CS5CLByCHRwbXCQiIQDFekkA2INIFTswKKcbHBz0GRoa/CQkJP8pKSr9Ni0n289+R9vnjFH90HxD/7VoMfy6bDT0u3E+pzErJxVJOS0AAgQOACsrKgAoKCgpKioqqycnJ9YiIiK4HR0daxUUEiHMdjAh2IBAa9uDRrjgh0zW5otQq+qNUCnpjVEA/7BSAAAAAAADAwMAJiYmABwcHAccHBwVExMTCVJSUgABAQEAq1cLAP/UpgDVfDUJ4YVDFemKRQfli08A8YAbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADgBwAA4AcAAIABAACAAQAAgAEAAMADAADjxwAA//8AAA==";function c(){return n.createElement(n.Fragment,null,n.createElement("title",null,"hyeonzii의 블로그"),n.createElement("meta",{name:"description",content:"프론트엔드 개발자 이현지의 기술 블로그 입니다!"}),n.createElement("link",{id:"icon",rel:"icon",href:a}))}var o=function(A){let{children:e,category:t}=A;return n.createElement("div",{className:"w-full h-full flex flex-col"},n.createElement(c,null),n.createElement(l,{category:t}),n.createElement("div",{className:"w-full h-fit flex flex-col justify-center items-center mt-28"},e))}},7087:function(A,e,t){t.r(e),t.d(e,{default:function(){return o}});var n=t(7294),r=t(1711),l=t(8040);const a="comments-container";var c=()=>((0,n.useEffect)((()=>{const A=document.createElement("script");A.src="https://utteranc.es/client.js",A.setAttribute("repo","hyeonzii/blog-guestbook"),A.setAttribute("issue-term","pathname"),A.setAttribute("theme","github-light"),A.setAttribute("crossorigin","anonymous"),A.async=!0;const e=document.getElementById(a);return e&&e.appendChild(A),()=>{const A=document.getElementById(a);A&&(A.innerHTML="")}}),[]),n.createElement("div",{id:a}));var o=function(){return n.createElement(r.Z,{category:"guest"},n.createElement(l.Z,null,n.createElement("div",{className:"mt-4 w-full text-center"},"자유롭게 방명록을 남겨주세요! 🙇🏻‍♀️"),n.createElement(c,null)))}}}]);
//# sourceMappingURL=component---src-pages-guest-page-jsx-2ec0c3ae8a6ba82e6400.js.map