$(document).ready(function(){$(".play").hide(0),$(".pick-dropdown").hide(0),$("#three").click(function(){$(".players").hide(0),$(".three-players").fadeIn(250)}),$("#four").click(function(){$(".players").hide(0),$(".four-players").fadeIn(250)}),$("#five").click(function(){$(".players").hide(0),$(".five-players").fadeIn(250)}),$("#six").click(function(){$(".players").hide(0),$(".three-players").fadeIn(250)});var s=0,c=0,l=0;$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l);var o=0,p=0,C=0,P=0,r=0,i=0,t=0,n=0,D=0,d=0,e=0,a=0,w=0,k=0,f=0,u=0,m=0,h=0,y=0,b=0,v=0,U=0,g=0,B=0,I=0;$("#p1ws3P").click(function(){0===P?($("#p1ws3P").css("color","black"),P=1,r=0,i=0,t=0,n=0,D=0,$("#p1wns3P").css("color","#9DC8C8"),$("#p1wdt3P").css("color","#9DC8C8"),$("#p1ls3P").css("color","#9DC8C8"),$("#p1lns3P").css("color","#9DC8C8"),$("#p1ldt3P").css("color","#9DC8C8")):($("#p1ws3P").css("color","#9DC8C8"),P=0)}),$("#p1wns3P").click(function(){0===r?($("#p1wns3P").css("color","black"),P=0,r=1,i=0,t=0,n=0,D=0,$("#p1ws3P").css("color","#9DC8C8"),$("#p1wdt3P").css("color","#9DC8C8"),$("#p1ls3P").css("color","#9DC8C8"),$("#p1lns3P").css("color","#9DC8C8"),$("#p1ldt3P").css("color","#9DC8C8")):($("#p1wns3P").css("color","#9DC8C8"),r=0)}),$("#p1wdt3P").click(function(){0===i?($("#p1wdt3P").css("color","black"),i=0,r=0,i=1,t=0,n=0,D=0,$("#p1wns3P").css("color","#9DC8C8"),$("#p1ws3P").css("color","#9DC8C8"),$("#p1ls3P").css("color","#9DC8C8"),$("#p1lns3P").css("color","#9DC8C8"),$("#p1ldt3P").css("color","#9DC8C8")):($("#p1wdt3P").css("color","#9DC8C8"),i=0)}),$("#p1ls3P").click(function(){0===t?($("#p1ls3P").css("color","black"),i=0,r=0,i=0,t=1,n=0,D=0,$("#p1wns3P").css("color","#9DC8C8"),$("#p1ws3P").css("color","#9DC8C8"),$("#p1wdt3P").css("color","#9DC8C8"),$("#p1lnss3P").css("color","#9DC8C8"),$("#p1ldt3P").css("color","#9DC8C8")):($("#p1ls3P").css("color","#9DC8C8"),t=0)}),$("#p1lns3P").click(function(){0===n?($("#p1lns3P").css("color","black"),i=0,r=0,i=0,t=0,n=1,D=0,$("#p1wns3P").css("color","#9DC8C8"),$("#p1ws3P").css("color","#9DC8C8"),$("#p1wdt3P").css("color","#9DC8C8"),$("#p1ls3P").css("color","#9DC8C8"),$("#p1ldt3P").css("color","#9DC8C8")):($("#p1lns3P").css("color","#9DC8C8"),n=0)}),$("#p1ldt3P").click(function(){0===D?($("#p1ldt3P").css("color","black"),i=0,r=0,i=0,t=0,n=0,D=1,$("#p1wns3P").css("color","#9DC8C8"),$("#p1ws3P").css("color","#9DC8C8"),$("#p1wdt3P").css("color","#9DC8C8"),$("#p1ls3P").css("color","#9DC8C8"),$("#p1lns3P").css("color","#9DC8C8")):($("#p1ldt3P").css("color","#9DC8C8"),D=0)}),$("#p1au3P").click(function(){0!==g&&1!==g&&2!==g&&3!==g||(g+=1,$("#p1rapcount3P").html(g+" times"))}),$("#p1ad3P").click(function(){1!==g&&2!==g&&3!==g&&4!==g||(g-=1,$("#p1rapcount3P").html(g+" times"))}),$("#p2ws3P").click(function(){0===e?($("#p2ws3P").css("color","black"),e=1,a=0,w=0,k=0,f=0,u=0,$("#p2wns3P").css("color","#9DC8C8"),$("#p2wdt3P").css("color","#9DC8C8"),$("#p2ls3P").css("color","#9DC8C8"),$("#p2lns3P").css("color","#9DC8C8"),$("#p2ldt3P").css("color","#9DC8C8")):($("#p2ws3P").css("color","#9DC8C8"),e=0)}),$("#p2wns3P").click(function(){0===a?($("#p2wns3P").css("color","black"),e=0,a=1,w=0,k=0,f=0,u=0,$("#p2ws3P").css("color","#9DC8C8"),$("#p2wdt3P").css("color","#9DC8C8"),$("#p2ls3P").css("color","#9DC8C8"),$("#p2lns3P").css("color","#9DC8C8"),$("#p2ldt3P").css("color","#9DC8C8")):($("#p2wns3P").css("color","#9DC8C8"),a=0)}),$("#p2wdt3P").click(function(){0===w?($("#p2wdt3P").css("color","black"),w=0,a=0,w=1,k=0,f=0,u=0,$("#p2wns3P").css("color","#9DC8C8"),$("#p2ws3P").css("color","#9DC8C8"),$("#p2ls3P").css("color","#9DC8C8"),$("#p2lns3P").css("color","#9DC8C8"),$("#p2ldt3P").css("color","#9DC8C8")):($("#p2wdt3P").css("color","#9DC8C8"),w=0)}),$("#p2ls3P").click(function(){0===k?($("#p2ls3P").css("color","black"),w=0,a=0,w=0,k=1,f=0,u=0,$("#p2wns3P").css("color","#9DC8C8"),$("#p2ws3P").css("color","#9DC8C8"),$("#p2wdt3P").css("color","#9DC8C8"),$("#p2lnss3P").css("color","#9DC8C8"),$("#p2ldt3P").css("color","#9DC8C8")):($("#p2ls3P").css("color","#9DC8C8"),k=0)}),$("#p2lns3P").click(function(){0===f?($("#p2lns3P").css("color","black"),w=0,a=0,w=0,k=0,f=1,u=0,$("#p2wns3P").css("color","#9DC8C8"),$("#p2ws3P").css("color","#9DC8C8"),$("#p2wdt3P").css("color","#9DC8C8"),$("#p2ls3P").css("color","#9DC8C8"),$("#p2ldt3P").css("color","#9DC8C8")):($("#p2lns3P").css("color","#9DC8C8"),f=0)}),$("#p2ldt3P").click(function(){0===u?($("#p2ldt3P").css("color","black"),w=0,a=0,w=0,k=0,f=0,u=1,$("#p2wns3P").css("color","#9DC8C8"),$("#p2ws3P").css("color","#9DC8C8"),$("#p2wdt3P").css("color","#9DC8C8"),$("#p2ls3P").css("color","#9DC8C8"),$("#p2lns3P").css("color","#9DC8C8")):($("#p2ldt3P").css("color","#9DC8C8"),u=0)}),$("#p2au3P").click(function(){0!==B&&1!==B&&2!==B&&3!==B||(B+=1,$("#p2rapcount3P").html(B+" times"))}),$("#p2ad3P").click(function(){1!==B&&2!==B&&3!==B&&4!==B||(B-=1,$("#p2rapcount3P").html(B+" times"))}),$("#p3ws3P").click(function(){0===m?($("#p3ws3P").css("color","black"),m=1,h=0,y=0,b=0,v=0,U=0,$("#p3wns3P").css("color","#9DC8C8"),$("#p3wdt3P").css("color","#9DC8C8"),$("#p3ls3P").css("color","#9DC8C8"),$("#p3lns3P").css("color","#9DC8C8"),$("#p3ldt3P").css("color","#9DC8C8")):($("#p3ws3P").css("color","#9DC8C8"),m=0)}),$("#p3wns3P").click(function(){0===h?($("#p3wns3P").css("color","black"),m=0,h=1,y=0,b=0,v=0,U=0,$("#p3ws3P").css("color","#9DC8C8"),$("#p3wdt3P").css("color","#9DC8C8"),$("#p3ls3P").css("color","#9DC8C8"),$("#p3lns3P").css("color","#9DC8C8"),$("#p3ldt3P").css("color","#9DC8C8")):($("#p3wns3P").css("color","#9DC8C8"),h=0)}),$("#p3wdt3P").click(function(){0===y?($("#p3wdt3P").css("color","black"),y=0,h=0,y=1,b=0,v=0,U=0,$("#p3wns3P").css("color","#9DC8C8"),$("#p3ws3P").css("color","#9DC8C8"),$("#p3ls3P").css("color","#9DC8C8"),$("#p3lns3P").css("color","#9DC8C8"),$("#p3ldt3P").css("color","#9DC8C8")):($("#p3wdt3P").css("color","#9DC8C8"),y=0)}),$("#p3ls3P").click(function(){0===b?($("#p3ls3P").css("color","black"),y=0,h=0,y=0,b=1,v=0,U=0,$("#p3wns3P").css("color","#9DC8C8"),$("#p3ws3P").css("color","#9DC8C8"),$("#p3wdt3P").css("color","#9DC8C8"),$("#p3lnss3P").css("color","#9DC8C8"),$("#p3ldt3P").css("color","#9DC8C8")):($("#p3ls3P").css("color","#9DC8C8"),b=0)}),$("#p3lns3P").click(function(){0===v?($("#p3lns3P").css("color","black"),y=0,h=0,y=0,b=0,v=1,U=0,$("#p3wns3P").css("color","#9DC8C8"),$("#p3ws3P").css("color","#9DC8C8"),$("#p3wdt3P").css("color","#9DC8C8"),$("#p3ls3P").css("color","#9DC8C8"),$("#p3ldt3P").css("color","#9DC8C8")):($("#p3lns3P").css("color","#9DC8C8"),v=0)}),$("#p3ldt3P").click(function(){0===U?($("#p3ldt3P").css("color","black"),y=0,h=0,y=0,b=0,v=0,U=1,$("#p3wns3P").css("color","#9DC8C8"),$("#p3ws3P").css("color","#9DC8C8"),$("#p3wdt3P").css("color","#9DC8C8"),$("#p3ls3P").css("color","#9DC8C8"),$("#p3lns3P").css("color","#9DC8C8")):($("#p3ldt3P").css("color","#9DC8C8"),U=0)}),$("#p3au3P").click(function(){0!==I&&1!==I&&2!==I&&3!==I||(I+=1,$("#p3rapcount3P").html(I+" times"))}),$("#p3ad3P").click(function(){1!==I&&2!==I&&3!==I&&4!==I||(I-=1,$("#p3rapcount3P").html(I+" times"))}),$(".doubler").click(function(){0===d?($(".doubler").css("color","black"),d=1):($(".doubler").css("color","#9DC8C8"),d=0)}),$("#p1pick3P").click(function(){0===o?($("#p1pick3P").css("color","black"),o=1,p=0,C=0,$("#p2pick3P").css("color","#9DC8C8"),$("#p3pick3P").css("color","#9DC8C8"),$("#p1dd3P").slideDown(250),$("#p2dd3P").slideUp(250),$("#p3dd3P").slideUp(250)):($("#p1pick3P").css("color","#9DC8C8"),o=0,$("#p1dd3P").slideUp(250))}),$("#p2pick3P").click(function(){0===p?($("#p2pick3P").css("color","black"),o=0,p=1,C=0,$("#p1pick3P").css("color","#9DC8C8"),$("#p3pick3P").css("color","#9DC8C8"),$("#p2dd3P").slideDown(250),$("#p1dd3P").slideUp(250),$("#p3dd3P").slideUp(250)):($("#p2pick3P").css("color","#9DC8C8"),p=0,$("#p2dd3P").slideUp(250))}),$("#p3pick3P").click(function(){0===C?($("#p3pick3P").css("color","black"),o=0,p=0,C=1,$("#p2pick3P").css("color","#9DC8C8"),$("#p1pick3P").css("color","#9DC8C8"),$("#p3dd3P").slideDown(250),$("#p2dd3P").slideUp(250),$("#p1dd3P").slideUp(250)):($("#p3pick3P").css("color","#9DC8C8"),C=0,$("#p3dd3P").slideUp(250))}),$("#score3P").click(function(){if($("#p1dd3P").is(":visible")){if(1===P)var j=2,q=-1,z=-1;else if(1===r)var j=4,q=-2,z=-2;else if(1===i)var j=6,q=-3,z=-3;else if(1===t)var j=-2,j=1,j=1;else if(1===n)var j=-4,q=2,q=2;else if(1===D)var j=-6,q=3,z=3;0===d&&0===g?(s=j+s,c=q+c,l=z+l,$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l)):(s=j*(2*d+(g+1))+s,c=q*(2*d+(g+1))+c,l=z*(2*d+(g+1))+l,$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l))}else if($("#p2dd3P").is(":visible")){if(1===e)var q=2,j=-1,z=-1;else if(1===a)var q=4,j=-2,z=-2;else if(1===w)var q=6,j=-3,z=-3;else if(1===k)var q=-2,j=1,z=1;else if(1===f)var q=-4,j=2,z=2;else if(1===u)var q=-6,j=3,z=3;0===d&&0===B?(s=j+s,c=q+c,l=z+l,$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l)):(console.log(x=j*(2*d+(B+1))+s),s=j*(2*d+(B+1))+s,c=q*(2*d+(B+1))+c,l=z*(2*d+(B+1))+l,$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l))}else if($("#p3dd3P").is(":visible")){if(1===m)var z=2,j=-1,q=-1;else if(1===h)var z=4,j=-2,q=-2;else if(1===y)var z=6,j=-3,q=-3;else if(1===b)var z=-2,j=1,q=1;else if(1===v)var z=-4,j=2,q=2;else if(1===U)var z=-6,j=3,q=3;0===d&&0===I?(s=j+s,c=q+c,l=z+l,$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l)):(s=j*(2*d+(I+1))+s,c=q*(2*d+(I+1))+c,l=z*(2*d+(I+1))+l,$("#player13P").html(s),$("#player23P").html(c),$("#player33P").html(l))}$(".pick-dropdown").slideUp(250),$(".picker").css("color","#58C9B9"),$(".scoring-attribute").css("color","#58C9B9"),o=0,p=0,C=0,P=0,r=0,i=0,t=0,n=0,D=0,d=0,e=0,a=0,w=0,k=0,f=0,u=0,m=0,h=0,y=0,b=0,v=0,U=0,g=0,B=0,I=0});var x=0,j=0,q=0,z=0;$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z);var A=0,E=0,F=0,G=0,H=0,J=0,K=0,L=0,M=0,N=0,d=0,O=0,Q=0,R=0,S=0,T=0,V=0,W=0,X=0,Y=0,Z=0,_=0,ss=0,cs=0,ls=0,os=0,ps=0,Cs=0,$s=0,Ps=0,rs=0,is=0,ts=0;$("#p1ws4P").click(function(){0===H?($("#p1ws4P").css("color","black"),H=1,J=0,K=0,L=0,M=0,N=0,$("#p1wns4P").css("color","#9DC8C8"),$("#p1wdt4P").css("color","#9DC8C8"),$("#p1ls4P").css("color","#9DC8C8"),$("#p1lns4P").css("color","#9DC8C8"),$("#p1ldt4P").css("color","#9DC8C8")):($("#p1ws4P").css("color","#9DC8C8"),H=0)}),$("#p1wns4P").click(function(){0===J?($("#p1wns4P").css("color","black"),H=0,J=1,K=0,L=0,M=0,N=0,$("#p1ws4P").css("color","#9DC8C8"),$("#p1wdt4P").css("color","#9DC8C8"),$("#p1ls4P").css("color","#9DC8C8"),$("#p1lns4P").css("color","#9DC8C8"),$("#p1ldt4P").css("color","#9DC8C8")):($("#p1wns4P").css("color","#9DC8C8"),J=0)}),$("#p1wdt4P").click(function(){0===K?($("#p1wdt4P").css("color","black"),K=0,J=0,K=1,L=0,M=0,N=0,$("#p1wns4P").css("color","#9DC8C8"),$("#p1ws4P").css("color","#9DC8C8"),$("#p1ls4P").css("color","#9DC8C8"),$("#p1lns4P").css("color","#9DC8C8"),$("#p1ldt4P").css("color","#9DC8C8")):($("#p1wdt4P").css("color","#9DC8C8"),K=0)}),$("#p1ls4P").click(function(){0===L?($("#p1ls4P").css("color","black"),K=0,J=0,K=0,L=1,M=0,N=0,$("#p1wns4P").css("color","#9DC8C8"),$("#p1ws4P").css("color","#9DC8C8"),$("#p1wdt4P").css("color","#9DC8C8"),$("#p1lnss4P").css("color","#9DC8C8"),$("#p1ldt4P").css("color","#9DC8C8")):($("#p1ls4P").css("color","#9DC8C8"),L=0)}),$("#p1lns4P").click(function(){0===M?($("#p1lns4P").css("color","black"),K=0,J=0,K=0,L=0,M=1,N=0,$("#p1wns4P").css("color","#9DC8C8"),$("#p1ws4P").css("color","#9DC8C8"),$("#p1wdt4P").css("color","#9DC8C8"),$("#p1ls4P").css("color","#9DC8C8"),$("#p1ldt4P").css("color","#9DC8C8")):($("#p1lns4P").css("color","#9DC8C8"),M=0)}),$("#p1ldt4P").click(function(){0===N?($("#p1ldt4P").css("color","black"),K=0,J=0,K=0,L=0,M=0,N=1,$("#p1wns4P").css("color","#9DC8C8"),$("#p1ws4P").css("color","#9DC8C8"),$("#p1wdt4P").css("color","#9DC8C8"),$("#p1ls4P").css("color","#9DC8C8"),$("#p1lns4P").css("color","#9DC8C8")):($("#p1ldt4P").css("color","#9DC8C8"),N=0)}),$("#p2ws4P").click(function(){0===O?($("#p2ws4P").css("color","black"),O=1,Q=0,R=0,S=0,T=0,V=0,$("#p2wns4P").css("color","#9DC8C8"),$("#p2wdt4P").css("color","#9DC8C8"),$("#p2ls4P").css("color","#9DC8C8"),$("#p2lns4P").css("color","#9DC8C8"),$("#p2ldt4P").css("color","#9DC8C8")):($("#p2ws4P").css("color","#9DC8C8"),O=0)}),$("#p2wns4P").click(function(){0===Q?($("#p2wns4P").css("color","black"),O=0,Q=1,R=0,S=0,T=0,V=0,$("#p2ws4P").css("color","#9DC8C8"),$("#p2wdt4P").css("color","#9DC8C8"),$("#p2ls4P").css("color","#9DC8C8"),$("#p2lns4P").css("color","#9DC8C8"),$("#p2ldt4P").css("color","#9DC8C8")):($("#p2wns4P").css("color","#9DC8C8"),Q=0)}),$("#p2wdt4P").click(function(){0===R?($("#p2wdt4P").css("color","black"),R=0,Q=0,R=1,S=0,T=0,V=0,$("#p2wns4P").css("color","#9DC8C8"),$("#p2ws4P").css("color","#9DC8C8"),$("#p2ls4P").css("color","#9DC8C8"),$("#p2lns4P").css("color","#9DC8C8"),$("#p2ldt4P").css("color","#9DC8C8")):($("#p2wdt4P").css("color","#9DC8C8"),R=0)}),$("#p2ls4P").click(function(){0===S?($("#p2ls4P").css("color","black"),R=0,Q=0,R=0,S=1,T=0,V=0,$("#p2wns4P").css("color","#9DC8C8"),$("#p2ws4P").css("color","#9DC8C8"),$("#p2wdt4P").css("color","#9DC8C8"),$("#p2lnss4P").css("color","#9DC8C8"),$("#p2ldt4P").css("color","#9DC8C8")):($("#p2ls4P").css("color","#9DC8C8"),S=0)}),$("#p2lns4P").click(function(){0===T?($("#p2lns4P").css("color","black"),R=0,Q=0,R=0,S=0,T=1,V=0,$("#p2wns4P").css("color","#9DC8C8"),$("#p2ws4P").css("color","#9DC8C8"),$("#p2wdt4P").css("color","#9DC8C8"),$("#p2ls4P").css("color","#9DC8C8"),$("#p2ldt4P").css("color","#9DC8C8")):($("#p2lns4P").css("color","#9DC8C8"),T=0)}),$("#p2ldt4P").click(function(){0===V?($("#p2ldt4P").css("color","black"),R=0,Q=0,R=0,S=0,T=0,V=1,$("#p2wns4P").css("color","#9DC8C8"),$("#p2ws4P").css("color","#9DC8C8"),$("#p2wdt4P").css("color","#9DC8C8"),$("#p2ls4P").css("color","#9DC8C8"),$("#p2lns4P").css("color","#9DC8C8")):($("#p2ldt4P").css("color","#9DC8C8"),V=0)}),$("#p3ws4P").click(function(){0===W?($("#p3ws4P").css("color","black"),W=1,X=0,Y=0,Z=0,_=0,ss=0,$("#p3wns4P").css("color","#9DC8C8"),$("#p3wdt4P").css("color","#9DC8C8"),$("#p3ls4P").css("color","#9DC8C8"),$("#p3lns4P").css("color","#9DC8C8"),$("#p3ldt4P").css("color","#9DC8C8")):($("#p3ws4P").css("color","#9DC8C8"),W=0)}),$("#p3wns4P").click(function(){0===X?($("#p3wns4P").css("color","black"),W=0,X=1,Y=0,Z=0,_=0,ss=0,$("#p3ws4P").css("color","#9DC8C8"),$("#p3wdt4P").css("color","#9DC8C8"),$("#p3ls4P").css("color","#9DC8C8"),$("#p3lns4P").css("color","#9DC8C8"),$("#p3ldt4P").css("color","#9DC8C8")):($("#p3wns4P").css("color","#9DC8C8"),X=0)}),$("#p3wdt4P").click(function(){0===Y?($("#p3wdt4P").css("color","black"),Y=0,X=0,Y=1,Z=0,_=0,ss=0,$("#p3wns4P").css("color","#9DC8C8"),$("#p3ws4P").css("color","#9DC8C8"),$("#p3ls4P").css("color","#9DC8C8"),$("#p3lns4P").css("color","#9DC8C8"),$("#p3ldt4P").css("color","#9DC8C8")):($("#p3wdt4P").css("color","#9DC8C8"),Y=0)}),$("#p3ls4P").click(function(){0===Z?($("#p3ls4P").css("color","black"),Y=0,X=0,Y=0,Z=1,_=0,ss=0,$("#p3wns4P").css("color","#9DC8C8"),$("#p3ws4P").css("color","#9DC8C8"),$("#p3wdt4P").css("color","#9DC8C8"),$("#p3lnss4P").css("color","#9DC8C8"),$("#p3ldt4P").css("color","#9DC8C8")):($("#p3ls4P").css("color","#9DC8C8"),Z=0)}),$("#p3lns4P").click(function(){0===_?($("#p3lns4P").css("color","black"),Y=0,X=0,Y=0,Z=0,_=1,ss=0,$("#p3wns4P").css("color","#9DC8C8"),$("#p3ws4P").css("color","#9DC8C8"),$("#p3wdt4P").css("color","#9DC8C8"),$("#p3ls4P").css("color","#9DC8C8"),$("#p3ldt4P").css("color","#9DC8C8")):($("#p3lns4P").css("color","#9DC8C8"),_=0)}),$("#p3ldt4P").click(function(){0===ss?($("#p3ldt4P").css("color","black"),Y=0,X=0,Y=0,Z=0,_=0,ss=1,$("#p3wns4P").css("color","#9DC8C8"),$("#p3ws4P").css("color","#9DC8C8"),$("#p3wdt4P").css("color","#9DC8C8"),$("#p3ls4P").css("color","#9DC8C8"),$("#p3lns4P").css("color","#9DC8C8")):($("#p3ldt4P").css("color","#9DC8C8"),ss=0)}),$("#p4ws4P").click(function(){0===cs?($("#p4ws4P").css("color","black"),cs=1,ls=0,os=0,ps=0,Cs=0,$s=0,$("#p4wns4P").css("color","#9DC8C8"),$("#p4wdt4P").css("color","#9DC8C8"),$("#p4ls4P").css("color","#9DC8C8"),$("#p4lns4P").css("color","#9DC8C8"),$("#p4ldt4P").css("color","#9DC8C8")):($("#p4ws4P").css("color","#9DC8C8"),cs=0)}),$("#p4wns4P").click(function(){0===ls?($("#p4wns4P").css("color","black"),cs=0,ls=1,os=0,ps=0,Cs=0,$s=0,$("#p4ws4P").css("color","#9DC8C8"),$("#p4wdt4P").css("color","#9DC8C8"),$("#p4ls4P").css("color","#9DC8C8"),$("#p4lns4P").css("color","#9DC8C8"),$("#p4ldt4P").css("color","#9DC8C8")):($("#p4wns4P").css("color","#9DC8C8"),ls=0)}),$("#p4wdt4P").click(function(){0===os?($("#p4wdt4P").css("color","black"),os=0,ls=0,os=1,ps=0,Cs=0,$s=0,$("#p4wns4P").css("color","#9DC8C8"),$("#p4ws4P").css("color","#9DC8C8"),$("#p4ls4P").css("color","#9DC8C8"),$("#p4lns4P").css("color","#9DC8C8"),$("#p4ldt4P").css("color","#9DC8C8")):($("#p4wdt4P").css("color","#9DC8C8"),os=0)}),$("#p4ls4P").click(function(){0===ps?($("#p4ls4P").css("color","black"),os=0,ls=0,os=0,ps=1,Cs=0,$s=0,$("#p4wns4P").css("color","#9DC8C8"),$("#p4ws4P").css("color","#9DC8C8"),$("#p4wdt4P").css("color","#9DC8C8"),$("#p4lnss4P").css("color","#9DC8C8"),$("#p4ldt4P").css("color","#9DC8C8")):($("#p4ls4P").css("color","#9DC8C8"),ps=0)}),$("#p4lns4P").click(function(){0===Cs?($("#p4lns4P").css("color","black"),os=0,ls=0,os=0,ps=0,Cs=1,$s=0,$("#p4wns4P").css("color","#9DC8C8"),$("#p4ws4P").css("color","#9DC8C8"),$("#p4wdt4P").css("color","#9DC8C8"),$("#p4ls4P").css("color","#9DC8C8"),$("#p4ldt4P").css("color","#9DC8C8")):($("#p4lns4P").css("color","#9DC8C8"),Cs=0)}),$("#p4ldt4P").click(function(){0===$s?($("#p4ldt4P").css("color","black"),os=0,ls=0,os=0,ps=0,Cs=0,$s=1,$("#p4wns4P").css("color","#9DC8C8"),$("#p4ws4P").css("color","#9DC8C8"),$("#p4wdt4P").css("color","#9DC8C8"),$("#p4ls4P").css("color","#9DC8C8"),$("#p4lns4P").css("color","#9DC8C8")):($("#p4ldt4P").css("color","#9DC8C8"),$s=0)}),$("#p1au4P").click(function(){0!==Ps&&1!==Ps&&2!==Ps&&3!==Ps||(Ps+=1,$("#p1rapcount4P").html(Ps+" times"))}),$("#p1ad4P").click(function(){1!==Ps&&2!==Ps&&3!==Ps&&4!==Ps||(Ps-=1,$("#p1rapcount4P").html(Ps+" times"))}),$("#p2au4P").click(function(){0!==rs&&1!==rs&&2!==rs&&3!==rs||(rs+=1,$("#p2rapcount4P").html(rs+" times"))}),$("#p2ad4P").click(function(){1!==rs&&2!==rs&&3!==rs&&4!==rs||(rs+=-1,$("#p2rapcount4P").html(rs+" times"))}),$("#p3au4P").click(function(){0!==is&&1!==is&&2!==is&&3!==is||(is+=1,$("#p3rapcount4P").html(is+" times"))}),$("#p3ad4P").click(function(){1!==is&&2!==is&&3!==is&&4!==is||(is-=1,$("#p3rapcount4P").html(is+" times"))}),$("#p4au4P").click(function(){0!==ts&&1!==ts&&2!==ts&&3!==ts||(ts+=1,$("#p4rapcount4P").html(ts+" times"))}),$("#p4ad4P").click(function(){1!==ts&&2!==ts&&3!==ts&&4!==ts||(ts-=1,$("#p4rapcount4P").html(ts+" times"))}),$(".doubler4P").click(function(){0===d?($(".doubler4P").css("color","black"),d=1):($(".doubler4P").css("color","#9DC8C8"),d=0)}),$("#p1pick4P").click(function(){0===A?($("#p1pick4P").css("color","black"),A=1,E=0,G=0,F=0,$("#p2pick4P").css("color","#9DC8C8"),$("#p4pick4P").css("color","#9DC8C8"),$("#p3pick4P").css("color","#9DC8C8"),$("#p1dd4P").slideDown(250),$("#p2dd4P").slideUp(250),$("#p3dd4P").slideUp(250),$("#p4dd4P").slideUp(250)):($("#p1pick4P").css("color","#9DC8C8"),A=0,$("#p1dd4P").slideUp(250))}),$("#p2pick4P").click(function(){0===E?($("#p2pick4P").css("color","black"),A=0,E=1,G=0,F=0,$("#p1pick4P").css("color","#9DC8C8"),$("#p4pick4P").css("color","#9DC8C8"),$("#p3pick4P").css("color","#9DC8C8"),$("#p2dd4P").slideDown(250),$("#p1dd4P").slideUp(250),$("#p3dd4P").slideUp(250),$("#p4dd4P").slideUp(250)):($("#p2pick4P").css("color","#9DC8C8"),E=0,$("#p2dd4P").slideUp(250))}),$("#p4pick4P").click(function(){0===G?($("#p4pick4P").css("color","black"),A=0,E=0,G=1,F=0,$("#p2pick4P").css("color","#9DC8C8"),$("#p1pick4P").css("color","#9DC8C8"),$("#p3pick4P").css("color","#9DC8C8"),$("#p4dd4P").slideDown(250),$("#p2dd4P").slideUp(250),$("#p1dd4P").slideUp(250),$("#p3dd4P").slideUp(250)):($("#p4pick4P").css("color","#9DC8C8"),G=0,$("#p4dd4P").slideUp(250))}),$("#p3pick4P").click(function(){0===F?($("#p3pick4P").css("color","black"),A=0,F=1,G=0,E=0,$("#p1pick4P").css("color","#9DC8C8"),$("#p4pick4P").css("color","#9DC8C8"),$("#p2pick4P").css("color","#9DC8C8"),$("#p3dd4P").slideDown(250),$("#p1dd4P").slideUp(250),$("#p2dd4P").slideUp(250),$("#p4dd4P").slideUp(250)):($("#p3pick4P").css("color","#9DC8C8"),F=0,$("#p3dd4P").slideUp(250))}),$("#score4P").click(function(){if($("#p4dd4P").is(":visible")){if(1===cs)var s=3,c=-1,l=-1,o=-1;else if(1===ls)var s=6,c=-2,l=-2,o=-2;else if(1===os)var s=9,c=-3,l=-3,o=-3;else if(1===ps)var s=-3,c=1,l=1,o=1;else if(1===Cs)var s=-6,c=2,l=2,o=2;else if(1===$s)var s=-9,c=3,l=3,o=3;0===d&&0===ts?(x=o+x,j=c+j,q=l+q,z=s+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z),console.log(ts+"times")):(x=o*(2*d+(ts+1))+x,j=c*(2*d+(ts+1))+j,q=l*(2*d+(ts+1))+q,z=s*(2*d+(ts+1))+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z),console.log(ts))}if($("#p2dd4P").is(":visible")){if(1===O)var c=3,o=-1,l=-1,s=-1;else if(1===Q)var c=6,o=-2,l=-2,s=-2;else if(1===R)var c=9,o=-3,l=-3,s=-3;else if(1===S)var c=-3,o=1,l=1,s=1;else if(1===T)var c=-6,o=2,l=2,s=2;else if(1===V)var c=-9,o=3,l=3,s=3;0===d&&0===rs?(x=o+x,j=c+j,q=l+q,z=s+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z)):(x=o*(2*d+(rs+1))+x,j=c*(2*d+(rs+1))+j,q=l*(2*d+(rs+1))+q,z=l*(2*d+(rs+1))+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z))}if($("#p3dd4P").is(":visible")){if(1===W)var l=3,c=-1,o=-1,s=-1;else if(1===X)var l=6,c=-2,o=-2,s=-2;else if(1===Y)var l=9,c=-3,o=-3,s=-3;else if(1===Z)var l=-3,c=1,o=1,s=1;else if(1===_)var l=-6,c=2,o=2,s=2;else if(1===ss)var l=-9,c=3,o=3,s=3;0===d&&0===is?(x=o+x,j=c+j,q=l+q,z=s+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z)):(x=o*(2*d+(is+1))+x,j=c*(2*d+(is+1))+j,q=l*(2*d+(is+1))+q,z=s*(2*d+(is+1))+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z))}if($("#p1dd4P").is(":visible")){if(1===H)var o=3,c=-1,s=-1,l=-1;else if(1===J)var o=6,c=-2,s=-2,l=-2;else if(1===K)var o=9,c=-3,s=-3,l=-3;else if(1===L)var o=-3,c=1,s=1,l=1;else if(1===M)var o=-6,c=2,s=2,l=2;else if(1===N)var o=-9,c=3,s=3,l=3;0===d&&0===Ps?(x=o+x,j=c+j,q=l+q,z=s+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z)):(x=o*(2*d+(Ps+1))+x,j=c*(2*d+(Ps+1))+j,q=l*(2*d+(Ps+1))+q,z=l*(2*d+(Ps+1))+z,$("#player14P").html(x),$("#player24P").html(j),$("#player34P").html(q),$("#player44P").html(z))}$(".pick-dropdown").slideUp(250),$(".picker").css("color","#58C9B9"),$(".scoring-attribute").css("color","#58C9B9"),$("#p1rapcount4P").html(ts),$("#p2rapcount4P").html(rs),$("#p3rapcount4P").html(is),$("#p4rapcount4P").html(ts),A=0,E=0,G=0,F=0,H=0,J=0,K=0,L=0,M=0,N=0,d=0,O=0,Q=0,R=0,S=0,T=0,V=0,W=0,X=0,Y=0,Z=0,_=0,ss=0,cs=0,ls=0,os=0,ps=0,Cs=0,$s=0,Ps=0,rs=0,is=0,ts=0})});