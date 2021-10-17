// Garden Gnome Software - Skin
// Pano2VR 6.1.9/17985
// Filename: FS Sample skin.ggsk
// Generated 2021-10-17T16:59:44

function pano2vrSkin(player,base) {
	player.addVariable('node_visible', 2, true);
	player.addVariable('hs_info_open', 2, false);
	player.addVariable('hs_info_open_m', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('volume_on', 2, false);
	player.addVariable('gallery_vis', 2, false);
	player.addVariable('gallery_img', 1, 0);
	player.addVariable('video', 2, false);
	player.addVariable('audioscript', 2, false);
	player.addVariable('share', 2, false);
	player.addVariable('copied', 1, 0);
	player.addVariable('tour_menu', 2, false);
	player.addVariable('startoverlay', 2, true);
	player.addVariable('mobilemenu', 2, false);
	player.addVariable('mobile_tour_menu', 2, false);
	player.addVariable('mobile_info_menu', 2, false);
	player.addVariable('readmore_mobile', 2, false);
	player.addVariable('gallery_vis_m', 2, false);
	player.addVariable('video_m', 2, false);
	player.addVariable('node_vis_m', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._mobile=document.createElement('div');
		el.ggId="Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile.style[domTransition]='';
				if (me._mobile.ggCurrentLogicStateVisible == 0) {
					me._mobile.style.visibility=(Number(me._mobile.style.opacity)>0||!me._mobile.style.opacity)?'inherit':'hidden';
					me._mobile.ggVisible=true;
				}
				else {
					me._mobile.style.visibility="hidden";
					me._mobile.ggVisible=false;
				}
			}
		}
		me._mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._bottom_shadow=document.createElement('div');
		el.ggId="bottom shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgb(0,0,0); background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottom_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bottom_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._mobile.appendChild(me._bottom_shadow);
		el=me._top_shadow=document.createElement('div');
		el.ggId="top shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgb(0,0,0); background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._top_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._top_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._mobile.appendChild(me._top_shadow);
		el=me._currentnode_m=document.createElement('div');
		els=me._currentnode_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="currentnode_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 18px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px rgba(0, 0, 0, 0.25);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 225px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._currentnode_m.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._currentnode_m.ggUpdateText();
		player.addListener('changenode', function() {
			me._currentnode_m.ggUpdateText();
		});
		el.appendChild(els);
		me._currentnode_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._currentnode_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mobilemenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._currentnode_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._currentnode_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._currentnode_m.style[domTransition]='';
				if (me._currentnode_m.ggCurrentLogicStateVisible == 0) {
					me._currentnode_m.style.visibility="hidden";
					me._currentnode_m.ggVisible=false;
				}
				else {
					me._currentnode_m.style.visibility=(Number(me._currentnode_m.style.opacity)>0||!me._currentnode_m.style.opacity)?'inherit':'hidden';
					me._currentnode_m.ggVisible=true;
				}
			}
		}
		me._currentnode_m.onclick=function (e) {
			player.setVariableValue('node_vis_m', true);
		}
		me._currentnode_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevdown2_m=document.createElement('div');
		els=me._chevdown2_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjxzdmcgeD0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIHdpZHRoPSI1MTJweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGNsYXNzPSIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTY7IiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBvbHlnb24gcG9pbnRzPSIyMjUuODEzLDQ4LjkwNyAxMjgsMTQ2LjcyID'+
			'MwLjE4Nyw0OC45MDcgMCw3OS4wOTMgMTI4LDIwNy4wOTMgMjU2LDc5LjA5MyAgICIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevdown2_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevdown2_m";
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevdown2_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._chevdown2_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._currentnode_m.appendChild(me._chevdown2_m);
		me._mobile.appendChild(me._currentnode_m);
		el=me._nextnode_m=document.createElement('div');
		els=me._nextnode_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiBoZWlnaHQ9IjExMCI+CiA8dGl0bGU+bmV4dG5vZGVfbTwvdGl0bGU+CiA8Zz4KICA8Zz4KICAgPGNpcmNsZSBjeD0iNTUiIGZpbGw9IiM5ZWE2MTUiIHI9IjUwIiBjeT0iNTUiIGZpbGwtb3BhY2l0eT0iMC41MDE5NjEiLz4KICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTU1LDVBNTAsNTAsMCwxLDEsNSw1NSw1MCw1MCwwLDAsMSw1NSw1bTAtNWE1NSw1NSwwLDEsMCw1NSw1NUE1NS4wNjIzLDU1LjA2MjMsMCwwLDAsNTUsMFoiLz4KICA8L2c+CiAgPHBvbHlnb24gcG'+
			'9pbnRzPSI0MS41NTIgMzUuODk2IDYwLjY1NiA1NSA0MS41NTIgNzQuMTA0IDQ3LjQ0OCA4MCA3Mi40NDggNTUgNDcuNDQ4IDMwIDQxLjU1MiAzNS44OTYiIGZpbGw9IiNmZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._nextnode_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._nextnode_m__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTAiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIiBoZWlnaHQ9IjExMCI+CiA8dGl0bGU+bmV4dG5vZGVfbTwvdGl0bGU+CiA8Zz4KICA8Zz4KICAgPGNpcmNsZSBjeD0iNTUiIGZpbGw9IiM5ZWE2MTUiIHI9IjUwIiBjeT0iNTUiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNTUsNUE1MCw1MCwwLDEsMSw1LDU1LDUwLDUwLDAsMCwxLDU1LDVtMC01YTU1LDU1LDAsMSwwLDU1LDU1QTU1LjA2MjMsNTUuMDYyMywwLDAsMCw1NSwwWiIvPgogIDwvZz4KICA8cG9seWdvbiBwb2ludHM9Ij'+
			'QxLjU1MiAzNS44OTYgNjAuNjU2IDU1IDQxLjU1MiA3NC4xMDQgNDcuNDQ4IDgwIDcyLjQ0OCA1NSA0Ny40NDggMzAgNDEuNTUyIDM1Ljg5NiIgZmlsbD0iI2ZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._nextnode_m__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="nextnode_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nextnode_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nextnode_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mobilemenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nextnode_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nextnode_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nextnode_m.style[domTransition]='';
				if (me._nextnode_m.ggCurrentLogicStateVisible == 0) {
					me._nextnode_m.style.visibility="hidden";
					me._nextnode_m.ggVisible=false;
				}
				else {
					me._nextnode_m.style.visibility=(Number(me._nextnode_m.style.opacity)>0||!me._nextnode_m.style.opacity)?'inherit':'hidden';
					me._nextnode_m.ggVisible=true;
				}
			}
		}
		me._nextnode_m.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._nextnode_m.onmouseout=function (e) {
			me._nextnode_m__imga.style.visibility='hidden';
		}
		me._nextnode_m.onmousedown=function (e) {
			me._nextnode_m__imga.style.visibility='inherit';
		}
		me._nextnode_m.onmouseup=function (e) {
			me._nextnode_m__imga.style.visibility='hidden';
		}
		me._nextnode_m.ggUpdatePosition=function (useTransition) {
		}
		me._mobile.appendChild(me._nextnode_m);
		el=me._info_m=document.createElement('div');
		el.ggId="info_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 82px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('mobilemenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_m.style[domTransition]='';
				if (me._info_m.ggCurrentLogicStateVisible == 0) {
					me._info_m.style.visibility="hidden";
					me._info_m.ggVisible=false;
				}
				else {
					me._info_m.style.visibility=(Number(me._info_m.style.opacity)>0||!me._info_m.style.opacity)?'inherit':'hidden';
					me._info_m.ggVisible=true;
				}
			}
		}
		me._info_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_ani_m=document.createElement('div');
		els=me._info_ani_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJlY2dyc2l2bm9hM2wxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KIDxzdHlsZT48IVtDREFUQVsjZWNncnNpdm5vYTNsMl90cyB7YW5pbWF0aW9uOiBlY2dyc2l2bm9hM2wyX3RzX190cyAxMzAwbXMgbGluZWFyIGluZmluaXRlIG5vcm1hbCBmb3J3YXJkc31Aa2V5ZnJhbWVzIGVjZ3JzaXZub2EzbDJfdHNfX3RzIH'+
			'sgMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsNTBweCkgc2NhbGUoMC41MDAwMDAsMC41MDAwMDApfSA3LjY5MjMwOCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsNTBweCkgc2NhbGUoMC41MDAwMDAsMC41MDAwMDApfSA2OS4yMzA3NjklIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LDUwcHgpIHNjYWxlKDAuOTAwMDAwLDAuOTAwMDAwKX0gMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCw1MHB4KSBzY2FsZSgwLjkwMDAwMCwwLjkwMDAwMCl9IH0jZWNncnNpdm5vYTNsMiB7YW5pbWF0aW9uOiBlY2dyc2l2bm9hM2wyX2NfbyAxMzAwbXMgbGluZWFyIGluZmluaXRlIG5v'+
			'cm1hbCBmb3J3YXJkc31Aa2V5ZnJhbWVzIGVjZ3JzaXZub2EzbDJfY19vIHsgMCUge29wYWNpdHk6IDAuNzUwMDAwfSA3LjY5MjMwOCUge29wYWNpdHk6IDAuNzUwMDAwfSA2OS4yMzA3NjklIHtvcGFjaXR5OiAwfSAxMDAlIHtvcGFjaXR5OiAwfSB9XV0+PC9zdHlsZT4KIDxnIGlkPSJlY2dyc2l2bm9hM2wyX3RzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCw1MCkgc2NhbGUoMC41MDAwMDAsMC41MDAwMDApIj4KICA8cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiIGlkPSJlY2dyc2l2bm9hM2wyIiBvcGFjaXR5PSIwLjc1IiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik01MC'+
			'wyQzc2LjUwOTY2OCwyLDk4LDIzLjQ5MDMzMiw5OCw1MEM5OCw3Ni41MDk2NjgsNzYuNTA5NjY4LDk4LDUwLDk4QzIzLjQ5MDMzMiw5OCwyLDc2LjUwOTY2OCwyLDUwQzIuMDI5OTI0LDIzLjUwMjczNywyMy41MDI3MzcsMi4wMjk5MjQsNTAsMk01MCwwQzIyLjM4NTc2MywwLDAsMjIuMzg1NzYzLDAsNTBDMCw3Ny42MTQyMzcsMjIuMzg1NzYzLDEwMCw1MCwxMDBDNzcuNjE0MjM3LDEwMCwxMDAsNzcuNjE0MjM3LDEwMCw1MEMxMDAsMjIuMzg1NzYzLDc3LjYxNDIzNywwLDUwLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTAsLTUwKSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_ani_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_ani_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 82px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_ani_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_ani_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_on') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_ani_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_ani_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_ani_m.style[domTransition]='';
				if (me._info_ani_m.ggCurrentLogicStateVisible == 0) {
					me._info_ani_m.style.visibility="hidden";
					me._info_ani_m.ggVisible=false;
				}
				else {
					me._info_ani_m.style.visibility=(Number(me._info_ani_m.style.opacity)>0||!me._info_ani_m.style.opacity)?'inherit':'hidden';
					me._info_ani_m.ggVisible=true;
				}
			}
		}
		me._info_ani_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info_m.appendChild(me._info_ani_m);
		el=me._info_button_m=document.createElement('div');
		els=me._info_button_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTguNyw3LjdjMC40LDAuNCwwLjYsMC45LDAuNSwxLjVjMCwwLjUtMC4yLDEuMS0wLjUsMS40Yy0wLjgsMC44LTIsMC44LTIuOCwwYzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNC0wLjQtMC42LTAuOS0wLjUtMS40YzAtMC41LDAuMi0xLjEsMC41LTEuNUMxNi42'+
			'LDYuOSwxNy45LDYuOSwxOC43LDcuN0MxOC43LDcuNywxOC43LDcuNywxOC43LDcuN0wxOC43LDcuN3ogTTE1LjYsMTMuMUgxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7djE0aC0zLjRWMTMuMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_button_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._info_button_m__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzlFQTYxNTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTguNyw3LjdjMC40LDAuNCwwLjYsMC45LDAuNSwxLjVjMCwwLjUtMC4yLDEuMS0wLjUsMS40Yy0wLjgsMC44LTIsMC44LTIuOCwwYzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNC0wLjQtMC42LTAuOS0wLjUtMS40YzAtMC41LDAuMi0xLjEsMC41LTEuNUMxNi42'+
			'LDYuOSwxNy45LDYuOSwxOC43LDcuN0MxOC43LDcuNywxOC43LDcuNywxOC43LDcuN0wxOC43LDcuN3ogTTE1LjYsMTMuMUgxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7djE0aC0zLjRWMTMuMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_button_m__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="info_button_m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_button_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_button_m.onclick=function (e) {
			player.setVariableValue('mobile_info_menu', true);
		}
		me._info_button_m.onmouseout=function (e) {
			me._info_button_m__imga.style.visibility='hidden';
		}
		me._info_button_m.onmousedown=function (e) {
			me._info_button_m__imga.style.visibility='inherit';
		}
		me._info_button_m.onmouseup=function (e) {
			me._info_button_m__imga.style.visibility='hidden';
		}
		me._info_button_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info_m.appendChild(me._info_button_m);
		me._mobile.appendChild(me._info_m);
		el=me._mobile_info_menu=document.createElement('div');
		el.ggId="mobile info menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(158,166,21,0.745098);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -101%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_info_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_info_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('mobile_info_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mobile_info_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mobile_info_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mobile_info_menu.style[domTransition]='right 500ms ease 0ms, top 500ms ease 0ms';
				if (me._mobile_info_menu.ggCurrentLogicStatePosition == 0) {
					me._mobile_info_menu.style.right='0%';
					me._mobile_info_menu.style.top='0px';
				}
				else {
					me._mobile_info_menu.style.right='-101%';
					me._mobile_info_menu.style.top='0px';
				}
			}
		}
		me._mobile_info_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._closebox=document.createElement('div');
		el.ggId="closebox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._closebox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closebox.onclick=function (e) {
			if (
				(
					((player.getVariableValue('readmore_mobile') == false)) && 
					((player.getVariableValue('gallery_vis_m') == false)) && 
					((player.getVariableValue('video_m') == false))
				)
			) {
				player.setVariableValue('mobile_info_menu', false);
			}
		}
		me._closebox.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_info_menu.appendChild(me._closebox);
		el=me._mobile_info_txt=document.createElement('div');
		els=me._mobile_info_txt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="mobile info txt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 275px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(42,42,42,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 17px 18px 17px 18px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mobile_info_txt.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile_info_txt.ggUpdateText();
		player.addListener('changenode', function() {
			me._mobile_info_txt.ggUpdateText();
		});
		el.appendChild(els);
		me._mobile_info_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_info_txt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_info_menu.appendChild(me._mobile_info_txt);
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9ea615;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._header.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title0=document.createElement('div');
		els=me._node_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 28px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node_title0.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title0.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._node_title0);
		el=me._shareicon2=document.createElement('div');
		els=me._shareicon2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMuMSwyMC41Yy0wLjksMC0xLjgsMC40LTIuNSwxLjFMMTMuMywxOGMwLjEtMC4zLDAuMS0wLjcsMC0xbDcuMy0zLjVjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMS4zLDEuNC0zLjUsMC4xLTQuOGMtMS4zLTEuNC0zLjUtMS40LTQuOC0w'+
			'LjFjLTAuNywwLjYtMS4xLDEuNS0xLjEsMi41YzAsMC4yLDAsMC4zLDAsMC41bC03LjMsMy41Yy0xLjMtMS40LTMuNS0xLjQtNC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0xLjQsMy41LTAuMSw0LjhjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjFjMCwwLDAuMS0wLjEsMC4xLTAuMWw3LjMsMy42YzAsMC4yLDAsMC4zLDAsMC41YzAsMS45LDEuNSwzLjQsMy40LDMuNHMzLjQtMS41LDMuNC0zLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MyNi41LDIyLDI1LDIwLjUsMjMuMSwyMC41TDIzLjEsMjAuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._shareicon2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._shareicon2__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzlFQTYxNTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMuMSwyMC41Yy0wLjksMC0xLjgsMC40LTIuNSwxLjFMMTMuMywxOGMwLjEtMC4zLDAuMS0wLjcsMC0xbDcuMy0zLjVjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMS4zLDEuNC0zLjUsMC4xLTQuOGMtMS4zLTEuNC0zLjUtMS40LTQuOC0w'+
			'LjFjLTAuNywwLjYtMS4xLDEuNS0xLjEsMi41YzAsMC4yLDAsMC4zLDAsMC41bC03LjMsMy41Yy0xLjMtMS40LTMuNS0xLjQtNC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0xLjQsMy41LTAuMSw0LjhjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjFsMC4xLTAuMWw3LjMsMy42YzAsMC4yLDAsMC4zLDAsMC41YzAsMS45LDEuNSwzLjQsMy40LDMuNHMzLjQtMS41LDMuNC0zLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MyNi41LDIyLDI1LDIwLjUsMjMuMSwyMC41TDIzLjEsMjAuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._shareicon2__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="shareicon2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._shareicon2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shareicon2.onclick=function (e) {
			if (
				(
					((player.getIsMobile() == true))
				)
			) {
				if (navigator.share) {
  navigator.share({
      title: 'FrontStreet Virtual Tour',
      text: 'Check out this virtual experience!',
      url: 'https://sitetour360.com/fs360/',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
			}
		}
		me._shareicon2.onmouseout=function (e) {
			me._shareicon2__imga.style.visibility='hidden';
		}
		me._shareicon2.onmousedown=function (e) {
			me._shareicon2__imga.style.visibility='inherit';
		}
		me._shareicon2.onmouseup=function (e) {
			me._shareicon2__imga.style.visibility='hidden';
		}
		me._shareicon2.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._shareicon2);
		el=me._mute_m=document.createElement('div');
		els=me._mute_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTt9JiN4ZDsKCS5zdDF7ZmlsbDojOWVhNjE1O30mI3hkOwo8L3N0eWxlPgogPHRpdGxlPm11dGUyPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjE3LjUiIHI9IjE3LjUiIGN5PSIxNy41IiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTIyLjUsMTcuNGMwLTEuOS0xLjEtMy42LTIuOC00LjR2Mi40bDIuOCwyLjhWMTcuNHogTTI1LjMsMTcuNGMwLDEtMC4yLDItMC42LDIuOWwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuNCwxLjEtMywxLjEtNC43YzAtNC43'+
			'LTMuMi04LjctNy44LTkuOHYyLjNDMjMsMTAuOSwyNS4zLDE0LDI1LjMsMTcuNHogTTguOSw3LjRMNy41LDguOWw1LjIsNS4ySDcuNXY2LjdoNC40bDUuNiw1LjZ2LTcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQuOCw0LjhjLTAuOCwwLjYtMS42LDEtMi42LDEuM3YyLjNjMS41LTAuMywyLjktMSw0LjEtMmwyLjIsMi4ybDEuNC0xLjRsLTEwLTEwTDguOSw3LjR6IE0xNy41LDguNmwtMi4zLDIuM2wyLjMsMi4zVjguNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._mute_m__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzllYTYxNTt9JiN4ZDsKCS5zdDF7ZmlsbDojZmZmZmZmO30mI3hkOwo8L3N0eWxlPgogPHRpdGxlPm11dGUyPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjE3LjUiIHI9IjE3LjUiIGN5PSIxNy41IiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTIyLjUsMTcuNGMwLTEuOS0xLjEtMy42LTIuOC00LjR2Mi40bDIuOCwyLjhWMTcuNHogTTI1LjMsMTcuNGMwLDEtMC4yLDItMC42LDIuOWwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuNCwxLjEtMywxLjEtNC43YzAtNC43LTMuMi04LjctNy44LTku'+
			'OHYyLjNDMjMsMTAuOSwyNS4zLDE0LDI1LjMsMTcuNHogTTguOSw3LjRMNy41LDguOWw1LjIsNS4ySDcuNXY2LjdoNC40bDUuNiw1LjZ2LTcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQuOCw0LjhjLTAuOCwwLjYtMS42LDEtMi42LDEuM3YyLjNjMS41LTAuMywyLjktMSw0LjEtMmwyLjIsMi4ybDEuNC0xLjRsLTEwLTEwTDguOSw3LjR6IE0xNy41LDguNmwtMi4zLDIuM2wyLjMsMi4zVjguNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute_m__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="mute_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 180px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_on') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mute_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mute_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mute_m.style[domTransition]='';
				if (me._mute_m.ggCurrentLogicStateVisible == 0) {
					me._mute_m.style.visibility=(Number(me._mute_m.style.opacity)>0||!me._mute_m.style.opacity)?'inherit':'hidden';
					me._mute_m.ggVisible=true;
				}
				else {
					me._mute_m.style.visibility="hidden";
					me._mute_m.ggVisible=false;
				}
			}
		}
		me._mute_m.onclick=function (e) {
			player.setVariableValue('volume_on', true);
				player.playSound("_background","1");
		}
		me._mute_m.onmouseout=function (e) {
			me._mute_m__imga.style.visibility='hidden';
		}
		me._mute_m.onmousedown=function (e) {
			me._mute_m__imga.style.visibility='inherit';
		}
		me._mute_m.onmouseup=function (e) {
			me._mute_m__imga.style.visibility='hidden';
		}
		me._mute_m.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._mute_m);
		el=me._vol_m=document.createElement('div');
		els=me._vol_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNy41LDE0LjJ2Ni43aDQuNGw1LjYsNS42VjguNmwtNS42LDUuNkg3LjV6IE0yMi41LDE3LjVjMC0xLjktMS4xLTMuNi0yLjgtNC40djguOSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjQsMjEuMSwyMi41LDE5LjQsMjIuNSwxNy41eiBNMTkuNyw3Ljd2Mi4zYzQuMSwxLjIsNi41LDUu'+
			'NSw1LjIsOS43Yy0wLjcsMi41LTIuNyw0LjUtNS4yLDUuMnYyLjNjNS40LTEuMiw4LjgtNi42LDcuNS0xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI2LjQsMTEuNSwyMy41LDguNiwxOS43LDcuN3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._vol_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._vol_m__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT52b2x1bWUyPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjE3LjUiIGZpbGw9IiM5ZWE2MTUiIHI9IjE3LjUiIGN5PSIxNy41IiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy41LDE0LjE2OXY2LjY2NzVoNC40NDM3TDE3LjUsMjYuMzkyOVY4LjYxMjZMMTEuOTQzNywxNC4xNjlaTTIyLjUwMzUsMTcuNWE0LjgyOTQsNC44Mjk0LDAsMCwwLTIuNzc4Mi00LjQ0MzZ2OC44ODczQTQuODIzOCw0LjgyMz'+
			'gsMCwwLDAsMjIuNTAzNSwxNy41Wk0xOS43MjUzLDcuNzIyM3YyLjMzMzZhNy43NjQ4LDcuNzY0OCwwLDAsMSwwLDE0Ljg4ODJ2Mi4zMzM2YTEwLjAzNTcsMTAuMDM1NywwLDAsMCwwLTE5LjU1NTRaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._vol_m__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="vol_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 180px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vol_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vol_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_on') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vol_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vol_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vol_m.style[domTransition]='';
				if (me._vol_m.ggCurrentLogicStateVisible == 0) {
					me._vol_m.style.visibility=(Number(me._vol_m.style.opacity)>0||!me._vol_m.style.opacity)?'inherit':'hidden';
					me._vol_m.ggVisible=true;
				}
				else {
					me._vol_m.style.visibility="hidden";
					me._vol_m.ggVisible=false;
				}
			}
		}
		me._vol_m.onclick=function (e) {
			player.setVariableValue('volume_on', false);
				player.pauseSound("_background");
		}
		me._vol_m.onmouseout=function (e) {
			me._vol_m__imga.style.visibility='hidden';
		}
		me._vol_m.onmousedown=function (e) {
			me._vol_m__imga.style.visibility='inherit';
		}
		me._vol_m.onmouseup=function (e) {
			me._vol_m__imga.style.visibility='hidden';
		}
		me._vol_m.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._vol_m);
		el=me._gyro_deactive=document.createElement('div');
		els=me._gyro_deactive__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCI+CiA8dGl0bGU+Z3lybyBvZmYzPC90aXRsZT4KIDxnPgogIDxnPgogICA8Y2lyY2xlIGN4PSI1MCIgZmlsbD0iI2ZmZmZmZiIgcj0iNTAiIGN5PSI1MCIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik03LjUsNTBjMC05Ljg0NzcsMjEuMzgtMTUsNDIuNS0xNXM0Mi41LDUuMTUyMyw0Mi41LDE1UzcxLjEyLDY1LDUwLDY1LDcuNSw1OS44NDc3LDcuNSw1MFptNSwwYzAsNC4wNzcxLDE0LjYwODQsMTAsMzcuNS'+
			'wxMHMzNy41LTUuOTIyOSwzNy41LTEwUzcyLjg5MTYsNDAsNTAsNDAsMTIuNSw0NS45MjI5LDEyLjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNDAuNTYxOCw4Ni44MDkzYy05LjkzOTQtMi41NDk1LTEzLjM3OC0yMC4yOTU2LTcuOTk4LTQxLjI4QzM3LjQ5MzUsMjYuMzEsNDcuNTUzLDEyLjg4NzIsNTcuMDI2NywxMi44ODcyYTkuNzI5NCw5LjcyOTQsMCwwLDEsMi40MTIxLjMwMzJjNS4xMTY3LDEuMzEyLDguNjQ5NCw2LjY0MzEsOS45NDcyLDE1LjAxMDgsMS4xNjMzLDcuNS40NzA5LDE2LjgyOTEtMS45NSwyNi4yN1M2MS4xMzI4'+
			'LDcyLjQyMjksNTYuNTA0NCw3OC40Mzc1Yy00LjM2NzcsNS42NzQ4LTkuMDQ4Myw4LjY3NDgtMTMuNTM1Nyw4LjY3NDhBOS43MjExLDkuNzIxMSwwLDAsMSw0MC41NjE4LDg2LjgwOTNabTQuMTI1NC02LjAyNDFjMi4xNjUtLjc2MDgsNC42MzkyLTIuODU4NCw3LjA2MjUtNi4wMDY5LDQuMTQzNS01LjM4NTcsNy42NS0xMy4xMjY5LDkuODczNS0yMS43OTc4czIuODc0NS0xNy4xNDQ2LDEuODMzLTIzLjg1OTRjLS42MDg1LTMuOTI0OC0xLjc2ODItNi45NTQxLTMuMy04LjY2MzFaTTU1LjMxMywxOS4yMTM0QzQ5Ljk1LDIxLjA4NCw0Mi40NjE5LDMxLjA4NzksMzguMzc2LDQ3LjAyYy00LjA4NCwxNS'+
			'45MjgyLTIuMzMzLDI4LjI5OTMsMS40Njc3LDMyLjUyWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNTcuMDI2NiwxMy4zODY1YTkuMTc1MSw5LjE3NTEsMCwwLDEsMi4yODgzLjI4NzhjNC45MTA2LDEuMjU5Myw4LjMxMiw2LjQ0NTMsOS41NzcxLDE0LjYwMywxLjE1MzIsNy40MzQ2LjQ2NDMsMTYuNjkyOC0xLjk0LDI2LjA2ODlTNjAuNjk3MSw3Mi4xNjk0LDU2LjEwODcsNzguMTMyM2MtNC4yNjc0LDUuNTQ0NS04Ljg1MDksOC40OC0xMy4xNCw4LjQ4YTkuMTk1Niw5LjE5NTYsMCwwLDEtMi4yODMyLS4yODcxYy05LjY2My0yLjQ3ODUtMTIuOTQ3Ni0x'+
			'OS45NjI5LTcuNjM3Ni00MC42NzE5QzM3Ljk0NDQsMjYuNTYxOCw0Ny45MywxMy4zODcsNTcuMDI2MiwxMy4zODdNNDAuMTE0Myw4MC41LDU2LjAxMTYsMTguNTAxNGMtNS43NzU3LDEuMTcxNS0xMy44OTU2LDExLjkxNzctMTguMTIsMjguMzkzN1MzNS42MTUsNzYuNjk0LDQwLjExNDMsODAuNW0zLjg3NDIuOTk2OEM0Ni40NCw4MSw0OS4zMDQzLDc4Ljc3NTEsNTIuMTQ2LDc1LjA4MjZjNC4xODQ2LTUuNDM3NSw3LjcyMTctMTMuMjQzMiw5Ljk2MTktMjEuOTc4NXMyLjg5NDUtMTcuMjgsMS44NDI4LTI0LjA2Yy0uNzE0NC00LjYwNDItMi4xNTQ0LTcuOTMyMi00LjA2NDQtOS41NDczbC0xNS44OT'+
			'c4LDYybTEzLjAzNzYtNjkuMTFjLTkuNzAyNCwwLTE5Ljk2MSwxMy41Nzc0LTI0Ljk0NywzMy4wMTgtMi42MDMzLDEwLjE1NDEtMy4yNDYyLDE5Ljk1NzktMS44MSwyNy42MDUzLDEuNDg1Niw3LjkxLDUuMDk2NiwxMi45ODMxLDEwLjE2ODQsMTQuMjg0M2ExMC4yMjgsMTAuMjI4LDAsMCwwLDIuNTMwNy4zMTgzYzQuNjQ4NCwwLDkuNDY2MS0zLjA2NzMsMTMuOTMyMi04Ljg3QzYxLjU2OTEsNzIuNjc1MSw2NS40ODIxLDY0LjEsNjcuOTIsNTQuNTk1MXMzLjEzMzUtMTguOTA1NCwxLjk2LTI2LjQ3Yy0xLjMzLTguNTc3OC00Ljk5NDMtMTQuMDUzNS0xMC4zMTY5LTE1LjQxODVhMTAuMjIzMiwxMC4y'+
			'MjMyLDAsMCwwLTIuNTM2Ny0uMzE5MVpNMzkuNjExMiw3OC40MzQ5Yy0zLjI5ODgtNC44MDcyLTQuNDM3My0xNi45MTQ2LS43NTEyLTMxLjI5MUM0Mi41NDc3LDMyLjc2NSw0OS4zNzIyLDIyLjY5NzYsNTQuNTc3MSwyMC4wNzA2TDM5LjYxMTUsNzguNDM0OVptMjAuNzc3Mi01Ni44N2ExOS4wOTQsMTkuMDk0LDAsMCwxLDIuNTc0MSw3LjYzMjZjMS4wMzE1LDYuNjUuMzgzMywxNS4wNTE2LTEuODIzLDIzLjY1ODVTNTUuNDU3OSw2OS4xNCw1MS4zNTM4LDc0LjQ3MzFhMTkuMTAzLDE5LjEwMywwLDAsMS01LjkzLDUuNDUyOVoiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8L2c+CiAgIDxwYXRoIGZpbG'+
			'w9IiM5ZWE2MTUiIGQ9Ik0xMi41LDUwaC01YzAsOS44NDc3LDIxLjM4LDE1LDQyLjUsMTVzNDIuNS01LjE1MjMsNDIuNS0xNWgtNWMwLDQuMDc3MS0xNC42MDg0LDEwLTM3LjUsMTBTMTIuNSw1NC4wNzcxLDEyLjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNODcuNSw1MGgtMWMwLDIuNjkxNS0xMi40MTgzLDktMzYuNSw5cy0zNi41LTYuMzA4NS0zNi41LTloLTFjMCw0LjA3NzEsMTQuNjA4NCwxMCwzNy41LDEwUzg3LjUsNTQuMDc3MSw4Ny41LDUwWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBk'+
			'PSJNNi41LDUwQzYuNSw2MC45OTMsMjkuMDQ5MSw2Niw1MCw2NnM0My41LTUuMDA3LDQzLjUtMTZoLTFjMCw5Ljg0NzctMjEuMzgsMTUtNDIuNSwxNVM3LjUsNTkuODQ3Nyw3LjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzllYTYxNSIgZD0iTTc0LjYxMDYsNzguNTcxNGw0LjEyMzctNC4xMjM3TDI1LjM4OTQsMjEuNDI4NmwtNC4xMjM3LDQuMTIzN1oiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjUuMzg5NCwyMS40Mjg2LDc4LjczNDMsNzQuNDQ3N2wtNC4xMjM3LDQuMTIzN0wyMS4yNj'+
			'U3LDI1LjU1MjNsNC4xMjM3LTQuMTIzN20tLjAwNDMtMi44MjQxLTEuNDEsMS40MS00LjEyMzcsNC4xMjM3TDE4LjQzMywyNS41NTY2bDEuNDIyOSwxLjQxNDJMNzMuMjAwNyw3OS45OWwxLjQxNDIsMS40MDU1LDEuNDEtMS40MSw0LjEyMzctNC4xMjM3LDEuNDE4NS0xLjQxODUtMS40MjI4LTEuNDE0MkwyNi43OTkzLDIwLjAxbC0xLjQxNDItMS40MDU1WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_deactive__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._gyro_deactive__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCI+CiA8dGl0bGU+Z3lybyBvZmY0PC90aXRsZT4KIDxnPgogIDxnPgogICA8Y2lyY2xlIGN4PSI1MCIgZmlsbD0iIzllYTYxNSIgcj0iNTAiIGN5PSI1MCIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik03LjUsNTBjMC05Ljg0NzcsMjEuMzgtMTUsNDIuNS0xNXM0Mi41LDUuMTUyMyw0Mi41LDE1UzcxLjEyLDY1LDUwLDY1LDcuNSw1OS44NDc3LDcuNSw1MFptNSwwYzAsNC4wNzcxLDE0LjYwODQsMTAsMzcuNS'+
			'wxMHMzNy41LTUuOTIyOSwzNy41LTEwUzcyLjg5MTYsNDAsNTAsNDAsMTIuNSw0NS45MjI5LDEyLjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDAuNTYxOCw4Ni44MDkzYy05LjkzOTQtMi41NDk1LTEzLjM3OC0yMC4yOTU2LTcuOTk4LTQxLjI4QzM3LjQ5MzUsMjYuMzEsNDcuNTUzLDEyLjg4NzIsNTcuMDI2NywxMi44ODcyYTkuNzI5NCw5LjcyOTQsMCwwLDEsMi40MTIxLjMwMzJjNS4xMTY3LDEuMzEyLDguNjQ5NCw2LjY0MzEsOS45NDcyLDE1LjAxMDgsMS4xNjMzLDcuNS40NzA5LDE2LjgyOTEtMS45NSwyNi4yN1M2MS4xMzI4'+
			'LDcyLjQyMjksNTYuNTA0NCw3OC40Mzc1Yy00LjM2NzcsNS42NzQ4LTkuMDQ4Myw4LjY3NDgtMTMuNTM1Nyw4LjY3NDhBOS43MjExLDkuNzIxMSwwLDAsMSw0MC41NjE4LDg2LjgwOTNabTQuMTI1NC02LjAyNDFjMi4xNjUtLjc2MDgsNC42MzkyLTIuODU4NCw3LjA2MjUtNi4wMDY5LDQuMTQzNS01LjM4NTcsNy42NS0xMy4xMjY5LDkuODczNS0yMS43OTc4czIuODc0NS0xNy4xNDQ2LDEuODMzLTIzLjg1OTRjLS42MDg1LTMuOTI0OC0xLjc2ODItNi45NTQxLTMuMy04LjY2MzFaTTU1LjMxMywxOS4yMTM0QzQ5Ljk1LDIxLjA4NCw0Mi40NjE5LDMxLjA4NzksMzguMzc2LDQ3LjAyYy00LjA4NCwxNS'+
			'45MjgyLTIuMzMzLDI4LjI5OTMsMS40Njc3LDMyLjUyWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNTcuMDI2NiwxMy4zODY1YTkuMTc1MSw5LjE3NTEsMCwwLDEsMi4yODgzLjI4NzhjNC45MTA2LDEuMjU5Myw4LjMxMiw2LjQ0NTMsOS41NzcxLDE0LjYwMywxLjE1MzIsNy40MzQ2LjQ2NDMsMTYuNjkyOC0xLjk0LDI2LjA2ODlTNjAuNjk3MSw3Mi4xNjk0LDU2LjEwODcsNzguMTMyM2MtNC4yNjc0LDUuNTQ0NS04Ljg1MDksOC40OC0xMy4xNCw4LjQ4YTkuMTk1Niw5LjE5NTYsMCwwLDEtMi4yODMyLS4yODcxYy05LjY2My0yLjQ3ODUtMTIuOTQ3Ni0x'+
			'OS45NjI5LTcuNjM3Ni00MC42NzE5QzM3Ljk0NDQsMjYuNTYxOCw0Ny45MywxMy4zODcsNTcuMDI2MiwxMy4zODdNNDAuMTE0Myw4MC41LDU2LjAxMTYsMTguNTAxNGMtNS43NzU3LDEuMTcxNS0xMy44OTU2LDExLjkxNzctMTguMTIsMjguMzkzN1MzNS42MTUsNzYuNjk0LDQwLjExNDMsODAuNW0zLjg3NDIuOTk2OEM0Ni40NCw4MSw0OS4zMDQzLDc4Ljc3NTEsNTIuMTQ2LDc1LjA4MjZjNC4xODQ2LTUuNDM3NSw3LjcyMTctMTMuMjQzMiw5Ljk2MTktMjEuOTc4NXMyLjg5NDUtMTcuMjgsMS44NDI4LTI0LjA2Yy0uNzE0NC00LjYwNDItMi4xNTQ0LTcuOTMyMi00LjA2NDQtOS41NDczbC0xNS44OT'+
			'c4LDYybTEzLjAzNzYtNjkuMTFjLTkuNzAyNCwwLTE5Ljk2MSwxMy41Nzc0LTI0Ljk0NywzMy4wMTgtMi42MDMzLDEwLjE1NDEtMy4yNDYyLDE5Ljk1NzktMS44MSwyNy42MDUzLDEuNDg1Niw3LjkxLDUuMDk2NiwxMi45ODMxLDEwLjE2ODQsMTQuMjg0M2ExMC4yMjgsMTAuMjI4LDAsMCwwLDIuNTMwNy4zMTgzYzQuNjQ4NCwwLDkuNDY2MS0zLjA2NzMsMTMuOTMyMi04Ljg3QzYxLjU2OTEsNzIuNjc1MSw2NS40ODIxLDY0LjEsNjcuOTIsNTQuNTk1MXMzLjEzMzUtMTguOTA1NCwxLjk2LTI2LjQ3Yy0xLjMzLTguNTc3OC00Ljk5NDMtMTQuMDUzNS0xMC4zMTY5LTE1LjQxODVhMTAuMjIzMiwxMC4y'+
			'MjMyLDAsMCwwLTIuNTM2Ny0uMzE5MVpNMzkuNjExMiw3OC40MzQ5Yy0zLjI5ODgtNC44MDcyLTQuNDM3My0xNi45MTQ2LS43NTEyLTMxLjI5MUM0Mi41NDc3LDMyLjc2NSw0OS4zNzIyLDIyLjY5NzYsNTQuNTc3MSwyMC4wNzA2TDM5LjYxMTUsNzguNDM0OVptMjAuNzc3Mi01Ni44N2ExOS4wOTQsMTkuMDk0LDAsMCwxLDIuNTc0MSw3LjYzMjZjMS4wMzE1LDYuNjUuMzgzMywxNS4wNTE2LTEuODIzLDIzLjY1ODVTNTUuNDU3OSw2OS4xNCw1MS4zNTM4LDc0LjQ3MzFhMTkuMTAzLDE5LjEwMywwLDAsMS01LjkzLDUuNDUyOVoiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8L2c+CiAgIDxwYXRoIGZpbG'+
			'w9IiNmZmZmZmYiIGQ9Ik0xMi41LDUwaC01YzAsOS44NDc3LDIxLjM4LDE1LDQyLjUsMTVzNDIuNS01LjE1MjMsNDIuNS0xNWgtNWMwLDQuMDc3MS0xNC42MDg0LDEwLTM3LjUsMTBTMTIuNSw1NC4wNzcxLDEyLjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNODcuNSw1MGgtMWMwLDIuNjkxNS0xMi40MTgzLDktMzYuNSw5cy0zNi41LTYuMzA4NS0zNi41LTloLTFjMCw0LjA3NzEsMTQuNjA4NCwxMCwzNy41LDEwUzg3LjUsNTQuMDc3MSw4Ny41LDUwWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBk'+
			'PSJNNi41LDUwQzYuNSw2MC45OTMsMjkuMDQ5MSw2Niw1MCw2NnM0My41LTUuMDA3LDQzLjUtMTZoLTFjMCw5Ljg0NzctMjEuMzgsMTUtNDIuNSwxNVM3LjUsNTkuODQ3Nyw3LjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTc0LjYxMDYsNzguNTcxNGw0LjEyMzctNC4xMjM3TDI1LjM4OTQsMjEuNDI4NmwtNC4xMjM3LDQuMTIzN1oiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNMjUuMzg5NCwyMS40Mjg2LDc4LjczNDMsNzQuNDQ3N2wtNC4xMjM3LDQuMTIzN0wyMS4yNj'+
			'U3LDI1LjU1MjNsNC4xMjM3LTQuMTIzN20tLjAwNDMtMi44MjQxLTEuNDEsMS40MS00LjEyMzcsNC4xMjM3TDE4LjQzMywyNS41NTY2bDEuNDIyOSwxLjQxNDJMNzMuMjAwNyw3OS45OWwxLjQxNDIsMS40MDU1LDEuNDEtMS40MSw0LjEyMzctNC4xMjM3LDEuNDE4NS0xLjQxODUtMS40MjI4LTEuNDE0MkwyNi43OTkzLDIwLjAxbC0xLjQxNDItMS40MDU1WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_deactive__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="gyro deactive";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_deactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_deactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_deactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_deactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_deactive.style[domTransition]='';
				if (me._gyro_deactive.ggCurrentLogicStateVisible == 0) {
					me._gyro_deactive.style.visibility=(Number(me._gyro_deactive.style.opacity)>0||!me._gyro_deactive.style.opacity)?'inherit':'hidden';
					me._gyro_deactive.ggVisible=true;
				}
				else {
					me._gyro_deactive.style.visibility="hidden";
					me._gyro_deactive.ggVisible=false;
				}
			}
		}
		me._gyro_deactive.onclick=function (e) {
			player.setUseGyro(true, false);
		}
		me._gyro_deactive.onmouseout=function (e) {
			me._gyro_deactive__imga.style.visibility='hidden';
		}
		me._gyro_deactive.onmousedown=function (e) {
			me._gyro_deactive__imga.style.visibility='inherit';
		}
		me._gyro_deactive.onmouseup=function (e) {
			me._gyro_deactive__imga.style.visibility='hidden';
		}
		me._gyro_deactive.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._gyro_deactive);
		el=me._gyro_active=document.createElement('div');
		els=me._gyro_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCI+CiA8dGl0bGU+Z3lyby1pbnY8L3RpdGxlPgogPGc+CiAgPGNpcmNsZSBjeD0iNTAiIGZpbGw9IiNmZmZmZmYiIHI9IjUwIiBjeT0iNTAiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik03LjUsNTBjMC05Ljg0NzcsMjEuMzgtMTUsNDIuNS0xNXM0Mi41LDUuMTUyMyw0Mi41LDE1UzcxLjEyLDY1LDUwLDY1LDcuNSw1OS44NDc3LDcuNSw1MFptNSwwYzAsNC4wNzcxLDE0LjYwODQsMTAsMzcuNSwxMHMzNy41LT'+
			'UuOTIyOSwzNy41LTEwUzcyLjg5MTYsNDAsNTAsNDAsMTIuNSw0NS45MjI5LDEyLjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzllYTYxNSIgZD0iTTQwLjU2MTgsODYuODA5M2MtOS45Mzk0LTIuNTQ5NS0xMy4zNzgtMjAuMjk1Ni03Ljk5OC00MS4yOEMzNy40OTM1LDI2LjMxLDQ3LjU1MywxMi44ODcyLDU3LjAyNjcsMTIuODg3MmE5LjcyOTQsOS43Mjk0LDAsMCwxLDIuNDEyMS4zMDMyYzUuMTE2NywxLjMxMiw4LjY0OTQsNi42NDMxLDkuOTQ3MiwxNS4wMTA4LDEuMTYzMyw3LjUuNDcwOSwxNi44MjkxLTEuOTUsMjYuMjdTNjEuMTMyOCw3Mi40MjI5LDU2'+
			'LjUwNDQsNzguNDM3NWMtNC4zNjc3LDUuNjc0OC05LjA0ODMsOC42NzQ4LTEzLjUzNTcsOC42NzQ4QTkuNzIxMSw5LjcyMTEsMCwwLDEsNDAuNTYxOCw4Ni44MDkzWm00LjEyNTQtNi4wMjQxYzIuMTY1LS43NjA4LDQuNjM5Mi0yLjg1ODQsNy4wNjI1LTYuMDA2OSw0LjE0MzUtNS4zODU3LDcuNjUtMTMuMTI2OSw5Ljg3MzUtMjEuNzk3OHMyLjg3NDUtMTcuMTQ0NiwxLjgzMy0yMy44NTk0Yy0uNjA4NS0zLjkyNDgtMS43NjgyLTYuOTU0MS0zLjMtOC42NjMxWk01NS4zMTMsMTkuMjEzNEM0OS45NSwyMS4wODQsNDIuNDYxOSwzMS4wODc5LDM4LjM3Niw0Ny4wMmMtNC4wODQsMTUuOTI4Mi0yLjMzMy'+
			'wyOC4yOTkzLDEuNDY3NywzMi41MloiIGZpbGwtb3BhY2l0eT0iMSIvPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNTcuMDI2NiwxMy4zODY1YTkuMTc1MSw5LjE3NTEsMCwwLDEsMi4yODgzLjI4NzhjNC45MTA2LDEuMjU5Myw4LjMxMiw2LjQ0NTMsOS41NzcxLDE0LjYwMywxLjE1MzIsNy40MzQ2LjQ2NDMsMTYuNjkyOC0xLjk0LDI2LjA2ODlTNjAuNjk3MSw3Mi4xNjk0LDU2LjEwODcsNzguMTMyM2MtNC4yNjc0LDUuNTQ0NS04Ljg1MDksOC40OC0xMy4xNCw4LjQ4YTkuMTk1Niw5LjE5NTYsMCwwLDEtMi4yODMyLS4yODcxYy05LjY2My0yLjQ3ODUtMTIuOTQ3Ni0xOS45NjI5LTcuNjM3'+
			'Ni00MC42NzE5QzM3Ljk0NDQsMjYuNTYxOCw0Ny45MywxMy4zODcsNTcuMDI2MiwxMy4zODdNNDAuMTE0Myw4MC41LDU2LjAxMTYsMTguNTAxNGMtNS43NzU3LDEuMTcxNS0xMy44OTU2LDExLjkxNzctMTguMTIsMjguMzkzN1MzNS42MTUsNzYuNjk0LDQwLjExNDMsODAuNW0zLjg3NDIuOTk2OEM0Ni40NCw4MSw0OS4zMDQzLDc4Ljc3NTEsNTIuMTQ2LDc1LjA4MjZjNC4xODQ2LTUuNDM3NSw3LjcyMTctMTMuMjQzMiw5Ljk2MTktMjEuOTc4NXMyLjg5NDUtMTcuMjgsMS44NDI4LTI0LjA2Yy0uNzE0NC00LjYwNDItMi4xNTQ0LTcuOTMyMi00LjA2NDQtOS41NDczbC0xNS44OTc4LDYybTEzLjAzNz'+
			'YtNjkuMTFjLTkuNzAyNCwwLTE5Ljk2MSwxMy41Nzc0LTI0Ljk0NywzMy4wMTgtMi42MDMzLDEwLjE1NDEtMy4yNDYyLDE5Ljk1NzktMS44MSwyNy42MDUzLDEuNDg1Niw3LjkxLDUuMDk2NiwxMi45ODMxLDEwLjE2ODQsMTQuMjg0M2ExMC4yMjgsMTAuMjI4LDAsMCwwLDIuNTMwNy4zMTgzYzQuNjQ4NCwwLDkuNDY2MS0zLjA2NzMsMTMuOTMyMi04Ljg3QzYxLjU2OTEsNzIuNjc1MSw2NS40ODIxLDY0LjEsNjcuOTIsNTQuNTk1MXMzLjEzMzUtMTguOTA1NCwxLjk2LTI2LjQ3Yy0xLjMzLTguNTc3OC00Ljk5NDMtMTQuMDUzNS0xMC4zMTY5LTE1LjQxODVhMTAuMjIzMiwxMC4yMjMyLDAsMCwwLTIu'+
			'NTM2Ny0uMzE5MVpNMzkuNjExMiw3OC40MzQ5Yy0zLjI5ODgtNC44MDcyLTQuNDM3My0xNi45MTQ2LS43NTEyLTMxLjI5MUM0Mi41NDc3LDMyLjc2NSw0OS4zNzIyLDIyLjY5NzYsNTQuNTc3MSwyMC4wNzA2TDM5LjYxMTUsNzguNDM0OVptMjAuNzc3Mi01Ni44N2ExOS4wOTQsMTkuMDk0LDAsMCwxLDIuNTc0MSw3LjYzMjZjMS4wMzE1LDYuNjUuMzgzMywxNS4wNTE2LTEuODIzLDIzLjY1ODVTNTUuNDU3OSw2OS4xNCw1MS4zNTM4LDc0LjQ3MzFhMTkuMTAzLDE5LjEwMywwLDAsMS01LjkzLDUuNDUyOVoiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDwvZz4KICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPS'+
			'JNMTIuNSw1MGgtNWMwLDkuODQ3NywyMS4zOCwxNSw0Mi41LDE1czQyLjUtNS4xNTIzLDQyLjUtMTVoLTVjMCw0LjA3NzEtMTQuNjA4NCwxMC0zNy41LDEwUzEyLjUsNTQuMDc3MSwxMi41LDUwWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04Ny41LDUwaC0xYzAsMi42OTE1LTEyLjQxODMsOS0zNi41LDlzLTM2LjUtNi4zMDg1LTM2LjUtOWgtMWMwLDQuMDc3MSwxNC42MDg0LDEwLDM3LjUsMTBTODcuNSw1NC4wNzcxLDg3LjUsNTBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTYuNSw1MEM2LjUsNjAu'+
			'OTkzLDI5LjA0OTEsNjYsNTAsNjZzNDMuNS01LjAwNyw0My41LTE2aC0xYzAsOS44NDc3LTIxLjM4LDE1LTQyLjUsMTVTNy41LDU5Ljg0NzcsNy41LDUwWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_active__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		ela=me._gyro_active__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCI+CiA8dGl0bGU+Z3lyby1pbnYyPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjUwIiBmaWxsPSIjOWVhNjE1IiByPSI1MCIgY3k9IjUwIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy41LDUwYzAtOS44NDc3LDIxLjM4LTE1LDQyLjUtMTVzNDIuNSw1LjE1MjMsNDIuNSwxNVM3MS4xMiw2NSw1MCw2NSw3LjUsNTkuODQ3Nyw3LjUsNTBabTUsMGMwLDQuMDc3MSwxNC42MDg0LDEwLDM3LjUsMTBzMzcuNS01Lj'+
			'kyMjksMzcuNS0xMFM3Mi44OTE2LDQwLDUwLDQwLDEyLjUsNDUuOTIyOSwxMi41LDUwWiIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDAuNTYxOCw4Ni44MDkzYy05LjkzOTQtMi41NDk1LTEzLjM3OC0yMC4yOTU2LTcuOTk4LTQxLjI4QzM3LjQ5MzUsMjYuMzEsNDcuNTUzLDEyLjg4NzIsNTcuMDI2NywxMi44ODcyYTkuNzI5NCw5LjcyOTQsMCwwLDEsMi40MTIxLjMwMzJjNS4xMTY3LDEuMzEyLDguNjQ5NCw2LjY0MzEsOS45NDcyLDE1LjAxMDgsMS4xNjMzLDcuNS40NzA5LDE2LjgyOTEtMS45NSwyNi4yN1M2MS4xMzI4LDcyLjQyMjksNTYuNTA0NCw3OC40Mzc1Yy00LjM2Nzcs'+
			'NS42NzQ4LTkuMDQ4Myw4LjY3NDgtMTMuNTM1Nyw4LjY3NDhBOS43MjExLDkuNzIxMSwwLDAsMSw0MC41NjE4LDg2LjgwOTNabTQuMTI1NC02LjAyNDFjMi4xNjUtLjc2MDgsNC42MzkyLTIuODU4NCw3LjA2MjUtNi4wMDY5LDQuMTQzNS01LjM4NTcsNy42NS0xMy4xMjY5LDkuODczNS0yMS43OTc4czIuODc0NS0xNy4xNDQ2LDEuODMzLTIzLjg1OTRjLS42MDg1LTMuOTI0OC0xLjc2ODItNi45NTQxLTMuMy04LjY2MzFaTTU1LjMxMywxOS4yMTM0QzQ5Ljk1LDIxLjA4NCw0Mi40NjE5LDMxLjA4NzksMzguMzc2LDQ3LjAyYy00LjA4NCwxNS45MjgyLTIuMzMzLDI4LjI5OTMsMS40Njc3LDMyLjUyWi'+
			'IvPgogICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNTcuMDI2NiwxMy4zODY1YTkuMTc1MSw5LjE3NTEsMCwwLDEsMi4yODgzLjI4NzhjNC45MTA2LDEuMjU5Myw4LjMxMiw2LjQ0NTMsOS41NzcxLDE0LjYwMywxLjE1MzIsNy40MzQ2LjQ2NDMsMTYuNjkyOC0xLjk0LDI2LjA2ODlTNjAuNjk3MSw3Mi4xNjk0LDU2LjEwODcsNzguMTMyM2MtNC4yNjc0LDUuNTQ0NS04Ljg1MDksOC40OC0xMy4xNCw4LjQ4YTkuMTk1Niw5LjE5NTYsMCwwLDEtMi4yODMyLS4yODcxYy05LjY2My0yLjQ3ODUtMTIuOTQ3Ni0xOS45NjI5LTcuNjM3Ni00MC42NzE5QzM3Ljk0NDQsMjYuNTYxOCw0Ny45MywxMy4zODcs'+
			'NTcuMDI2MiwxMy4zODdNNDAuMTE0Myw4MC41LDU2LjAxMTYsMTguNTAxNGMtNS43NzU3LDEuMTcxNS0xMy44OTU2LDExLjkxNzctMTguMTIsMjguMzkzN1MzNS42MTUsNzYuNjk0LDQwLjExNDMsODAuNW0zLjg3NDIuOTk2OEM0Ni40NCw4MSw0OS4zMDQzLDc4Ljc3NTEsNTIuMTQ2LDc1LjA4MjZjNC4xODQ2LTUuNDM3NSw3LjcyMTctMTMuMjQzMiw5Ljk2MTktMjEuOTc4NXMyLjg5NDUtMTcuMjgsMS44NDI4LTI0LjA2Yy0uNzE0NC00LjYwNDItMi4xNTQ0LTcuOTMyMi00LjA2NDQtOS41NDczbC0xNS44OTc4LDYybTEzLjAzNzYtNjkuMTFjLTkuNzAyNCwwLTE5Ljk2MSwxMy41Nzc0LTI0Ljk0Ny'+
			'wzMy4wMTgtMi42MDMzLDEwLjE1NDEtMy4yNDYyLDE5Ljk1NzktMS44MSwyNy42MDUzLDEuNDg1Niw3LjkxLDUuMDk2NiwxMi45ODMxLDEwLjE2ODQsMTQuMjg0M2ExMC4yMjgsMTAuMjI4LDAsMCwwLDIuNTMwNy4zMTgzYzQuNjQ4NCwwLDkuNDY2MS0zLjA2NzMsMTMuOTMyMi04Ljg3QzYxLjU2OTEsNzIuNjc1MSw2NS40ODIxLDY0LjEsNjcuOTIsNTQuNTk1MXMzLjEzMzUtMTguOTA1NCwxLjk2LTI2LjQ3Yy0xLjMzLTguNTc3OC00Ljk5NDMtMTQuMDUzNS0xMC4zMTY5LTE1LjQxODVhMTAuMjIzMiwxMC4yMjMyLDAsMCwwLTIuNTM2Ny0uMzE5MVpNMzkuNjExMiw3OC40MzQ5Yy0zLjI5ODgtNC44'+
			'MDcyLTQuNDM3My0xNi45MTQ2LS43NTEyLTMxLjI5MUM0Mi41NDc3LDMyLjc2NSw0OS4zNzIyLDIyLjY5NzYsNTQuNTc3MSwyMC4wNzA2TDM5LjYxMTUsNzguNDM0OVptMjAuNzc3Mi01Ni44N2ExOS4wOTQsMTkuMDk0LDAsMCwxLDIuNTc0MSw3LjYzMjZjMS4wMzE1LDYuNjUuMzgzMywxNS4wNTE2LTEuODIzLDIzLjY1ODVTNTUuNDU3OSw2OS4xNCw1MS4zNTM4LDc0LjQ3MzFhMTkuMTAzLDE5LjEwMywwLDAsMS01LjkzLDUuNDUyOVoiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDwvZz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIuNSw1MGgtNWMwLDkuODQ3NywyMS4zOCwxNSw0Mi41LDE1czQyLj'+
			'UtNS4xNTIzLDQyLjUtMTVoLTVjMCw0LjA3NzEtMTQuNjA4NCwxMC0zNy41LDEwUzEyLjUsNTQuMDc3MSwxMi41LDUwWiIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNODcuNSw1MGgtMWMwLDIuNjkxNS0xMi40MTgzLDktMzYuNSw5cy0zNi41LTYuMzA4NS0zNi41LTloLTFjMCw0LjA3NzEsMTQuNjA4NCwxMCwzNy41LDEwUzg3LjUsNTQuMDc3MSw4Ny41LDUwWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik02LjUsNTBDNi41LDYwLjk5MywyOS4wNDkxLDY2LDUwLDY2czQzLjUtNS4wMDcsNDMuNS0xNmgtMWMwLDkuODQ3Ny0yMS4zOCwx'+
			'NS00Mi41LDE1UzcuNSw1OS44NDc3LDcuNSw1MFoiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_active__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="gyro active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_active.style[domTransition]='';
				if (me._gyro_active.ggCurrentLogicStateVisible == 0) {
					me._gyro_active.style.visibility=(Number(me._gyro_active.style.opacity)>0||!me._gyro_active.style.opacity)?'inherit':'hidden';
					me._gyro_active.ggVisible=true;
				}
				else {
					me._gyro_active.style.visibility="hidden";
					me._gyro_active.ggVisible=false;
				}
			}
		}
		me._gyro_active.onclick=function (e) {
			player.setUseGyro(false);
		}
		me._gyro_active.onmouseout=function (e) {
			me._gyro_active__imga.style.visibility='hidden';
		}
		me._gyro_active.onmousedown=function (e) {
			me._gyro_active__imga.style.visibility='inherit';
		}
		me._gyro_active.onmouseup=function (e) {
			me._gyro_active__imga.style.visibility='hidden';
		}
		me._gyro_active.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._gyro_active);
		me._mobile_info_menu.appendChild(me._header);
		el=me._close_info_m=document.createElement('div');
		els=me._close_info_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCI+CiA8dGl0bGU+Y2xvc2UyPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjUwIiBmaWxsPSIjMDAwMDAxIiByPSI1MCIgY3k9IjUwIiBmaWxsLW9wYWNpdHk9IjAiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNODAsMjYuMDY0Myw3My45MzU3LDIwLDUwLDQzLjkzNTcsMjYuMDY0MywyMCwyMCwyNi4wNjQzLDQzLjkzNTcsNTAsMjAsNzMuOTM1NywyNi4wNjQzLDgwLDUwLDU2LjA2NDMsNzMuOTM1Nyw4MCw4MCw3My45MzU3LDU2LjA2NDMsNT'+
			'BaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_info_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close info_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_info_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_info_m.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('readmore_mobile') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._close_info_m.ggCurrentLogicStateSize != newLogicStateSize) {
				me._close_info_m.ggCurrentLogicStateSize = newLogicStateSize;
				me._close_info_m.style[domTransition]='width 0s, height 0s';
				if (me._close_info_m.ggCurrentLogicStateSize == 0) {
					me._close_info_m.style.width='35px';
					me._close_info_m.style.height='35px';
					skin.updateSize(me._close_info_m);
				}
				else {
					me._close_info_m.style.width='25px';
					me._close_info_m.style.height='25px';
					skin.updateSize(me._close_info_m);
				}
			}
		}
		me._close_info_m.onclick=function (e) {
			if (
				(
					((player.getVariableValue('readmore_mobile') == false)) && 
					((player.getVariableValue('gallery_vis_m') == false)) && 
					((player.getVariableValue('video_m') == false))
				)
			) {
				player.setVariableValue('mobile_info_menu', false);
			}
		}
		me._close_info_m.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_info_menu.appendChild(me._close_info_m);
		el=me._cov_logo=document.createElement('div');
		els=me._cov_logo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NzkuMjk2IiB2aWV3Qm94PSIwIDAgODc5LjI5NiA3NDIuNjg0MSIgaGVpZ2h0PSI3NDIuNjg0MSI+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNjI4Ljc0LDBWNTU1LjI4MjFIMjQ5LjEwNzZWMFpNMjk4LjAzNjgsNjcuMjY3NGM3LjU1NTguNTE2MSwxNC43ODkxLS4wNzIsMjEuNDEsMS42Njg1LDE4Ljc0MTgsNC45MjY3LDI2LjgyNTUsMTMuNDEsMjguMjgyNywyNy4zNjA5YTI4MS45MjA3LDI4MS45MjA3LDAsMCwxLDEuODEyMiwyOC44NDY0cS4xOTM5LDE0Ny45OTMzLDAsMjk1Ljk4N2MtLjAxNT'+
			'QsMTEuMTIzLS43NzEsMjIuMjc5NC0xLjg1NTgsMzMuMzU0NC0uNzI0Myw3LjM5NC0yLjIwMjcsMTQuNzI1OC03LjU5LDIwLjY4NTUtNy4wNDIzLDcuNzkwNy0xNS44ODI2LDExLjEyMzQtMjYuMDUxOCwxMS41MDMtNS4yNzE1LjE5NjgtMTAuNTU2NC4wMzQ2LTE1LjkyNDYuMDM0NnYxMS44MzA4aDE1NS4zOTlWNDg2Ljc2MDZjLTQuMjI1NiwwLTguMTg0OS4xNDUxLTEyLjEyODUtLjA0MTgtMy44LS4xOC03Ljc1MTEtLjEyOTMtMTEuMzQ2Ni0xLjE3NDctMTUuNzI1OC00LjU3MjUtMjUuMTAwOS0xMi40OTQ3LTI3LjAyMjYtMjYuNTE0NWEyMDcuNzA2MiwyMDcuNzA2MiwwLDAsMS0xLjk2MjMtMjcu'+
			'MzE4NmMtLjE4NjYtNDguMTYzOC0uMDg3NS05Ni4zMjg5LS4wODc1LTE0NC40OTM0di01LjM2NGMyNS43MTA5LDAsNTAuODg3NC0uODc1MSw3NS45NzI2LjI2MzgsMjEuOTM4MS45OTYsMzAuNzUyOSwxMi45NDQzLDM0LjgwOTEsMzIuMDc3OCwyLjAxMTIsOS40ODY4LDIuNjE4NSwxOS4yNzExLDMuODgzNCwyOS4wOTVoOC44NDgzVjE5My43MDloLTkuMTM2Yy0xLjg2MTYsOS43OTQtMy4xNTE4LDE5LjUwMDctNS42MTA5LDI4LjkwMTctNC45MSwxOC43NzA2LTEzLjUyODIsMzAuNjUyMy0zNi43MzQ2LDMxLjA5NjEtMjMuNTAxNi40NDk0LTQ3LjAxNDQuMzE2LTcwLjUyMjQuNDA1OC0uNDIxOC4wMD'+
			'E2LS44NDUtLjM5NzktMS4yNzU4LS42MTQzVjgwLjEwMzRhNy44NzgyLDcuODc4MiwwLDAsMSwxLjYzMzItLjM4NzVjMzIuODA2My4zMTQsNjUuNjMuMDk2Miw5OC40MTIzLDEuMTY5LDIxLjkyNzEuNzE3NywzOC45MjE4LDExLjAwMDYsNDcuNzUzNCwzMS43NzE1LDUuNDgsMTIuODg5LDkuNTczOSwyNi4zNjc3LDE0LjQ0LDQwLjAwMTdoNC40NjE4VjU2LjAzNjdIMjk4LjAzNjhaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBmaWxsPSIjMmEyYTJhIiBkPSJNMjU4LjM5MzMsNjUzLjA5MjhjMS4xOSwzMC44ODI4LTIxLjE5NTEsNTQuMzItNTMuNjQ2OSw1NC41MjQ1LTMwLjg0NzYuMTk0LTUy'+
			'Ljk3MzMtMjIuMjY0MS01My4wNTYzLTUzLjcxNy0uMDgwNS0zMC40NjQxLDIxLjg1NDYtNTIuODI2LDUxLjI0MTEtNTMuNDc0QzIzNS4wNDA5LDU5OS43MTgxLDI1OC45NjcxLDYyMi40ODQ4LDI1OC4zOTMzLDY1My4wOTI4Wm0tNTMuNDkxLDQ0LjQ1MzdjMjYuMDUxNi4xNCw0My43OTMxLTE3LjUzNDcsNDMuODYtNDMuNjk1NC4wNjQ2LTI1LjE0NTMtMTguMTI1OC00My41MjkyLTQzLjIxLTQzLjY2OTMtMjUuMzc0NS0uMTQxOC00My45OTEyLDE4LjA2Mi00NC4xNTg5LDQzLjE3OTRDMTYxLjIyLDY3OS4zNTc0LDE3OC45OTM0LDY5Ny40MDcyLDIwNC45MDIzLDY5Ny41NDY1WiIvPgogIDxwYXRoIG'+
			'ZpbGw9IiMyYTJhMmEiIGQ9Ik0zNTguOTM2Myw2ODUuMTM3NlY2MTAuMzk0MWMwLTguOTg1LDAtOC45ODUsOS42NS04LjQ4MjVWNzEwLjg2MjVsLTc0LjI2ODgtODUuODZ2ODAuNTc0M2gtOS42MTMyVjU5OC4xM1oiLz4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNjAxLjI5NjYsNjAxLjI2NTFjMTEuNTI4My43NDA3LDIyLjkzMy40MDEzLDMzLjg5MzYsMi40NDQ2LDE0LjIxNzcsMi42NSwyMC4xNTgxLDEyLjMwMjEsMTkuNzgwOSwyOC4zNDktLjI3OTMsMTEuODg3NC03Ljk4NSwyMC40MzUtMjAuODY3OSwyMy4xMjI2LTEuMjk2Ni4yNzA1LTIuNjE1LjQzNzEtNC43MDE4Ljc4bDMxLjQ1Mjks'+
			'NDkuMTI0N2MtOS41OTcxLDEuODI5LTEwLjIsMS42NDI5LTE0Ljg1NzktNS42NTM3LTguMTIxNy0xMi43MjEzLTE2LjI3ODEtMjUuNDIyNi0yNC4xOTU4LTM4LjI3LTIuNTEwOC00LjA3NC01LjIwODctNi44NTIyLTEwLjk0MTMtNC45djQ5LjExMzloLTkuNTYyN1ptOS41NjY5LDQ1LjU1MDhjNy4wNjU2LS4zNDU5LDEzLjY3MjYtLjM1LDIwLjIwMTktMS4wNjQ5LDkuNC0xLjAyODUsMTMuOTktNi41MDQ1LDE0LjU0OTMtMTYuNDg5My40NTA3LTguMDQxNS00LjQyMDgtMTUuMDI1Mi0xMi44MTUxLTE2LjQ3NzctNy4wOTM1LTEuMjI3NS0xNC40MzA2LTEuMDQ3OC0yMS45MzYxLTEuNTA3OFoiIGZpbG'+
			'wtb3BhY2l0eT0iMSIvPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik00MzkuMTE1LDczOC4zOTM0cTIxNi4yMzMsMCw0MzIuNDY2LjA4MTFjMi4wNzE1LjAwMTMsNS45ODQ4LDEuNTIyLDUuOTM1LDEuODI1OS0uNjY5MSw0LjA5LTMuOTg4NSwxLjY3NTgtNS45MTIxLDEuNjc2N3EtNDMyLjY0NjguMjEtODY1LjI5MzUuMDYyM2MtMi4xMDM2LS4wMDA2LTQuMjA2OS0xLjA4NTMtNi4zMS0xLjY2MzcsMi4wNDcxLS42NzM5LDQuMDkzOS0xLjkzNjUsNi4xNDE1LTEuOTM3OHEyMTYuNDg2Ni0uMTM4NSw0MzIuOTczNS0uMDgzOVoiIGZpbGwtb3BhY2l0eT0iMSIvPgogIDxwYXRoIGZpbGw9IiMyYTJh'+
			'MmEiIGQ9Ik04My4zNzM0LDcwNS43ODQ3aC05LjQ1NVY2MDAuOTczMWMxMS42NDk0LjgyNzksMjMuMTc2My42NjQ4LDM0LjMwNSwyLjY5LDEzLjU0LDIuNDYzNywyMC4xMTcyLDEyLjY5MTUsMTkuNzk1OSwyNy40NjEtLjI3LDEyLjM5NzYtOC4xMDc0LDIxLjM0MzEtMjEuMDYyNiwyNC4wNDI4LTEuMy4yNzA5LTIuNTk3LjU1MzYtNC42NzQxLjk5NzEsMTAuNTc1MiwxNi41MTYxLDIwLjk5NTgsMzIuNzkwOCwzMS40MjI4LDQ5LjA3NTMtOC40Nzg5LDIuMzA3My0xMC43MTksMS4zMzEtMTUuMTY4Ni01LjcwODQtOC43OC0xMy44OS0xNy41NDk0LTI3Ljc5NDUtMjYuNzctNDEuMzktMS4yNzUtMS44OC'+
			'01LjA5NDktMi4wMzM2LTguMzkzMS0zLjIyM1ptLS4wODQ0LTU5LjU1MTRjNi4yNjgyLDAsMTIuMDk2LjMxLDE3Ljg3ODktLjA2NzksMTAuMjcyNS0uNjcwNiwxNi4wNTc4LTYuMDU4LDE2LjcyLTE0Ljk2NDQuNzktMTAuNjI3Ni0zLjMwNzMtMTYuNzc1OC0xNC4xOTEtMTguNjYwNS02LjU1MzEtMS4xMzQ4LTEzLjQ2MzEtLjIwODYtMjAuNDA3OC0uMjA4NloiLz4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNjgyLjI4NzQsNjAyLjE3MjRoNTEuMzIxOXY5LjQxMkg2OTIuMTAyOHYzMi4yMTMyaDQxLjQ2NDh2MTAuMzFoLTQxLjM4NXY0Mi4xODM5aDQxLjM3MzN2OS4wNkg2ODIuMjg3NFoiIGZp'+
			'bGwtb3BhY2l0eT0iMSIvPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik03NjYuMDk3Niw2OTYuNDk2OGg0MS4zNTU1VjcwNS40N0g3NTYuMTM1NlY2MDIuMjYyNGg1MS41MjF2OS4yNjY5aC00MS40NHYzMi40MDU5aDQxLjQyODlWNjU0LjMxSDc2Ni4wOTc2WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTUxMS40Niw2MTcuNjA3NGE1MC45MDg1LDUwLjkwODUsMCwwLDAtNS4yMzgxLDIuMzM3NmMtMi41NDU4LDEuNS0zLjgzODIuODIyLTUuNTUyNC0xLjYxODEtNi4zNzQzLTkuMDc0MS0yMi4yNjUxLTEwLjA2MTYtMzAuMDU0NS0yLjEzNzhhMTQuMzY3NS'+
			'wxNC4zNjc1LDAsMCwwLDEuNzYzMywyMS40Njk0YzMuMzE1LDIuNDE2Niw3LjE4ODUsNC4wNjQ4LDEwLjc5OTMsNi4wNzg1LDYuNjUsMy43MDg5LDEzLjgyNTUsNi43MjgsMTkuODM0NSwxMS4yODQzLDE1LjQ2NTksMTEuNzI3MSwxNC4zODY0LDM3LjQwNzMtMS41MzM3LDQ3LjU1MjNhMzMuMiwzMy4yLDAsMCwxLTUwLjE1NzItMjAuNDY2OGw4Ljg5NDQtMy4yMTM4Yy40Nzc0LDEuMjIyOS45ODQ5LDIuMjQ4NSwxLjI4NDcsMy4zMzE2LDQuNTQ1NywxNi40MTg1LDIyLjU4MTUsMTguMjI0MSwzMy43MTMyLDEyLjUsMTEuNjExMi01Ljk3MSwxMi40MTYxLTI0LjA0MTgsMS42MjI1LTMyLjAzODMtNC4z'+
			'MzYtMy4yMTIzLTkuNDEtNS40NDUxLTE0LjIwNDktOC4wMTY4LTQuNjctMi41MDQ5LTkuNjIxNy00LjU0NDQtMTQuMDgyNS03LjM2ODItMTAuMDE4Mi02LjM0Mi0xMy41NDU2LTE1Ljg0NjktMTAuNjk2NC0yNy40NzY0LDIuMjI3Ny05LjA5MjgsMTIuMDU3Mi0xNy4xMDE1LDIyLjIxODEtMTguMTAyNkM0OTQuNjk4Miw2MDAuMjgwOCw1MDYuMDA0NCw2MDUuODYzOCw1MTEuNDYsNjE3LjYwNzRaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8cGF0aCBmaWxsPSIjMmEyYTJhIiBkPSJNMTMuOTM4NCw2NTMuODk2OVY3MDUuNThINC4xOTExVjYwMi4xMTg1aDQ2LjczNFY2MTEuNjJIMTQuMTUxVjY0My45NT'+
			'hoMzYuOXY5LjkzODlaIi8+CiAgPHBhdGggZmlsbD0iIzJhMmEyYSIgZD0iTTQ0MC44MjY0LDYwMS43MjM4djEwLjAzMjloLTIxLjg2djkzLjkxNGgtOS45NTk0VjYxMS43OTUxSDM4Ny42MjEzYTYuNjQ2Miw2LjY0NjIsMCwwLDEtLjU5MTktMS4zOTIxYy0uNTkzMS04LjY3ODktLjU5LTguNjc5MSw4LjExNTgtOC42NzkyWiIvPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01ODIuNTU5LDYwMi4yNjEzVjYxMS40SDU2MC44NzU0djk0LjAyNUg1NTEuMTF2LTkzLjYyOUg1MjkuMTcxMXYtOS41MzQ4WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTg0OC4w'+
			'NTM1LDYxMS42MjUyaC0yMS45MnYtOS4zOEg4NzkuMjk2djkuNDAxMkg4NTcuNjU1NXY5My43NjFoLTkuNjAyWiIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._cov_logo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cov logo";
		el.ggDx=400;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 240px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cov_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cov_logo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('mobile_info_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cov_logo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cov_logo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cov_logo.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me._cov_logo.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._cov_logo.style.bottom='0px';
					me._cov_logo.ggUpdatePosition(true);
				}
				else {
					me._cov_logo.ggDx=400;
					me._cov_logo.style.bottom='0px';
					me._cov_logo.ggUpdatePosition(true);
				}
			}
		}
		me._cov_logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_info_menu.appendChild(me._cov_logo);
		me._mobile.appendChild(me._mobile_info_menu);
		el=me._nodemenu_background=document.createElement('div');
		el.ggId="nodemenu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9ea615;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 101%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodemenu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodemenu_background.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('node_vis_m') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._nodemenu_background.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._nodemenu_background.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._nodemenu_background.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s';
				if (me._nodemenu_background.ggCurrentLogicStatePosition == 0) {
					me._nodemenu_background.style.left='0px';
					me._nodemenu_background.style.top='0%';
				}
				else {
					me._nodemenu_background.style.left='0px';
					me._nodemenu_background.style.top='101%';
				}
			}
		}
		me._nodemenu_background.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width > 600))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodemenu_background.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodemenu_background.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodemenu_background.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, width 0s, height 0s';
				if (me._nodemenu_background.ggCurrentLogicStateSize == 0) {
					me._nodemenu_background.style.width='40%';
					me._nodemenu_background.style.height='100%';
					skin.updateSize(me._nodemenu_background);
				}
				else {
					me._nodemenu_background.style.width='100%';
					me._nodemenu_background.style.height='100%';
					skin.updateSize(me._nodemenu_background);
				}
			}
		}
		me._nodemenu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller_m=document.createElement('div');
		els=me._node_scroller_m__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 1500px;';
		hs+='left : 50%;';
		hs+='margin-left : -150px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 300px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller_m.ggScrollByX = function(diffX) {
			if(!me._node_scroller_m.ggHorScrollVisible || diffX == 0 || me._node_scroller_m.ggHPercentVisible >= 1.0) return;
			me._node_scroller_m.ggScrollPosX = (me._node_scroller_m__horScrollFg.offsetLeft + diffX);
			me._node_scroller_m.ggScrollPosX = Math.max(me._node_scroller_m.ggScrollPosX, 0);
			me._node_scroller_m.ggScrollPosX = Math.min(me._node_scroller_m.ggScrollPosX, me._node_scroller_m__horScrollBg.offsetWidth - me._node_scroller_m__horScrollFg.offsetWidth);
			me._node_scroller_m__horScrollFg.style.left = me._node_scroller_m.ggScrollPosX + 'px';
			me._node_scroller_m__content.style.left = -(Math.round(me._node_scroller_m.ggScrollPosX / me._node_scroller_m.ggHPercentVisible)) + me._node_scroller_m.ggContentLeftOffset + 'px';
			me._node_scroller_m.ggScrollPosXPercent = (me._node_scroller_m__horScrollFg.offsetLeft / me._node_scroller_m__horScrollBg.offsetWidth);
		}
		me._node_scroller_m.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller_m.ggHorScrollVisible || diffX == 0 || me._node_scroller_m.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller_m.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller_m.ggScrollPosX >= me._node_scroller_m__horScrollBg.offsetWidth - me._node_scroller_m__horScrollFg.offsetWidth)) {
					me._node_scroller_m.ggScrollPosX = Math.min(me._node_scroller_m.ggScrollPosX, me._node_scroller_m__horScrollBg.offsetWidth - me._node_scroller_m__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller_m.ggScrollPosX <= 0)) {
					me._node_scroller_m.ggScrollPosX = Math.max(me._node_scroller_m.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller_m__horScrollFg.style.left = me._node_scroller_m.ggScrollPosX + 'px';
			me._node_scroller_m__content.style.left = -(Math.round(me._node_scroller_m.ggScrollPosX / me._node_scroller_m.ggHPercentVisible)) + me._node_scroller_m.ggContentLeftOffset + 'px';
			me._node_scroller_m.ggScrollPosXPercent = (me._node_scroller_m__horScrollFg.offsetLeft / me._node_scroller_m__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller_m.ggScrollByY = function(diffY) {
			if(!me._node_scroller_m.ggVertScrollVisible || diffY == 0 || me._node_scroller_m.ggVPercentVisible >= 1.0) return;
			me._node_scroller_m.ggScrollPosY = (me._node_scroller_m__vertScrollFg.offsetTop + diffY);
			me._node_scroller_m.ggScrollPosY = Math.max(me._node_scroller_m.ggScrollPosY, 0);
			me._node_scroller_m.ggScrollPosY = Math.min(me._node_scroller_m.ggScrollPosY, me._node_scroller_m__vertScrollBg.offsetHeight - me._node_scroller_m__vertScrollFg.offsetHeight);
			me._node_scroller_m__vertScrollFg.style.top = me._node_scroller_m.ggScrollPosY + 'px';
			me._node_scroller_m__content.style.top = -(Math.round(me._node_scroller_m.ggScrollPosY / me._node_scroller_m.ggVPercentVisible)) + me._node_scroller_m.ggContentTopOffset + 'px';
			me._node_scroller_m.ggScrollPosYPercent = (me._node_scroller_m__vertScrollFg.offsetTop / me._node_scroller_m__vertScrollBg.offsetHeight);
		}
		me._node_scroller_m.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller_m.ggVertScrollVisible || diffY == 0 || me._node_scroller_m.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller_m.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller_m.ggScrollPosY >= me._node_scroller_m__vertScrollBg.offsetHeight - me._node_scroller_m__vertScrollFg.offsetHeight)) {
					me._node_scroller_m.ggScrollPosY = Math.min(me._node_scroller_m.ggScrollPosY, me._node_scroller_m__vertScrollBg.offsetHeight - me._node_scroller_m__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller_m.ggScrollPosY <= 0)) {
					me._node_scroller_m.ggScrollPosY = Math.max(me._node_scroller_m.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller_m__vertScrollFg.style.top = me._node_scroller_m.ggScrollPosY + 'px';
			me._node_scroller_m__content.style.top = -(Math.round(me._node_scroller_m.ggScrollPosY / me._node_scroller_m.ggVPercentVisible)) + me._node_scroller_m.ggContentTopOffset + 'px';
			me._node_scroller_m.ggScrollPosYPercent = (me._node_scroller_m__vertScrollFg.offsetTop / me._node_scroller_m__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller_m.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller_m.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller_m.ggHPercentVisible);
					me._node_scroller_m.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller_m.offsetWidth - (me._node_scroller_m.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller_m.offsetWidth - (me._node_scroller_m.ggVertScrollVisible ? 15 : 0))) * me._node_scroller_m.ggHPercentVisible);
					me._node_scroller_m.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller_m.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller_m.ggVPercentVisible);
					me._node_scroller_m.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller_m.offsetHeight - (me._node_scroller_m.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller_m.offsetHeight - (me._node_scroller_m.ggHorScrollVisible ? 15 : 0))) * me._node_scroller_m.ggVPercentVisible);
					me._node_scroller_m.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller_m.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller_m.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller_m__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller_m.ggDragInertiaX *= 0.65;
					me._node_scroller_m.ggDragInertiaY *= 0.65;
					me._node_scroller_m.ggScrollByX(-me._node_scroller_m.ggDragInertiaX);
					me._node_scroller_m.ggScrollByY(-me._node_scroller_m.ggDragInertiaY);
					if (Math.abs(me._node_scroller_m.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller_m.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller_m__content.ontouchend = null;
				me._node_scroller_m__content.ontouchmove = null;
				me._node_scroller_m__content.onpointerup = null;
				me._node_scroller_m__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller_m__content.onpointerup = me._node_scroller_m__content.ontouchend;
		}
			me._node_scroller_m__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._node_scroller_m.ggDragLastX;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller_m.ggDragLastY;
				me._node_scroller_m.ggDragInertiaX = diffX;
				me._node_scroller_m.ggDragInertiaY = diffY;
				me._node_scroller_m.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller_m.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller_m.ggScrollByX(-diffX);
				me._node_scroller_m.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller_m__content.onpointermove = me._node_scroller_m__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller_m__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 935px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller_m__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 935px; background-color: rgba(255,255,255,0.784314); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller_m.ggScrollPosY = 0;
		me._node_scroller_m.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller_m.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller_m.ggDragInertiaY *= 0.65;
					me._node_scroller_m.ggScrollByY(me._node_scroller_m.ggDragInertiaY);
					if (Math.abs(me._node_scroller_m.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller_m.ggDragLastY;
				me._node_scroller_m.ggDragInertiaY = diffY;
				me._node_scroller_m.ggDragLastY = e.clientY;
				me._node_scroller_m.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller_m.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller_m.ggDragInertiaY *= 0.65;
					me._node_scroller_m.ggScrollByY(me._node_scroller_m.ggDragInertiaY);
					if (Math.abs(me._node_scroller_m.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller_m.ggDragLastY;
				me._node_scroller_m.ggDragInertiaY = diffY;
				me._node_scroller_m.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller_m.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller_m.ggScrollHeight;
			if (e.offsetY < me._node_scroller_m.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller_m.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller_m__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller_m.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller_m.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller_m.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller_m.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._node_scroller_m__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller_m.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = 300;
				var contentHeight = 1500;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				me._node_scroller_m__vertScrollBg.style.visibility = 'inherit';
				me._node_scroller_m__vertScrollFg.style.visibility = 'inherit';
				me._node_scroller_m.ggVertScrollVisible = true;
				if(me._node_scroller_m.ggVertScrollVisible) {
					me._node_scroller_m.ggAvailableWidth = me._node_scroller_m.offsetWidth - 15;
					if (me._node_scroller_m.ggHorScrollVisible) {
						me._node_scroller_m.ggAvailableHeight = me._node_scroller_m.offsetHeight - 15;
						me._node_scroller_m.ggAvailableHeightWithScale = me._node_scroller_m.getBoundingClientRect().height - me._node_scroller_m__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller_m__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller_m.ggAvailableHeight = me._node_scroller_m.offsetHeight;
						me._node_scroller_m.ggAvailableHeightWithScale = me._node_scroller_m.getBoundingClientRect().height;
						me._node_scroller_m__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller_m__vertScrollBg.style.height = me._node_scroller_m.ggAvailableHeight + 'px';
					me._node_scroller_m.ggVPercentVisible = contentHeight != 0 ? me._node_scroller_m.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller_m.ggVPercentVisible > 1.0) me._node_scroller_m.ggVPercentVisible = 1.0;
					me._node_scroller_m.ggScrollHeight =  Math.round(me._node_scroller_m__vertScrollBg.offsetHeight * me._node_scroller_m.ggVPercentVisible);
					me._node_scroller_m__vertScrollFg.style.height = me._node_scroller_m.ggScrollHeight + 'px';
					me._node_scroller_m.ggScrollPosY = me._node_scroller_m.ggScrollPosYPercent * me._node_scroller_m.ggAvailableHeight;
					me._node_scroller_m.ggScrollPosY = Math.min(me._node_scroller_m.ggScrollPosY, me._node_scroller_m__vertScrollBg.offsetHeight - me._node_scroller_m__vertScrollFg.offsetHeight);
					me._node_scroller_m__vertScrollFg.style.top = me._node_scroller_m.ggScrollPosY + 'px';
					if (me._node_scroller_m.ggVPercentVisible < 1.0) {
						me._node_scroller_m__content.style.top = -(Math.round(me._node_scroller_m.ggScrollPosY / me._node_scroller_m.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller_m.ggAvailableWidth = me._node_scroller_m.offsetWidth;
					me._node_scroller_m.ggScrollPosY = 0;
					me._node_scroller_m.ggScrollPosYPercent = 0.0;
					me._node_scroller_m__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller_m.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller_m.ggVertScrollVisible) {
					me.updateSize(me._node_scroller_m);
					me._node_scroller_m.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_m=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 480;
		el.ggHeight = 175;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner_m.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner_m.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner_m.ggInstances.length; i++) {
					if (me._node_cloner_m.ggInstances[i]._node_title_m && me._node_cloner_m.ggInstances[i]._node_title_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._node_title_m.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner_m.callChildLogicBlocks_mousedown = function(){
			if(me._node_cloner_m.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner_m.ggInstances.length; i++) {
					if (me._node_cloner_m.ggInstances[i]._overlay_cloner_m && me._node_cloner_m.ggInstances[i]._overlay_cloner_m.logicBlock_backgroundcolor) {
						me._node_cloner_m.ggInstances[i]._overlay_cloner_m.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._node_cloner_m.callChildLogicBlocks_active = function(){
			if(me._node_cloner_m.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner_m.ggInstances.length; i++) {
					if (me._node_cloner_m.ggInstances[i]._active_cloner_m && me._node_cloner_m.ggInstances[i]._active_cloner_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._active_cloner_m.logicBlock_visible();
					}
					if (me._node_cloner_m.ggInstances[i]._unvisited_m && me._node_cloner_m.ggInstances[i]._unvisited_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._unvisited_m.logicBlock_visible();
					}
					if (me._node_cloner_m.ggInstances[i]._visited_m && me._node_cloner_m.ggInstances[i]._visited_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._visited_m.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner_m.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner_m.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner_m.ggInstances.length; i++) {
					if (me._node_cloner_m.ggInstances[i]._unvisited_m && me._node_cloner_m.ggInstances[i]._unvisited_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._unvisited_m.logicBlock_visible();
					}
					if (me._node_cloner_m.ggInstances[i]._visited_m && me._node_cloner_m.ggInstances[i]._visited_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._visited_m.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner_m.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner_m.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner_m.ggInstances.length; i++) {
					if (me._node_cloner_m.ggInstances[i]._node_title_m && me._node_cloner_m.ggInstances[i]._node_title_m.logicBlock_visible) {
						me._node_cloner_m.ggInstances[i]._node_title_m.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_m.ggUpdating == true) return;
			me._node_cloner_m.ggUpdating = true;
			var el=me._node_cloner_m;
			var curNumCols = 0;
			curNumCols = me._node_cloner_m.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_m.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner_m.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner_m.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._node_cloner_m.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_m_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner_m.callChildLogicBlocks_changenode();
			me._node_cloner_m.callChildLogicBlocks_mousedown();
			me._node_cloner_m.callChildLogicBlocks_active();
			me._node_cloner_m.callChildLogicBlocks_changevisitednodes();
			me._node_cloner_m.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner_m.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_m.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_m.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_m.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "menu";
		el.ggId="node_cloner_m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 175px;';
		hs+='left : -10000px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_m.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_m.childNodes.length; i++) {
				var child=me._node_cloner_m.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=(pw*100)/100.0;
				this.ggWidth=w;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
				me._node_cloner_m.ggUpdate();
		}
		me._node_cloner_m.ggNodeChange=function () {
			me._node_cloner_m.ggUpdateConditionNodeChange();
		}
		me._node_scroller_m__content.appendChild(me._node_cloner_m);
		me._nodemenu_background.appendChild(me._node_scroller_m);
		el=me._close_menu_m=document.createElement('div');
		els=me._close_menu_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCI+CiA8dGl0bGU+Y2xvc2UyPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjUwIiBmaWxsPSIjMDAwMDAxIiByPSI1MCIgY3k9IjUwIiBmaWxsLW9wYWNpdHk9IjAiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNODAsMjYuMDY0Myw3My45MzU3LDIwLDUwLDQzLjkzNTcsMjYuMDY0MywyMCwyMCwyNi4wNjQzLDQzLjkzNTcsNTAsMjAsNzMuOTM1NywyNi4wNjQzLDgwLDUwLDU2LjA2NDMsNzMuOTM1Nyw4MCw4MCw3My45MzU3LDU2LjA2NDMsNT'+
			'BaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_menu_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="close menu_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_menu_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_menu_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_vis_m') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_menu_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_menu_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_menu_m.style[domTransition]='';
				if (me._close_menu_m.ggCurrentLogicStateVisible == 0) {
					me._close_menu_m.style.visibility=(Number(me._close_menu_m.style.opacity)>0||!me._close_menu_m.style.opacity)?'inherit':'hidden';
					me._close_menu_m.ggVisible=true;
				}
				else {
					me._close_menu_m.style.visibility="hidden";
					me._close_menu_m.ggVisible=false;
				}
			}
		}
		me._close_menu_m.onclick=function (e) {
			player.setVariableValue('node_vis_m', false);
		}
		me._close_menu_m.ggUpdatePosition=function (useTransition) {
		}
		me._nodemenu_background.appendChild(me._close_menu_m);
		me._mobile.appendChild(me._nodemenu_background);
		me.divSkin.appendChild(me._mobile);
		el=me._desktop=document.createElement('div');
		el.ggId="Desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._desktop.style[domTransition]='';
				if (me._desktop.ggCurrentLogicStateVisible == 0) {
					me._desktop.style.visibility="hidden";
					me._desktop.ggVisible=false;
				}
				else {
					me._desktop.style.visibility=(Number(me._desktop.style.opacity)>0||!me._desktop.style.opacity)?'inherit':'hidden';
					me._desktop.ggVisible=true;
				}
			}
		}
		me._desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2d_overlay=document.createElement('div');
		el.ggId="2d_overlay";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2d_overlay.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2d_overlay.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2d") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2d_overlay.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2d_overlay.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2d_overlay.style[domTransition]='';
				if (me.__2d_overlay.ggCurrentLogicStateVisible == 0) {
					me.__2d_overlay.style.visibility=(Number(me.__2d_overlay.style.opacity)>0||!me.__2d_overlay.style.opacity)?'inherit':'hidden';
					me.__2d_overlay.ggVisible=true;
				}
				else {
					me.__2d_overlay.style.visibility="hidden";
					me.__2d_overlay.ggVisible=false;
				}
			}
		}
		me.__2d_overlay.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._desktop.appendChild(me.__2d_overlay);
		el=me._menu_close=document.createElement('div');
		el.ggId="menu_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.294118);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_close.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_close.ggCurrentLogicStateAlpha == 0) {
					me._menu_close.style.visibility=me._menu_close.ggVisible?'inherit':'hidden';
					me._menu_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_close.style.opacity == 0.0) { me._menu_close.style.visibility="hidden"; } }, 505);
					me._menu_close.style.opacity=0;
				}
			}
		}
		me._menu_close.onmouseover=function (e) {
			if (
				(
					((player.getVariableValue('startoverlay') == false))
				)
			) {
				player.setVariableValue('node_visible', false);
			}
		}
		me._menu_close.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._menu_close);
		el=me._menu_shadow=document.createElement('div');
		el.ggId="menu_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='background: rgb(0,0,0); background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_shadow.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_shadow.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_shadow.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_shadow.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_shadow.ggCurrentLogicStatePosition == 0) {
					me._menu_shadow.style.left='200px';
					me._menu_shadow.style.top='0px';
				}
				else {
					me._menu_shadow.style.left='0px';
					me._menu_shadow.style.top='0px';
				}
			}
		}
		me._menu_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._menu_shadow);
		el=me._menu_open=document.createElement('div');
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 164px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_open.onmouseover=function (e) {
			player.setVariableValue('node_visible', true);
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._menu_open);
		el=me._node_indicator=document.createElement('div');
		el.ggId="node indicator";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_indicator.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_indicator.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._current_next_txt=document.createElement('div');
		el.ggId="current_next_txt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._current_next_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._current_next_txt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getCurrentNode() == "node12"))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._current_next_txt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._current_next_txt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._current_next_txt.style[domTransition]='left 0s, top 0s';
				if (me._current_next_txt.ggCurrentLogicStatePosition == 0) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='25px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 1) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='50px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 2) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='75px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 3) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='100px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 4) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='125px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 5) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='150px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 6) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='175px';
				}
				else if (me._current_next_txt.ggCurrentLogicStatePosition == 7) {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='200px';
				}
				else {
					me._current_next_txt.style.left='10px';
					me._current_next_txt.style.top='0px';
				}
			}
		}
		me._current_next_txt.ggUpdatePosition=function (useTransition) {
		}
		el=me._next_node=document.createElement('div');
		els=me._next_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="next node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._next_node.ggUpdateText=function() {
			var hs=me.ggUserdata.comment;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._next_node.ggUpdateText();
		player.addListener('changenode', function() {
			me._next_node.ggUpdateText();
		});
		el.appendChild(els);
		me._next_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._next_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._next_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._next_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._next_node.style[domTransition]='';
				if (me._next_node.ggCurrentLogicStateVisible == 0) {
					me._next_node.style.visibility="hidden";
					me._next_node.ggVisible=false;
				}
				else {
					me._next_node.style.visibility=(Number(me._next_node.style.opacity)>0||!me._next_node.style.opacity)?'inherit':'hidden';
					me._next_node.ggVisible=true;
				}
			}
		}
		me._next_node.ggUpdatePosition=function (useTransition) {
		}
		me._current_next_txt.appendChild(me._next_node);
		el=me._current_node=document.createElement('div');
		els=me._current_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="current node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._current_node.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._current_node.ggUpdateText();
		player.addListener('changenode', function() {
			me._current_node.ggUpdateText();
		});
		el.appendChild(els);
		me._current_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._current_node.ggUpdatePosition=function (useTransition) {
		}
		me._current_next_txt.appendChild(me._current_node);
		el=me._indicator=document.createElement('div');
		el.ggId="indicator";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9ea615;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 4px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._indicator.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._indicator.ggUpdatePosition=function (useTransition) {
		}
		me._current_next_txt.appendChild(me._indicator);
		me._node_indicator.appendChild(me._current_next_txt);
		me._desktop.appendChild(me._node_indicator);
		el=me._tourtitle=document.createElement('div');
		els=me._tourtitle__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TourTitle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -280px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 285px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px rgba(0, 0, 0, 0.25);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 27px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="FrontStreet Tour";
		el.appendChild(els);
		me._tourtitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tourtitle.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tourtitle.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tourtitle.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tourtitle.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._tourtitle.ggCurrentLogicStatePosition == 0) {
					me._tourtitle.style.left='20px';
					me._tourtitle.style.top='16px';
				}
				else {
					me._tourtitle.style.left='-280px';
					me._tourtitle.style.top='16px';
				}
			}
		}
		me._tourtitle.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._tourtitle);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #9ea615;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -260px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_background.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_background.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_background.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStatePosition == 0) {
					me._menu_background.style.left='0px';
					me._menu_background.style.top='0px';
				}
				else {
					me._menu_background.style.left='-260px';
					me._menu_background.style.top='0px';
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 121px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 255px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			me._node_scroller__content.style.left = -(Math.round(me._node_scroller.ggScrollPosX / me._node_scroller.ggHPercentVisible)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			me._node_scroller__content.style.left = -(Math.round(me._node_scroller.ggScrollPosX / me._node_scroller.ggHPercentVisible)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 5 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 5 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(-me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(-me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaX = diffX;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 935px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 935px; background-color: rgba(255,255,255,0.784314); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._node_scroller__vertScrollBg.style.visibility = 'inherit';
				me._node_scroller__vertScrollFg.style.visibility = 'inherit';
				me._node_scroller.ggVertScrollVisible = true;
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth - 5;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight - 5;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 256;
		el.ggHeight = 122;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._overlay_cloner && me._node_cloner.ggInstances[i]._overlay_cloner.logicBlock_backgroundcolor) {
						me._node_cloner.ggInstances[i]._overlay_cloner.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._overlay_cloner && me._node_cloner.ggInstances[i]._overlay_cloner.logicBlock_backgroundcolor) {
						me._node_cloner.ggInstances[i]._overlay_cloner.logicBlock_backgroundcolor();
					}
					if (me._node_cloner.ggInstances[i]._active_cloner && me._node_cloner.ggInstances[i]._active_cloner.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._active_cloner.logicBlock_visible();
					}
					if (me._node_cloner.ggInstances[i]._unvisited && me._node_cloner.ggInstances[i]._unvisited.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._unvisited.logicBlock_visible();
					}
					if (me._node_cloner.ggInstances[i]._visited && me._node_cloner.ggInstances[i]._visited.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._visited.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._unvisited && me._node_cloner.ggInstances[i]._unvisited.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._unvisited.logicBlock_visible();
					}
					if (me._node_cloner.ggInstances[i]._visited && me._node_cloner.ggInstances[i]._visited.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._visited.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "menu";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 122px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		me._desktop.appendChild(me._menu_background);
		el=me.__360animation_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="360animation Timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 414px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360animation_timer.ggIsActive=function() {
			return (me.__360animation_timer.ggTimestamp + me.__360animation_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__360animation_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("360") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__360animation_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__360animation_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__360animation_timer.style[domTransition]='';
				if (me.__360animation_timer.ggCurrentLogicStateVisible == 0) {
					me.__360animation_timer.style.visibility=(Number(me.__360animation_timer.style.opacity)>0||!me.__360animation_timer.style.opacity)?'inherit':'hidden';
					me.__360animation_timer.ggVisible=true;
				}
				else {
					me.__360animation_timer.style.visibility="hidden";
					me.__360animation_timer.ggVisible=false;
				}
			}
		}
		me.__360animation_timer.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me.__360animation.style[domTransition]='none';
			} else {
				me.__360animation.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__360animation.style.opacity='0';
			me.__360animation.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._text_360.style[domTransition]='none';
			} else {
				me._text_360.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._text_360.style.opacity='0';
			me._text_360.style.visibility='hidden';
		}
		me.__360animation_timer.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me.__360animation_timer);
		el=me._nextnode=document.createElement('div');
		el.ggId="nextnode";
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(52,52,52,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nextnode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nextnode.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nextnode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nextnode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nextnode.style[domTransition]='';
				if (me._nextnode.ggCurrentLogicStateVisible == 0) {
					me._nextnode.style.visibility=(Number(me._nextnode.style.opacity)>0||!me._nextnode.style.opacity)?'inherit':'hidden';
					me._nextnode.ggVisible=true;
				}
				else {
					me._nextnode.style.visibility="hidden";
					me._nextnode.ggVisible=false;
				}
			}
		}
		me._nextnode.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
			if (
				(
					((me.ggUserdata.customnodeid == "splash"))
				)
			) {
				player.openNext("{node11}","");
			}
		}
		me._nextnode.onmouseover=function (e) {
			me.elementMouseOver['nextnode']=true;
			me._nextnodesvg.logicBlock_scaling();
		}
		me._nextnode.onmouseout=function (e) {
			me.elementMouseOver['nextnode']=false;
			me._nextnodesvg.logicBlock_scaling();
		}
		me._nextnode.ontouchend=function (e) {
			me.elementMouseOver['nextnode']=false;
			me._nextnodesvg.logicBlock_scaling();
		}
		me._nextnode.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._nextnodesvg=document.createElement('div');
		els=me._nextnodesvg__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEiIHZpZXdCb3g9IjAgMCAxMDEgMTAxIiBoZWlnaHQ9IjEwMSI+CiA8dGl0bGU+bmV4dDE8L3RpdGxlPgogPGc+CiAgPGNpcmNsZSBjeD0iNTAuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDAwMDAxIiByPSI1MCIgb3BhY2l0eT0iMC41IiBjeT0iNTAuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTU5LjYzNDMsMzEuNjAyMmExLjk1MTMsMS45NTEzLDAsMCwwLTIuNzcyNywyLjc0NjRMNzAuOTE3MSw0OC40MDIxSDI0LjU0MTNhMS45MzQzLDEuOTM0MywwLDAsMC'+
			'0xLjk0NTIsMS45NDUxLDEuOTYwNSwxLjk2MDUsMCwwLDAsMS45NDUyLDEuOTY5NEg3MC45MTcxTDU2Ljg2MTYsNjYuMzM3MWExLjk5MTcsMS45OTE3LDAsMCwwLDAsMi43NzI2LDEuOTQzNSwxLjk0MzUsMCwwLDAsMi43NzI3LDBsMTcuMzgtMTcuMzhhMS45MDI0LDEuOTAyNCwwLDAsMCwwLTIuNzM3OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._nextnodesvg__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._nextnodesvg__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEiIHZpZXdCb3g9IjAgMCAxMDEgMTAxIiBoZWlnaHQ9IjEwMSI+CiA8dGl0bGU+bmV4dDI8L3RpdGxlPgogPGc+CiAgPGNpcmNsZSBjeD0iNTAuNSIgc3Ryb2tlPSIjOWVhNjE1IiBmaWxsPSIjZmZmZmZmIiByPSI1MCIgY3k9IjUwLjUiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAuNzg0MzE0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNTkuNjM0MywzMS42MDIyYTEuOTUxMywxLjk1MTMsMCwwLDAtMi43NzI3LDIuNzQ2NEw3MC45MTcxLD'+
			'Q4LjQwMjFIMjQuNTQxM2ExLjkzNDMsMS45MzQzLDAsMCwwLTEuOTQ1MiwxLjk0NTEsMS45NjA1LDEuOTYwNSwwLDAsMCwxLjk0NTIsMS45Njk0SDcwLjkxNzFMNTYuODYxNiw2Ni4zMzcxYTEuOTkxNywxLjk5MTcsMCwwLDAsMCwyLjc3MjYsMS45NDM1LDEuOTQzNSwwLDAsMCwyLjc3MjcsMGwxNy4zOC0xNy4zOGExLjkwMjQsMS45MDI0LDAsMCwwLDAtMi43Mzc4WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._nextnodesvg__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._nextnodesvg__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEiIHZpZXdCb3g9IjAgMCAxMDEgMTAxIiBoZWlnaHQ9IjEwMSI+CiA8dGl0bGU+bmV4dDI8L3RpdGxlPgogPGc+CiAgPGNpcmNsZSBjeD0iNTAuNSIgc3Ryb2tlPSIjOWVhNjE1IiBmaWxsPSIjZmZmZmZmIiByPSI1MCIgY3k9IjUwLjUiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik01OS42MzQzLDMxLjYwMjJhMS45NTEzLDEuOTUxMywwLDAsMC0yLjc3MjcsMi43NDY0TDcwLjkxNzEsNDguNDAyMU'+
			'gyNC41NDEzYTEuOTM0MywxLjkzNDMsMCwwLDAtMS45NDUyLDEuOTQ1MSwxLjk2MDUsMS45NjA1LDAsMCwwLDEuOTQ1MiwxLjk2OTRINzAuOTE3MUw1Ni44NjE2LDY2LjMzNzFhMS45OTE3LDEuOTkxNywwLDAsMCwwLDIuNzcyNiwxLjk0MzUsMS45NDM1LDAsMCwwLDIuNzcyNywwbDE3LjM4LTE3LjM4YTEuOTAyNCwxLjkwMjQsMCwwLDAsMC0yLjczNzhaIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._nextnodesvg__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="nextnodeSvg";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nextnodesvg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nextnodesvg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['nextnode'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._nextnodesvg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._nextnodesvg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._nextnodesvg.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._nextnodesvg.ggCurrentLogicStateScaling == 0) {
					me._nextnodesvg.ggParameter.sx = 1.1;
					me._nextnodesvg.ggParameter.sy = 1.1;
					me._nextnodesvg.style[domTransform]=parameterToTransform(me._nextnodesvg.ggParameter);
				}
				else {
					me._nextnodesvg.ggParameter.sx = 1;
					me._nextnodesvg.ggParameter.sy = 1;
					me._nextnodesvg.style[domTransform]=parameterToTransform(me._nextnodesvg.ggParameter);
				}
			}
		}
		me._nextnodesvg.onmouseover=function (e) {
			me._nextnodesvg__img.style.visibility='hidden';
			me._nextnodesvg__imgo.style.visibility='inherit';
		}
		me._nextnodesvg.onmouseout=function (e) {
			me._nextnodesvg__img.style.visibility='inherit';
			me._nextnodesvg__imgo.style.visibility='hidden';
			me._nextnodesvg__imga.style.visibility='hidden';
		}
		me._nextnodesvg.onmousedown=function (e) {
			me._nextnodesvg__imga.style.visibility='inherit';
			me._nextnodesvg__imgo.style.visibility='hidden';
		}
		me._nextnodesvg.onmouseup=function (e) {
			me._nextnodesvg__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._nextnodesvg__img.style.visibility='inherit';
			} else {
				me._nextnodesvg__imgo.style.visibility='inherit';
			}
		}
		me._nextnodesvg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nextnode.appendChild(me._nextnodesvg);
		el=me._next_node_txt=document.createElement('div');
		els=me._next_node_txt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="next node txt";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 3px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._next_node_txt.ggUpdateText=function() {
			var hs=me.ggUserdata.comment;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._next_node_txt.ggUpdateText();
		player.addListener('changenode', function() {
			me._next_node_txt.ggUpdateText();
		});
		el.appendChild(els);
		me._next_node_txt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._next_node_txt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nextnode.appendChild(me._next_node_txt);
		me._desktop.appendChild(me._nextnode);
		el=me._info_button=document.createElement('div');
		els=me._info_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT5pbmZvMTwvdGl0bGU+CiA8Zz4KICA8Y2lyY2xlIGN4PSIxNy41IiBmaWxsPSIjMDEwMTAyIiByPSIxNy41IiBvcGFjaXR5PSIwLjI1IiBjeT0iMTcuNSIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOC42NTU2LDcuNjk1NWEyLjAzNTQsMi4wMzU0LDAsMCwxLC41NDg5LDEuNDY0LDIsMiwwLDAsMS0uNTQ4OSwxLjQzNzgsMS45NTY2LDEuOTU2NiwwLDAsMS0yLjc3MTMsMEExLjk5OTIsMS45OTkyLDAsMCwxLDE1LjMzNTEsOS4xNm'+
			'EyLjAzNDQsMi4wMzQ0LDAsMCwxLC41NDkyLTEuNDY0LDEuOTU2NiwxLjk1NjYsMCwwLDEsMi43NzEzLDBabS0zLjA1OSw1LjQzNzhoMy4zOTg1VjI3LjEySDE1LjU5NjZaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTguNyw3LjdjMC40LDAuNCwwLjYsMC45LDAuNSwxLjVjMCwwLjUtMC4yLDEuMS0wLjUsMS40Yy0wLjgsMC44LTIsMC44LTIuOCwwYzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNC0wLjQtMC42LTAuOS0wLjUtMS40YzAtMC41LDAuMi0xLjEsMC41LTEuNUMxNi42'+
			'LDYuOSwxNy45LDYuOSwxOC43LDcuN0MxOC43LDcuNywxOC43LDcuNywxOC43LDcuN0wxOC43LDcuN3ogTTE1LjYsMTMuMUgxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7djE0aC0zLjRWMTMuMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._info_button__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzlFQTYxNTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTguNyw3LjdjMC40LDAuNCwwLjYsMC45LDAuNSwxLjVjMCwwLjUtMC4yLDEuMS0wLjUsMS40Yy0wLjgsMC44LTIsMC44LTIuOCwwYzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNC0wLjQtMC42LTAuOS0wLjUtMS40YzAtMC41LDAuMi0xLjEsMC41LTEuNUMxNi42'+
			'LDYuOSwxNy45LDYuOSwxOC43LDcuN0MxOC43LDcuNywxOC43LDcuNywxOC43LDcuN0wxOC43LDcuN3ogTTE1LjYsMTMuMUgxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7djE0aC0zLjRWMTMuMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_button__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="info_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_button.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['info_button'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info_button.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info_button.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info_button.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._info_button.ggCurrentLogicStateScaling == 0) {
					me._info_button.ggParameter.sx = 1.25;
					me._info_button.ggParameter.sy = 1.25;
					me._info_button.style[domTransform]=parameterToTransform(me._info_button.ggParameter);
				}
				else {
					me._info_button.ggParameter.sx = 1;
					me._info_button.ggParameter.sy = 1;
					me._info_button.style[domTransform]=parameterToTransform(me._info_button.ggParameter);
				}
			}
		}
		me._info_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_button.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._info_button.ggCurrentLogicStateVisible == 0) {
					me._info_button.style.visibility=(Number(me._info_button.style.opacity)>0||!me._info_button.style.opacity)?'inherit':'hidden';
					me._info_button.ggVisible=true;
				}
				else {
					me._info_button.style.visibility="hidden";
					me._info_button.ggVisible=false;
				}
			}
		}
		me._info_button.onclick=function (e) {
			player.setVariableValue('audioscript', !player.getVariableValue('audioscript'));
		}
		me._info_button.onmouseover=function (e) {
			me._info_button__img.style.visibility='hidden';
			me._info_button__imgo.style.visibility='inherit';
			me.elementMouseOver['info_button']=true;
			me._info_button.logicBlock_scaling();
		}
		me._info_button.onmouseout=function (e) {
			me._info_button__img.style.visibility='inherit';
			me._info_button__imgo.style.visibility='hidden';
			me._info_button__imga.style.visibility='hidden';
			me.elementMouseOver['info_button']=false;
			me._info_button.logicBlock_scaling();
		}
		me._info_button.onmousedown=function (e) {
			me._info_button__imga.style.visibility='inherit';
			me._info_button__imgo.style.visibility='hidden';
		}
		me._info_button.onmouseup=function (e) {
			me._info_button__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._info_button__img.style.visibility='inherit';
			} else {
				me._info_button__imgo.style.visibility='inherit';
			}
		}
		me._info_button.ontouchend=function (e) {
			me.elementMouseOver['info_button']=false;
			me._info_button.logicBlock_scaling();
		}
		me._info_button.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._info_button);
		el=me._mute_button=document.createElement('div');
		el.ggId="mute_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute_button.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['mute_button'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mute_button.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mute_button.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mute_button.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._mute_button.ggCurrentLogicStateScaling == 0) {
					me._mute_button.ggParameter.sx = 1.25;
					me._mute_button.ggParameter.sy = 1.25;
					me._mute_button.style[domTransform]=parameterToTransform(me._mute_button.ggParameter);
				}
				else {
					me._mute_button.ggParameter.sx = 1;
					me._mute_button.ggParameter.sy = 1;
					me._mute_button.style[domTransform]=parameterToTransform(me._mute_button.ggParameter);
				}
			}
		}
		me._mute_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mute_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mute_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mute_button.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._mute_button.ggCurrentLogicStateVisible == 0) {
					me._mute_button.style.visibility=(Number(me._mute_button.style.opacity)>0||!me._mute_button.style.opacity)?'inherit':'hidden';
					me._mute_button.ggVisible=true;
				}
				else {
					me._mute_button.style.visibility="hidden";
					me._mute_button.ggVisible=false;
				}
			}
		}
		me._mute_button.onmouseover=function (e) {
			me.elementMouseOver['mute_button']=true;
			me._mute_button.logicBlock_scaling();
		}
		me._mute_button.onmouseout=function (e) {
			me.elementMouseOver['mute_button']=false;
			me._mute_button.logicBlock_scaling();
		}
		me._mute_button.ontouchend=function (e) {
			me.elementMouseOver['mute_button']=false;
			me._mute_button.logicBlock_scaling();
		}
		me._mute_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._pause_audio=document.createElement('div');
		els=me._pause_audio__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT52b2x1bWU8L3RpdGxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgZmlsbD0iIzAxMDEwMiIgcj0iMTcuNSIgb3BhY2l0eT0iMC4yNSIgY3k9IjE3LjUiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy41LDE0LjE2OXY2LjY2NzVoNC40NDM3TDE3LjUsMjYuMzkyOVY4LjYxMjZMMTEuOTQzNywxNC4xNjlaTTIyLjUwMzUsMTcuNWE0LjgyOTQsNC44Mjk0LDAsMCwwLTIuNzc4Mi00LjQ0MzZ2OC44ODczQTQuODIzOCw0LjgyMzgsMC'+
			'wwLDAsMjIuNTAzNSwxNy41Wk0xOS43MjUzLDcuNzIyM3YyLjMzMzZhNy43NjQ4LDcuNzY0OCwwLDAsMSwwLDE0Ljg4ODJ2Mi4zMzM2YTEwLjAzNTcsMTAuMDM1NywwLDAsMCwwLTE5LjU1NTRaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._pause_audio__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pause_audio__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNy41LDE0LjJ2Ni43aDQuNGw1LjYsNS42VjguNmwtNS42LDUuNkg3LjV6IE0yMi41LDE3LjVjMC0xLjktMS4xLTMuNi0yLjgtNC40djguOSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjQsMjEuMSwyMi41LDE5LjQsMjIuNSwxNy41eiBNMTkuNyw3Ljd2Mi4zYzQuMSwxLjIsNi41LDUu'+
			'NSw1LjIsOS43Yy0wLjcsMi41LTIuNyw0LjUtNS4yLDUuMnYyLjNjNS40LTEuMiw4LjgtNi42LDcuNS0xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI2LjQsMTEuNSwyMy41LDguNiwxOS43LDcuN3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._pause_audio__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._pause_audio__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT52b2x1bWUzPC90aXRsZT4KIDxjaXJjbGUgY3g9IjE3LjUiIGZpbGw9IiNmZmYiIHI9IjE3LjUiIGN5PSIxNy41Ii8+Cjwvc3ZnPgo=';
		me._pause_audio__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="pause_audio";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pause_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pause_audio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_on') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pause_audio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pause_audio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pause_audio.style[domTransition]='';
				if (me._pause_audio.ggCurrentLogicStateVisible == 0) {
					me._pause_audio.style.visibility=(Number(me._pause_audio.style.opacity)>0||!me._pause_audio.style.opacity)?'inherit':'hidden';
					me._pause_audio.ggVisible=true;
				}
				else {
					me._pause_audio.style.visibility="hidden";
					me._pause_audio.ggVisible=false;
				}
			}
		}
		me._pause_audio.onclick=function (e) {
				player.pauseSound("_background");
			player.setVariableValue('volume_on', false);
		}
		me._pause_audio.onmouseover=function (e) {
			me._pause_audio__img.style.visibility='hidden';
			me._pause_audio__imgo.style.visibility='inherit';
		}
		me._pause_audio.onmouseout=function (e) {
			me._pause_audio__img.style.visibility='inherit';
			me._pause_audio__imgo.style.visibility='hidden';
			me._pause_audio__imga.style.visibility='hidden';
		}
		me._pause_audio.onmousedown=function (e) {
			me._pause_audio__imga.style.visibility='inherit';
			me._pause_audio__imgo.style.visibility='hidden';
		}
		me._pause_audio.onmouseup=function (e) {
			me._pause_audio__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._pause_audio__img.style.visibility='inherit';
			} else {
				me._pause_audio__imgo.style.visibility='inherit';
			}
		}
		me._pause_audio.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._mute_button.appendChild(me._pause_audio);
		el=me._play_audio=document.createElement('div');
		els=me._play_audio__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT5tdXRlPC90aXRsZT4KIDxnPgogIDxjaXJjbGUgY3g9IjE3LjUiIHI9IjE3LjUiIG9wYWNpdHk9IjAuMjUiIGN5PSIxNy41Ii8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIyLjUwMzUsMTcuNDQzYTQuODMxLDQuODMxLDAsMCwwLTIuNzc4Mi00LjQ0MzZ2Mi40NDc1bDIuNzc4MiwyLjc3ODJabTIuNzc4MSwwYTguMjUzMSw4LjI1MzEsMCwwLDEtLjU2LDIuODkyMWwxLjY3MjUsMS42NjU1QTkuMzc4LDkuMzc4LDAsMCwwLDI3LjUsMT'+
			'cuMzM0N2ExMC4wMjM1LDEwLjAyMzUsMCwwLDAtNy43NzQ3LTkuNzgzM1Y5Ljg5MDZhOC4wMDIsOC4wMDIsMCwwLDEsNS41NTYzLDcuNTUyNFptLTE2LjMzODMtMTBMNy41LDguODg2M2w1LjIyNTcsNS4yMjU3SDcuNXY2LjY2OWg0LjQ0MzdMMTcuNSwyNi4zMzczdi03LjQ1MWw0Ljc4MTIsNC43ODEyYTkuNTY4MSw5LjU2ODEsMCwwLDEtMi41NTU5LDEuMzM0OXYyLjMzMjNhOS40OTY4LDkuNDk2OCwwLDAsMCw0LjExMzEtMi4wMDE3bDIuMjE4MywyLjIyNEwyNy41LDI2LjExMzdsLTEwLTEwLjAwNTZaTTE3LjUsOC41NTU3bC0yLjMzMjMsMi4zMzIyTDE3LjUsMTMuMjIxNloiLz4KIDwvZz4KPC9z'+
			'dmc+Cg==';
		me._play_audio__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play_audio__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjIuNSwxNy40YzAtMS45LTEuMS0zLjYtMi44LTQuNHYyLjRsMi44LDIuOFYxNy40eiBNMjUuMywxNy40YzAsMS0wLjIsMi0wLjYsMi45bDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgtMS40LDEuMS0zLDEuMS00LjdjMC00LjctMy4yLTguNy03LjgtOS44djIuM0MyMywx'+
			'MC45LDI1LjMsMTQsMjUuMywxNy40eiBNOC45LDcuNEw3LjUsOC45bDUuMiw1LjJINy41djYuN2g0LjRsNS42LDUuNnYtNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsNC44LDQuOGMtMC44LDAuNi0xLjYsMS0yLjYsMS4zdjIuM2MxLjUtMC4zLDIuOS0xLDQuMS0ybDIuMiwyLjJsMS40LTEuNGwtMTAtMTBMOC45LDcuNHogTTE3LjUsOC42bC0yLjMsMi4zbDIuMywyLjNWOC42eiIvPgogPC9nPgo8L3N2Zz4K';
		me._play_audio__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._play_audio__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT52b2x1bWUzPC90aXRsZT4KIDxjaXJjbGUgY3g9IjE3LjUiIGZpbGw9IiNmZmYiIHI9IjE3LjUiIGN5PSIxNy41Ii8+Cjwvc3ZnPgo=';
		me._play_audio__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="play_audio";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._play_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play_audio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_on') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._play_audio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._play_audio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._play_audio.style[domTransition]='';
				if (me._play_audio.ggCurrentLogicStateVisible == 0) {
					me._play_audio.style.visibility=(Number(me._play_audio.style.opacity)>0||!me._play_audio.style.opacity)?'inherit':'hidden';
					me._play_audio.ggVisible=true;
				}
				else {
					me._play_audio.style.visibility="hidden";
					me._play_audio.ggVisible=false;
				}
			}
		}
		me._play_audio.onclick=function (e) {
				player.playSound("_background","1");
			player.setVariableValue('volume_on', true);
		}
		me._play_audio.onmouseover=function (e) {
			me._play_audio__img.style.visibility='hidden';
			me._play_audio__imgo.style.visibility='inherit';
		}
		me._play_audio.onmouseout=function (e) {
			me._play_audio__img.style.visibility='inherit';
			me._play_audio__imgo.style.visibility='hidden';
			me._play_audio__imga.style.visibility='hidden';
		}
		me._play_audio.onmousedown=function (e) {
			me._play_audio__imga.style.visibility='inherit';
			me._play_audio__imgo.style.visibility='hidden';
		}
		me._play_audio.onmouseup=function (e) {
			me._play_audio__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._play_audio__img.style.visibility='inherit';
			} else {
				me._play_audio__imgo.style.visibility='inherit';
			}
		}
		me._play_audio.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._mute_button.appendChild(me._play_audio);
		me._desktop.appendChild(me._mute_button);
		el=me._audio_info=document.createElement('div');
		els=me._audio_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="audio_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : -275px;';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 270px;';
		hs+='height: 200px;';
		hs+='background: #9ea615;';
		hs+='background: rgba(158,166,21,0.784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 12px 21px 12px 21px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._audio_info.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._audio_info.ggUpdateText();
		player.addListener('changenode', function() {
			me._audio_info.ggUpdateText();
		});
		el.appendChild(els);
		me._audio_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('audioscript') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._audio_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._audio_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._audio_info.style[domTransition]='right 250ms ease 0ms, bottom 250ms ease 0ms';
				if (me._audio_info.ggCurrentLogicStatePosition == 0) {
					me._audio_info.style.right='-20px';
					me._audio_info.style.bottom='50px';
				}
				else {
					me._audio_info.style.right='-275px';
					me._audio_info.style.bottom='50px';
				}
			}
		}
		me._audio_info.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._audio_info);
		el=me._buttonbar=document.createElement('div');
		el.ggId="buttonbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 50px;';
		hs+='cursor : default;';
		hs+='height : 2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttonbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._buttonbar.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('audioscript') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._buttonbar.ggCurrentLogicStateSize != newLogicStateSize) {
				me._buttonbar.ggCurrentLogicStateSize = newLogicStateSize;
				me._buttonbar.style[domTransition]='width 250ms ease 0ms, height 250ms ease 0ms, opacity 0s';
				if (me._buttonbar.ggCurrentLogicStateSize == 0) {
					me._buttonbar.style.width='250px';
					me._buttonbar.style.height='2px';
					setTimeout(function() {skin.updateSize(me._buttonbar);}, 250);
				}
				else {
					me._buttonbar.style.width='125px';
					me._buttonbar.style.height='2px';
					setTimeout(function() {skin.updateSize(me._buttonbar);}, 250);
				}
			}
		}
		me._buttonbar.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._buttonbar.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._buttonbar.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._buttonbar.style[domTransition]='width 250ms ease 0ms, height 250ms ease 0ms, opacity 0s';
				if (me._buttonbar.ggCurrentLogicStateAlpha == 0) {
					me._buttonbar.style.visibility=me._buttonbar.ggVisible?'inherit':'hidden';
					me._buttonbar.style.opacity=1;
				}
				else {
					me._buttonbar.style.visibility="hidden";
					me._buttonbar.style.opacity=0;
				}
			}
		}
		me._buttonbar.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._buttonbar);
		el=me._audio_animation=document.createElement('div');
		els=me._audio_animation__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._audio_animation__img.setAttribute('src',basePath + 'images/audio_animation.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="audio_animation";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 35px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 37px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._audio_animation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_animation.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('volume_on') == false)) || 
				((player.getVariableValue('audioscript') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_animation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_animation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_animation.style[domTransition]='opacity 0s';
				if (me._audio_animation.ggCurrentLogicStateVisible == 0) {
					me._audio_animation.style.visibility="hidden";
					me._audio_animation.ggVisible=false;
				}
				else {
					me._audio_animation.style.visibility=(Number(me._audio_animation.style.opacity)>0||!me._audio_animation.style.opacity)?'inherit':'hidden';
					me._audio_animation.ggVisible=true;
				}
			}
		}
		me._audio_animation.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._audio_animation.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._audio_animation.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._audio_animation.style[domTransition]='opacity 0s';
				if (me._audio_animation.ggCurrentLogicStateAlpha == 0) {
					me._audio_animation.style.visibility=me._audio_animation.ggVisible?'inherit':'hidden';
					me._audio_animation.style.opacity=1;
				}
				else {
					me._audio_animation.style.visibility="hidden";
					me._audio_animation.style.opacity=0;
				}
			}
		}
		me._audio_animation.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._audio_animation);
		el=me._seekbar_1=document.createElement('div');
		me._seekbar_1__playhead=document.createElement('div');
		me._seekbar_1.mediaEl = null;
		el.ggId="Seekbar 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='bottom : 56px;';
		hs+='height : 10px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_1.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_1__playhead.style.visibility = 'hidden';
				me._seekbar_1.style.background = '#ffffff';
				me._seekbar_1.ggConnected = false;
			}
			if (me._seekbar_1.mediaEl != null) {
				me._seekbar_1.mediaEl.removeEventListener('progress', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.removeEventListener('canplay', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.removeEventListener('timeupdate', me._seekbar_1.updatePlayback);
				if (me._seekbar_1.ggActivate) {
					me._seekbar_1.mediaEl.removeEventListener('play', me._seekbar_1.ggActivate);
				}
				if (me._seekbar_1.ggDeactivate) {
					me._seekbar_1.mediaEl.removeEventListener('ended', me._seekbar_1.ggDeactivate);
					me._seekbar_1.mediaEl.removeEventListener('pause', me._seekbar_1.ggDeactivate);
				}
				if (me._seekbar_1.ggMediaEnded) {
					me._seekbar_1.mediaEl.removeEventListener('ended', me._seekbar_1.ggMediaEnded);
				}
			}
			me._seekbar_1.mediaEl = player.getMediaObject('_background');
			if (me._seekbar_1.mediaEl != null) {
				me._seekbar_1__playhead.style.visibility = 'inherit';
				me._seekbar_1__playhead.style.left = '-2px';
				me._seekbar_1.mediaEl.addEventListener('progress', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.addEventListener('canplay', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.addEventListener('timeupdate', me._seekbar_1.updatePlayback);
				if (me._seekbar_1.ggActivate) {
					me._seekbar_1.mediaEl.addEventListener('play', me._seekbar_1.ggActivate);
				}
				if (me._seekbar_1.ggDeactivate) {
					me._seekbar_1.mediaEl.addEventListener('ended', me._seekbar_1.ggDeactivate);
					me._seekbar_1.mediaEl.addEventListener('pause', me._seekbar_1.ggDeactivate);
				}
				if (me._seekbar_1.ggMediaEnded) {
					me._seekbar_1.mediaEl.addEventListener('ended', me._seekbar_1.ggMediaEnded);
				}
			me._seekbar_1.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('_background');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_1.updatePlayback = function() {
			if (!me._seekbar_1.ggConnected) return;
			if (me._seekbar_1.mediaEl != null) {
				if (me._seekbar_1.mediaEl.readyState) {
					var percent = me._seekbar_1.mediaEl.currentTime / me._seekbar_1.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_1.clientWidth - 2 * 3 + 1) * percent);
					playheadpos += -2;
					me._seekbar_1__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._seekbar_1.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_1.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_1.mediaEl.buffered.start(i) / me._seekbar_1.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_1.mediaEl.buffered.end(i) / me._seekbar_1.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_1.style.background = gradientString;
				}
			}
		}
		me._seekbar_1.appendChild(me._seekbar_1__playhead);
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		var hs_playhead = 'height: 10px;';
		hs_playhead += 'width: 10px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 5;';
		hs_playhead += cssPrefix + 'border-radius: 5px;';
		hs_playhead += 'background-color: rgba(255,0,0,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_1.setAttribute('style', hs);
		me._seekbar_1__playhead.setAttribute('style', hs_playhead);
		me._seekbar_1.ggIsActive=function() {
			if (me._seekbar_1.mediaEl != null) {
				return (me._seekbar_1.mediaEl.paused == false && me._seekbar_1.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_1.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_1.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_1.clientWidth) * me._seekbar_1.mediaEl.duration;
					me._seekbar_1.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_1.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_1.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_1.clientWidth) * me._seekbar_1.mediaEl.duration;
					me._seekbar_1.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_1.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_1.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_1.clientWidth) * me._seekbar_1.mediaEl.duration;
					me._seekbar_1.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_1.ggUpdatePosition=function (useTransition) {
		}
		me._seekbar_1.ggNodeChange=function () {
			if (
				(
					((player.getVariableValue('volume_on') == false))
				)
			) {
				me._pause_audio.onclick.call(me._pause_audio);
			}
			me._seekbar_1.connectToMediaEl();
		}
		me._desktop.appendChild(me._seekbar_1);
		el=me._shareclose=document.createElement('div');
		el.ggId="shareclose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._shareclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shareclose.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._shareclose.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._shareclose.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._shareclose.style[domTransition]='';
				if (me._shareclose.ggCurrentLogicStateVisible == 0) {
					me._shareclose.style.visibility=(Number(me._shareclose.style.opacity)>0||!me._shareclose.style.opacity)?'inherit':'hidden';
					me._shareclose.ggVisible=true;
				}
				else {
					me._shareclose.style.visibility="hidden";
					me._shareclose.ggVisible=false;
				}
			}
		}
		me._shareclose.onclick=function (e) {
			player.setVariableValue('share', false);
		}
		me._shareclose.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._shareclose);
		el=me._share_button=document.createElement('div');
		els=me._share_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgdmlld0JveD0iMCAwIDM1IDM1IiBoZWlnaHQ9IjM1Ij4KIDx0aXRsZT5zaGFyZTFfMTwvdGl0bGU+CiA8Zz4KICA8Y2lyY2xlIGN4PSIxNy41IiByPSIxNy41IiBvcGFjaXR5PSIwLjI1IiBjeT0iMTcuNSIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMy4wNzUzLDIwLjQ4MzRhMy40MDg5LDMuNDA4OSwwLDAsMC0yLjQ3OTQsMS4wNjc3bC03LjI4OTQtMy41N2EzLjExLDMuMTEsMCwwLDAsLjAwMjItMS4wMTE0bDcuMjc4Ni0zLjUzYTMuNDIxMSwzLjQyMTEsMCwxLDAtLjkzNjctMi4zNDgzLDMuNDU0MS'+
			'wzLjQ1NDEsMCwwLDAsLjA0LjQ5OTNsLTcuMjc3OCwzLjUzYTMuNDI0NywzLjQyNDcsMCwxLDAtLjAwOSw0LjcwNjFsNy4yODkxLDMuNTY5M2EzLjM1MTQsMy4zNTE0LDAsMCwwLS4wNDMuNTExNywzLjQyNDcsMy40MjQ3LDAsMSwwLDMuNDI1MS0zLjQyNDdaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._share_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._share_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMuMSwyMC41Yy0wLjksMC0xLjgsMC40LTIuNSwxLjFMMTMuMywxOGMwLjEtMC4zLDAuMS0wLjcsMC0xbDcuMy0zLjVjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMS4zLDEuNC0zLjUsMC4xLTQuOGMtMS4zLTEuNC0zLjUtMS40LTQuOC0w'+
			'LjFjLTAuNywwLjYtMS4xLDEuNS0xLjEsMi41YzAsMC4yLDAsMC4zLDAsMC41bC03LjMsMy41Yy0xLjMtMS40LTMuNS0xLjQtNC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0xLjQsMy41LTAuMSw0LjhjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjFjMCwwLDAuMS0wLjEsMC4xLTAuMWw3LjMsMy42YzAsMC4yLDAsMC4zLDAsMC41YzAsMS45LDEuNSwzLjQsMy40LDMuNHMzLjQtMS41LDMuNC0zLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MyNi41LDIyLDI1LDIwLjUsMjMuMSwyMC41TDIzLjEsMjAuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._share_button__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM1IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzlFQTYxNTt9JiN4ZDsKCS5zdDF7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPGNpcmNsZSBjeD0iMTcuNSIgcj0iMTcuNSIgY3k9IjE3LjUiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMuMSwyMC41Yy0wLjksMC0xLjgsMC40LTIuNSwxLjFMMTMuMywxOGMwLjEtMC4zLDAuMS0wLjcsMC0xbDcuMy0zLjVjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMS4zLDEuNC0zLjUsMC4xLTQuOGMtMS4zLTEuNC0zLjUtMS40LTQuOC0w'+
			'LjFjLTAuNywwLjYtMS4xLDEuNS0xLjEsMi41YzAsMC4yLDAsMC4zLDAsMC41bC03LjMsMy41Yy0xLjMtMS40LTMuNS0xLjQtNC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0xLjQsMy41LTAuMSw0LjhjMS4zLDEuNCwzLjUsMS40LDQuOCwwLjFsMC4xLTAuMWw3LjMsMy42YzAsMC4yLDAsMC4zLDAsMC41YzAsMS45LDEuNSwzLjQsMy40LDMuNHMzLjQtMS41LDMuNC0zLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MyNi41LDIyLDI1LDIwLjUsMjMuMSwyMC41TDIzLjEsMjAuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_button__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="share button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._share_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_button.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['share_button'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._share_button.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._share_button.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._share_button.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._share_button.ggCurrentLogicStateScaling == 0) {
					me._share_button.ggParameter.sx = 1.25;
					me._share_button.ggParameter.sy = 1.25;
					me._share_button.style[domTransform]=parameterToTransform(me._share_button.ggParameter);
				}
				else {
					me._share_button.ggParameter.sx = 1;
					me._share_button.ggParameter.sy = 1;
					me._share_button.style[domTransform]=parameterToTransform(me._share_button.ggParameter);
				}
			}
		}
		me._share_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share_button.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._share_button.ggCurrentLogicStateVisible == 0) {
					me._share_button.style.visibility=(Number(me._share_button.style.opacity)>0||!me._share_button.style.opacity)?'inherit':'hidden';
					me._share_button.ggVisible=true;
				}
				else {
					me._share_button.style.visibility="hidden";
					me._share_button.ggVisible=false;
				}
			}
		}
		me._share_button.onclick=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				player.setVariableValue('share', !player.getVariableValue('share'));
			}
		}
		me._share_button.onmouseover=function (e) {
			me._share_button__img.style.visibility='hidden';
			me._share_button__imgo.style.visibility='inherit';
			me.elementMouseOver['share_button']=true;
			me._share_button.logicBlock_scaling();
		}
		me._share_button.onmouseout=function (e) {
			me._share_button__img.style.visibility='inherit';
			me._share_button__imgo.style.visibility='hidden';
			me._share_button__imga.style.visibility='hidden';
			me.elementMouseOver['share_button']=false;
			me._share_button.logicBlock_scaling();
		}
		me._share_button.onmousedown=function (e) {
			me._share_button__imga.style.visibility='inherit';
			me._share_button__imgo.style.visibility='hidden';
		}
		me._share_button.onmouseup=function (e) {
			me._share_button__imga.style.visibility='hidden';
			if (skin.player.getIsMobile()) {
				me._share_button__img.style.visibility='inherit';
			} else {
				me._share_button__imgo.style.visibility='inherit';
			}
		}
		me._share_button.ontouchend=function (e) {
			me.elementMouseOver['share_button']=false;
			me._share_button.logicBlock_scaling();
		}
		me._share_button.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._share_button);
		el=me._sharebox=document.createElement('div');
		els=me._sharebox__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgdmlld0JveD0iMCAwIDQwIDE2MCIgaGVpZ2h0PSIxNjAiPgogPHRpdGxlPnNoYXJlYm94PC90aXRsZT4KIDxyZWN0IHJ4PSI1IiBmaWxsPSIjOWVhNjE1IiB3aWR0aD0iNDAiIGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIxNjAiLz4KPC9zdmc+Cg==';
		me._sharebox__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sharebox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 55px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sharebox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sharebox.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sharebox.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sharebox.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sharebox.style[domTransition]='';
				if (me._sharebox.ggCurrentLogicStateVisible == 0) {
					me._sharebox.style.visibility=(Number(me._sharebox.style.opacity)>0||!me._sharebox.style.opacity)?'inherit':'hidden';
					me._sharebox.ggVisible=true;
				}
				else {
					me._sharebox.style.visibility="hidden";
					me._sharebox.ggVisible=false;
				}
			}
		}
		me._sharebox.ggUpdatePosition=function (useTransition) {
		}
		el=me._fb=document.createElement('div');
		els=me._fb__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQwIDQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGg0MGwwLDB2MzVjMCwyLjgtMi4yLDUtNSw1SDVjLTIuOCwwLTUtMi4yLTUtNVYwTDAsMHoiLz4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTcuOSwzMHYtOS4xaC0zLjF2LTMuN2gzLjF2LTMuMWMwLTIuMywxLjgtNC4xLDQuMS00LjFjMCwwLDAsMCwwLDBoMy4ydjMuM2gtMi4zYy0wLjcsMC0xLjMsMC42LTEuMywxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAsMCww'+
			'LDAsMHYyLjZoMy41bC0wLjUsMy43aC0zVjMwSDE3Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fb__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fb__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBoZWlnaHQ9IjQwIj4KIDx0aXRsZT5mYjwvdGl0bGU+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E1NTlmIiBkPSJNMCwwSDQwYTAsMCwwLDAsMSwwLDBWMzVhNSw1LDAsMCwxLTUsNUg1YTUsNSwwLDAsMS01LTVWMEEwLDAsMCwwLDEsMCwwWiIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNy44ODA4LDMwVjIwLjkySDE0LjgyVjE3LjIxMjdoMy4wNlYxNC4xQTQuMDk5NCw0LjA5OTQsMCwwLDEsMjEuOTgsMTBIMjUuMTh2My4zMzM1SDIyLjg5YTEuMzAyNCwxLjMwMjQsMC'+
			'wwLDAtMS4zMDI3LDEuMzAyNnYyLjU3NjZoMy41MzQ1TDI0LjYzMzYsMjAuOTJIMjEuNTg3N1YzMFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._fb__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fb";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fb.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/sharer.php?u=https%3A%2F%2Fwww.sitetour360.com%2Ffs","_blank");
		}
		me._fb.onmouseover=function (e) {
			me._fb__img.style.visibility='hidden';
			me._fb__imgo.style.visibility='inherit';
		}
		me._fb.onmouseout=function (e) {
			me._fb__img.style.visibility='inherit';
			me._fb__imgo.style.visibility='hidden';
		}
		me._fb.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._sharebox.appendChild(me._fb);
		el=me._twitter=document.createElement('div');
		els=me._twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQwIDQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3Qgd2lkdGg9IjQwIiBjbGFzcz0ic3QwIiBoZWlnaHQ9IjQwIi8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI5LjcsMTMuNmMtMC40LDAuMi0wLjksMC40LTEuNCwwLjVjMC41LTAuNSwwLjktMS4xLDEuMS0xLjhsMCwwYzAtMC4xLDAtMC4yLTAuMS0wLjNjLTAuMSwwLTAuMSwwLTAuMiwwbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC40LTEuNCwwLjctMi4xLDAuOWMwLDAtMC4xLDAtMC4xLDBj'+
			'LTAuMSwwLTAuMy0wLjEtMC40LTAuMWMtMC44LTAuNy0xLjgtMS4xLTIuOS0xLjFjLTAuNSwwLTAuOSwwLjEtMS40LDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjQsMC40LTIuNSwxLjYtMi44LDNjLTAuMSwwLjUtMC4yLDEuMS0wLjEsMS42YzAsMCwwLDAuMSwwLDAuMWMwLDAtMC4xLDAuMS0wLjEsMC4xbDAsMGMtMy0wLjMtNS44LTEuOC03LjgtNC4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEtMC4xLTAuMi0wLjEtMC4zLDBjMCwwLDAsMC0wLjEsMC4xbDAsMGMtMSwxLjctMC43LDMuOSwwLjcsNS4yYy0wLjMtMC4xLTAuNy0wLjItMS0wLjRsMCwwYy0wLjEtMC4xLTAuMiwwLTAuMy'+
			'wwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAsMCwwLjEsMCwwLjFsMCwwYzAsMS43LDEsMy4zLDIuNSw0YzAsMC0wLjEsMC0wLjEsMGMtMC4yLDAtMC41LDAtMC43LTAuMWwwLDBjLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMwLDAsMCwwLjEsMCwwLjFsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC41LDEuNSwxLjgsMi43LDMuNCwyLjljLTEuMywwLjktMi45LDEuNC00LjUsMS40aC0wLjVjLTAuMiwwLTAuMywwLjEtMC4zLDAuMmMwLDAuMSwwLDAuMywwLjIsMC40YzEuOCwxLDMuOSwxLjYsNS45LDEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOCwwLDMuNS0wLjQsNS4xLTEuMWMxLjQtMC43LDIu'+
			'Ny0xLjYsMy43LTIuOGMxLTEuMSwxLjgtMi40LDIuMy0zLjhjMC41LTEuMywwLjgtMi43LDAuOC00LjJ2LTAuMWMwLTAuMiwwLjEtMC40LDAuMy0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuMi0xLjIsMS43LTEuOWwwLDBjMC4xLTAuMSwwLTAuMi0wLjEtMC4zQzI5LjgsMTMuNiwyOS44LDEzLjYsMjkuNywxMy42TDI5LjcsMTMuNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBoZWlnaHQ9IjQwIj4KIDx0aXRsZT50d2l0dGVyPC90aXRsZT4KIDxnPgogIDxyZWN0IGZpbGw9IiM3NmE5ZWEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yOS42ODE5LDEzLjYxNzJhNy45MTksNy45MTksMCwwLDEtMS4zNzkuNDY1LDQuMyw0LjMsMCwwLDAsMS4xMzUtMS44MDc1aDBhLjIyNTUuMjI1NSwwLDAsMC0uMzMtLjI2MjVoMEE3Ljk1NzksNy45NTc5LDAsMCwxLDI3LDEyLjg4MzJhLjU0MTMuNTQxMywwLDAsMS0uMT'+
			'MxOC4wMTYzLjU1ODUuNTU4NSwwLDAsMS0uMzY5MS0uMTQwOSw0LjMxMTUsNC4zMTE1LDAsMCwwLTIuODUzLTEuMDc2Nyw0LjYxMTEsNC42MTExLDAsMCwwLTEuMzY2LjIxMDgsNC4xNzc4LDQuMTc3OCwwLDAsMC0yLjgxNTQsMy4wMSw0LjYwMTYsNC42MDE2LDAsMCwwLS4xMDIyLDEuNTg3Ny4xNTQyLjE1NDIsMCwwLDEtLjAzODkuMTIxLjE2LjE2LDAsMCwxLS4xMTg5LjA1MzlsLS4wMTUzLS4wMDA3YTExLjMwNTgsMTEuMzA1OCwwLDAsMS03Ljc3MDktNC4xNTE2aDBhLjIyNTUuMjI1NSwwLDAsMC0uMzcuMDI4OWgwQTQuMzE2OCw0LjMxNjgsMCwwLDAsMTEuNzUsMTcuNzgzYTMuODY3LDMuODY3'+
			'LDAsMCwxLS45ODM1LS4zODA4aDBhLjIyNTQuMjI1NCwwLDAsMC0uMzM0OS4xOTQzaDBBNC4zMTcyLDQuMzE3MiwwLDAsMCwxMi45NSwyMS41NzRxLS4wNDYuMDAxLS4wOTIxLjAwMTFhMy44NzgsMy44NzgsMCwwLDEtLjcyNjQtLjA2OTNoMGEuMjI1NS4yMjU1LDAsMCwwLS4yNTcxLjI5aDBhNC4zMjE1LDQuMzIxNSwwLDAsMCwzLjQxMzUsMi45MzkzLDcuOTU2Miw3Ljk1NjIsMCwwLDEtNC40NTY0LDEuMzUzM2wtLjQ5ODcsMGEuMzMuMzMsMCwwLDAtLjMyMjcuMjQ5LjM0MTQuMzQxNCwwLDAsMCwuMTYzNS4zNzc0LDExLjgzNDYsMTEuODM0NiwwLDAsMCw1Ljk0NjcsMS42MDM0LDExLjk5NzYsMT'+
			'EuOTk3NiwwLDAsMCw1LjA4Mi0xLjA3OCwxMS4yMjI5LDExLjIyMjksMCwwLDAsMy43MTgzLTIuNzg2MywxMi4yMTQ0LDEyLjIxNDQsMCwwLDAsMi4yNzY4LTMuODEzMywxMi4wNDU5LDEyLjA0NTksMCwwLDAsLjc3MzktNC4xNzM1di0uMDY1NmEuNzMzOC43MzM4LDAsMCwxLC4yNzQ2LS41NzExLDguNTI1MSw4LjUyNTEsMCwwLDAsMS43MTQ1LTEuODgxOGgwYS4yMjU1LjIyNTUsMCwwLDAtLjI3ODktLjMzMTNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="twitter";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._twitter.onclick=function (e) {
			player.openUrl("https:\/\/twitter.com\/intent\/tweet?text=Check%20out%20this%20virtual%20experience%21%20https%3A%2F%2Fwww.sitetour360.com%2Ffs","_blank");
		}
		me._twitter.onmouseover=function (e) {
			me._twitter__img.style.visibility='hidden';
			me._twitter__imgo.style.visibility='inherit';
		}
		me._twitter.onmouseout=function (e) {
			me._twitter__img.style.visibility='inherit';
			me._twitter__imgo.style.visibility='hidden';
		}
		me._twitter.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sharebox.appendChild(me._twitter);
		el=me._link=document.createElement('div');
		els=me._link__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQwIDQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKCS5zdDF7ZmlsbDojOUVBNjE1O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTUsMGgzMGMyLjgsMCw1LDIuMiw1LDV2MzVsMCwwSDBsMCwwVjVDMCwyLjIsMi4yLDAsNSwweiIvPgogIDxnPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuNywzMGMtMi42LDAtNC43LTIuMS00LjctNC43YzAtMS4yLDAuNS0yLjQsMS40LTMuM2w0LjItNC4yYzEuNi0xLjUsNC0xLjgsNS44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMiwwLjUsMC40'+
			'LDAuOCwwLjZjMC41LDAuNSwwLjUsMS4zLDAsMS45YzAsMCwwLDAsMCwwYy0wLjUsMC41LTEuMywwLjUtMS45LDBjLTAuOC0wLjgtMi0wLjgtMi44LDBsLTQuMyw0LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjgsMC44LTAuOCwyLDAsMi44czIsMC44LDIuOCwwbDAsMGwyLjUtMi41YzAuMS0wLjEsMC4yLTAuMSwwLjQtMC4xYzAuNywwLjMsMS40LDAuNCwyLjEsMC40aDAuMWMwLjIsMCwwLjMsMC4xLDAuMywwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMC4xLDAsMC4yLTAuMSwwLjJMMTgsMjguNkMxNy4xLDI5LjUsMTUuOSwzMCwxNC43LDMweiIvPgogICA8cGF0aCBjbGFzcz'+
			'0ic3QxIiBkPSJNMjEuMSwyMy42aC0wLjNjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjEsMC0wLjMsMC0wLjQtMC4xbC0wLjItMC4xYy0wLjEsMC0wLjEsMC0wLjItMC4xcy0wLjEsMC0wLjItMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtMC4xLTAuMS0wLjItMC4xYy0wLjUtMC4yLTAuOS0wLjUtMS4zLTAuOWMtMC41LTAuNS0wLjUtMS40LDAtMS45YzAsMCwwLDAsMCwwYzAuNS0wLjUsMS4zLTAuNSwxLjksMGMwLjgsMC44LDIsMC44LDIuOCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjEtMS4xbDAsMGwzLjEtMy4xYzAuOC0wLjgsMC44LTIsMC0yLjhzLTItMC44LTIuOCwwbC0yLjUs'+
			'Mi41Yy0wLjEsMC4xLTAuMiwwLjEtMC40LDAuMWMtMC43LTAuMy0xLjQtMC40LTIuMS0wLjRoLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM2MwLTAuMSwwLTAuMiwwLjEtMC4ybDMuNS0zLjVjMS44LTEuOCw0LjgtMS44LDYuNiwwYzEuOCwxLjgsMS44LDQuOCwwLDYuNmwtNC4yLDQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNiwwLjYtMS4zLDEtMi4yLDEuMmgwbC0wLjIsMGwtMC4xLDBsLTAuMiwwaC0wLjFjLTAuMSwwLTAuMiwwLTAuMiwwTDIxLjEsMjMuNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._link__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._link__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBoZWlnaHQ9IjQwIj4KIDx0aXRsZT5saW5rPC90aXRsZT4KIDxnPgogIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik01LDBIMzVhNSw1LDAsMCwxLDUsNVY0MGEwLDAsMCwwLDEsMCwwSDBhMCwwLDAsMCwxLDAsMFY1QTUsNSwwLDAsMSw1LDBaIiBmaWxsLW9wYWNpdHk9IjEiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjY2NDMsMzBhNC42NjU4LDQuNjY1OCwwLDAsMS0zLjI5OTQtNy45NjE5bDQuMjM5My00LjI0MjZhNC42NjY2LDQuNjY2NiwwLDAsMS'+
			'w1LjgxNTYtLjYzLDQuNTM2LDQuNTM2LDAsMCwxLC43ODMyLjYzLDEuMzIsMS4zMiwwLDAsMSwwLDEuODczLDEuMzY2NCwxLjM2NjQsMCwwLDEtMS44NzMsMCwyLDIsMCwwLDAtMi44MjYyLDBsLTQuMjU1OSw0LjI1MjZhMi4wMDA4LDIuMDAwOCwwLDEsMCwyLjgzLDIuODI5NWgwbDIuNTE2Mi0yLjUyYS4zMzMyLjMzMzIsMCwwLDEsLjM2MzMtLjA3MzMsNS42MSw1LjYxLDAsMCwwLDIuMTMzLjQxMzJoLjEzMzNhLjMzMzMuMzMzMywwLDAsMSwuMjM2Ni41N0wxNy45NiwyOC42NEE0LjYzNTUsNC42MzU1LDAsMCwxLDE0LjY2NDMsMzBaIi8+CiAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMS4xMSwy'+
			'My41NzExaC0uMjUzM2E0LjY0MTEsNC42NDExLDAsMCwxLS40OTY2LS4wNDY2Yy0uMTM2Ny0uMDIzNC0uMjctLjA1LS40MDMzLS4wODMzbC0uMTk2Ni0uMDUzNGMtLjA3LS4wMi0uMTQzMy0uMDQzMy0uMjEzMy0uMDdzLS4xNDMzLS4wNS0uMjEzMy0uMDgtLjE0LS4wNTY3LS4yMS0uMDlhNC42Mjc5LDQuNjI3OSwwLDAsMS0xLjMzMzEtLjkzMzIsMS4zMjkxLDEuMzI5MSwwLDAsMSwwLTEuODgsMS4zNjY2LDEuMzY2NiwwLDAsMSwxLjg3MywwLDIsMiwwLDAsMCwyLjgyNjIsMGwxLjA5MzEtMS4wODY0LjAyNjctLjAzLDMuMTI2MS0zLjEyMjhhMi4wMDA4LDIuMDAwOCwwLDAsMC0yLjgyOTUtMi44M2'+
			'wtMi41MDk1LDIuNTA2MmEuMzMzNS4zMzM1LDAsMCwxLS4zNjMzLjA3MzQsNS41OTYzLDUuNTk2MywwLDAsMC0yLjEzLS40MTY2SDE4Ljc4YS4zMzQ2LjMzNDYsMCwwLDEtLjI0MzMtLjU3bDMuNDk2LTMuNDkyN2E0LjY2NjEsNC42NjYxLDAsMCwxLDYuNTk4OCw2LjU5ODhMMjQuMzg5MywyMi4yMDhhNC42NjU5LDQuNjY1OSwwLDAsMS0yLjE2MywxLjIyNjVIMjIuMTlsLS4xOTMzLjA0LS4xMDY3LjAyLS4yMy4wMzMzaC0uMTEzNGMtLjA4NjYsMC0uMTYzMy4wMTY3LS4yMzY2LjAyWiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._link__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="link";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link.onclick=function (e) {
			navigator.clipboard.writeText('sitetour360.com/fs')
  .then(() => {
    // Success!
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
			player.setVariableValue('copied', Number("1"));
		}
		me._link.onmouseover=function (e) {
			me._link__img.style.visibility='hidden';
			me._link__imgo.style.visibility='inherit';
		}
		me._link.onmouseout=function (e) {
			player.setVariableValue('copied', Number("0"));
			me._link__img.style.visibility='inherit';
			me._link__imgo.style.visibility='hidden';
		}
		me._link.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._sharebox.appendChild(me._link);
		el=me._link_copied=document.createElement('div');
		els=me._link_copied__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="link copied";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(158,166,21,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Link copied!";
		el.appendChild(els);
		me._link_copied.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._link_copied.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('copied') == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._link_copied.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._link_copied.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._link_copied.style[domTransition]='';
				if (me._link_copied.ggCurrentLogicStateVisible == 0) {
					me._link_copied.style.visibility=(Number(me._link_copied.style.opacity)>0||!me._link_copied.style.opacity)?'inherit':'hidden';
					me._link_copied.ggVisible=true;
				}
				else {
					me._link_copied.style.visibility="hidden";
					me._link_copied.ggVisible=false;
				}
			}
		}
		me._link_copied.ggUpdatePosition=function (useTransition) {
		}
		me._sharebox.appendChild(me._link_copied);
		me._desktop.appendChild(me._sharebox);
		el=me._start_overlay=document.createElement('div');
		el.ggId="start overlay";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0.001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_overlay.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_overlay.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_overlay.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_overlay.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_overlay.style[domTransition]='';
				if (me._start_overlay.ggCurrentLogicStateVisible == 0) {
					me._start_overlay.style.visibility="hidden";
					me._start_overlay.ggVisible=false;
				}
				else {
					me._start_overlay.style.visibility=(Number(me._start_overlay.style.opacity)>0||!me._start_overlay.style.opacity)?'inherit':'hidden';
					me._start_overlay.ggVisible=true;
				}
			}
		}
		me._start_overlay.onclick=function (e) {
			player.setVariableValue('startoverlay', false);
			player.openNext("{node11}","");
		}
		me._start_overlay.ggUpdatePosition=function (useTransition) {
		}
		me._desktop.appendChild(me._start_overlay);
		el=me._click_anywhere_to_begin=document.createElement('div');
		els=me._click_anywhere_to_begin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Click anywhere to begin";
		el.ggDx=32;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 260px;';
		hs+='height: 44px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 6px;';
		hs+=cssPrefix + 'border-radius: 6px;';
		hs+='color: rgba(158,166,21,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 11px 12px 11px 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Click anywhere to begin";
		el.appendChild(els);
		me._click_anywhere_to_begin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._click_anywhere_to_begin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._click_anywhere_to_begin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._click_anywhere_to_begin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._click_anywhere_to_begin.style[domTransition]='';
				if (me._click_anywhere_to_begin.ggCurrentLogicStateVisible == 0) {
					me._click_anywhere_to_begin.style.visibility="hidden";
					me._click_anywhere_to_begin.ggVisible=false;
				}
				else {
					me._click_anywhere_to_begin.style.visibility=(Number(me._click_anywhere_to_begin.style.opacity)>0||!me._click_anywhere_to_begin.style.opacity)?'inherit':'hidden';
					me._click_anywhere_to_begin.ggVisible=true;
				}
			}
		}
		me._click_anywhere_to_begin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._desktop.appendChild(me._click_anywhere_to_begin);
		me.divSkin.appendChild(me._desktop);
		el=me.__360animation=document.createElement('div');
		els=me.__360animation__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me.__360animation__img.setAttribute('src',basePath + 'images/_360animation.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="360animation";
		el.ggDx=0;
		el.ggDy=-75;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360animation.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__360animation.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == true)) || 
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__360animation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__360animation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__360animation.style[domTransition]='';
				if (me.__360animation.ggCurrentLogicStateVisible == 0) {
					me.__360animation.style.visibility="hidden";
					me.__360animation.ggVisible=false;
				}
				else {
					me.__360animation.style.visibility=(Number(me.__360animation.style.opacity)>0||!me.__360animation.style.opacity)?'inherit':'hidden';
					me.__360animation.ggVisible=true;
				}
			}
		}
		me.__360animation.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360animation.ggNodeChange=function () {
			if (
				(
					((me.ggUserdata.tags.indexOf("360") != -1))
				)
			) {
				me.__360animation.style[domTransition]='none';
				me.__360animation.style.opacity='1';
				me.__360animation.style.visibility=me.__360animation.ggVisible?'inherit':'hidden';
			}
		}
		me.divSkin.appendChild(me.__360animation);
		el=me._text_360=document.createElement('div');
		els=me._text_360__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 360";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 200px;';
		hs+='height: 25px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Drag to look around";
		el.appendChild(els);
		me._text_360.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_360.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startoverlay') == true)) || 
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_360.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_360.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_360.style[domTransition]='';
				if (me._text_360.ggCurrentLogicStateVisible == 0) {
					me._text_360.style.visibility="hidden";
					me._text_360.ggVisible=false;
				}
				else {
					me._text_360.style.visibility=(Number(me._text_360.style.opacity)>0||!me._text_360.style.opacity)?'inherit':'hidden';
					me._text_360.ggVisible=true;
				}
			}
		}
		me._text_360.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._text_360.ggNodeChange=function () {
			if (
				(
					((me.ggUserdata.tags.indexOf("360") != -1))
				)
			) {
				me._text_360.style[domTransition]='none';
				me._text_360.style.opacity='1';
				me._text_360.style.visibility=me._text_360.ggVisible?'inherit':'hidden';
			}
		}
		me.divSkin.appendChild(me._text_360);
		el=me._loading_splash=document.createElement('div');
		el.ggId="loading splash";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_splash.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_splash.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsLoading() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading_splash.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading_splash.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading_splash.style[domTransition]='';
				if (me._loading_splash.ggCurrentLogicStateVisible == 0) {
					me._loading_splash.style.visibility="hidden";
					me._loading_splash.ggVisible=false;
				}
				else {
					me._loading_splash.style.visibility=(Number(me._loading_splash.style.opacity)>0||!me._loading_splash.style.opacity)?'inherit':'hidden';
					me._loading_splash.ggVisible=true;
				}
			}
		}
		me._loading_splash.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading1=document.createElement('div');
		els=me._loading1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGhlaWdodD0iMjAwcHgiPgogPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjOWVhNjE1IiBkPSJNMTAgNTBBNDAgNDAgMC'+
			'AwIDAgOTAgNTBBNDAgNDIgMCAwIDEgMTAgNTAiIHRyYW5zZm9ybT0icm90YXRlKDMzNS44OTYgNTAuMDAwMSA1MSkiIGZpbGwtb3BhY2l0eT0iMSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gdmFsdWVzPSIwIDUwIDUxOzM2MCA1MCA1MSIgZHVyPSIxLjk2MDc4NDMxMzcyNTQ5MDFzIiB0eXBlPSJyb3RhdGUiIGtleVRpbWVzPSIwOzEiIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvcGF0aD4KIDwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPgo8L3N2Zz4K';
		me._loading1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading1";
		el.ggDx=0;
		el.ggDy=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_splash.appendChild(me._loading1);
		el=me._loading2=document.createElement('div');
		els=me._loading2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGhlaWdodD0iMjAwcHgiPgogPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjMmEyYTJhIiBkPSJNMTAgNTBBNDAgNDAgMC'+
			'AwIDAgOTAgNTBBNDAgNDIgMCAwIDEgMTAgNTAiIHRyYW5zZm9ybT0icm90YXRlKDI5Ljk5MDUgNTAgNTEpIiBmaWxsLW9wYWNpdHk9IjEiPgogIDxhbmltYXRlVHJhbnNmb3JtIHZhbHVlcz0iMCA1MCA1MTszNjAgNTAgNTEiIGR1cj0iMXMiIHR5cGU9InJvdGF0ZSIga2V5VGltZXM9IjA7MSIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9wYXRoPgogPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+Cjwvc3ZnPgo=';
		me._loading2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading2";
		el.ggDx=0;
		el.ggDy=60;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._loading2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_splash.appendChild(me._loading2);
		el=me._loading3=document.createElement('div');
		els=me._loading3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGhlaWdodD0iMjAwcHgiPgogPHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjOWVhNjE1IiBkPSJNMTAgNTBBNDAgNDAgMC'+
			'AwIDAgOTAgNTBBNDAgNDIgMCAwIDEgMTAgNTAiIHRyYW5zZm9ybT0icm90YXRlKDE3My45ODggNTAgNTEpIiBmaWxsLW9wYWNpdHk9IjEiPgogIDxhbmltYXRlVHJhbnNmb3JtIHZhbHVlcz0iMCA1MCA1MTszNjAgNTAgNTEiIGR1cj0iMXMiIHR5cGU9InJvdGF0ZSIga2V5VGltZXM9IjA7MSIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9wYXRoPgogPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+Cjwvc3ZnPgo=';
		me._loading3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading3";
		el.ggDx=0;
		el.ggDy=60;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._loading3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_splash.appendChild(me._loading3);
		el=me._cov_logo_splash=document.createElement('div');
		els=me._cov_logo_splash__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NzkuMjk2IiB2aWV3Qm94PSIwIDAgODc5LjI5NiA3NDIuNjg0MSIgaGVpZ2h0PSI3NDIuNjg0MSI+CiA8Zz4KICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNjI4Ljc0LDBWNTU1LjI4MjFIMjQ5LjEwNzZWMFpNMjk4LjAzNjgsNjcuMjY3NGM3LjU1NTguNTE2MSwxNC43ODkxLS4wNzIsMjEuNDEsMS42Njg1LDE4Ljc0MTgsNC45MjY3LDI2LjgyNTUsMTMuNDEsMjguMjgyNywyNy4zNjA5YTI4MS45MjA3LDI4MS45MjA3LDAsMCwxLDEuODEyMiwyOC44NDY0cS4xOTM5LDE0Ny45OTMzLDAsMjk1Ljk4N2MtLjAxNT'+
			'QsMTEuMTIzLS43NzEsMjIuMjc5NC0xLjg1NTgsMzMuMzU0NC0uNzI0Myw3LjM5NC0yLjIwMjcsMTQuNzI1OC03LjU5LDIwLjY4NTUtNy4wNDIzLDcuNzkwNy0xNS44ODI2LDExLjEyMzQtMjYuMDUxOCwxMS41MDMtNS4yNzE1LjE5NjgtMTAuNTU2NC4wMzQ2LTE1LjkyNDYuMDM0NnYxMS44MzA4aDE1NS4zOTlWNDg2Ljc2MDZjLTQuMjI1NiwwLTguMTg0OS4xNDUxLTEyLjEyODUtLjA0MTgtMy44LS4xOC03Ljc1MTEtLjEyOTMtMTEuMzQ2Ni0xLjE3NDctMTUuNzI1OC00LjU3MjUtMjUuMTAwOS0xMi40OTQ3LTI3LjAyMjYtMjYuNTE0NWEyMDcuNzA2MiwyMDcuNzA2MiwwLDAsMS0xLjk2MjMtMjcu'+
			'MzE4NmMtLjE4NjYtNDguMTYzOC0uMDg3NS05Ni4zMjg5LS4wODc1LTE0NC40OTM0di01LjM2NGMyNS43MTA5LDAsNTAuODg3NC0uODc1MSw3NS45NzI2LjI2MzgsMjEuOTM4MS45OTYsMzAuNzUyOSwxMi45NDQzLDM0LjgwOTEsMzIuMDc3OCwyLjAxMTIsOS40ODY4LDIuNjE4NSwxOS4yNzExLDMuODgzNCwyOS4wOTVoOC44NDgzVjE5My43MDloLTkuMTM2Yy0xLjg2MTYsOS43OTQtMy4xNTE4LDE5LjUwMDctNS42MTA5LDI4LjkwMTctNC45MSwxOC43NzA2LTEzLjUyODIsMzAuNjUyMy0zNi43MzQ2LDMxLjA5NjEtMjMuNTAxNi40NDk0LTQ3LjAxNDQuMzE2LTcwLjUyMjQuNDA1OC0uNDIxOC4wMD'+
			'E2LS44NDUtLjM5NzktMS4yNzU4LS42MTQzVjgwLjEwMzRhNy44NzgyLDcuODc4MiwwLDAsMSwxLjYzMzItLjM4NzVjMzIuODA2My4zMTQsNjUuNjMuMDk2Miw5OC40MTIzLDEuMTY5LDIxLjkyNzEuNzE3NywzOC45MjE4LDExLjAwMDYsNDcuNzUzNCwzMS43NzE1LDUuNDgsMTIuODg5LDkuNTczOSwyNi4zNjc3LDE0LjQ0LDQwLjAwMTdoNC40NjE4VjU2LjAzNjdIMjk4LjAzNjhaIi8+CiAgPHBhdGggZmlsbD0iIzJhMmEyYSIgZD0iTTI1OC4zOTMzLDY1My4wOTI4YzEuMTksMzAuODgyOC0yMS4xOTUxLDU0LjMyLTUzLjY0NjksNTQuNTI0NS0zMC44NDc2LjE5NC01Mi45NzMzLTIyLjI2NDEtNTMu'+
			'MDU2My01My43MTctLjA4MDUtMzAuNDY0MSwyMS44NTQ2LTUyLjgyNiw1MS4yNDExLTUzLjQ3NEMyMzUuMDQwOSw1OTkuNzE4MSwyNTguOTY3MSw2MjIuNDg0OCwyNTguMzkzMyw2NTMuMDkyOFptLTUzLjQ5MSw0NC40NTM3YzI2LjA1MTYuMTQsNDMuNzkzMS0xNy41MzQ3LDQzLjg2LTQzLjY5NTQuMDY0Ni0yNS4xNDUzLTE4LjEyNTgtNDMuNTI5Mi00My4yMS00My42NjkzLTI1LjM3NDUtLjE0MTgtNDMuOTkxMiwxOC4wNjItNDQuMTU4OSw0My4xNzk0QzE2MS4yMiw2NzkuMzU3NCwxNzguOTkzNCw2OTcuNDA3MiwyMDQuOTAyMyw2OTcuNTQ2NVoiLz4KICA8cGF0aCBmaWxsPSIjMmEyYTJhIiBkPS'+
			'JNMzU4LjkzNjMsNjg1LjEzNzZWNjEwLjM5NDFjMC04Ljk4NSwwLTguOTg1LDkuNjUtOC40ODI1VjcxMC44NjI1bC03NC4yNjg4LTg1Ljg2djgwLjU3NDNoLTkuNjEzMlY1OTguMTNaIi8+CiAgPHBhdGggZmlsbD0iIzllYTYxNSIgZD0iTTYwMS4yOTY2LDYwMS4yNjUxYzExLjUyODMuNzQwNywyMi45MzMuNDAxMywzMy44OTM2LDIuNDQ0NiwxNC4yMTc3LDIuNjUsMjAuMTU4MSwxMi4zMDIxLDE5Ljc4MDksMjguMzQ5LS4yNzkzLDExLjg4NzQtNy45ODUsMjAuNDM1LTIwLjg2NzksMjMuMTIyNi0xLjI5NjYuMjcwNS0yLjYxNS40MzcxLTQuNzAxOC43OGwzMS40NTI5LDQ5LjEyNDdjLTkuNTk3MSwx'+
			'LjgyOS0xMC4yLDEuNjQyOS0xNC44NTc5LTUuNjUzNy04LjEyMTctMTIuNzIxMy0xNi4yNzgxLTI1LjQyMjYtMjQuMTk1OC0zOC4yNy0yLjUxMDgtNC4wNzQtNS4yMDg3LTYuODUyMi0xMC45NDEzLTQuOXY0OS4xMTM5aC05LjU2MjdabTkuNTY2OSw0NS41NTA4YzcuMDY1Ni0uMzQ1OSwxMy42NzI2LS4zNSwyMC4yMDE5LTEuMDY0OSw5LjQtMS4wMjg1LDEzLjk5LTYuNTA0NSwxNC41NDkzLTE2LjQ4OTMuNDUwNy04LjA0MTUtNC40MjA4LTE1LjAyNTItMTIuODE1MS0xNi40Nzc3LTcuMDkzNS0xLjIyNzUtMTQuNDMwNi0xLjA0NzgtMjEuOTM2MS0xLjUwNzhaIi8+CiAgPHBhdGggZmlsbD0iIzllYT'+
			'YxNSIgZD0iTTQzOS4xMTUsNzM4LjM5MzRxMjE2LjIzMywwLDQzMi40NjYuMDgxMWMyLjA3MTUuMDAxMyw1Ljk4NDgsMS41MjIsNS45MzUsMS44MjU5LS42NjkxLDQuMDktMy45ODg1LDEuNjc1OC01LjkxMjEsMS42NzY3cS00MzIuNjQ2OC4yMS04NjUuMjkzNS4wNjIzYy0yLjEwMzYtLjAwMDYtNC4yMDY5LTEuMDg1My02LjMxLTEuNjYzNywyLjA0NzEtLjY3MzksNC4wOTM5LTEuOTM2NSw2LjE0MTUtMS45Mzc4cTIxNi40ODY2LS4xMzg1LDQzMi45NzM1LS4wODM5WiIvPgogIDxwYXRoIGZpbGw9IiMyYTJhMmEiIGQ9Ik04My4zNzM0LDcwNS43ODQ3aC05LjQ1NVY2MDAuOTczMWMxMS42NDk0Ljgy'+
			'NzksMjMuMTc2My42NjQ4LDM0LjMwNSwyLjY5LDEzLjU0LDIuNDYzNywyMC4xMTcyLDEyLjY5MTUsMTkuNzk1OSwyNy40NjEtLjI3LDEyLjM5NzYtOC4xMDc0LDIxLjM0MzEtMjEuMDYyNiwyNC4wNDI4LTEuMy4yNzA5LTIuNTk3LjU1MzYtNC42NzQxLjk5NzEsMTAuNTc1MiwxNi41MTYxLDIwLjk5NTgsMzIuNzkwOCwzMS40MjI4LDQ5LjA3NTMtOC40Nzg5LDIuMzA3My0xMC43MTksMS4zMzEtMTUuMTY4Ni01LjcwODQtOC43OC0xMy44OS0xNy41NDk0LTI3Ljc5NDUtMjYuNzctNDEuMzktMS4yNzUtMS44OC01LjA5NDktMi4wMzM2LTguMzkzMS0zLjIyM1ptLS4wODQ0LTU5LjU1MTRjNi4yNjgyLD'+
			'AsMTIuMDk2LjMxLDE3Ljg3ODktLjA2NzksMTAuMjcyNS0uNjcwNiwxNi4wNTc4LTYuMDU4LDE2LjcyLTE0Ljk2NDQuNzktMTAuNjI3Ni0zLjMwNzMtMTYuNzc1OC0xNC4xOTEtMTguNjYwNS02LjU1MzEtMS4xMzQ4LTEzLjQ2MzEtLjIwODYtMjAuNDA3OC0uMjA4NloiLz4KICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNjgyLjI4NzQsNjAyLjE3MjRoNTEuMzIxOXY5LjQxMkg2OTIuMTAyOHYzMi4yMTMyaDQxLjQ2NDh2MTAuMzFoLTQxLjM4NXY0Mi4xODM5aDQxLjM3MzN2OS4wNkg2ODIuMjg3NFoiLz4KICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNzY2LjA5NzYsNjk2LjQ5NjhoNDEuMzU1'+
			'NVY3MDUuNDdINzU2LjEzNTZWNjAyLjI2MjRoNTEuNTIxdjkuMjY2OWgtNDEuNDR2MzIuNDA1OWg0MS40Mjg5VjY1NC4zMUg3NjYuMDk3NloiLz4KICA8cGF0aCBmaWxsPSIjOWVhNjE1IiBkPSJNNTExLjQ2LDYxNy42MDc0YTUwLjkwODUsNTAuOTA4NSwwLDAsMC01LjIzODEsMi4zMzc2Yy0yLjU0NTgsMS41LTMuODM4Mi44MjItNS41NTI0LTEuNjE4MS02LjM3NDMtOS4wNzQxLTIyLjI2NTEtMTAuMDYxNi0zMC4wNTQ1LTIuMTM3OGExNC4zNjc1LDE0LjM2NzUsMCwwLDAsMS43NjMzLDIxLjQ2OTRjMy4zMTUsMi40MTY2LDcuMTg4NSw0LjA2NDgsMTAuNzk5Myw2LjA3ODUsNi42NSwzLjcwODksMT'+
			'MuODI1NSw2LjcyOCwxOS44MzQ1LDExLjI4NDMsMTUuNDY1OSwxMS43MjcxLDE0LjM4NjQsMzcuNDA3My0xLjUzMzcsNDcuNTUyM2EzMy4yLDMzLjIsMCwwLDEtNTAuMTU3Mi0yMC40NjY4bDguODk0NC0zLjIxMzhjLjQ3NzQsMS4yMjI5Ljk4NDksMi4yNDg1LDEuMjg0NywzLjMzMTYsNC41NDU3LDE2LjQxODUsMjIuNTgxNSwxOC4yMjQxLDMzLjcxMzIsMTIuNSwxMS42MTEyLTUuOTcxLDEyLjQxNjEtMjQuMDQxOCwxLjYyMjUtMzIuMDM4My00LjMzNi0zLjIxMjMtOS40MS01LjQ0NTEtMTQuMjA0OS04LjAxNjgtNC42Ny0yLjUwNDktOS42MjE3LTQuNTQ0NC0xNC4wODI1LTcuMzY4Mi0xMC4wMTgy'+
			'LTYuMzQyLTEzLjU0NTYtMTUuODQ2OS0xMC42OTY0LTI3LjQ3NjQsMi4yMjc3LTkuMDkyOCwxMi4wNTcyLTE3LjEwMTUsMjIuMjE4MS0xOC4xMDI2QzQ5NC42OTgyLDYwMC4yODA4LDUwNi4wMDQ0LDYwNS44NjM4LDUxMS40Niw2MTcuNjA3NFoiLz4KICA8cGF0aCBmaWxsPSIjMmEyYTJhIiBkPSJNMTMuOTM4NCw2NTMuODk2OVY3MDUuNThINC4xOTExVjYwMi4xMTg1aDQ2LjczNFY2MTEuNjJIMTQuMTUxVjY0My45NThoMzYuOXY5LjkzODlaIi8+CiAgPHBhdGggZmlsbD0iIzJhMmEyYSIgZD0iTTQ0MC44MjY0LDYwMS43MjM4djEwLjAzMjloLTIxLjg2djkzLjkxNGgtOS45NTk0VjYxMS43OTUxSD'+
			'M4Ny42MjEzYTYuNjQ2Miw2LjY0NjIsMCwwLDEtLjU5MTktMS4zOTIxYy0uNTkzMS04LjY3ODktLjU5LTguNjc5MSw4LjExNTgtOC42NzkyWiIvPgogIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik01ODIuNTU5LDYwMi4yNjEzVjYxMS40SDU2MC44NzU0djk0LjAyNUg1NTEuMTF2LTkzLjYyOUg1MjkuMTcxMXYtOS41MzQ4WiIvPgogIDxwYXRoIGZpbGw9IiM5ZWE2MTUiIGQ9Ik04NDguMDUzNSw2MTEuNjI1MmgtMjEuOTJ2LTkuMzhIODc5LjI5NnY5LjQwMTJIODU3LjY1NTV2OTMuNzYxaC05LjYwMloiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cov_logo_splash__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cov logo splash";
		el.ggDx=0;
		el.ggDy=-131;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 196px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 233px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cov_logo_splash.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cov_logo_splash.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._loading_splash.appendChild(me._cov_logo_splash);
		me.divSkin.appendChild(me._loading_splash);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner_m.ggUpdate();
			me._node_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller_m.ggUpdatePosition();
			me._node_scroller.ggUpdatePosition();
			me.__360animation_timer.ggTimestamp=me.ggCurrentTime;
			me.__360animation_timer.ggTimeout=2500;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.__360animation_timer.ggLastIsActive!=me.__360animation_timer.ggIsActive()) {
			me.__360animation_timer.ggLastIsActive=me.__360animation_timer.ggIsActive();
			if (me.__360animation_timer.ggLastIsActive) {
			} else {
				if (player.transitionsDisabled) {
					me.__360animation.style[domTransition]='none';
				} else {
					me.__360animation.style[domTransition]='all 500ms ease-out 0ms';
				}
				me.__360animation.style.opacity='0';
				me.__360animation.style.visibility='hidden';
				if (player.transitionsDisabled) {
					me._text_360.style[domTransition]='none';
				} else {
					me._text_360.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._text_360.style.opacity='0';
				me._text_360.style.visibility='hidden';
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinCloner_node_cloner_m_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 480px; height: 175px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner_m=document.createElement('div');
		els=me._node_image_cloner_m__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner_m_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 162px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 288px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner_m.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner_m.onclick=function (e) {
			if (
				(
					((me._node_image_cloner_m.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('node_vis_m', false);
		}
		me._node_image_cloner_m.ggUpdatePosition=function (useTransition) {
		}
		el=me._active_cloner_m=document.createElement('div');
		el.ggId="active_cloner_m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._active_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._active_cloner_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._active_cloner_m.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._active_cloner_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._active_cloner_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._active_cloner_m.style[domTransition]='';
				if (me._active_cloner_m.ggCurrentLogicStateVisible == 0) {
					me._active_cloner_m.style.visibility=(Number(me._active_cloner_m.style.opacity)>0||!me._active_cloner_m.style.opacity)?'inherit':'hidden';
					me._active_cloner_m.ggVisible=true;
				}
				else {
					me._active_cloner_m.style.visibility="hidden";
					me._active_cloner_m.ggVisible=false;
				}
			}
		}
		me._active_cloner_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner_m.appendChild(me._active_cloner_m);
		el=me._overlay_cloner_m=document.createElement('div');
		el.ggId="overlay_cloner_m";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(10,25,50,0.12549);';
		hs+='border : 5px solid #9ea615;';
		hs+='cursor : pointer;';
		hs+='height : 160px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 286px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._overlay_cloner_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._overlay_cloner_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseDown['overlay_cloner_m'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._overlay_cloner_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._overlay_cloner_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._overlay_cloner_m.style[domTransition]='background-color 0s';
				if (me._overlay_cloner_m.ggCurrentLogicStateBackgroundColor == 0) {
					me._overlay_cloner_m.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me._overlay_cloner_m.style.backgroundColor="rgba(10,25,50,0.12549)";
				}
			}
		}
		me._overlay_cloner_m.onmouseout=function (e) {
			me.elementMouseDown['overlay_cloner_m']=false;
			me._overlay_cloner_m.logicBlock_backgroundcolor();
		}
		me._overlay_cloner_m.onmousedown=function (e) {
			me.elementMouseDown['overlay_cloner_m']=true;
			me._overlay_cloner_m.logicBlock_backgroundcolor();
		}
		me._overlay_cloner_m.onmouseup=function (e) {
			me.elementMouseDown['overlay_cloner_m']=false;
			me._overlay_cloner_m.logicBlock_backgroundcolor();
		}
		me._overlay_cloner_m.ontouchend=function (e) {
			me.elementMouseDown['overlay_cloner_m']=false;
			me._overlay_cloner_m.logicBlock_backgroundcolor();
		}
		me._overlay_cloner_m.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner_m.appendChild(me._overlay_cloner_m);
		el=me._node_title_m=document.createElement('div');
		els=me._node_title_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title_m.style[domTransition]='';
				if (me._node_title_m.ggCurrentLogicStateVisible == 0) {
					me._node_title_m.style.visibility="hidden";
					me._node_title_m.ggVisible=false;
				}
				else {
					me._node_title_m.style.visibility=(Number(me._node_title_m.style.opacity)>0||!me._node_title_m.style.opacity)?'inherit':'hidden';
					me._node_title_m.ggVisible=true;
				}
			}
		}
		me._node_title_m.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner_m.appendChild(me._node_title_m);
		el=me._unvisited_m=document.createElement('div');
		els=me._unvisited_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDcuMjAyNSIgdmlld0JveD0iMCAwIDMwNy4yMDI1IDMwNy4yMDI1IiBoZWlnaHQ9IjMwNy4yMDI1Ij4KIDx0aXRsZT5jaGVja19vZmY8L3RpdGxlPgogPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE1My42MDEzLDM0LjNBMTE5LjMwMTMsMTE5LjMwMTMsMCwwLDEsMjM3Ljk2LDIzNy45NiwxMTkuMzAxMywxMTkuMzAxMywwLDAsMSw2OS4yNDI1LDY5LjI0MjUsMTE4LjUyMDUsMTE4LjUyMDUsMCwwLDEsMTUzLjYwMTMsMzQuM20wLTM0LjNBMTUzLjYwMTMsMTUzLjYwMTMsMCwxLDAsMzA3LjIwMjUsMTUzLjYwMT'+
			'MsMTUzLjYwMTIsMTUzLjYwMTIsMCwwLDAsMTUzLjYwMTMsMFoiIGZpbGwtb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._unvisited_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="unvisited_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unvisited_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unvisited_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._unvisited_m.ggElementNodeId()) == true)) || 
				((me._unvisited_m.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._unvisited_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._unvisited_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._unvisited_m.style[domTransition]='';
				if (me._unvisited_m.ggCurrentLogicStateVisible == 0) {
					me._unvisited_m.style.visibility="hidden";
					me._unvisited_m.ggVisible=false;
				}
				else {
					me._unvisited_m.style.visibility=(Number(me._unvisited_m.style.opacity)>0||!me._unvisited_m.style.opacity)?'inherit':'hidden';
					me._unvisited_m.ggVisible=true;
				}
			}
		}
		me._unvisited_m.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner_m.appendChild(me._unvisited_m);
		el=me._visited_m=document.createElement('div');
		els=me._visited_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjMuMjIyOSIgdmlld0JveD0iMCAwIDMyMy4yMjI5IDMyMC43MTkiIGhlaWdodD0iMzIwLjcxOSI+CiA8dGl0bGU+Y2hlY2tfb248L3RpdGxlPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE1My42MDIsMjg2LjU4NmExMTkuNDY2NSwxMTkuNDY2NSwwLDEsMSwwLTIzOC45MzNWMTMuNTE2QzY4LjkxNCwxMy41MTYsMCw4Mi40MTQsMCwxNjcuMTE3UzY4LjkxNCwzMjAuNzE5LDE1My42MDIsMzIwLjcxOWM4NC42ODMsMCwxNTMuNTk3LTY4Ljg5OCwxNTMuNTk3LTE1My42MDJIMjczLjA2NkExMTkuNT'+
			'k4LDExOS41OTgsMCwwLDEsMTUzLjYwMiwyODYuNTg2WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE3MC43MjgxLDIzMi45OTZhMjUuNDI4MywyNS40MjgzLDAsMCwxLTE5LjMwMDYtOC44NzUxTDkwLjQzLDE1Mi45NTcyYTI1LjQxODUsMjUuNDE4NSwwLDAsMSwzOC42MDEyLTMzLjA4MDlsMzkuODc3MSw0Ni41MjA3TDI5NC45MzkyLDE0LjQyMTljMTkuNTA5LTI3LjMyNjksMzkuOTI3OS0xMi4xOTQ0LDIwLjMzMjQsMTUuMjQ5M0wxOTEuNDA2MiwyMjIuMzUxOWEyNS40MjQ0LDI1LjQyNDQsMCwwLDEtMTkuNTYsMTAuNjE4N0MxNzEuNDcsMjMyLjk4NTgs'+
			'MTcxLjA5OTEsMjMyLjk5NiwxNzAuNzI4MSwyMzIuOTk2WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._visited_m__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="visited_m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._visited_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._visited_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._visited_m.ggElementNodeId()) == true)) || 
				((me._visited_m.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._visited_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._visited_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._visited_m.style[domTransition]='';
				if (me._visited_m.ggCurrentLogicStateVisible == 0) {
					me._visited_m.style.visibility=(Number(me._visited_m.style.opacity)>0||!me._visited_m.style.opacity)?'inherit':'hidden';
					me._visited_m.ggVisible=true;
				}
				else {
					me._visited_m.style.visibility="hidden";
					me._visited_m.ggVisible=false;
				}
			}
		}
		me._visited_m.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner_m.appendChild(me._visited_m);
		me.__div.appendChild(me._node_image_cloner_m);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 256px; height: 122px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 122px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._overlay_cloner=document.createElement('div');
		el.ggId="overlay_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(158,166,21,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._overlay_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._overlay_cloner.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['overlay_cloner'] == true)) || 
				((me._overlay_cloner.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._overlay_cloner.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._overlay_cloner.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._overlay_cloner.style[domTransition]='background-color 0s';
				if (me._overlay_cloner.ggCurrentLogicStateBackgroundColor == 0) {
					me._overlay_cloner.style.backgroundColor="rgba(52,52,52,0.392157)";
				}
				else {
					me._overlay_cloner.style.backgroundColor="rgba(158,166,21,0.784314)";
				}
			}
		}
		me._overlay_cloner.onmouseover=function (e) {
			me.elementMouseOver['overlay_cloner']=true;
			me._overlay_cloner.logicBlock_backgroundcolor();
		}
		me._overlay_cloner.onmouseout=function (e) {
			me.elementMouseOver['overlay_cloner']=false;
			me._overlay_cloner.logicBlock_backgroundcolor();
		}
		me._overlay_cloner.ontouchend=function (e) {
			me.elementMouseOver['overlay_cloner']=false;
			me._overlay_cloner.logicBlock_backgroundcolor();
		}
		me._overlay_cloner.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._overlay_cloner);
		el=me._active_cloner=document.createElement('div');
		el.ggId="active_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._active_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._active_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._active_cloner.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._active_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._active_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._active_cloner.style[domTransition]='';
				if (me._active_cloner.ggCurrentLogicStateVisible == 0) {
					me._active_cloner.style.visibility=(Number(me._active_cloner.style.opacity)>0||!me._active_cloner.style.opacity)?'inherit':'hidden';
					me._active_cloner.ggVisible=true;
				}
				else {
					me._active_cloner.style.visibility="hidden";
					me._active_cloner.ggVisible=false;
				}
			}
		}
		me._active_cloner.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._active_cloner);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_title);
		el=me._unvisited=document.createElement('div');
		els=me._unvisited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDcuMjAyNSIgdmlld0JveD0iMCAwIDMwNy4yMDI1IDMwNy4yMDI1IiBoZWlnaHQ9IjMwNy4yMDI1Ij4KIDx0aXRsZT5jaGVja19vZmY8L3RpdGxlPgogPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE1My42MDEzLDM0LjNBMTE5LjMwMTMsMTE5LjMwMTMsMCwwLDEsMjM3Ljk2LDIzNy45NiwxMTkuMzAxMywxMTkuMzAxMywwLDAsMSw2OS4yNDI1LDY5LjI0MjUsMTE4LjUyMDUsMTE4LjUyMDUsMCwwLDEsMTUzLjYwMTMsMzQuM20wLTM0LjNBMTUzLjYwMTMsMTUzLjYwMTMsMCwxLDAsMzA3LjIwMjUsMTUzLjYwMT'+
			'MsMTUzLjYwMTIsMTUzLjYwMTIsMCwwLDAsMTUzLjYwMTMsMFoiIGZpbGwtb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._unvisited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="unvisited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unvisited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unvisited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._unvisited.ggElementNodeId()) == true)) || 
				((me._unvisited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._unvisited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._unvisited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._unvisited.style[domTransition]='';
				if (me._unvisited.ggCurrentLogicStateVisible == 0) {
					me._unvisited.style.visibility="hidden";
					me._unvisited.ggVisible=false;
				}
				else {
					me._unvisited.style.visibility=(Number(me._unvisited.style.opacity)>0||!me._unvisited.style.opacity)?'inherit':'hidden';
					me._unvisited.ggVisible=true;
				}
			}
		}
		me._unvisited.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._unvisited);
		el=me._visited=document.createElement('div');
		els=me._visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjMuMjIyOSIgdmlld0JveD0iMCAwIDMyMy4yMjI5IDMyMC43MTkiIGhlaWdodD0iMzIwLjcxOSI+CiA8dGl0bGU+Y2hlY2tfb248L3RpdGxlPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE1My42MDIsMjg2LjU4NmExMTkuNDY2NSwxMTkuNDY2NSwwLDEsMSwwLTIzOC45MzNWMTMuNTE2QzY4LjkxNCwxMy41MTYsMCw4Mi40MTQsMCwxNjcuMTE3UzY4LjkxNCwzMjAuNzE5LDE1My42MDIsMzIwLjcxOWM4NC42ODMsMCwxNTMuNTk3LTY4Ljg5OCwxNTMuNTk3LTE1My42MDJIMjczLjA2NkExMTkuNT'+
			'k4LDExOS41OTgsMCwwLDEsMTUzLjYwMiwyODYuNTg2WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE3MC43MjgxLDIzMi45OTZhMjUuNDI4MywyNS40MjgzLDAsMCwxLTE5LjMwMDYtOC44NzUxTDkwLjQzLDE1Mi45NTcyYTI1LjQxODUsMjUuNDE4NSwwLDAsMSwzOC42MDEyLTMzLjA4MDlsMzkuODc3MSw0Ni41MjA3TDI5NC45MzkyLDE0LjQyMTljMTkuNTA5LTI3LjMyNjksMzkuOTI3OS0xMi4xOTQ0LDIwLjMzMjQsMTUuMjQ5M0wxOTEuNDA2MiwyMjIuMzUxOWEyNS40MjQ0LDI1LjQyNDQsMCwwLDEtMTkuNTYsMTAuNjE4N0MxNzEuNDcsMjMyLjk4NTgs'+
			'MTcxLjA5OTEsMjMyLjk5NiwxNzAuNzI4MSwyMzIuOTk2WiIgZmlsbC1vcGFjaXR5PSIxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._visited.ggElementNodeId()) == true)) || 
				((me._visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._visited.style[domTransition]='';
				if (me._visited.ggCurrentLogicStateVisible == 0) {
					me._visited.style.visibility=(Number(me._visited.style.opacity)>0||!me._visited.style.opacity)?'inherit':'hidden';
					me._visited.ggVisible=true;
				}
				else {
					me._visited.style.visibility="hidden";
					me._visited.ggVisible=false;
				}
			}
		}
		me._visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._visited);
		me.__div.appendChild(me._node_image_cloner);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._nodemenu_background.logicBlock_size();
	me._loading_splash.logicBlock_visible();
	me._currentnode_m.logicBlock_visible();
	me._nextnode_m.logicBlock_visible();
	me._info_m.logicBlock_visible();
	me._info_ani_m.logicBlock_visible();
	me._mobile_info_menu.logicBlock_position();
	me._mute_m.logicBlock_visible();
	me._vol_m.logicBlock_visible();
	me._gyro_deactive.logicBlock_visible();
	me._gyro_active.logicBlock_visible();
	me._close_info_m.logicBlock_size();
	me._cov_logo.logicBlock_position();
	me._nodemenu_background.logicBlock_position();
	me._close_menu_m.logicBlock_visible();
	me.__2d_overlay.logicBlock_visible();
	me._menu_close.logicBlock_alpha();
	me._menu_shadow.logicBlock_position();
	me._current_next_txt.logicBlock_position();
	me._next_node.logicBlock_visible();
	me._tourtitle.logicBlock_position();
	me._menu_background.logicBlock_position();
	me.__360animation_timer.logicBlock_visible();
	me._nextnode.logicBlock_visible();
	me._info_button.logicBlock_visible();
	me._mute_button.logicBlock_visible();
	me._pause_audio.logicBlock_visible();
	me._play_audio.logicBlock_visible();
	me._audio_info.logicBlock_position();
	me._buttonbar.logicBlock_size();
	me._buttonbar.logicBlock_alpha();
	me._audio_animation.logicBlock_visible();
	me._audio_animation.logicBlock_alpha();
	me._shareclose.logicBlock_visible();
	me._share_button.logicBlock_visible();
	me._sharebox.logicBlock_visible();
	me._link_copied.logicBlock_visible();
	me._start_overlay.logicBlock_visible();
	me._click_anywhere_to_begin.logicBlock_visible();
	me.__360animation.logicBlock_visible();
	me._text_360.logicBlock_visible();
	me._mobile.logicBlock_visible();
	me._desktop.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._nodemenu_background.logicBlock_size(); });
	player.addListener('imagesready', function(args) { me._loading_splash.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._currentnode_m.logicBlock_visible();me._nextnode_m.logicBlock_visible();me._info_m.logicBlock_visible();me._info_ani_m.logicBlock_visible();me._mobile_info_menu.logicBlock_position();me._mute_m.logicBlock_visible();me._vol_m.logicBlock_visible();me._gyro_deactive.logicBlock_visible();me._gyro_active.logicBlock_visible();me._close_info_m.logicBlock_size();me._cov_logo.logicBlock_position();me._nodemenu_background.logicBlock_position();me._close_menu_m.logicBlock_visible();me.__2d_overlay.logicBlock_visible();me._menu_close.logicBlock_alpha();me._menu_shadow.logicBlock_position();me._current_next_txt.logicBlock_position();me._next_node.logicBlock_visible();me._tourtitle.logicBlock_position();me._menu_background.logicBlock_position();me.__360animation_timer.logicBlock_visible();me._nextnode.logicBlock_visible();me._info_button.logicBlock_visible();me._mute_button.logicBlock_visible();me._pause_audio.logicBlock_visible();me._play_audio.logicBlock_visible();me._audio_info.logicBlock_position();me._buttonbar.logicBlock_size();me._buttonbar.logicBlock_alpha();me._audio_animation.logicBlock_visible();me._audio_animation.logicBlock_alpha();me._shareclose.logicBlock_visible();me._share_button.logicBlock_visible();me._sharebox.logicBlock_visible();me._link_copied.logicBlock_visible();me._start_overlay.logicBlock_visible();me._click_anywhere_to_begin.logicBlock_visible();me.__360animation.logicBlock_visible();me._text_360.logicBlock_visible();me._loading_splash.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._mobile.logicBlock_visible();me._desktop.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_deactive.logicBlock_visible();me._gyro_active.logicBlock_visible();me.__360animation.logicBlock_visible();me._text_360.logicBlock_visible(); });
	player.addListener('varchanged_startoverlay', function(args) { me._tourtitle.logicBlock_position();me._nextnode.logicBlock_visible();me._info_button.logicBlock_visible();me._mute_button.logicBlock_visible();me._buttonbar.logicBlock_alpha();me._audio_animation.logicBlock_alpha();me._share_button.logicBlock_visible();me._start_overlay.logicBlock_visible();me._click_anywhere_to_begin.logicBlock_visible();me.__360animation.logicBlock_visible();me._text_360.logicBlock_visible(); });
	player.addListener('varchanged_mobilemenu', function(args) { me._currentnode_m.logicBlock_visible();me._nextnode_m.logicBlock_visible();me._info_m.logicBlock_visible(); });
	player.addListener('varchanged_mobile_info_menu', function(args) { me._mobile_info_menu.logicBlock_position();me._cov_logo.logicBlock_position(); });
	player.addListener('varchanged_node_vis_m', function(args) { me._nodemenu_background.logicBlock_position();me._close_menu_m.logicBlock_visible(); });
	player.addListener('varchanged_node_visible', function(args) { me._menu_close.logicBlock_alpha();me._menu_shadow.logicBlock_position();me._menu_background.logicBlock_position(); });
	player.addListener('varchanged_audioscript', function(args) { me._audio_info.logicBlock_position();me._buttonbar.logicBlock_size();me._audio_animation.logicBlock_visible(); });
	player.addListener('varchanged_volume_on', function(args) { me._info_ani_m.logicBlock_visible();me._mute_m.logicBlock_visible();me._vol_m.logicBlock_visible();me._pause_audio.logicBlock_visible();me._play_audio.logicBlock_visible();me._audio_animation.logicBlock_visible(); });
	player.addListener('varchanged_share', function(args) { me._shareclose.logicBlock_visible();me._sharebox.logicBlock_visible(); });
	player.addListener('varchanged_readmore_mobile', function(args) { me._close_info_m.logicBlock_size(); });
	player.addListener('varchanged_copied', function(args) { me._link_copied.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._node_cloner_m.callChildLogicBlocks_changenode();me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mousedown', function(args) { me._node_cloner_m.callChildLogicBlocks_mousedown(); });
	player.addListener('changenode', function(args) { me._node_cloner_m.callChildLogicBlocks_active();me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner_m.callChildLogicBlocks_changevisitednodes();me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner_m.callChildLogicBlocks_activehotspotchanged();me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	me.skinTimerEvent();
};