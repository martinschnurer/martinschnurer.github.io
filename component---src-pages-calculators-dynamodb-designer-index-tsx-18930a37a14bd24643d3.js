(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+YAX":function(e,t,r){var n=r("2nzh"),a=r("1PpB"),o=r("BI4e"),i=r("cqv3");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},"1PpB":function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"2nzh":function(e,t,r){var n=r("DUyk");e.exports=function(e){if(Array.isArray(e))return n(e)}},"3H5r":function(e,t){!function(){var t,r,n,a,o,i,l,u,c,f,s,m,d,h,p,y,v,b,g,w,x,E,k,I,A,_,N,S,j,O,C,F,U,B,P,T,$,D,M,R,X,G,z,K,q,H,Y,L,W,J,Z,Q,V,ee,te,re,ne=parseInt(17/3,10),ae=null;function oe(){this.fc=0,this.dl=0}function ie(){this.dyn_tree=null,this.static_tree=null,this.extra_bits=null,this.extra_base=0,this.elems=0,this.max_length=0,this.max_code=0}function le(e,t,r,n){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n}function ue(){this.next=null,this.len=0,this.ptr=[],this.off=0}var ce=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],fe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],se=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],de=[new le(0,0,0,0),new le(4,4,8,4),new le(4,5,16,8),new le(4,6,32,32),new le(4,4,16,16),new le(8,16,32,32),new le(8,16,128,128),new le(8,32,128,256),new le(32,128,258,1024),new le(32,258,258,4096)];function he(e){e.next=t,t=e}function pe(e){return s[32768+e]}function ye(e,t){return s[32768+e]=t}function ve(e){ae[i+o++]=e,i+o===8192&&function(){var e,a;if(0!==o){for(null!==t?(l=t,t=t.next):l=new ue,l.next=null,l.len=l.off=0,e=l,null===r?r=n=e:n=n.next=e,e.len=o-i,a=0;a<e.len;a++)e.ptr[a]=ae[i+a];o=i=0}var l}()}function be(e){e&=65535,i+o<8190?(ae[i+o++]=255&e,ae[i+o++]=e>>>8):(ve(255&e),ve(e>>>8))}function ge(){p=32767&(p<<ne^255&u[x+3-1]),y=pe(p),s[32767&x]=y,ye(p,x)}function we(e,t){De(t[e].fc,t[e].dl)}function xe(e){return 255&(e<256?K[e]:K[256+(e>>7)])}function Ee(e,t,r){return e[t].fc<e[r].fc||e[t].fc===e[r].fc&&G[t]<=G[r]}function ke(e,t,r){var n;for(n=0;n<r&&re<te.length;n++)e[t+n]=255&te[re++];return n}function Ie(e){var t,r,n,a,o=A,i=x,l=w,c=x>32506?x-32506:0,f=x+258,m=u[i+l-1],d=u[i+l];w>=S&&(o>>=2);do{if(u[(t=e)+l]===d&&u[t+l-1]===m&&u[t]===u[i]&&u[++t]===u[i+1]){for(i+=2,t++;i<f;){for(a=!1,n=0;n<8;n+=1)if(t+=1,u[i+=1]!==u[t]){a=!0;break}if(a)break}if(r=258-(f-i),i=f-258,r>l){if(E=e,l=r,r>=j)break;m=u[i+l-1],d=u[i+l]}}}while((e=s[32767&e])>c&&0!=--o);return l}function Ae(){var e,t,r=65536-I-x;if(-1===r)r--;else if(x>=65274){for(e=0;e<32768;e++)u[e]=u[e+32768];for(E-=32768,x-=32768,h-=32768,e=0;e<32768;e++)ye(e,(t=pe(e))>=32768?t-32768:0);for(e=0;e<32768;e++)t=s[e],s[e]=t>=32768?t-32768:0;r+=32768}k||((e=ke(u,x+I,r))<=0?k=!0:I+=e)}function _e(){k||(m=0,d=0,function(){var e,t,r,n,a;if(0!==U[0].dl)return;for(P.dyn_tree=O,P.static_tree=F,P.extra_bits=ce,P.extra_base=257,P.elems=286,P.max_length=15,P.max_code=0,T.dyn_tree=C,T.static_tree=U,T.extra_bits=fe,T.extra_base=0,T.elems=30,T.max_length=15,T.max_code=0,$.dyn_tree=B,$.static_tree=null,$.extra_bits=se,$.extra_base=0,$.elems=19,$.max_length=7,$.max_code=0,r=0,n=0;n<28;n++)for(q[n]=r,e=0;e<1<<ce[n];e++)z[r++]=n;for(z[r-1]=n,a=0,n=0;n<16;n++)for(H[n]=a,e=0;e<1<<fe[n];e++)K[a++]=n;for(a>>=7;n<30;n++)for(H[n]=a<<7,e=0;e<1<<fe[n]-7;e++)K[256+a++]=n;for(t=0;t<=15;t++)D[t]=0;e=0;for(;e<=143;)F[e++].dl=8,D[8]++;for(;e<=255;)F[e++].dl=9,D[9]++;for(;e<=279;)F[e++].dl=7,D[7]++;for(;e<=287;)F[e++].dl=8,D[8]++;for(Ce(F,287),e=0;e<30;e++)U[e].dl=5,U[e].fc=Me(e,5);je()}(),function(){var e;for(e=0;e<32768;e++)s[32768+e]=0;if(_=de[N].max_lazy,S=de[N].good_length,j=de[N].nice_length,A=de[N].max_chain,x=0,h=0,(I=ke(u,0,65536))<=0)return k=!0,void(I=0);for(k=!1;I<262&&!k;)Ae();for(p=0,e=0;e<2;e++)p=32767&(p<<ne^255&u[e])}(),r=null,o=0,i=0,N<=3?(w=2,g=0):(g=2,b=!1),l=!1)}function Ne(e,t,n){var o;return a||(_e(),a=!0,0!==I)?(o=Se(e,t,n))===n?n:l?o:(N<=3?function(){for(;0!==I&&null===r;){var e;if(ge(),0!==y&&x-y<=32506&&(g=Ie(y))>I&&(g=I),g>=3)if(e=Te(x-E,g-3),I-=g,g<=_){g--;do{x++,ge()}while(0!=--g);x++}else x+=g,g=0,p=32767&((p=255&u[x])<<ne^255&u[x+1]);else e=Te(0,255&u[x]),I--,x++;for(e&&(Pe(0),h=x);I<262&&!k;)Ae()}}():function(){for(;0!==I&&null===r;){if(ge(),w=g,v=E,g=2,0!==y&&w<_&&x-y<=32506&&((g=Ie(y))>I&&(g=I),3===g&&x-E>4096&&g--),w>=3&&g<=w){var e;e=Te(x-1-v,w-3),I-=w-1,w-=2;do{x++,ge()}while(0!=--w);b=!1,g=2,x++,e&&(Pe(0),h=x)}else b?(Te(0,255&u[x-1])&&(Pe(0),h=x),x++,I--):(b=!0,x++,I--);for(;I<262&&!k;)Ae()}}(),0===I&&(b&&Te(0,255&u[x-1]),Pe(1),l=!0),o+Se(e,o+t,n-o)):(l=!0,0)}function Se(e,t,n){var a,l,u;for(a=0;null!==r&&a<n;){for((l=n-a)>r.len&&(l=r.len),u=0;u<l;u++)e[t+a+u]=r.ptr[r.off+u];var c;if(r.off+=l,r.len-=l,a+=l,0===r.len)c=r,r=r.next,he(c)}if(a===n)return a;if(i<o){for((l=n-a)>o-i&&(l=o-i),u=0;u<l;u++)e[t+a+u]=ae[i+u];a+=l,o===(i+=l)&&(o=i=0)}return a}function je(){var e;for(e=0;e<286;e++)O[e].fc=0;for(e=0;e<30;e++)C[e].fc=0;for(e=0;e<19;e++)B[e].fc=0;O[256].fc=1,V=ee=0,L=W=J=0,Z=0,Q=1}function Oe(e,t){for(var r=M[t],n=t<<1;n<=R&&(n<R&&Ee(e,M[n+1],M[n])&&n++,!Ee(e,r,M[n]));)M[t]=M[n],t=n,n<<=1;M[t]=r}function Ce(e,t){var r,n,a=[],o=0;for(r=1;r<=15;r++)o=o+D[r-1]<<1,a[r]=o;for(n=0;n<=t;n++){var i=e[n].dl;0!==i&&(e[n].fc=Me(a[i]++,i))}}function Fe(e){var t,r,n=e.dyn_tree,a=e.static_tree,o=e.elems,i=-1,l=o;for(R=0,X=573,t=0;t<o;t++)0!==n[t].fc?(M[++R]=i=t,G[t]=0):n[t].dl=0;for(;R<2;){var u=M[++R]=i<2?++i:0;n[u].fc=1,G[u]=0,V--,null!==a&&(ee-=a[u].dl)}for(e.max_code=i,t=R>>1;t>=1;t--)Oe(n,t);do{t=M[1],M[1]=M[R--],Oe(n,1),r=M[1],M[--X]=t,M[--X]=r,n[l].fc=n[t].fc+n[r].fc,G[t]>G[r]+1?G[l]=G[t]:G[l]=G[r]+1,n[t].dl=n[r].dl=l,M[1]=l++,Oe(n,1)}while(R>=2);M[--X]=M[1],function(e){var t,r,n,a,o,i,l=e.dyn_tree,u=e.extra_bits,c=e.extra_base,f=e.max_code,s=e.max_length,m=e.static_tree,d=0;for(a=0;a<=15;a++)D[a]=0;for(l[M[X]].dl=0,t=X+1;t<573;t++)(a=l[l[r=M[t]].dl].dl+1)>s&&(a=s,d++),l[r].dl=a,r>f||(D[a]++,o=0,r>=c&&(o=u[r-c]),i=l[r].fc,V+=i*(a+o),null!==m&&(ee+=i*(m[r].dl+o)));if(0!==d){do{for(a=s-1;0===D[a];)a--;D[a]--,D[a+1]+=2,D[s]--,d-=2}while(d>0);for(a=s;0!==a;a--)for(r=D[a];0!==r;)(n=M[--t])>f||(l[n].dl!==a&&(V+=(a-l[n].dl)*l[n].fc,l[n].fc=a),r--)}}(e),Ce(n,i)}function Ue(e,t){var r,n,a=-1,o=e[0].dl,i=0,l=7,u=4;for(0===o&&(l=138,u=3),e[t+1].dl=65535,r=0;r<=t;r++)n=o,o=e[r+1].dl,++i<l&&n===o||(i<u?B[n].fc+=i:0!==n?(n!==a&&B[n].fc++,B[16].fc++):i<=10?B[17].fc++:B[18].fc++,i=0,a=n,0===o?(l=138,u=3):n===o?(l=6,u=3):(l=7,u=4))}function Be(e,t){var r,n,a=-1,o=e[0].dl,i=0,l=7,u=4;for(0===o&&(l=138,u=3),r=0;r<=t;r++)if(n=o,o=e[r+1].dl,!(++i<l&&n===o)){if(i<u)do{we(n,B)}while(0!=--i);else 0!==n?(n!==a&&(we(n,B),i--),we(16,B),De(i-3,2)):i<=10?(we(17,B),De(i-3,3)):(we(18,B),De(i-11,7));i=0,a=n,0===o?(l=138,u=3):n===o?(l=6,u=3):(l=7,u=4)}}function Pe(e){var t,r,n,a,o;if(a=x-h,Y[J]=Z,Fe(P),Fe(T),n=function(){var e;for(Ue(O,P.max_code),Ue(C,T.max_code),Fe($),e=18;e>=3&&0===B[me[e]].dl;e--);return V+=3*(e+1)+5+5+4,e}(),(r=ee+3+7>>3)<=(t=V+3+7>>3)&&(t=r),a+4<=t&&h>=0)for(De(0+e,3),Re(),be(a),be(~a),o=0;o<a;o++)ve(u[h+o]);else r===t?(De(2+e,3),$e(F,U)):(De(4+e,3),function(e,t,r){var n;for(De(e-257,5),De(t-1,5),De(r-4,4),n=0;n<r;n++)De(B[me[n]].dl,3);Be(O,e-1),Be(C,t-1)}(P.max_code+1,T.max_code+1,n+1),$e(O,C));je(),0!==e&&Re()}function Te(e,t){if(f[L++]=t,0===e?O[t].fc++:(e--,O[z[t]+256+1].fc++,C[xe(e)].fc++,c[W++]=e,Z|=Q),Q<<=1,0==(7&L)&&(Y[J++]=Z,Z=0,Q=1),N>2&&0==(4095&L)){var r,n=8*L,a=x-h;for(r=0;r<30;r++)n+=C[r].fc*(5+fe[r]);if(n>>=3,W<parseInt(L/2,10)&&n<parseInt(a/2,10))return!0}return 8191===L||8192===W}function $e(e,t){var r,n,a,o,i=0,l=0,u=0,s=0;if(0!==L)do{0==(7&i)&&(s=Y[u++]),n=255&f[i++],0==(1&s)?we(n,e):(we((a=z[n])+256+1,e),0!==(o=ce[a])&&De(n-=q[a],o),we(a=xe(r=c[l++]),t),0!==(o=fe[a])&&De(r-=H[a],o)),s>>=1}while(i<L);we(256,e)}function De(e,t){d>16-t?(be(m|=e<<d),m=e>>16-d,d+=t-16):(m|=e<<d,d+=t)}function Me(e,t){var r=0;do{r|=1&e,e>>=1,r<<=1}while(--t>0);return r>>1}function Re(){d>8?be(m):d>0&&ve(m),m=0,d=0}e.exports=function(e,o){var i,l;te=e,re=0,void 0===o&&(o=6),function(e){var o;if(e?e<1?e=1:e>9&&(e=9):e=6,N=e,a=!1,k=!1,null===ae){for(t=r=n=null,ae=[],u=[],c=[],f=[],s=[],O=[],o=0;o<573;o++)O[o]=new oe;for(C=[],o=0;o<61;o++)C[o]=new oe;for(F=[],o=0;o<288;o++)F[o]=new oe;for(U=[],o=0;o<30;o++)U[o]=new oe;for(B=[],o=0;o<39;o++)B[o]=new oe;P=new ie,T=new ie,$=new ie,D=[],M=[],G=[],z=[],K=[],q=[],H=[],Y=[]}}(o),l=[];do{i=Ne(l,l.length,1024)}while(i>0);return te=null,l},e.exports.DEFAULT_LEVEL=6}()},"6R51":function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}}},"8jRI":function(e,t,r){"use strict";r("sC2a"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("Ll4R"),r("klQ5");var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="�";for(var l=Object.keys(r),u=0;u<l.length;u++){var c=l[u];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},"8yz6":function(e,t,r){"use strict";r("sc67"),e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},BI4e:function(e,t,r){var n=r("DUyk");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},DUyk:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},HsiO:function(e,t,r){var n=r("Z6+o"),a=r("6R51"),o=r("BI4e"),i=r("UlM4");e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()}},IMPd:function(e,t){!function(){var t,r,n,a,o,i,l,u,c,f,s,m,d,h,p,y,v,b=null,g=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],w=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],E=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function A(){this.next=null,this.list=null}function _(){this.e=0,this.b=0,this.n=0,this.t=null}function N(e,t,r,n,a,o){var i;this.BMAX=16,this.N_MAX=288,this.status=0,this.root=null,this.m=0;var l,u,c,f,s,m,d,h,p,y,v,b,g,w,x,E,k=[],I=[],N=new _,S=[],j=[],O=[];for(E=this.root=null,s=0;s<this.BMAX+1;s++)k[s]=0;for(s=0;s<this.BMAX+1;s++)I[s]=0;for(s=0;s<this.BMAX;s++)S[s]=null;for(s=0;s<this.N_MAX;s++)j[s]=0;for(s=0;s<this.BMAX+1;s++)O[s]=0;l=t>256?e[256]:this.BMAX,h=e,p=0,s=t;do{k[h[p]]++,p++}while(--s>0);if(k[0]===t)return this.root=null,this.m=0,void(this.status=0);for(m=1;m<=this.BMAX&&0===k[m];m++);for(d=m,o<m&&(o=m),s=this.BMAX;0!==s&&0===k[s];s--);for(c=s,o>s&&(o=s),g=1<<m;m<s;m++,g<<=1)if((g-=k[m])<0)return this.status=2,void(this.m=o);if((g-=k[s])<0)return this.status=2,void(this.m=o);for(k[s]+=g,O[1]=m=0,h=k,p=1,b=2;--s>0;)O[b++]=m+=h[p++];h=e,p=0,s=0;do{0!==(m=h[p++])&&(j[O[m]++]=s)}while(++s<t);for(t=O[c],O[0]=s=0,h=j,p=0,f=-1,v=I[0]=0,y=null,w=0;d<=c;d++)for(i=k[d];i-- >0;){for(;d>v+I[1+f];){if(v+=I[1+f],f++,w=(w=c-v)>o?o:w,(u=1<<(m=d-v))>i+1)for(u-=i+1,b=d;++m<w&&!((u<<=1)<=k[++b]);)u-=k[b];for(v+m>l&&v<l&&(m=l-v),w=1<<m,I[1+f]=m,y=[],x=0;x<w;x++)y[x]=new _;(E=E?E.next=new A:this.root=new A).next=null,E.list=y,S[f]=y,f>0&&(O[f]=s,N.b=I[f],N.e=16+m,N.t=y,m=(s&(1<<v)-1)>>v-I[f],S[f-1][m].e=N.e,S[f-1][m].b=N.b,S[f-1][m].n=N.n,S[f-1][m].t=N.t)}for(N.b=d-v,p>=t?N.e=99:h[p]<r?(N.e=h[p]<256?16:15,N.n=h[p++]):(N.e=a[h[p]-r],N.n=n[h[p++]-r]),u=1<<d-v,m=s>>v;m<w;m+=u)y[m].e=N.e,y[m].b=N.b,y[m].n=N.n,y[m].t=N.t;for(m=1<<d-1;0!=(s&m);m>>=1)s^=m;for(s^=m;(s&(1<<v)-1)!==O[f];)v-=I[f],f--}this.m=I[1],this.status=0!==g&&1!==c?1:0}function S(e){for(;l<e;)i|=(y.length===v?-1:255&y[v++])<<l,l+=8}function j(e){return i&g[e]}function O(e){i>>=e,l-=e}function C(e,n,a){var o,i,l;if(0===a)return 0;for(l=0;;){for(S(h),o=(i=m.list[j(h)]).e;o>16;){if(99===o)return-1;O(i.b),S(o-=16),o=(i=i.t[j(o)]).e}if(O(i.b),16!==o){if(15===o)break;for(S(o),f=i.n+j(o),O(o),S(p),o=(i=d.list[j(p)]).e;o>16;){if(99===o)return-1;O(i.b),S(o-=16),o=(i=i.t[j(o)]).e}for(O(i.b),S(o),s=r-i.n-j(o),O(o);f>0&&l<a;)f--,s&=32767,r&=32767,e[n+l++]=t[r++]=t[s++];if(l===a)return a}else if(r&=32767,e[n+l++]=t[r++]=i.n,l===a)return a}return u=-1,l}function F(e,n,a){var o;if(O(o=7&l),S(16),o=j(16),O(16),S(16),o!==(65535&~i))return-1;for(O(16),f=o,o=0;f>0&&o<a;)f--,r&=32767,S(8),e[n+o++]=t[r++]=j(8),O(8);return 0===f&&(u=-1),o}function U(e,t,r){if(!b){var i,l,u=[];for(i=0;i<144;i++)u[i]=8;for(;i<256;i++)u[i]=9;for(;i<280;i++)u[i]=7;for(;i<288;i++)u[i]=8;if(0!==(l=new N(u,288,257,w,x,a=7)).status)return console.error("HufBuild error: "+l.status),-1;for(b=l.root,a=l.m,i=0;i<30;i++)u[i]=5;if((l=new N(u,30,0,E,k,o=5)).status>1)return b=null,console.error("HufBuild error: "+l.status),-1;n=l.root,o=l.m}return m=b,d=n,h=a,p=o,C(e,t,r)}function B(e,t,r){var n,a,o,i,l,u,c,f,s,y=[];for(n=0;n<316;n++)y[n]=0;if(S(5),c=257+j(5),O(5),S(5),f=1+j(5),O(5),S(4),u=4+j(4),O(4),c>286||f>30)return-1;for(a=0;a<u;a++)S(3),y[I[a]]=j(3),O(3);for(;a<19;a++)y[I[a]]=0;if(0!==(s=new N(y,19,19,null,null,h=7)).status)return-1;for(m=s.root,h=s.m,i=c+f,n=o=0;n<i;)if(S(h),O(a=(l=m.list[j(h)]).b),(a=l.n)<16)y[n++]=o=a;else if(16===a){if(S(2),a=3+j(2),O(2),n+a>i)return-1;for(;a-- >0;)y[n++]=o}else if(17===a){if(S(3),a=3+j(3),O(3),n+a>i)return-1;for(;a-- >0;)y[n++]=0;o=0}else{if(S(7),a=11+j(7),O(7),n+a>i)return-1;for(;a-- >0;)y[n++]=0;o=0}if(s=new N(y,c,257,w,x,h=9),0===h&&(s.status=1),0!==s.status&&1!==s.status)return-1;for(m=s.root,h=s.m,n=0;n<f;n++)y[n]=y[n+c];return s=new N(y,f,0,E,k,p=6),d=s.root,0===(p=s.m)&&c>257||0!==s.status?-1:C(e,t,r)}function P(e,n,a){var o,i;for(o=0;o<a;){if(c&&-1===u)return o;if(f>0){if(0!==u)for(;f>0&&o<a;)f--,s&=32767,r&=32767,e[n+o++]=t[r++]=t[s++];else{for(;f>0&&o<a;)f--,r&=32767,S(8),e[n+o++]=t[r++]=j(8),O(8);0===f&&(u=-1)}if(o===a)return o}if(-1===u){if(c)break;S(1),0!==j(1)&&(c=!0),O(1),S(2),u=j(2),O(2),m=null,f=0}switch(u){case 0:i=F(e,n+o,a-o);break;case 1:i=m?C(e,n+o,a-o):U(e,n+o,a-o);break;case 2:i=m?C(e,n+o,a-o):B(e,n+o,a-o);break;default:i=-1}if(-1===i)return c?0:-1;o+=i}return o}e.exports=function(e){var n,a=[];t||(t=[]),r=0,i=0,l=0,u=-1,c=!1,f=s=0,m=null,y=e,v=0;do{n=P(a,a.length,1024)}while(n>0);return y=null,a}}()},"PZd/":function(e,t,r){var n=r("P8UN"),a=r("ys0W")(!0);n(n.S,"Object",{entries:function(e){return a(e)}})},Pmem:function(e,t,r){"use strict";r("q8oJ"),r("C9fy"),r("8npG"),r("sC2a"),e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},UlM4:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},YBKJ:function(e,t,r){"use strict";var n=r("emib"),a=r("qDzq"),o=r("CCE/"),i=r("TUPI"),l=r("kxs/"),u=r("96qb"),c=r("chL8").f,f=r("Drra").f,s=r("rjfK").f,m=r("EU/P").trim,d=n.Number,h=d,p=d.prototype,y="Number"==o(r("nsRs")(p)),v="trim"in String.prototype,b=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,o=(t=v?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,u=t.slice(2),c=0,f=u.length;c<f;c++)if((i=u.charCodeAt(c))<48||i>a)return NaN;return parseInt(u,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(y?u((function(){p.valueOf.call(r)})):"Number"!=o(r))?i(new h(b(t)),r,d):b(t)};for(var g,w=r("QPJK")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)a(h,g=w[x])&&!a(d,g)&&s(d,g,f(h,g));d.prototype=p,p.constructor=d,r("IYdN")(n,"Number",d)}},"Z6+o":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},cqv3:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"cr+I":function(e,t,r){"use strict";r("OeI1"),r("gu/5"),r("eoYm");var n=r("HsiO");r("m210"),r("4DPX"),r("U6Bt"),r("pS08"),r("E5k/"),r("HXzo"),r("iuFa"),r("YBKJ"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("zGcK"),r("MIFh"),r("AqHK"),r("HQhv"),r("sc67"),r("sC2a");var a=r("+YAX"),o=r("Pmem"),i=r("8jRI"),l=r("8yz6");function u(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function f(e,t){return t.decode?i(e):e}function s(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){var t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map((function(t){return f(t,e)})):null===r?r:f(r,e);n[t]=a};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var o=!0,i=!1,c=void 0;try{for(var s,m=e.split("&")[Symbol.iterator]();!(o=(s=m.next()).done);o=!0){var h=s.value,p=l(t.decode?h.replace(/\+/g," "):h,"="),y=n(p,2),v=y[0],b=y[1];b=void 0===b?null:["comma","separator"].includes(t.arrayFormat)?b:f(b,t),r(f(v,t),b,a)}}catch(_){i=!0,c=_}finally{try{o||null==m.return||m.return()}finally{if(i)throw c}}for(var g=0,w=Object.keys(a);g<w.length;g++){var x=w[g],E=a[x];if("object"==typeof E&&null!==E)for(var k=0,I=Object.keys(E);k<I.length;k++){var A=I[k];E[A]=d(E[A],t)}else a[x]=d(E,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=m,t.parse=h,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[c(t,e),"[",o,"]"].join("")]:[[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[c(t,e),"[]"].join("")]:[[c(t,e),"[]=",c(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null==n||0===n.length?r:0===r.length?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[c(t,e)]:[[c(t,e),"=",c(n,e)].join("")])}}}}(t),o={},i=0,l=Object.keys(e);i<l.length;i++){var f=l[i];r(f)||(o[f]=e[f])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?c(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):c(r,t)+"="+c(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),a=n(r,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:h(m(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:f(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=s(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),i=Object.assign(o,e.query),l=t.stringify(i,r);l&&(l="?".concat(l));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(c(e.fragmentIdentifier,r))),"".concat(n).concat(l).concat(u)}},iuFa:function(e,t,r){var n=r("P8UN");n(n.S,"Number",{isNaN:function(e){return e!=e}})},sMne:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("HQhv"),r("sPse"),r("q8oJ"),r("8npG"),r("wlv8")),i=r.n(o),l=r("gYkd"),u=r.n(l);r("YbXK"),r("cFtU"),r("m210"),r("4DPX"),r("zGcK"),r("rzGZ"),r("Dq+y"),r("PZd/"),r("TAD1"),r("zTTH");function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(e){var t=e.head,r=e.rows,o=Object(n.useState)(null),i=o[0],l=o[1],f=""===t[0]?null:i,s=0,m=null,d=null;f&&(s=t.findIndex((function(e){return e===f})),m=function(){if(f&&t[s]){var e=function(e,t){for(var r=0,n=0;n<t.length;n++)t[n]===e&&r++;return r}("#",t[s]);return m=function(e,t){var r=t.length;return e.findIndex((function(e){return e.lastIndexOf("$")===r-1}))}(t,function(e,t){for(var r="",n=0;n<t;n++)r+=e;return r}("$",e)),d=t[m],m}return-1}());var h={};return r.forEach((function(e){var t=e[s];if(t){var r=c(e),n=[r[s]];m>-1&&null!==m&&n.push(r[m]),r[s]=null,r[m]=null,r=r.filter((function(e){return null!==e})),r=[].concat(n,c(r)),t in h?h[t].push(r):h[t]=[r]}})),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:u.a.tableWrapper},a.a.createElement("table",{className:u.a.table},a.a.createElement("thead",null,a.a.createElement("tr",null,[].concat(c(null===f?[]:[f]),c(null===d?[]:[d]),c(t.filter((function(e){return e!==f&&e!==d})))).map((function(e,t){return a.a.createElement("th",{key:e+t},e.startsWith("#")?a.a.createElement("a",{onClick:function(){return l(e)}},e):a.a.createElement("span",null,e))})))),a.a.createElement("tbody",null,Object.entries(h).map((function(e){var t=e[0],r=e[1];return r.sort((function(e,t){return e[1]&&t[1]&&e[1].localeCompare(t[1])})).map((function(e,n){return a.a.createElement("tr",{key:n},0===n&&a.a.createElement("td",{rowSpan:r.length},t),e.slice(1).map((function(e,t){return a.a.createElement("td",{key:e+t},e)})))}))}))))))},s=r("cr+I"),m=r("H8eV"),d=function(){var e=Object(n.useState)(""),t=e[0],r=e[1];Object(n.useEffect)((function(){var e=Object(s.parse)(window.location.search.toString()).text;if(e){var t=atob(decodeURIComponent(e)).split("").map((function(e){return e.charCodeAt(0)})),n=i.a.inflate(t).map((function(e){return String.fromCharCode(e)})).join("");r(n)}else{var a="undefined"!=typeof window?window.localStorage.getItem("text")||"#pk, $sk":"";r(a)}}),[]);var o=t.split("\n"),l=o[0],c=o.slice(1),d=l.split(",").map((function(e){return e.trim()})),h=c.map((function(e){return e.split(",").map((function(e){return e.trim()}))})),p=Object(n.useState)(""),y=p[0],v=p[1];return a.a.createElement("div",{className:u.a.dynamodb},a.a.createElement(m.a,{title:"DynamoDB Simple Designer",description:"Simple and fast schema designer for DynamoDB. You write items as csv text and data are aggregated to the table.",lang:"en",keywords:["dynamodb","designer","schema","aggregate"]}),a.a.createElement("h2",null,"DynamoDB designer tool"),a.a.createElement("textarea",{className:u.a.tarea,value:t,onChange:function(e){var t=e.target.value;r(t),localStorage.setItem("text",t)}}),a.a.createElement(f,{head:d,rows:h}),a.a.createElement("div",{className:u.a.share,onClick:function(){var e=i.a.deflate(t.split("").map((function(e){return e.charCodeAt(0)})),9).map((function(e){return String.fromCharCode(e)})).join(""),r=btoa(e),n=encodeURIComponent(r);v(n)}},"Share this design with link"),y.length>0&&a.a.createElement("div",{className:u.a.generated},a.a.createElement("h3",null,"Copy this link and share the design with others"),a.a.createElement("hr",null),"https://martinschnurer.github.io/calculators/dynamodb-designer?text=",y),a.a.createElement("h3",null,"How it works"),a.a.createElement("p",null,"NoSQL Workbench from AWS works really well. However, I found the process of setuping up tables unnecessary hard."),a.a.createElement("p",null,"I came with the idea, that the table and schema would be generated from the text input. You can set up your primary key and other GSI indexes. Also, you can click on these indexes and aggregate data into partitions."),a.a.createElement("h3",null,"Usage:"),a.a.createElement("ul",null,a.a.createElement("li",null,"By default ",a.a.createElement("b",null,"primary key")," is always the first column (without any sortkey)."),a.a.createElement("li",null,'Columns are always defined in the first line of the text such as "PK, SK, type" will generate three columns with a name ',a.a.createElement("i",null,"PK"),", ",a.a.createElement("i",null,"SK")," ","and ",a.a.createElement("i",null,"type")),a.a.createElement("li",null,'Text "#pk, $sk" will create column - primary key with name ',a.a.createElement("b",null,"#pk")," ","and connected sort key ",a.a.createElement("b",null,"$sk")," to this primary key"),a.a.createElement("li",null,"You can create ",a.a.createElement("b",null,"global secondary index")," with text"," ",a.a.createElement("b",null,'"##pk2, $$sk2"'),". The most important part is the count of the # and $, because they are matching together with the cound of these characters inside the name"),a.a.createElement("li",null,"If you want to create more GSIs, just use more of these:",a.a.createElement("br",null),"##pk1, $$sk1, ###thirdPK, $$$thirdSK, ####fourthXYZ, $$$$fourth_SK"),a.a.createElement("li",null,a.a.createElement("h4",null,"Try this example: ",a.a.createElement("br",null),a.a.createElement("small",null,"(Copy and paste to the input above)")),a.a.createElement("pre",{className:u.a.stylized},"#pk, $sk, ##pk1, $$sk2, info",a.a.createElement("br",null),"User-A, INFO, score, 3, Additional information",a.a.createElement("br",null),"User-A, Connection",a.a.createElement("br",null),"User-B, INFO, score, 4, Additional information",a.a.createElement("br",null),"User-C, INFO, score, 5, Additional information",a.a.createElement("br",null),"User-D, INFO, score, 1, Additional information",a.a.createElement("br",null)),a.a.createElement("p",null,"Table is created with your data and indexes. Take a look at header of the table. The primary key and GSI indexes are clickable. By clicking on them, you activate aggregating data by this index (also sort by the appropriate sort key). With this way, you can explore access patterns much easier.",a.a.createElement("br",null)," Pretty cool hah?"))),a.a.createElement("h3",null,"What's missing:"),a.a.createElement("ul",null,a.a.createElement("li",null,"Items can be sorted by sort key only by string type for now"),a.a.createElement("li",null,"For now, it can't sort items in table by another sort key (local secondary index)")))},h=r("9Dj+"),p=r("oMEu");t.default=function(){return a.a.createElement(h.a,null,a.a.createElement(p.a,null,a.a.createElement(d,null)))}},wlv8:function(e,t,r){!function(){"use strict";e.exports={inflate:r("IMPd"),deflate:r("3H5r")}}()},ys0W:function(e,t,r){var n=r("QPJK"),a=r("2mBY"),o=r("5SQf"),i=r("BnbX").f;e.exports=function(e){return function(t){for(var r,l=o(t),u=a(l),c=u.length,f=0,s=[];c>f;)r=u[f++],n&&!i.call(l,r)||s.push(e?[r,l[r]]:l[r]);return s}}},zTTH:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Wadk")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),n(n.P+n.F*i,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(o)}}]);
//# sourceMappingURL=component---src-pages-calculators-dynamodb-designer-index-tsx-18930a37a14bd24643d3.js.map